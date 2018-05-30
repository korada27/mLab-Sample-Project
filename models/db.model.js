var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    name: {type: String},
    password: {type: String},
    productImage: { type: String },
    image_id:  { type: String }
   
});

module.exports = mongoose.model('Product', schema);
console.log("done product schema");