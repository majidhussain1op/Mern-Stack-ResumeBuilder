// utils/prisma.js
const { PrismaClient } = require("@prisma/client");

// Add explicit check for Prisma client
try {
  require("@prisma/client");
} catch (e) {
  console.error("Prisma client not generated. Run:");
  console.error("npx prisma generate");
  process.exit(1);
}

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

// Test connection immediately
prisma
  .$connect()
  .then(() => console.log("Prisma connected successfully"))
  .catch((err) => {
    console.error("Prisma connection failed:", err);
    process.exit(1);
  });

module.exports = prisma;
