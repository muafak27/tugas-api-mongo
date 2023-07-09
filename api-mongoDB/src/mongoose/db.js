const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/reactExpress')

const productSchema = new mongoose.Schema({
     name : String,
     price : String,
     stock : String
}, {collection: "produk"})

const productModels = mongoose.model("produk", productSchema)

module.exports = productModels