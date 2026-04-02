const TODO=require("../models/todo.model");
const createTODO=async(req,res)=>{
    try{
        const todo=await TODO.create(req.body);
        res.status(201).json({todo});
    }
    catch(err){
        res.status(500).json({message:"Failed to create TODO",error:err.message})
    } 
};
const getTodos=async(req,res)=>{
    try{
        const todos=await TODO.find();
        res.json({todos});
    }
    catch(err){
        res.status(500).json({message:"Failed to get TODOs",error:err.message})
    } 
};
const updateTodo=async(req,res)=>{
    try{
        const todo=await TODO.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!todo){
            return res.status(404).json({message:"TODO not found"});
        }
        res.json({todo});
    }
    catch(err){
        res.status(500).json({message:"Failed to update TODO",error:err.message})
    } 
};
const deleteTodo=async(req,res)=>{
    try{
        const todo=await TODO.findByIdAndDelete(req.params.id);
        if(!todo){
            return res.status(404).json({message:"TODO not found"});
        }
        res.json({message:"TODO deleted successfully"});
    }
    catch(err){
        res.status(500).json({message:"Failed to delete TODO",error:err.message})
    } 
};
module.exports = { createTODO, getTodos, updateTodo, deleteTodo };
