const authMw = require("../middlewares/auth.mw")
const categoryModel = require("../models/category.model")

/**
 * POST localhost:8888/ecomm/api/v1/categories
 */
category_Controller=require("../controllers/category.controller")
auth_mw=require("../middlewares/auth.mw")

module.exports=(app)=>{
    app.post("/ecomm/api/v1/categories",[auth_mw.verifyToken,authMw.isAdmin],category_Controller.createNewCategory)
}