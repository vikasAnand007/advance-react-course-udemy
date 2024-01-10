const express = require("express");
const cors = require("cors");
const { currentUser, users } = require("./modals/user");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/current-user", (req, res) => res.json(currentUser));
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const oneUser = users.find((elem) => elem.id.toString() === id.toString());
  res.json(oneUser);
});
app.get("/users", (req, res) => res.json(users));

app.listen(8000, () => console.log("server is on PORT 8000"));
