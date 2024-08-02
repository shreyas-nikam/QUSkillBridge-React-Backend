import mongoose from "mongoose";
import { dbConnect } from "./index.js";

import { jobsVisitedModel } from "../schemas/jobsVisited.schema.js";

import dotenv from 'dotenv';
dotenv.config();


async function seedDB() {
    //connect do db
    dbConnect();



    //seed data
    const jobVisited = new jobsVisitedModel({
        job: "60f3b3b3b3b3b3b3b3b3b3b3",
        skill_match_score: 60,
        skills_in_profile: ["Javascript", "React", "Node"],
        skills_in_job: ["Javascript", "React", "Node", "Express", "MongoDB"],
        skill_delta: ["Express", "MongoDB"],
        cover_letter_location: "",
        course_outline_location: ""
    });

    await jobVisited.save();

    //disconnect db
    mongoose.connection.close();

}

seedDB().then(() => {
    console.log("DB seeded");
});