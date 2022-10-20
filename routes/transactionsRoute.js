const express = require("express");
const Transaction = require("../models/Transaction");
const moment = require("moment");
const router = express.Router();

router.post("/add-transaction", async (req, res) => {
  try {
    const newtransaction = new Transaction(req.body);
    await newtransaction.save();
    res.send("Transaction Added Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/edit-transaction", async (req, res) => {
  try {
    await Transaction.findOneAndUpdate(
      { _id: req.body.transactionId },
      req.body.payload
    );
    res.send("Student Updated Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/delete-transaction", async (req, res) => {
  try {
    await Transaction.findOneAndDelete({ _id: req.body.transactionId });
    res.send("Student Updated Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/get-all-transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find({
      date: {
        $gt: moment("2022-05-01").toDate(),
      },
      userid: req.body.userid,
    });
    res.send(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
