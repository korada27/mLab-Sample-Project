var Promise;
Promise = require('promise');
//var mariaConnection = require('../db/maria.db');
var dbSchema = require('../models/db.model');
var logger = require('../util/logger.util');
var conn=require('../db/mongo.db');
var mongoose = require('mongoose');
var Product = mongoose.model('Product');



var insertData = function(data,res){

    Product.insertMany(data, function (err, docs) {
        if (err) throw err;
        else{
            res.send("Data Inserted Successfully...!")
        }
        
      });
      

}


var getData=function(req,res){
var ar=[];
    Product.find({}, function (err, docs) {
        if (err) throw err;
        else{
            //res.send(docs)
            for(var i=0;i<docs.length;i++){

                ar.push({

                  "Name":docs[i].name,
                  "Password":docs[i].password
                    
                })

            }
            res.send(ar)
        }
        
      });

}


var editData = function(data,res){

    console.log(data)
    Product.update(
        {
             "name": data.name	
        },
        {
        $set:
        {
            "password":data.password
        }
        }).then(function(result){

if(result.n){
    res.send("Updated Successfully...!")
}
else{
    res.send("Cannot Find the name you provided")
}


    })


}




module.exports={

insertData:insertData,
getData:getData,
editData:editData
}