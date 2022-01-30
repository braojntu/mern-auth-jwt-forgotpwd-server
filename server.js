const express = require("express");
var cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Welcome to default route of Node Expresss Server");
});

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// Error Handler Middleware
app.use(errorHandler);

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
