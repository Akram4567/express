const express = require('express')
const router = express.Router()

const blogController = require('../Controllers/blogController')
const blogDetailsController = require('../Controllers/blogDetailsController')
const commentController = require('../Controllers/commentController')
const messageController = require('../Controllers/messageController')
const portfolioController = require('../Controllers/portfolioController')
const productController = require('../Controllers/productController')
const profitController = require('../Controllers/profitController')
const projectController = require('../Controllers/projectController')
const serviceController = require('../Controllers/serviceController')
const titleController = require('../Controllers/titleController')





// blogController routes
router.get('/createBlog', blogController.create)
router.get('/readBlog', blogController.read)
router.get('/deleteBlog', blogController.delete)
router.get('/updateBlog', blogController.update)


// blogDetailsController routes
router.get('/createBlogDetails', blogDetailsController.create)
router.get('/readBlogDetails', blogDetailsController.read)
router.get('/deleteBlogDetails', blogDetailsController.delete)
router.get('/updateBlogDetails', blogDetailsController.update)


// commentController routes
router.get('/createComment', commentController.create)
router.get('/readComment', commentController.read)
router.get('/deleteComment', commentController.delete)
router.get('/updateComment', commentController.update)



// messageController routes
router.get('/createMessage', messageController.create)
router.get('/readMessage', messageController.read)
router.get('/deleteMessage', messageController.delete)
router.get('/updateMessage', messageController.update)



// portfolioController routes
router.get('/createPortfolio', portfolioController.create)
router.get('/readPortfolio', portfolioController.read)
router.get('/deletePortfolio', portfolioController.delete)
router.get('/updatePortfolio', portfolioController.update)



// productController routes
router.get('/createProduct', productController.create)
router.get('/readProduct', productController.read)
router.get('/deleteProduct', productController.delete)
router.get('/updateProduct', productController.update)



// profitController routes
router.get('/createProfit', profitController.create)
router.get('/readProfit', profitController.read)
router.get('/deleteProfit', profitController.delete)
router.get('/updateProfit', profitController.update)



// projectController routes
router.get('/createProject', projectController.create)
router.get('/readProject', projectController.read)
router.get('/deleteProject', projectController.delete)
router.get('/updateProject', projectController.update)



// serviceController routes
router.get('/createService', serviceController.create)
router.get('/readService', serviceController.read)
router.get('/deletService', serviceController.delete)
router.get('/updateService', serviceController.update)



// titleController routes
router.get('/createTitle', titleController.create)
router.get('/readTitle', titleController.read)
router.get('/deletTitle', titleController.delete)
router.get('/updateTitle', titleController.update)






module.exports = router

