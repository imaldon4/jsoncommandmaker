const express = require("express"),
  path = require("path"),
  logger = require("./middleware/logger"),
  posts = require("./Posts"),
  app = new express(),
  PORT = process.env.PORT || 80;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

app.use(express.json);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Command Library",
    posts,
  });
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/posts", require("./routes/api/posts"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
