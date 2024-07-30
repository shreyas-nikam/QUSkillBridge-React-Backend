import mongoose from 'mongoose';

const jobsVisitedSchema = new mongoose.Schema({
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    skill_match_score: { type: Number },
    skills_in_profile: { type: [String] },
    skills_in_job: { type: [String] },
    skill_delta: { type: [String] },
    cover_letter_location: { type: String },
    course_outline_location: { type: String },
});

jobsVisitedSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

jobsVisitedSchema.set('toJSON', { virtuals: true });

export const jobsVisitedModel = mongoose.model('JobsVisited', jobsVisitedSchema);