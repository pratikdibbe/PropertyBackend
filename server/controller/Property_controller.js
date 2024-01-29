const Property_model = require('../models/Property_model');


// Create a new property 
exports.CreateNewProperty = async (req, res) => {
    try {
        const { propertyName, location, price, description, image , firebaseImageUrl,propertyadder} = req.body;

        const response = await Property_model.create({ propertyName, location, price, description, image , firebaseImageUrl ,propertyadder });

        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Entry Created Successfully'
            }
        );
    }
    catch (err) {
        console.error(err);
        // console.log(err);
        res.status(500)
            .json({
                success: false,
                data: "internal server error",
                message: err.message,
            })
    }
}


// get all properties
exports.GetAllProperties = async (req, res) => {
    try {

        const AllPropertyGet = await Property_model.find();

        res.status(200).json(AllPropertyGet);

    } catch (err) {

        res.status(500).json({ error: 'error to getallProperties' });
    }
};



// get single property by id
exports.Fetchedsingleproperty = async (req, res) => {
    try {
        // Extract property items based on id
        const id = req.params.id;
        const singleproperty = await Property_model.findById({ _id: id });

        // Data for the given id not found
        if (!singleproperty) {
            return res.status(404).json({
                success: false,
                message: "No Data Found with Given Id",
            });
        }

        // Data for the given id FOUND
        res.status(200).json({
            success: true,
            data: singleproperty, 
            message: `Single property ${id} data successfully fetched`,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server Error',
        });
    }
};



// delete property
exports.DeleteProperty = async (req, res) => {
    try {
        const { id } = req.params;

        await Property_model.findByIdAndDelete(id);

        res.json({
            success: true,
            message: "Property DELETED",
        })

    }
    catch (err) {
        console.error(err);
        res.status(500)
            .json({
                success: false,
                error: err.message,
                message: 'Server to delete data Error',
            });
    }
}



 // update property by id 
exports.updateProperty = async (req, res) => {
    try {
      const property = await Property_model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
  

     //console.log("update Propert");
     //console.log(req.body);

  
      if (!property) {
        return res.status(404).json({ error: 'Property not found' });
      }
      res.status(200).json(property);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  


// get property by email id
exports.getPropertyEmail = async (req, res) => {
    try {
        const email = req.params.email;
        // console.log("ptatik", email );

        
        const properties = await Property_model.find({ propertyadder: email });
        // const properties = await Property_model.find({  email });

        // console.log("neeche" ,propertyadder )
        // console.log("neeche" ,propertyadder )


        if (properties.length === 0) {
            return res.status(404).json({ message: 'No properties found for this email.' });
        }

        res.json(properties);
        
    } catch (error) {
        console.error('Error retrieving properties:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};






