const express = require('express')
const router = require('./src/Routes/api.js')

const app = express()
app.use('/api', router)




module.exports= app