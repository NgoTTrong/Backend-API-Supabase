const {
     getAllProducts,
     insertProduct,
     deleteProduct,
     getProductById
} = require('../controllers/product.controller')

const Route = require('express').Router()

Route.get("/",getAllProducts)
Route.get("/:id",getProductById)
Route.post("/insert",insertProduct)
Route.post("/delete",deleteProduct)

module.exports = Route