require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const prisma = require("./utils/prisma"); //importing the prisma client

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connection
prisma
  .$connect()
  .then(() => console.log("Connected to the database successfully"))
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.json({ message: "Well Come to the Server!" });
});

app.use("/api", routes);

const PORT = process.env.PORT || 3000;

// Graceful shutdown
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  console.log("Prisma disconnected");
  process.exit();
});

process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  console.log("Prisma disconnected");
  process.exit();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
