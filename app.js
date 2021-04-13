const express = require("express");
const app = express();
const glabalErrorHandler = require("./controllers/errorController");
app.use(express.json());

const userRouter = require("./routes/userRoutes");
app.use("/api/v1/users", userRouter);
app.use(glabalErrorHandler);
module.exports = app;
