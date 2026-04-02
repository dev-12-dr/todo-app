const express=require("express");
const app=express();
const todoRoutes=require("./routes/todoRoutes");
const session=require("express-session");
const cookieParser=require("cookie-parser");
app.use(cookieParser());
app.use(express.json());

app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
}));

app.use("/api/todos",todoRoutes);

app.get("/set-cookies",(req,res)=>{
    res.cookie("name","user");
    res.send("cookies.set");
});

app.get("/get-cookies",(req,res)=>{
    
    res.json(req.cookies);
});

app.post("/login",(req,res)=>{
    const {username}=req.body;
    if(username){
        req.session.user={username};
        res.json({message:"Login successful",user:req.session.user});
    }else{
        res.status(400).json({message:"Username required"});
    }
});

app.post("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return res.status(500).json({message:"Logout failed"});
        }
        res.json({message:"Logout successful"});
    });
});

app.get("/session",(req,res)=>{
    if(req.session.user){
        res.json({user:req.session.user});
    }else{
        res.status(401).json({message:"No active session"});
    }
});


module.exports=app;
