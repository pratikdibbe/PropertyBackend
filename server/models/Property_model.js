const mongoose = require("mongoose");


const Property_model_schema = new mongoose.Schema({

    propertyName: {
      type: String,
      required: [true, "Please Enter PropertyName"],
    },
    location: {
      type: String,
      required: [true, "Please Enter Location"],
    },
    price: {
      type: Number,
      required: [true, "Please Enter Expected Price"],
    },
    description:{
      type: String,
      required: [true, "Enter the details of the properties"],
    },
    image:{
      type: String,
      required: [false, "Please Enter image"],
    },
    firebaseImageUrl: { // Added for storing Firebase image URL
      type: String,
      required: [false, "Firebase Image URL"],
    },
    propertyadder: {
      type: String,
      required: [true, "Please Enter Email"],
      unique: true,
      lowercase: true,
    },
   
  
  });
  
  module.exports = mongoose.model('PROPERTY', Property_model_schema);                       