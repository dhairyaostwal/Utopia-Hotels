var express= require('express');
var bodyParser=require('body-parser');
var app=express();
app.set('view engine','ejs');
var urlencoded=bodyParser.urlencoded({extended:false});
var data=[];
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


app.use('/assets',express.static('assets'));


 app.get('/home',function(req,res)
 {
     res.render('homepage');
 });


 app.get('/book',function(req,res)
 {
    res.render('bookingpage');
    
 });
 app.post('/book',urlencoded,function(req,res)
 {  console.log(req.body);
     data=req.body;
     data=JSON.stringify(data);

     console.log(data);
     data=JSON.parse(data);

     MongoClient.connect(url, function(err, db) {
       if (err) throw err;
       var dbo = db.db("ProjectDB");
       var myobj = data;
       dbo.collection("CustomerBookingDetails").insertOne(myobj, function(err, res) {
         if (err) throw err;
         console.log("1 document inserted");
         db.close();
       });
     });
     res.render('booking-success',{data:req.body});

 });

app.listen(3000);
console.log("it is on");
