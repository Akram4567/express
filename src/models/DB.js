const { json } = require('body-parser')
const mongoose = require('mongoose')
const router = require('express').Router()


exports.connectDB = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/testDB")
    try{
        console.log(`mongodb is connected`)
    }catch (error) {
        console.log(error.mongoose)
        process.exit(1)
    }
}

const productsSchema = new mongoose.Schema(
    {
        title: String,
        price: Number,
        description: String,
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }
)

const Product = mongoose.model('Product', productsSchema)
exports.saveData = async (req,res) => {
    try{
        const title = req.body.title
        const price = req.body.price
        const description = req.body.description


        const newProduct = await new Product(
            {
                title,
                price,
                description
            }
        )

        const productData = await newProduct.save()

        res.status(201).send(productData)
        console.log(productData)
    }catch(e) {
        console.log(e)
    }

}


exports.getdata = async (req, res) => {
    try{
        const newProduct = await Product.find()
        res.status(200).send(newProduct)
    }catch(e) {
        res.status(404).send({
            massage: "porduct is not found"
        })
    }
}

