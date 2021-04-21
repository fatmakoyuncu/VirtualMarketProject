const app = require("./server")

const client = require("./db")

app.get('/', async (req,res,next) => {
    client.query("SELECT * FROM products", (err,res2) => {
        if(err){
            throw err
        }
        res.status(200).json(res2.rows)
    })
})