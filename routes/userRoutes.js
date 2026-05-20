const express = require("express");
const { CreateUser,getUser } = require("../Controller/UserController");

const router = express.Router();



// router.get("/",(req,res)=>{
//     res.send("All Users");
// })

router.get("/",getUser)
router.get("/",CreateUser)

// router.get("/:id",(req,res)=>{
//     res.send(`user_id: ${req.params.id}`);
// })


module.exports=router;