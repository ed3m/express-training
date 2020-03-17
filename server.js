const express = require('express')
const app = express()
const port = process.env.PORT || 3333

app.get('/',(req, res)=> {
    res.send('Server is Online')

})

app.listen(port,()=> {
    console.log('Server is Running')
})