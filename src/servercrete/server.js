let express = require("express");
let app = express();

app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, , authorization"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
    next();
});
const port = 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}`));



app.get("/chat", function(req, res) {
    let connection = getConnection();
    let sql = "SELECT * FROM messages";
    connection.query(sql, function(err, result){
        if(err){
            console.log(err);
            res.status(404).send(err);
        }
        else {
            res.send(result);
        }
    })
})

app.post("/chat", function(req,res){
    let body = req.body;
    let connection = getConnection();
    let sql = "INSERT INTO messages(message,userName,datetime) VALUES(?,?,?,?)";
    connection.query(sql,[body.message,body.userName,body.datetime],function(err,result){
        if(err){
            console.log(err);
            res.status(404).send(err);
        }
        else{
            res.send(body);
        }
    });
});

