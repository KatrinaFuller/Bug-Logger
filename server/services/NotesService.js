import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const note = new Schema({
  content: { type: String, required: true },
  bug: { type: ObjectId, ref: 'Bug', required: true },
  reportedBy: { type: String, required: true }, //The provided name for who made the note
  flagged: { type: String, enum: ["pending", "completed", "rejected"] }
}, { timestamps: true, toJSON: { virtuals: true } })

export default class NotesService {
  get repository() {
    return mongoose.model('notes', note)
  }
}