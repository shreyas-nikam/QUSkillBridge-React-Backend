import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { required: true, type: String },
  email: { required: true, type: String },
  email_verified_at: { type: Date },
  password: { required: true, type: String },
  profile_image: { type: String },
  linkedin_profile_id: { type: String },
  summary: { type: String },
  headline: { type: String },
  skills: { type: [Object] },
  preferred_jobs: { type: [String] },
  preferred_locations: { type: [String] },
  education: { type: [Object] },
  experience: { type: [Object] },
  location_name: { type: String },
  created_at: { type: Date },
  updated_at: { type: Date },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  resume_location: { type: String },
  jobs_visited: { type: [mongoose.Schema.Types.ObjectId], ref: "JobsVisited" },
  available_courses: { type: [mongoose.Schema.Types.ObjectId], ref: "Course" },
  persona: { type: mongoose.Schema.Types.ObjectId, ref: "Persona" },
  courses_taken: { type: [Object] },
  publications: { type: [Object] },
  projects: { type: [Object] },
  certifications: { type: [Object] },
  patents: { type: [Object] },
  awards: { type: [Object] },
});

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.set("toJSON", { virtuals: true });

export const userModel = mongoose.model("User", userSchema);
