const express = require("express");
const app = express();
app.use(express.json());

const userRouter = require("./routes/userRoutes");
app.use("/api/v1/users", userRouter);
module.exports = app;
