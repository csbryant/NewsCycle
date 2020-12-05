const db = require("../models");
const express = require("express");

const router = express.Router();

router.get("/users", (req, res) => {
  db.User.find({}).then((users) => res.json(users));
});

router.post("/articles", ({ body }, res) => {
  db.Article.create(body)
    .then((article) => {
      console.log(article);
      res.json(article);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
