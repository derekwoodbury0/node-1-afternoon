let products = require('../products.json')

let getProducts = (req, res) => {
    if (req.query.price) {
        let items = products.filter(val => val.price >= parseInt(req.query.price))
        return res.status(200).send(items)
    }
    res.status(200).send(products)
}

let getProduct = (req, res) => {
    let {id} = req.params
    let rightProduct  = products.find(product => +product.id === +id)
    if (!rightProduct) return res.send('not found')
    res.send(rightProduct)
    
}



module.exports = {
    getProducts,
    getProduct
}