const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

//add body parser
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//add routes
app.use("/product",require("./routes/product.route"))
app.use("/order",require("./routes/order.route"))

module.exports = app;