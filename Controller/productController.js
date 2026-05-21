const getProducts = (req, res) => {
    res.json({
        "sucess": true,
        "message": "All Product is fetched"
    })

}

const getSingleProduct = (req, res) => {
    res.json({
        "sucess": true,
        "productId": 10
    })

}

const createProduct = (req, res) => {

    const { data } = { reqbody }
    res.json({
        "name": "Laptop",
        "price": 50000
    })
}
const updateProduct = (req, res) => {

    const { data } = { reqbody }
    res.json({
        "name": "Laptop",
        "price": 50000
    });

}

const deleteProduct = (req, res) => {

    const { data } = { reqbody }
    res.json({
        "name": "Laptop",
        "price": 50000
    });

}

module.exports={
getProducts,
getSingleProduct,
createProduct,
updateProduct,
deleteProduct
}