import dotenv from "dotenv";
import nodemailer from "nodemailer";
import randomToken from "random-token";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

import { userModel } from "../../schemas/user.schema";
import { roleModel } from "../../schemas/role.schema"
import { passwordResetModel } from "../../schemas/passwordResets.schema";

import https from 'https';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASSWORD,
  },
});

export const loginRouteHandler = async (req, res, email, password) => {
  //Check If User Exists
  let foundUser = await userModel.findOne({ email: email });
  if (foundUser == null) {
    return res.status(400).json({
      errors: [{ detail: "The provided authorization grant (e.g., authorization code, resource owner credentials) or refresh token is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client." }],
    });
  } else {
    const validPassword = await bcrypt.compare(password, foundUser.password);
    if (validPassword) {
      // Generate JWT token
      const token = jwt.sign(
        { id: foundUser.id, email: foundUser.email },
        "token",
        {
          expiresIn: "24h",
        }
      );
      return res.json({
        token_type: "Bearer",
        expires_in: "24h",
        access_token: token,
        refresh_token: token,
      });
    } else {
      return res.status(400).json({
        errors: [{ detail: "Invalid password" }],
      });
    }
  }
};


const makeHttpsRequest = async () => {
  const url = 'https://api.example.com/data';

  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token-here'
    }
  };

  return new Promise((resolve, reject) => {
    https.get(url, options, (resp) => {
      let data = '';

      // A chunk of data has been received.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received.
      resp.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });

    }).on("error", (err) => {
      reject(err);
    });
  });
};

const getProfileDetailsFromCoresignal = async (linkedinProfileId) => {
  const coresignalApiKey = process.env.CORESIGNAL_API_KEY;

  //  the linkedin profile id is https://www.linkedin.com/in/username
  //  so we need to extract the username from the url
  const username = linkedinProfileId.split('/').pop();
  const coresignalEndpoint = `https://api.coresignal.com/cdapi/v1/linkedin/member/collect/${username}`;

  const options = {
    headers: {
      'Authorization': `Bearer ${coresignalApiKey}`,
      'Content-Type': 'application/json'
    }
  };

  try {
    return new Promise((resolve, reject) => {
      https.get(coresignalEndpoint, options, (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
          data += chunk;
        });

        // The whole response has been received.
        resp.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });

      }).on("error", (err) => {
        reject(err);
      });
    });

  } catch (e) {
    console.error(e);
    return null;
  }
}


const cleanArray = (array, field) => {
  // remove these fields from the objects in the array if present: id, member_id, created, deleted, last_updated
  let fieldsToRemove = ['id', 'member_id', 'created', 'deleted', 'last_updated'];
  array.forEach((item) => {
    fieldsToRemove.forEach((field) => {
      if (item[field] != null) {
        delete item[field];
      }
    });
  });

  // remove duplicates from array based on the field that is passed
  try {
    return array.filter((item, index, self) =>
      index === self.findIndex((t) => (
        t[field] === item[field]
      ))
    );
  }
  catch (e) {
    console.error(e);
    return array;
  }
}

