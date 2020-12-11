const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    categories: [
      {
        type: String,
      },
    ],
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "articles",
      },
    ],
  },
  { strict: false }
);

module.exports = User = mongoose.model("users", UserSchema);
