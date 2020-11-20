const config = require("config");
const app = require("./src/app");

app.default.listen(process.env.PORT || config.port);
