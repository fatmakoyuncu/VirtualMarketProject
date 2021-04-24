const app = require("./server")

const client = require("./db")

const fs = require('fs')

app.get('/', async (req,res,next) => {
    client.query("SELECT * FROM products", (err,res2) => {
        if(err){
            throw err
        }
        res.status(200).json(res2.rows)
    })
})

app.get('/categories', async (req,res,next) => {
    client.query("SELECT * FROM categories", (err,res2) => {
        if(err){
            throw err
        }
        res.status(200).json(res2.rows)
    })
})

const product = async(id) => {
    const result = await client.query(`SELECT product_name, price, img_path FROM products WHERE id = ${id}`)
    return result.rows
}

app.get('/:id', async (req,res) => {
    const product_id = req.params.id
    const products = await product(product_id)

    if(products.length !== 1){
        return res.json({success:false, message:'not found product'})
    }

    const productList = products[0]
    res.set('Content-Type', 'image/jpg')
    fs.createReadStream(productList.img_path).pipe(res)
})

const category = async(id) => {
    const result = await client.query(`SELECT category_name, category_icon FROM categories WHERE id = ${id}`)
    return result.rows
}

app.get('/categories/:id', async(req,res) => {
    const category_id = req.params.id
    const categories = await category(category_id)

    if(categories.length !== 1){
        return res.json({success: false, message: 'category not found'})
    }

    const category_info = categories[0]
    res.set('Content-Type', 'image/png')
    fs.createReadStream(category_info.category_icon).pipe(res)
})