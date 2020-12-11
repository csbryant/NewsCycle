const db = require("../models");
const express = require("express");
console.log(db);

const router = express.Router();

router.get("/users", (req, res) => {
  db.User.find({}).then((users) => res.json(users));
});

// Route to create article and then place it in the user's favorites
router.post("/articles", ({ body, session }, res) => {
  let id = session.passport.user;
  db.Article.create(body)
    .then(({ _id }) =>
      db.User.findByIdAndUpdate(
        id,
        { $push: { favorites: _id } },
        { new: true }
      )
    )
    .then((user) => {
      console.log(user);
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Gets all articles from the user who is logged in
router.get("/articles", ({ session }, res) => {
  let id = session.passport.user;
  console.log(id);
  db.User.findById(id)
    .populate("favorites")
    .then((articles) => {
      console.log(articles);
      res.json(articles);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Changes the user's category preferences
router.put("/users/:id", ({ body, params }, res) => {
  db.User.findByIdAndUpdate(
    params.id,
    { $set: { categories: body.categories } },
    { new: true }
  )
    .then((user) => {
      console.log(user);
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Deletes single articles
router.delete("/articles/:id", ({ params }, res) => {
  db.Article.findByIdAndDelete(params.id, (err) => {
    if (err) console.log(err);
    res.status(204).json({});
  });
});

// Need a route to delete all the articles from the current user
// router.delete("/articles", (req, res) => {
//   db.Article.deleteMany
// })

module.exports = router;
