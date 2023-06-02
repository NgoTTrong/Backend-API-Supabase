const {
     getAllOrders,
     insertOrder,
     deleteOrder,
     getOrderById
} = require('../controllers/order.controller')

const Route = require('express').Router()

Route.get("/",getAllOrders)
Route.get("/:id",getOrderById)
Route.post("/insert",insertOrder)
Route.post("/delete",deleteOrder)

module.exports = Route