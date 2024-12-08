const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price:{type:Number,require:true},
    category: { type: String, required: true },
    size:{type: String,required: true},
    description: { type: String, required: true },
    mainImage: { type: String, required: true }, 
  
  });
  
  const Product = mongoose.model('Product', productSchema);
  
  module.exports = Product;