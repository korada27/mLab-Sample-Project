var express = require('express');
var router = express.Router();
var logger = require('../util/logger.util');
var path = require('path');
var mongoDBConnection = require('../db/mongo.db');
const mongoose = require("mongoose");
const multer = require('multer');
var Product = mongoose.model('Product');
var cloudinary = require('cloudinary');


////////////////////////////////////////CLOUDANT CREDENTIALS////////////////////////////////////////////////
cloudinary.config({
    cloud_name: '',
    api_key: '',
    api_secret: ''
});



///////////////////UPLOAD IMAGE TO CLOUDINARY FROM GIVEN URL's/////////////////////////////////////////
router.post('/create',function(req, res, next) {

//var path = 'C:/Users/mkorada/Desktop/node js POC/NodeJS/uploads/thor.jpg'

    cloudinary.uploader.upload(req.body.productImage, function(result) {
        // Create a post model
        // by assembling all data as object
        // and passing to Model instance
        var post = new Product({
            name: req.body.name,
            password: req.body.password,
            productImage: result.url,
            // Store the URL in a DB for future use
            // image: result.url,
             image_id: result.public_id
        });
        // Persist by saving
        post.save(function (err) {
            if(err){
                res.send(err)
            }
            // Redirect
            res.send('Succesfully Inserted');
        });
    });




})


///////////////////////////////////GET IMAGE DIRECTLY ON BROWSER///////////////////////////////////////////////
// router.get('/getImage',function(req,res){
//     console.log("Hello")
//     cloudinary.image("https://upload.wikimedia.org/wikipedia/commons/0/0c/Scarlett_Johansson_Césars_2014.jpg", 
//     {
//         width: 300, 
//         height: 300, 
//         gravity: "face", 
//         radius: "max", 
//         crop: "fill", 
//         fetch_format: "auto", 
//         type: "fetch"
//     })
// })




module.exports = router;
