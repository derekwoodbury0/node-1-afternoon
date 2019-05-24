let products = require('../products.json')
let productFns = require('./getProducts')

let express = require('express')
let app = express()
let port = 5000

app.get('/api/products', productFns.getProducts)

app.get('/api/product/:id', productFns.getProduct)

app.listen(port, () => console.log(`listening on port ${port}`))