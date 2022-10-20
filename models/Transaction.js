const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  studentname: { type: String, required: true },
  subjectname: { type: String, required: true },
  type: { type: String, required: true },
  mark: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

const transactionmodel = mongoose.model("Transactions", transactionSchema);

module.exports = transactionmodel;
