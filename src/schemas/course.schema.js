import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    app_code: { required: true, type: String },
    app_name: { required: true, type: String },
    app_image_location: { type: String },
    home_page_introduction: { type: String },
    short_description: { type: String },
    document_link: { type: String },
    s3_location: { type: String },
    local_videos_path: { type: String },
    local_slides_path: { type: String },
    local_transcripts_path: { type: String },
    last_updated_json: { type: String },
    local_path: { type: String },
    chat_bot_starter_follow_up_questions: { type: [String] },
    retriever_db_path: { type: String },
    hybrid_db_path: { type: String },
    chatbot_questions_limit: { type: String },
    questions_file_path: { type: String },
    certificate_path: { type: String },
    quiz_total_ques: { type: Number },
    quiz_result_table_name: { type: String },
    user_quiz_interaction_table_name: { type: String },
    slides_links: { type: [String] },
    course_names_videos: { type: [String] },
    course_names_slides: { type: [String] },
    videos_links: { type: [String] },
    transcripts_files: { type: [String] },
    contact_form_link: { type: String },
});


courseSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

courseSchema.set('toJSON', { virtuals: true });

export const courseModel = mongoose.model('Course', courseSchema);