export const registerRouteHandler = async (req, res, name, email, password, linkedin_profile_id) => {
  // check if user already exists
  let foundUser = await userModel.findOne({ email: email });

  if (foundUser != null) {
    // does not get the error
    return res.status(400).json({ message: "The email is already in use" });
  }

  let foundLinkedinUser = await userModel.findOne({ linkedin_profile_id: req.body.data.attributes.linkedin_profile_id });
  if (foundLinkedinUser != null) {
    return res.status(400).json({ message: "The linkedin profile is already in use" });
  }

  let userProfileDetails = {
    profile_image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
    linkedin_profile_id: linkedin_profile_id,
    summary: "",
    headline: "",
    education: [],
    experience: [],
    courses_taken: [],
    publications: [],
    projects: [],
    certifications: [],
    patents: [],
    awards: [],
    location_name: ""
  }

  let profile_details = await getProfileDetailsFromCoresignal(linkedin_profile_id);

  try {
    if (profile_details != null) {
      if (profile_details.logo_url != null) {
        userProfileDetails.profile_image = profile_details.logo_url;
      }
      if (profile_details.summary != null) {
        userProfileDetails.summary = profile_details.summary;
      }
      if (profile_details.title != null) {
        userProfileDetails.headline = profile_details.title;
      }
      if (profile_details.location != null) {
        userProfileDetails.location_name = profile_details.location;
      }
      if (profile_details.member_education_collection != null) {
        userProfileDetails.education = cleanArray(profile_details.member_education_collection, 'title');
      }
      if (profile_details.member_experience_collection != null) {
        userProfileDetails.experience = cleanArray(profile_details.member_experience_collection, 'company_name');
      }
      if (profile_details.member_courses_collection != null) {
        userProfileDetails.courses_taken = cleanArray(profile_details.member_courses_collection, 'courses');
      }
      if (profile_details.member_publications_collection != null) {
        userProfileDetails.publications = cleanArray(profile_details.member_publications_collection, 'name');
      }
      if (profile_details.member_projects_collection != null) {
        userProfileDetails.projects = cleanArray(profile_details.member_projects_collection, 'name');
      }
      if (profile_details.member_certifications_collection != null) {
        userProfileDetails.certifications = cleanArray(profile_details.member_certifications_collection, 'name');
      }
      if (profile_details.member_patents_collection != null) {
        userProfileDetails.patents = cleanArray(profile_details.member_patents_collection, 'name');
      }
      if (profile_details.member_awards_collection != null) {
        userProfileDetails.awards = cleanArray(profile_details.member_awards_collection, 'title');
      }
    }
  } catch (e) {
    console.error(e);
  }

  // check password to exist and be at least 8 characters long
  if (!password || password.length < 8) {
    return res.status(400).json({ message: "The password must be at least 8 characters long." });
  }

  // hash password to save in db
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  let memberRole = await roleModel.findOne({ name: 'member' });

  const newUser = new userModel({
    name: name,
    email: email,
    password: hashPassword,
    ...userProfileDetails
  });
  newUser.role = memberRole;
  await newUser.save();

  // Generate JWT token
  const token = jwt.sign({ id: newUser.id, email: newUser.email }, "token", {
    expiresIn: "24h",
  });
  return res.status(200).json({
    token_type: "Bearer",
    expires_in: "24h",
    access_token: token,
    refresh_token: token,
  });
};

export const forgotPasswordRouteHandler = async (req, res, email) => {
  let foundUser = await userModel.findOne({ email: email });

  if (!foundUser) {
    return res.status(400).json({ errors: { email: ["The email does not match any existing user."] } });
  } else {
    let token = randomToken(20);
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "admin@qusandbox.com", // sender address
      to: email, // list of receivers
      subject: "Reset Password", // Subject line
      html: `<p>You requested to change your password.If this request was not made by you please contact us. Access <a href='${process.env.APP_URL_CLIENT}/auth/reset-password?token=${token}&email=${email}'>this link</a> to reste your password </p>`, // html body
    });
    const dataSent = {
      data: "password-forgot",
      attributes: {
        redirect_url: `${process.env.APP_URL_API}/password-reset`,
        email: email,
      },
    };

    // save token in db
    await passwordResetModel.create({
      email: foundUser.email,
      token: token,
      created_at: new Date(),
    });

    return res.status(204).json(dataSent);
  }
}

export const resetPasswordRouteHandler = async (req, res) => {
  const foundUser = await userModel.findOne({ email: req.body.data.attributes.email });
  const foundToken = await passwordResetModel.findOne({ email: req.body.data.attributes.email, token: req.body.data.attributes.token });

  if (!foundUser || !foundToken) {
    return res.status(400).json({ errors: { email: ["The email or token does not match any existing user."] } });
  } else {
    const { password, password_confirmation } = req.body.data.attributes;
    // validate password
    if (password.length < 8) {
      return res.status(400).json({ errors: { password: ["The password should have at lest 8 characters."] } });
    }

    if (password != password_confirmation) {
      return res.status(400).json({ errors: { password: ["The password and password confirmation must match."] } });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    await passwordResetModel.deleteOne({ email: foundUser.email });

    await userModel.updateOne(
      { email: foundUser.email },
      { $set: { "password": hashPassword } }
    );
    return res.sendStatus(204);
  }
}