const express = require('express')
const router = express.Router()

const DB = require('../models/DB')
const userController = require('../Controllers/userController')
const adminController = require('../Controllers/adminController')
const subAdminController = require('../Controllers/subAdminController')
const postController = require('../Controllers/postController')
const productController = require('../Controllers/productController')

// const blogDetailsController = require('../Controllers/blogDetailsController')
// const profitController = require('../Controllers/profitController')
// const projectController = require('../Controllers/projectController')
// const serviceController = require('../Controllers/serviceController')
// const titleController = require('../Controllers/titleController')



//mongodb route
router.post('/product', DB.saveData)
router.get('/product',DB.getdata)




// userController routes
router.get('/createUser', userController.create)
router.get('/readUser', userController.read)
router.get('/deleteUser', userController.delete)
router.get('/updateUser', userController.update)




// adminController routes
router.get('/createAdmin', adminController.create)
router.get('/readAdmin', adminController.read)
router.get('/deleteAdmin', adminController.delete)
router.get('/updateAdmin', adminController.update)



// subAdminController routes
router.get('/createSubAdmin', subAdminController.create)
router.get('/readSubAdmin', subAdminController.read)
router.get('/deleteSubAdmin', subAdminController.delete)
router.get('/updateSubAdmin', subAdminController.update)



// postController routes
router.get('/createPost', postController.create)
router.get('/readPost', postController.read)
router.get('/deletePost', postController.delete)
router.get('/updatePost', postController.update)



// productController routes
router.get('/createProduct', productController.create)
router.get('/readProduct', productController.read)
router.get('/deleteProduct', productController.delete)
router.get('/updateProduct', productController.update)


// undefined route
router.get('*', (req,res)=> {
    res.status(404).send('<h1>404 not found</h1>')
    res.end()
})




// blogDetailsController routes
// router.get('/createBlogDetails', blogDetailsController.create)
// router.get('/readBlogDetails', blogDetailsController.read)
// router.get('/deleteBlogDetails', blogDetailsController.delete)
// router.get('/updateBlogDetails', blogDetailsController.update)




// profitController routes
// router.get('/createProfit', profitController.create)
// router.get('/readProfit', profitController.read)
// router.get('/deleteProfit', profitController.delete)
// router.get('/updateProfit', profitController.update)



// projectController routes
// router.get('/createProject', projectController.create)
// router.get('/readProject', projectController.read)
// router.get('/deleteProject', projectController.delete)
// router.get('/updateProject', projectController.update)



// serviceController routes
// router.get('/createService', serviceController.create)
// router.get('/readService', serviceController.read)
// router.get('/deletService', serviceController.delete)
// router.get('/updateService', serviceController.update)



// titleController routes
// router.get('/createTitle', titleController.create)
// router.get('/readTitle', titleController.read)
// router.get('/deletTitle', titleController.delete)
// router.get('/updateTitle', titleController.update)



// undefined route
router.get('*', (req,res)=> {
    res.status(404).send('<h1>404 not found</h1>')
    res.end()
})


module.exports = router

