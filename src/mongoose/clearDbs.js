import mongoose from "mongoose";
import { dbConnect } from "./index.js";

import { userModel } from "../schemas/user.schema.js";
import { roleModel } from "../schemas/role.schema.js";
import { permissionModel } from "../schemas/permission.schema.js";
import { tagModel } from "../schemas/tag.schema.js";
import { categoryModel } from "../schemas/category.schema.js";
import { itemModel } from "../schemas/item.schema.js";
import { jobModel } from "../schemas/job.schema.js";
import { personaModel } from "../schemas/persona.schema.js";
import { courseModel } from "../schemas/course.schema.js";

async function clear() {
  dbConnect();
  // await roleModel.deleteMany({});
  // await permissionModel.deleteMany({});
  // await userModel.deleteMany({});
  await tagModel.deleteMany({});
  await categoryModel.deleteMany({});
  await itemModel.deleteMany({});
  // await jobModel.deleteMany({});
  // await personaModel.deleteMany({});
  // await courseModel.deleteMany({});
  console.log("DB cleared");
}

clear().then(() => {
  mongoose.connection.close();
});
