const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://moulish:admin@cluster0.c3w8ljg.mongodb.net/Student",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

connection.on("error", (err) => console.log("err"));

connection.on("connected", () =>
  console.log("Mongodb Connected Successfully!!")
);
