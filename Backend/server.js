const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use((req,res,next) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Headers', 'content-type')
    next()
})

app.listen(PORT, () => {
    console.log('Server is running on PORT' + PORT);
})

module.exports=app