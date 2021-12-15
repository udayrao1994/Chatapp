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

// let { messagesData } = require("./messagesData.ts");



const mysql = require('mysql');
const con = mysql.createConnection({
  host: "13.126.119.182",
  user: "mohd",
  password: "Mohd@123",
  database:"chatbot",

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.get("/messages", function(req, res) {
   
    let sql = "SELECT * FROM message";
    con.query(sql, function(err, result){
        if(err){
            console.log(err);
            res.status(404).send(err);
        }
        else {
            res.send(result);
        }
    })
})
app.get("/Technical", function(req, res) {
  
    let sql = "SELECT * FROM message WHERE room = 'Technical'";
    con.query(sql, function(err, result){
        if(err){
            console.log(err);
            res.status(404).send(err);
        }
        else {
            res.send(result);
        }
    })
})
app.get("/English", function(req, res) {
    
    let sql = "SELECT * FROM message WHERE room = 'English'";
    con.query(sql, function(err, result){
        if(err){
            console.log(err);
            res.status(404).send(err);
        }
        else {
            res.send(result);
        }
    })
})

app.post("/messages", function(req,res){
    let body = req.body;

    let sql = "INSERT INTO message(text,sender,room,time,date) VALUES(?,?,?,?,?)";
    con.query(sql,[body.text,body.sender,body.room,body.time,body.date],function(err,result){
        if(err){
            console.log(err);
            res.status(404).send(err);
        }
        else{
            res.send(body);
        }
    });
});


