const express = require('express');
const router = express.Router();

// Import the CreateNewProperty function
const { CreateNewProperty , GetAllProperties, DeleteProperty, updateProperty, Fetchedsingleproperty,getPropertyEmail} = require("../controller/Property_controller");

// create property
router.post("/createproperty", CreateNewProperty);
// get allproperties
router.get("/getProperties", GetAllProperties);
// get by id (single property)
router.get("/getsinglepro/:id", Fetchedsingleproperty );
// delete property
router.delete("/deleteproperty/:id", DeleteProperty);
// update Property
router.put("/updateproperty/:id", updateProperty);
// getproperty by email
router.get("/getpropertybyemail/:email", getPropertyEmail);



// controller  for login and signup
const signupController = require("../controller/signup");
const logincontroller = require("../controller/login");
const authcontroller = require("../controller/auth");


router.post("/signup", signupController);
router.post("/login", logincontroller);
router.post("/auth", authcontroller);






module.exports = router;
