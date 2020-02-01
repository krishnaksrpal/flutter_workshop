var fs = require("fs");
var express = require("express");
var cookieParser = require("cookie-parser");
var router = express.Router();

router.use(cookieParser());
router.use(express.json());
var file = fs.readFileSync("routes/posts.json");
var data = JSON.parse(file);

router.get("/:number",(req,res)=>{
    // let number = Number(req.params.number);
    // let cookies = req.cookies;
    // // console.log(cookies);
    // if (cookies["krishna"]){
    //     res.cookie("krishna",number + Number(cookies["krishna"]));
    // }else{
    //     res.cookie("krishna",number);
    // }
    res.send(data);
});

router.post("/new",(req,res)=>{
    console.log(req.body);
    data.push(req.body);
    fs.writeFileSync("routes/posts.json",JSON.stringify(data,null,2));
    res.send(data);
})

module.exports = router;