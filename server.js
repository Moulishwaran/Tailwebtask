const express = require("express");
const dbConnect = require("./dbConnect");
const app = express();

app.use(express.json());

const userRoute = require("./routes/usersRoute");
const transactionRoute = require("./routes/transactionsRoute");

const port = 4000;

app.use("/api/users", userRoute);
app.use("/api/transactions", transactionRoute);

app.listen(port, () => console.log(`Nodejs Server Running on port: ${port}`));
