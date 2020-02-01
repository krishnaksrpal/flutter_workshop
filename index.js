const express = require('express');
const app = express();
var testRoute = require("./routes/test.js")
var postRoute = require("./routes/post.js")
app.use(express.static("root"));
app.use("/test",testRoute);
app.use("/post",postRoute);
var port = process.env.PORT || 3000;
app.listen(port, function () {console.log("listening on port: " + port)})