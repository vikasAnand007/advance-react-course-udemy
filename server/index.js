const express = require("express");
const cors = require("cors");
let { currentUser, users } = require("./modals/user");
let { books } = require("./modals/book");
const { paginate } = require("./utils");

const app = express();
app.use(express.json());
app.use(cors());

// users ----
app.get("/current-user", (req, res) => res.json(currentUser));
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const oneUser = users.find((elem) => elem.id.toString() === id.toString());
  res.json(oneUser);
});
app.get("/users", (req, res) => res.json(users));
app.get("/users-slow", (req, res) => {
  setTimeout(() => res.json(users), 1000);
});
app.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const { updates } = req.body;
  const updatedUsers = users.map((elem) =>
    elem.id.toString() === id.toString() ? updates : elem
  );
  users = updatedUsers;
  res.json(users.find((elem) => elem.id.toString() === id.toString()));
});

// books ----
app.get("/books", (req, res) => {
  const { page } = req.query;

  let dataToReturn = books;
  if (page) {
    dataToReturn = paginate(books, page, 2);
  }
  return res.json(dataToReturn);
});
app.post("/books", (req, res) => {
  const { title } = req.body;
  const newBook = {
    author: title,
    country: title,
    language: title,
    pages: 100,
    title,
    id: books.length,
    new: true,
  };
  books.push(newBook);
  res.json(newBook);
});
app.put("/books-reset", (req, res) => {
  books = books.filter((b) => !!b.new === false);
  res.json({ status: true });
});
app.get("/book/:id", (req, res) => {
  const { id } = req.params;
  const oneUser = books.find((elem) => elem.id.toString() === id.toString());
  res.json(oneUser);
});

app.listen(8000, () => console.log("server is on PORT 8000"));
