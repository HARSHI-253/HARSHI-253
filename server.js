require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000; // Make sure .env is being read

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI); // Removed deprecated options
        console.log("✅ MongoDB Connected Successfully!");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err.message);
        process.exit(1);
    }
}
connectDB();

// Test Route
app.get("/", (req, res) => {
    res.send("🚀 Food Delivery Backend is Running!");
});

// Start Server with Error Handling
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
}).on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.error(`❌ Port ${PORT} is already in use. Try using a different port.`);
        process.exit(1);
    }
});


