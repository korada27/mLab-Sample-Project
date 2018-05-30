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




const storage = multer.diskStorage({
  destination: function(req, productImage, cb) {
    cb(null,  'uploads/');
  },
  filename: function(req, productImage, cb) {
    //cb(null, new Date().toISOString() + productImage.originalname);
    // crypto.pseudoRandomBytes(16, function (err, raw) {
    //   cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(productImage.mimetype));
    // });
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)

      cb(null, raw.toString('hex') + path.extname(productImage.originalname));
      
    })
  }
});


const fileFilter = (req, productImage, cb) => {
  // reject a file
  if (productImage.mimetype === 'image/jpeg' || productImage.mimetype === 'image/png' || productImage.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

 var upload = multer({
    // destination:'../uploads/',
    
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
//const ProductSchema = require("../models/db.model");
//var mongoose = require('mongoose');


// router.post('/postProducts', function (req, res, next) {

//   var data = {
//     name: req.body.name,
//     password: req.body.password,
//     imgPath : req.body.img
//   }
//   console.log(data)
//   //productsService.insertData(data,res);

// });

///////////////////////////////IMAGE INSERTION//////////////////////////////////
router.post('/products', upload.single('productImage'), (req, res, next) => {


  const product = new Product({
   // _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    password: req.body.password,
    productImage: req.file.path 
  });
  product
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created product successfully",
        createdProduct: {
            name: result.name,
            password: result.password,
            _id: result._id,
            image:result.productImage
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});












//Get API 
// router.get('/getProducts', function (req, res, next) {

//   //productsService.getData(req,res);







// });


////////////////////////////GET DATA FROM MONGODB mLAB/////////////////////////////////////
router.get("/getProducts", (req, res, next) => {
  Product.find()
    // .select("name price _id productImage")
    // .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs.map(doc => {
          return {
            name: doc.name,
            password: doc.password,
            productImage: doc.productImage,
            _id: doc._id,
            image_id:doc.image_id
            // request:{
            //   type: "GET",
            //   url:"http://localhost:3000/getProducts/"+ doc._id
            // }
           
          };
        })
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});



//get Image on Browser
router.get("/getProducts/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.find({_id:id})
    .select('name price _id productImage')
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
            product: doc
           
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});





//////////////////////////////////////EDIT DATA IN mLab///////////////////////////////////
router.put('/editProducts', function (req, res, next) {

  var data = {
    name: req.body.name,
    password: req.body.password
   
  }
  productsService.editData(data,res);

});


module.exports = router;