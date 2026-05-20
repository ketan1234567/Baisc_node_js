const getUser=(req,res)=>{
    res.json({
        message:"User fected Sucessfully"
    })
}

const CreateUser=(req,res)=>{
    res.json({
        message:"User Created Sucessfully"
    })
}

module.exports={
    getUser,
    CreateUser
}