const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

let users = [];

app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;
  const userExists = users.find((user) => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  const newUser = { name, email, password };
  users.push(newUser);
  res.status(201).json(newUser);
  console.log("User craeted :", newUser);
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  res.status(200).json(user);
  console.log("Login success !");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
