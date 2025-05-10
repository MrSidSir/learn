

const getUser = (req, res)=>{
    res.send("hi this is user list ")
}


const postuserdata= (req ,res)=>{
    res.send("hi this user post data")
}

 module.exports = {getUser , postuserdata}