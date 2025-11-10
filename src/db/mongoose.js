const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => {
    console.log("database in connected");
  })
  .catch(() => {
    console.log("database failed to connect");
  });
