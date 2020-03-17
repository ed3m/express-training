const express = require('express')
const app = express()

app.get('/',(req, res)=> {
    res.send('Server is Online')

})

app.listen(3333,()=> {
    console.log('Server is Running')
})