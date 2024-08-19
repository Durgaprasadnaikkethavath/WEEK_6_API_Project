const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/week-6-api-project")
  .then(() => console.log("server was connected"))
  .catch(() => console.log("server was not connected"));
