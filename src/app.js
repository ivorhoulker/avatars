const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const config = require("config");
const avatarsMiddleware = require("adorable-avatars");
const indexRouter = require("./routes/index");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/avatar", avatarsMiddleware);
app.use("/", indexRouter());

console.info(
  `application started successfully on port: ${
    process.env.PORT || config.get("port")
  }`
);

module.exports = app;
