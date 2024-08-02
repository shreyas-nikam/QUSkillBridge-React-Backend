import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { dbConnect } from "./index.js";
import courses from "./courses.js";
import jobs from "./jobs.js";
import { roleModel } from "../schemas/role.schema.js";
import { permissionModel } from "../schemas/permission.schema.js";
import { tagModel } from "../schemas/tag.schema.js";
import { categoryModel } from "../schemas/category.schema.js";
import { itemModel } from "../schemas/item.schema.js";
import { personaModel } from "../schemas/persona.schema.js";
import { jobModel } from "../schemas/job.schema.js";
import { courseModel } from "../schemas/course.schema.js";
import { userModel } from "../schemas/user.schema.js";
import { jobsVisitedModel } from "../schemas/jobsVisited.schema.js";

import dotenv from 'dotenv';
dotenv.config();


async function seedDB() {
  //connect do db
  dbConnect();



  // add personas
  const software_engineer_persona = new personaModel({
    name: "Software Engineer",
    description: "Software engineers are responsible for developing, testing, deploying, and maintaining software applications. They work closely with product managers, designers, and other engineers to create high-quality software products. Software engineers use programming languages, frameworks, and tools to build scalable and reliable software solutions. They are skilled problem solvers who can analyze complex technical challenges and design effective solutions. Software engineers are detail-oriented and have a passion for writing clean, efficient code. They are constantly learning and adapting to new technologies to stay current in the fast-paced software development industry.",
  });
  const ai_engineer_persona = new personaModel({
    name: "AI Engineer",
    description: "AI engineers are responsible for developing artificial intelligence (AI) and machine learning (ML) solutions. They work on cutting-edge technologies to build intelligent systems that can learn, reason, and make decisions. AI engineers use algorithms, data, and models to create AI applications that can perform tasks such as image recognition, natural language processing, and predictive analytics. They work closely with data scientists, software engineers, and domain experts to develop AI solutions that meet business requirements. AI engineers are skilled in programming, data analysis, and machine learning techniques. They have a deep understanding of AI concepts and are passionate about building intelligent systems that can solve complex problems.",
  });
  const data_scientist_persona = new personaModel({
    name: "Data Scientist",
    description: "Data scientists are responsible for analyzing large datasets to extract valuable insights and make data-driven decisions. They work with structured and unstructured data to identify trends, patterns, and correlations that can inform business strategies. Data scientists use statistical analysis, machine learning, and data visualization techniques to uncover hidden patterns in data. They work closely with business stakeholders to understand their requirements and develop data-driven solutions. Data scientists are skilled in programming, data analysis, and machine learning. They have a strong background in mathematics, statistics, and computer science. Data scientists are curious, analytical, and detail-oriented professionals who are passionate about working with data to drive business success.",
  });
  const product_manager_persona = new personaModel({
    name: "Product Manager",
    description: "Product managers are responsible for defining the vision, strategy, and roadmap for a product or service. They work closely with cross-functional teams to develop and launch products that meet customer needs and business goals. Product managers conduct market research, gather customer feedback, and define product requirements to guide the development process. They collaborate with designers, engineers, and other stakeholders to deliver high-quality products on time and within budget. Product managers are skilled communicators who can articulate a clear product vision and motivate teams to achieve their goals. They have a deep understanding of user needs, market trends, and competitive landscape. Product managers are strategic thinkers who can prioritize initiatives and make data-driven decisions to drive product success.",
  });
  const quant_researcher_persona = new personaModel({
    name: "Quantitative Researcher",
    description: "Quantitative researchers are responsible for developing mathematical models and algorithms to analyze financial markets and make trading decisions. They work in quantitative finance, algorithmic trading, and risk management to develop quantitative strategies that generate profits for financial institutions. Quantitative researchers use statistical analysis, machine learning, and optimization techniques to build predictive models and trading algorithms. They work closely with traders, developers, and data scientists to implement and test their strategies in real-world trading environments. Quantitative researchers are skilled in mathematics, statistics, and programming. They have a deep understanding of financial markets, trading strategies, and risk management. Quantitative researchers are analytical, detail-oriented, and have a passion for solving complex problems in the financial industry.",
  });
  const ux_engineer_persona = new personaModel({
    name: "UX Engineer",
    description: "UX engineers are responsible for designing and developing user interfaces that are intuitive, engaging, and visually appealing. They work on web and mobile applications to create seamless user experiences that meet user needs and business goals. UX engineers conduct user research, create wireframes, and design prototypes to test and iterate on their designs. They collaborate with designers, product managers, and developers to deliver user-centered solutions that drive customer satisfaction and loyalty. UX engineers are skilled in user experience design, information architecture, and interaction design. They have a deep understanding of usability principles, accessibility standards, and design best practices. UX engineers are creative problem solvers who can translate user needs into elegant and effective design solutions.",
  });
  const data_analyst_persona = new personaModel({
    name: "Data Analyst",
    description: "Data analysts are responsible for collecting, analyzing, and interpreting data to help organizations make informed decisions. They work with structured and unstructured data to identify trends, patterns, and insights that can drive business strategies. Data analysts use statistical analysis, data visualization, and data mining techniques to extract valuable information from data. They work closely with business stakeholders to understand their requirements and develop data-driven solutions. Data analysts are skilled in data analysis, data visualization, and database management. They have a strong background in mathematics, statistics, and computer science. Data analysts are detail-oriented professionals who are passionate about working with data to uncover valuable insights and drive business success.",
  });
  const machine_learning_engineer_persona = new personaModel({
    name: "Machine Learning Engineer",
    description: "Machine learning engineers are responsible for developing machine learning models and algorithms to solve complex problems. They work on projects such as image recognition, natural language processing, and predictive analytics to build intelligent systems that can learn from data. Machine learning engineers use algorithms, data, and models to create machine learning applications that can make predictions and decisions. They work closely with data scientists, software engineers, and domain experts to develop machine learning solutions that meet business requirements. Machine learning engineers are skilled in programming, data analysis, and machine learning techniques. They have a deep understanding of machine learning concepts and are passionate about building intelligent systems that can solve real-world problems.",
  });

  await personaModel.insertMany([
    software_engineer_persona,
    ai_engineer_persona,
    data_scientist_persona,
    product_manager_persona,
    quant_researcher_persona,
    ux_engineer_persona,
    data_analyst_persona,
    machine_learning_engineer_persona,
  ]);

  // crypt default password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash("secret", salt);
  const qumemberpassword = "shreyasnikam";
  const qumemberhashPassword = await bcrypt.hash(qumemberpassword, salt);
  const quadminpassword = "adminpassword";
  const quadminhashPassword = await bcrypt.hash(quadminpassword, salt);


  const admin = new userModel({
    _id: mongoose.Types.ObjectId(1),
    name: "Admin",
    email: "admin@jsonapi.com",
    password: hashPassword,
    created_at: new Date(),
    profile_image: `${process.env.APP_URL_API}/public/images/admin.jpg`,
  });
  const quadmin = new userModel({
    _id: mongoose.Types.ObjectId(1),
    name: "admin",
    email: "admin@qusandbox.com",
    password: quadminhashPassword,
    created_at: new Date(),
    profile_image: `https://media.licdn.com/dms/image/D4E03AQHcxJHgNthnfA/profile-displayphoto-shrink_200_200/0/1706052826111?e=2147483647&v=beta&t=5_VYJ1r49IsBJq9Vu9UR0NqR8lYs8bqCYzu62MZbnC0`,
    linkedin_profile_id: "srikrishnamurthy",
    summary: "• Chief Data Scientist and Founder of QuantUniversity, a Data Science & Machine Learning Advisory.  \n• AI and Machine Learning thought leader, speaker and writer.  \n• Expert in AI and Model Governance and adoption of Machine Learning in large enterprises.  \n• Author of forthcoming book 'AI & Risk Management in Finance: A practitioner's handbook' to be published by Wiley 2024  \n• Adjunct faculty at Northeastern University, Babson College and Hult International Business School  \n• Innovative and successful new business developer helping launch several significant, revenue-generating quantitative finance & Fintech applications  \n• Charted Financial Analyst (CFA)  \n• Inducted as a Certified Analytics Professional (CAP) by The Institute for Operations Research and the Management Sciences(INFORMS)  \nSpecialties: Analytics, AI , Data Science, Machine Learning, Fintech, Model Governance and Risk, Optimization, Algorithmic Trading, Quantitative Finance, Large Scale System Architecture",
    headline: "CEO, QuantUniversity | AI Expert | Educator | Author | TedX Speaker |",
    skills: ["Data Science", "Machine Learning", "Fintech", "Quantitative Finance", "Analytics", "CEO", "Founder", "CAD/CAM & Robotics Specialization", "CAD/CAM", "Robotics", "Artificial Intelligence"],
    preferred_jobs: ["Data Scientist", "Data Science faculty", "Analytics faculty", "Chief Data Scientist", "Machine Learning faculty", "Quantitative Finance Lead", "Senior Consultant", "Senior Analytics Consultant", "Chief Data Scientist and CEO"],
    preferred_locations: ["Boston", "Greater Boston Area", "Wellesley, MA", "Remote"],
    education: "\nCollege: Babson College - Franklin W. Olin Graduate School of Business\nDegree: MBA, Finance, Graduated with Summa Cum Laude Honors, Ranked 3rd in the Class\nCollege: Northeastern University\nDegree: Master of Science, Computer Science\nTimeline: 2002-2005\nCollege: Northeastern University\nDegree: Master of Science, Computer Systems Engineering\nTimeline: 1999-2001\nCollege: Bangalore University\nDegree: Bachelor of Engineering, Mechanical Engineering\nTimeline: 1993-1997",
    experience: "\nExperience:\nTitle: Data Science faculty, Northeastern University\nCompany Name: Northeastern University\nTitle: Founder and CEO\nCompany Name: QuantUniversity LLC.\nLocation: Greater Boston Area\nTitle: Analytics faculty, Babson College\nCompany Name: Babson College\nTitle: Senior Consultant/Quantitative Finance Lead\nCompany Name: The MathWorks\nTimeline: April 2008-May 2013\nTitle: Senior Analytics Consultant/Technical Team Lead\nCompany Name: Endeca\nTimeline: May 2006-April 2008\nTitle: Foreign Exchange Consultant\nCompany Name: Adaptive Edge Capital, Inc.\nTimeline: June 2007-December 2007\nTitle: Quantitative Research Manager\nCompany Name: Babson College Fund\nTimeline: May 2006-May 2007\nTitle: IT Analyst - Global Fixed Income Group\nCompany Name: Citigroup\nTimeline: February 2005-April 2006\nTitle: Enterprise Services Engineer\nCompany Name: PTC\nTimeline: November 2001-February 2005\nTitle: Graduate Engineer\nCompany Name: Larsen & Toubro Limited\nTimeline: September 1997-August 1999\n",
    location_name: "Boston, MA",
    resume_location: "https://qucoursify.s3.amazonaws.com/qu-skillbridge/admin@qusandbox.com/profile.pdf",
    jobs_visited: [],
    available_courses: [],
    persona: data_scientist_persona._id,
  });
  const creator = new userModel({
    _id: mongoose.Types.ObjectId(2),
    name: "Creator",
    email: "creator@jsonapi.com",
    password: hashPassword,
    created_at: new Date(),
    profile_image: `${process.env.APP_URL_API}/public/images/creator.jpg`,
  });
  const qucreator = new userModel({
    _id: mongoose.Types.ObjectId(2),
    name: "creator",
    email: "creator@qusandbox.com",
    password: await bcrypt.hash("creatorpassword", salt),
    created_at: new Date(),
    profile_image: `${process.env.APP_URL_API}/public/images/creator.jpg`,
  });
  const member = new userModel({
    _id: mongoose.Types.ObjectId(3),
    name: "Member",
    email: "member@jsonapi.com",
    password: hashPassword,
    created_at: new Date(),
    profile_image: `${process.env.APP_URL_API}/public/images/member.jpg`,
  });
  const qumember = new userModel({
    _id: mongoose.Types.ObjectId(3),
    name: "Shreyas",
    email: "shreyas@qusandbox.com",
    password: qumemberhashPassword,
    created_at: new Date(),
    linkedin_profile_id: "nikam-shreyas",
    summary: "Once upon a time, in the world of wires and widgets, I embarked on a quest to make life a tad more convenient. I love automation; from programming my devices (my iPhone, iPad, and my Mac) to chirp when their batteries reach full charge, to orchestrating Artificial Intelligence and Machine Learning to tackle more complex challenges; I. Automate. Everything.  \nOne day, armed with code and a vision, I entered my very first hackathon. The challenge? Craft a solution that wowed. And wow, it did! My web scraping marvel not only snagged the Best Performance Award but also unlocked a new chapter in my journey.  \nThat hackathon victory was a beacon, leading me to my first internship. The world of software development became my canvas, where I painted with pixels and forged applications that made life a bit more seamless.  \nYet, amidst web development, mobile app development, and building desktop applications, it was in the realm of machine learning and deep learning that I found my true calling. The dance with data, the symphony of algorithms, and the thrill of teaching machines to think - it was like painting with a palette of ones and zeros. This led me to pursue my Master's in Artificial Intelligence and brought me to Boston!  \nBeyond bits and bytes, my love for language flourishes. I am fluent in three tongues and have eagerly embraced a fourth. But why stop there? I plan to learn Braille and sign language too, promising new worlds of communication.  \nNow, I stand at a crossroads, ready for the next adventure. Eager to infuse creativity, expertise, and a dash of unconventional thinking into a team that, like me, believes in pushing boundaries and redefining what's possible. So, let's connect and see where the conversation leads to!",
    headline: "Data Science @ Changing The Present | AI/ML Engineer",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Python",
      "Tensorflow",
      "SQL",
      "NoSQL",
      "Docker",
      "streamlit"
    ],
    preferred_jobs: [
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    preferred_locations: [
      "Boston",
      "San Francisco",
      "Seattle"
    ],
    profile_image: "https://media.licdn.com/dms/image/D4E03AQF9TjnNK2PeAg/profile-displayphoto-shrink_200_200/0/1710692989211?e=2147483647&v=beta&t=M4n6f0UhSsw5W0yP9CndcuNQVAzAlKe6pmHP4Tu-u8w",
    education: "Education: \nCollege: Northeastern University\nDegree: Master's in Artificial Intelligence\nTimeline: 2021 - 2023\n\nCollege: Pune Instititue of Computer Technology\nDegree: Bachelor of Engineering in Computer Enginnering (Computer Science)\nTimeline: 2017 - 2021",
    experience: "Experience: \nTitle: Technical Lead\nCompany Name: QuantUniversity Professional Education\nTimeline: Jan 2024 - Present\n\nTitle: Data Science Intern\nCompany Name: Changing The Present\nTimeline: Sep 2023 - Dec 2023\n\nTitle: Student Success Guide\nCompany Name: Northeastern University\nTimeline: Jan 2022 - Apr 2023\n\nTitle: Graduate Teaching Assistant\nCompany Name: Northeastern University\nTimeline: Jan 2022 - Apr 2023\n\nTitle: Data Research Intern\nCompany Name: BoomPanda\nTimeline: Jan 2021 - Jun 2021\n\nTitle: Software Development Intern\nCompany Name: TECH SQUARE\nTimeline: Jun 2019 - Jan 2020\n\nTitle: Software Development Intern\nCompany Name: Riskpro Management Consulting Private Limited\nTimeline: Mar 2019 - May 2019",
    location_name: "Boston, Massachusetts",
    resume_location: "https://qucoursify.s3.amazonaws.com/qu-skillbridge/shreyas@qusandbox.com/profile.pdf",
    jobs_visited: [],
    available_courses: [],
    persona: ai_engineer_persona._id,
  });


  // user permission
  const perm1 = await permissionModel({ created_at: new Date(), name: "view users" });
  const perm2 = await permissionModel({ created_at: new Date(), name: "create users" });
  const perm3 = await permissionModel({ created_at: new Date(), name: "edit users" });
  const perm4 = await permissionModel({ created_at: new Date(), name: "delete users" });
  // role permission
  const perm5 = await permissionModel({ created_at: new Date(), name: "view roles" });
  const perm6 = await permissionModel({ created_at: new Date(), name: "create roles" });
  const perm7 = await permissionModel({ created_at: new Date(), name: "edit roles" });
  const perm8 = await permissionModel({ created_at: new Date(), name: "delete roles" });
  // permission permissions
  const perm9 = await permissionModel({ created_at: new Date(), name: "view permissions" });
  // tag permissions
  const perm10 = await permissionModel({ created_at: new Date(), name: "view tags" });
  const perm11 = await permissionModel({ created_at: new Date(), name: "create tags" });
  const perm12 = await permissionModel({ created_at: new Date(), name: "edit tags" });
  const perm13 = await permissionModel({ created_at: new Date(), name: "delete tags" });
  // category permissions
  const perm14 = await permissionModel({ created_at: new Date(), name: "view categories" });
  const perm15 = await permissionModel({ created_at: new Date(), name: "create categories" });
  const perm16 = await permissionModel({ created_at: new Date(), name: "edit categories" });
  const perm17 = await permissionModel({ created_at: new Date(), name: "delete categories" });
  // items permissions
  const perm18 = await permissionModel({ created_at: new Date(), name: "view items" });
  const perm19 = await permissionModel({ created_at: new Date(), name: "create items" });
  const perm20 = await permissionModel({ created_at: new Date(), name: "edit items" });
  const perm21 = await permissionModel({ created_at: new Date(), name: "delete items" });
  // persona permissions
  const perm22 = await permissionModel({ created_at: new Date(), name: "view personas" });
  const perm23 = await permissionModel({ created_at: new Date(), name: "create personas" });
  const perm24 = await permissionModel({ created_at: new Date(), name: "edit personas" });
  const perm25 = await permissionModel({ created_at: new Date(), name: "delete personas" });
  await permissionModel.insertMany([
    perm1,
    perm2,
    perm3,
    perm4,
    perm5,
    perm6,
    perm7,
    perm8,
    perm9,
    perm10,
    perm11,
    perm12,
    perm13,
    perm14,
    perm15,
    perm16,
    perm17,
    perm18,
    perm19,
    perm20,
    perm21,
    perm22,
    perm23,
    perm24,
    perm25,
  ]);

  const roleAdmin = new roleModel({
    _id: mongoose.Types.ObjectId(1), name: "admin", created_at: new Date(), users: [admin], permissions: [perm1._id, perm2._id, perm3._id, perm4._id, perm5._id, perm6._id, perm7._id, perm8._id,
    perm9._id, perm10._id, perm11._id, perm12._id, perm13._id, perm14._id, perm15._id, perm16._id, perm17._id, perm18._id, perm19._id, perm20._id, perm21._id, perm22._id, perm23._id, perm24._id, perm25._id]
  });
  await roleAdmin.save();
  admin.role = roleAdmin._id;
  quadmin.role = roleAdmin._id;
  await admin.save();
  await quadmin.save();
  const roleCreator = new roleModel({ _id: mongoose.Types.ObjectId(2), name: "creator", created_at: new Date(), users: [creator], permissions: [perm10._id, perm11._id, perm12._id, perm13._id, perm14._id, perm15._id, perm16._id, perm17._id, perm18._id, perm19._id, perm20._id, perm21._id, perm22._id, , perm23._id, perm24._id, perm25._id] });
  await roleCreator.save();
  creator.role = roleCreator._id;
  qucreator.role = roleCreator._id;
  await creator.save();
  await qucreator.save();
  const roleMember = new roleModel({ _id: mongoose.Types.ObjectId(3), name: "member", created_at: new Date(), users: [member], permissions: [perm10._id, perm11._id, perm15._id, perm18._id] });
  await roleMember.save();
  member.role = roleMember._id;
  qumember.role = roleMember._id;
  await member.save();
  await qumember.save();

  const cat1 = new categoryModel({
    name: "Travel",
    description: "Travel ideas for everyone",
    created_at: new Date(),
  });
  const cat2 = new categoryModel({
    name: "Food",
    description: "Our favourite recipes",
    created_at: new Date(),
  });
  const cat3 = new categoryModel({
    name: "Home",
    description: "The latest trends in home decorations",
    created_at: new Date(),
  });
  const cat4 = new categoryModel({
    name: "Fashion",
    description: "Stay in touch with the latest trends",
    created_at: new Date(),
  });
  const cat5 = new categoryModel({
    name: "Health",
    description: "An apple a day keeps the doctor away",
    created_at: new Date(),
  });
  const item1 = new itemModel({
    name: "5 citybreak ideas for this year",
    status: "published",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet nulla nulla. Donec luctus lorem justo, ut ullamcorper eros pellentesque ut. Etiam scelerisque dapibus lorem, vitae maximus ante condimentum quis. Maecenas ac arcu a lacus aliquet elementum posuere id nunc. Curabitur sem lorem, faucibus ac enim ut, vestibulum feugiat ante. Fusce hendrerit leo nibh, nec consectetur nulla venenatis et. Nulla tincidunt neque quam, sit amet tincidunt quam blandit in. Nunc fringilla rutrum tortor, sit amet bibendum augue convallis a. Etiam mauris orci, sollicitudin eu condimentum sed, dictum ut odio. Sed vel ligula in lectus scelerisque ornare.Mauris dolor nisl, finibus eget sem in, ultrices semper libero. Nullam accumsan suscipit tortor, a vestibulum sapien imperdiet quis. Donec pretium mauris quis lectus sodales accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt semper orci eu molestie. Vivamus fermentum enim vitae magna elementum, quis iaculis augue tincidunt. Donec fermentum quam facilisis sem dictum rutrum. Nunc nec urna lectus. Nulla nec ultrices lorem. Integer ac ante massa.",
    image: `${process.env.APP_URL_API}/public/images/product.jpg`,
    is_on_homepage: false,
    date_at: new Date(),
    created_at: new Date(),
  });
  item1.category_id = cat1._id;
  const item2 = new itemModel({
    name: "Top 10 restaurants in Italy",
    status: "published",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet nulla nulla. Donec luctus lorem justo, ut ullamcorper eros pellentesque ut. Etiam scelerisque dapibus lorem, vitae maximus ante condimentum quis. Maecenas ac arcu a lacus aliquet elementum posuere id nunc. Curabitur sem lorem, faucibus ac enim ut, vestibulum feugiat ante. Fusce hendrerit leo nibh, nec consectetur nulla venenatis et. Nulla tincidunt neque quam, sit amet tincidunt quam blandit in. Nunc fringilla rutrum tortor, sit amet bibendum augue convallis a. Etiam mauris orci, sollicitudin eu condimentum sed, dictum ut odio. Sed vel ligula in lectus scelerisque ornare.Mauris dolor nisl, finibus eget sem in, ultrices semper libero. Nullam accumsan suscipit tortor, a vestibulum sapien imperdiet quis. Donec pretium mauris quis lectus sodales accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt semper orci eu molestie. Vivamus fermentum enim vitae magna elementum, quis iaculis augue tincidunt. Donec fermentum quam facilisis sem dictum rutrum. Nunc nec urna lectus. Nulla nec ultrices lorem. Integer ac ante massa.",
    image: `${process.env.APP_URL_API}/public/images/product.jpg`,
    is_on_homepage: false,
    date_at: new Date(),
    created_at: new Date(),
  });
  item2.category_id = cat2._id;
  const item3 = new itemModel({
    name: "Cocktail ideas for your birthday party",
    status: "published",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet nulla nulla. Donec luctus lorem justo, ut ullamcorper eros pellentesque ut. Etiam scelerisque dapibus lorem, vitae maximus ante condimentum quis. Maecenas ac arcu a lacus aliquet elementum posuere id nunc. Curabitur sem lorem, faucibus ac enim ut, vestibulum feugiat ante. Fusce hendrerit leo nibh, nec consectetur nulla venenatis et. Nulla tincidunt neque quam, sit amet tincidunt quam blandit in. Nunc fringilla rutrum tortor, sit amet bibendum augue convallis a. Etiam mauris orci, sollicitudin eu condimentum sed, dictum ut odio. Sed vel ligula in lectus scelerisque ornare.Mauris dolor nisl, finibus eget sem in, ultrices semper libero. Nullam accumsan suscipit tortor, a vestibulum sapien imperdiet quis. Donec pretium mauris quis lectus sodales accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt semper orci eu molestie. Vivamus fermentum enim vitae magna elementum, quis iaculis augue tincidunt. Donec fermentum quam facilisis sem dictum rutrum. Nunc nec urna lectus. Nulla nec ultrices lorem. Integer ac ante massa.",
    image: `${process.env.APP_URL_API}/public/images/product.jpg`,
    is_on_homepage: false,
    date_at: new Date(),
    created_at: new Date(),
  });
  item3.category_id = cat3._id;
  const tag1 = new tagModel({
    name: "Hot",
    color: "#f44336",
    created_at: new Date(),
  });
  const tag2 = new tagModel({
    name: "Trending",
    color: "#9c27b0",
    created_at: new Date(),
  });
  const tag3 = new tagModel({
    name: "New",
    color: "#00bcd4",
    created_at: new Date(),
  });
  tag1.items.push(item1, item3);
  tag2.items.push(item1, item2, item3);
  tag3.items.push(item2, item3);
  cat1.items.push(item1);
  cat2.items.push(item2);
  cat3.items.push(item3);
  await categoryModel.insertMany([cat1, cat2, cat3, cat4, cat5]);
  await tagModel.insertMany([tag1, tag2, tag3]);
  item1.tags.push(tag1);
  item1.tags.push(tag2);
  item2.tags.push(tag3);
  item2.tags.push(tag2);
  item3.tags.push(tag1);
  item3.tags.push(tag2);
  item3.tags.push(tag3);
  await itemModel.insertMany([item1, item2, item3]);



  // add courses
  let courses_list = []
  for (let index = 0; index < courses.length; index++) {
    const course = courses[index];
    let newCourse = new courseModel({});
    // for key in course add key to newcourse
    for (const key in course) {
      if (Object.hasOwnProperty.call(course, key)) {
        newCourse[key] = course[key];
      }
    }
    courses_list.push(newCourse);
  }
  await courseModel.insertMany(courses_list);

  const persona_name_object_mapping = {
    "Software Engineer": software_engineer_persona,
    "AI Engineer": ai_engineer_persona,
    "Data Scientist": data_scientist_persona,
    "Product Manager": product_manager_persona,
    "Quantitative Researcher": quant_researcher_persona,
    "UX Engineer": ux_engineer_persona,
    "Data Analyst": data_analyst_persona,
    "Machine Learning Engineer": machine_learning_engineer_persona,
  }


  // add jobs for each persona
  let jobs_list = [];
  for (let index = 0; index < jobs.length; index++) {
    const job = jobs[index];
    let newJob = new jobModel({});
    // for key in job add key to newjob
    for (const key in job) {
      if (Object.hasOwnProperty.call(job, key)) {
        newJob[key] = job[key];
        if (key === "persona") {
          newJob[key] = persona_name_object_mapping[job[key]];
        }
      }
    }
    jobs_list.push(newJob);
  }

  await jobModel.insertMany(jobs_list);

  console.log("DB seeded");
}


seedDB().then(() => {
  mongoose.connection.close();
});
