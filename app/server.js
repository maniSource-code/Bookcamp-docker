const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
const MONGO_URI = "mongodb://mongodb:27017/bookcamp"
mongoose.connect(process.env.MONGO_URI || MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const Registration = require("./models/Registration");

// POST route
app.post("/register", async (req, res) => {
  try {
    const newUser = new Registration(req.body);
    await newUser.save();
    res.status(201).json({ message: "Registration Successful!" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// ✅ NEW GET ROUTE
app.get("/registrations", async (req, res) => {
  try {
    const users = await Registration.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});