import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bug = new Schema({
  closed: { type: Boolean, required: true, default: false },
  description: { type: String, required: true },
  title: { type: String, required: true },
  reportedBy: { type: String, required: true }, //The provided name for who reported the bug
  closedDate: { type: Date }
}, { timestamps: true, toJSON: { virtuals: true } })

export default class BugsService {
  get repository() {
    return mongoose.model('bugs', bug)
  }
}