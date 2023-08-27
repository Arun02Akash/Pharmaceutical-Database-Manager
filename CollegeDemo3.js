var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "9999",
  database: "myProductDB"
});

con.connect();
var http = require('http');

var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


app.get('/',function(req,res) {res.sendFile(__dirname + '/indexnew.html');
});
console.log("Nodejs Server is running");

app.post('/',function(req,res) {
	var PID = req.body.PID;
	var Pname = req.body.Pname;
	var Pqty = req.body.Pqty;
	var Paddress=req.body.Paddress;
	var PDate=req.body.PDate;
	console.log("we are past post");
 	var sql = "INSERT INTO `Products`(`PID`,`Pname`,`Pqty`,`Paddress`,`PDate`) VALUES ('"+PID +"','"+Pname+"','"+Pqty+"','"+Paddress+"','"+PDate+"')";
  con.query(sql, function(err, result)  {
        if(err) throw err;
	{
                console.log("Database row got inserted");
            }
		
});

});
app.post('/update',function(req,res) {
	var PID = req.body.PID;
	var Pname = req.body.Pname;
	var Pqty = req.body.Pqty;
	var Paddress=req.body.Paddress;
	var PDate=req.body.PDate;
	console.log("we are past post");
	var sql = "update `Products` set `Pname`='"+Pname+"',`Pqty`='"+Pqty+"',`Paddress`='"+Paddress+"',`PDate`='"+PDate+"' where `PID`='"+PID+"'";
	
  con.query(sql, function(err, result)  {
        if(err) throw err;
	{
                console.log("Database row got updated");
            }
		
});

});
app.post('/delete',function(req,res) {
	var PID = req.body.PID;
	var Pname = req.body.Pname;
	var Pqty = req.body.Pqty;
	var Paddress=req.body.Paddress;
	var PDate=req.body.PDate;
	console.log("we are past post");
 	var sql = "delete from `Products` where `PID`='"+PID+"'";
        con.query(sql, function(err, result)  {
        if(err) throw err;
	{
                console.log("Database row got deleted");
            }
		
});

});
app.listen(8080);

