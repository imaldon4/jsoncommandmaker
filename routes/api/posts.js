const express = require("express"),
  moment = require("moment"),
  uuid = require("uuid"),
  router = express.Router(),
  posts = rquire("../../Posts");

// Get all posts
router.get("/", (req, res) => {
  res.json(posts);
});

// Get single post
router.get("/:id", (req, res) => {
  const found = posts.some((post) => post.id === parseInt(req.params.id));
  if (found) {
    res.json(posts.filter((post) => post.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No post with the id of ${req.params.id}` });
  }
});

// Create post
router.post("/", (req, res) => {
  const newPost = {
    id: uuid.v4(),
    date: new Date().toLocaleString(),
    command: req.body.command,
    description: req.body.description,
    parameters: req.body.parameters,
    attributes: req.body.attributes,
    examples: req.body.examples,
  };

  if (
    !newPost.command ||
    !newPost.description ||
    !newPost.parameters ||
    !newPost.attributes ||
    !newPost.examples
  ) {
    return res
      .status(400)
      .json({
        msg:
          "Please include a command, description, parameters, attribute, or example",
      });
  }

  posts.push(newPost);
  res.redirect("/");
});


// Updating posts

// Delete posts