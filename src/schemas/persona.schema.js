import mongoose from "mongoose";

const personaSchema = new mongoose.Schema({
    name: { required: true, type: String },
    description: { type: String },
});

personaSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

personaSchema.set("toJSON", { virtuals: true });

export const personaModel = mongoose.model("Persona", personaSchema);