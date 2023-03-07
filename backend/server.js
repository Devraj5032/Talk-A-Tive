const express = require("express");
const { chats } = require("./Data/data");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
app.use(cors());
dotenv.config();
connectDB();
app.use(express.json()); // to accept json data

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

 app.listen(
  PORT,
  console.log(`Server started on port ${PORT}`.yellow.bold)
);

