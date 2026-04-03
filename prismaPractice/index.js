const express = require("express");
const prisma = require("./prismaClient");

const app = express();
app.use(express.json());

// GET users
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// CREATE user
app.post("/users", async (req, res) => {
  const { email, name } = req.body;

  const user = await prisma.user.create({
    data: { email, name },
  });

  res.json(user);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});