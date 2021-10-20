require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use('/', require('./routes/Home'))

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})
