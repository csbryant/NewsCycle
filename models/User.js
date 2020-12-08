const mongoose = require("mongoose");

// Create Schema
const UserSchema = new mongoose.Schema(
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
      },
    ],
  },
  { strict: false }
);

module.exports = User = mongoose.model("users", UserSchema);
