const mongoose = require("mongoose");

const { Schema, model } = mongoose;
const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },
    publishedYear: {
      type: Number,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const BooksModel = model("Book", bookSchema);
module.exports = BooksModel;
