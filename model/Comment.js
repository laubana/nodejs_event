const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    event: { type: ObjectId, ref: "event", required: true },
    user: { type: ObjectId, ref: "user", required: true },
    value: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("comment", commentSchema, "comment");
