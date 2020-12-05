const mongoose = require("mongoose");

// Create Schema
const ArticleSchema = new mongoose.Schema(
  {
    title: String,
    abstract: String,
    url: String,
    multimedia: Array,
  },
  { strict: false }
);

module.exports = Article = mongoose.model("articles", ArticleSchema);
