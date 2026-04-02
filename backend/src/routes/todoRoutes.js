const express=require("express");
const router=express.Router();
const {getTodos, createTODO, updateTodo, deleteTodo}=require("../controllers/todo.controller")
const {validateTodo}=require("../middleware/validateTodo.middleware");         
router.get("/",getTodos)
router.post("/",validateTodo,createTODO)
router.put("/:id",updateTodo)
router.delete("/:id",deleteTodo)

module.exports=router;
