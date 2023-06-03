const {
     getAllProducts,
     insertProduct,
     deleteProduct,
     getProductById
} = require('../controllers/product.controller')
const multer = require('multer');
const upload = multer();

const Route = require('express').Router()

Route.get("/",getAllProducts)
Route.get("/:id",getProductById)
Route.post("/insert",upload.single('file'),insertProduct)
Route.post("/delete",deleteProduct)

module.exports = Route