var express = require("express");
var router = express.Router();

router.get("/calculate/:a/:b", (req, res) => {
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    let add = a+b;
    let sub = a-b;
    let mul = a*b;
    let div = a/b;
    res.send({
        addition: add,
        subtraction: sub,
        multiplication: mul,
        division : div
    });
});

module.exports = router;