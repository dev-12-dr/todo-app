const validateTodo=(req,res,next)=>{
    const {title}=req.body;
    if(!title){
        return res.status(400).json({message:"missing details"});   
    }
    next();
}
module.exports={validateTodo};
