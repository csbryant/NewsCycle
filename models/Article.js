const mongoose = require("mongoose");

// Create Schema
const ArticleSchema = new mongoose.Schema(
  {
    uuid: String,
    title: String,
    description: String,
    keywords: String,
    snippet: String,
    url: String,
    image_url: String,
    language: String,
    published_at: String,
    source: String,
    categories: Array,
    relevance_score: null,
    locale: String,
  },
  { strict: false }
);

module.exports = Article = mongoose.model("articles", ArticleSchema);
