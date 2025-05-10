const {getUser , postuserdata} = require('../controller/userController');
const express = require('express');
const userRouter = express.Router();


userRouter.get("/userlist", getUser)
userRouter.post("/userpost" , postuserdata)
 

 module.exports = userRouter;