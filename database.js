require("dotenv").config();

const { Pool } = require("pg");

// ✅ PostgreSQL Database Configuration
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// ✅ Log Database Connection Details
console.log("🔍 Attempting DB Connection...");
console.log("🔍 DATABASE_URL:", process.env.DATABASE_URL);

// ✅ Test Connection
pool.connect()
    .then(() => console.log("✅ Connected to PostgreSQL successfully!"))
    .catch((err) => {
        console.error("❌ Database Connection Error:", err.message);
        process.exitCode = 1;  // Allow logging without immediate shutdown
    });

module.exports = pool;