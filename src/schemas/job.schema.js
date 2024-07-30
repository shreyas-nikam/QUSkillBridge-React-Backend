import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    site: { type: String },
    job_url: { type: String },
    job_url_direct: { type: String },
    title: { type: String },
    company: { type: String },
    location: { type: String },
    job_type: { type: String },
    date_posted: { type: Date },
    interval: { type: String },
    min_amount: { type: String },
    max_amount: { type: String },
    currency: { type: String },
    is_remote: { type: Boolean },
    emails: { type: String },
    description: { type: String },
    company_url: { type: String },
    company_url_direct: { type: String },
    company_addresses: { type: String },
    company_industry: { type: String },
    company_num_employees: { type: String },
    company_revenue: { type: String },
    company_description: { type: String },
    logo_photo_url: { type: String },
    banner_photo_url: { type: String },
    ceo_name: { type: String },
    ceo_photo_url: { type: String },
    persona: { type: mongoose.Schema.Types.ObjectId, ref: 'Persona' },
    recommended_courses: { type: [mongoose.Schema.Types.ObjectId], ref: 'Course' },
});

jobSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

jobSchema.set('toJSON', { virtuals: true });

export const jobModel = mongoose.model('Job', jobSchema);