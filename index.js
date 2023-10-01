const app = require('./app')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const DB = require('./src/models/DB')


const PORT = process.env.RUNNING_PORT || 3000
app.listen(PORT, async ()=> {
    console.log(`Server is running on port ${PORT}`)
    await DB.connectDB()
})