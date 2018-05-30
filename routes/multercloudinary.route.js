var express = require('express');
var router = express.Router();
var validator = require('express-joi-validator');
var requestSchema = require('../schemas/productsRequest.schema');
var productsService = require('../services/products.service');
var logger = require('../util/logger.util');
var path = require('path');
var fs=require('fs');
// var errorUtil = require('../util/errorMessages.util');
// var HTTP_CODES = require('../util/httpCodes.util');
var mongoDBConnection = require('../db/mongo.db');
const mongoose = require("mongoose");
const multer = require('multer');
var Product = mongoose.model('Product');
//var upload=multer({dest:'uploads/'});
var crypto=require('crypto');
var mime=require('mime');
var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
cloudinary.config({
    cloud_name: 'dh3uy7kus',
    api_key: '713573473328471',
    api_secret: 'aJt85jONbmYKNM7qbvBYG2GeNaw'
});

var storage = cloudinaryStorage({
    cloudinary: cloudinary,
    //folder: 'folder-name',
    allowedFormats: ['jpg', 'png']
    // filename: function (req, file, cb) {
    //   cb(undefined, 'my-file-name');
    // }
  });

var parser = multer({ storage: storage });
 
router.post('/samplepost', parser.single('image'), function (req, result) {
    console.log("Hello hai")

 console.log(result.req.file.url);



});

// ///////////////////////////Uploading multiple files with multer, but from different fields? /////////////
// app.post('/rest/upload',
//          upload.fields([{
//            name: 'video', maxCount: 1
//          }, {
//            name: 'subtitles', maxCount: 1
//          }]), function(req, res, next){
//   // ...
// }


////////////////////////////MongoDB Insertion AFTER CLoudant UPLOAD///////////////////////////////////
// router.post('/products', upload.single('productImage'), (req, res, next) => {

//   const product = new Product({
//    // _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     password: req.body.password,
//     productImage: req.file.path 
//   });
//   product
//     .save()
//     .then(result => {
//       console.log(result);
//       res.status(201).json({
//         message: "Created product successfully",
//         createdProduct: {
//             name: result.name,
//             password: result.password,
//             _id: result._id,
//             image:result.productImage
//         }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });


module.exports=router;