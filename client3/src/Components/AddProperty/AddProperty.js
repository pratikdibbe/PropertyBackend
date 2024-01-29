// import React, { useState, useEffect } from 'react';
// import '../CSS/AddProperty.css';
// import { useNavigate } from 'react-router';
// import { jwtDecode } from 'jwt-decode';
// import   { baseURL} from '../Utils/BaseUrl'


// export default function AddProperty() {



//   const [propertyName, setPropertyName] = useState('');

//   const [location, setLocation] = useState('');

//   const [price, setPrice] = useState('');

//   const [description, setDescription] = useState('');

//   const [imageFile, setImageFile] = useState(null);

//   const [properties, setProperties] = useState([]);

//   const [selectedProperty, setSelectedProperty] = useState(null);



//   const navigate = useNavigate();
//   let decoded = null;


//   // email get
//   if (localStorage.getItem('token')) {
//     decoded = jwtDecode(localStorage.getItem('token'));
//     // console.log('xxxxxxxxyyy:', decoded);
//     // console.log('email:', decoded.email);
//   }


//   const handleImageChange = async (e) => {
//     setImageFile(e.target.files[0]);
//     uploadImg(e.target.files[0]);
//     // console.log(e.target.files[0]);
//   };


//   let resulturl = null;

  
//   const uploadImg = async (e) => {
//     // console.log('Img function called');
//     try {
//       const formData = new FormData();
//       formData.append('image', e);
                                  
//                                   // https://backendproperty.onrender.com/upload
//       const response = await fetch(`${baseURL}/upload`,{
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         const result = await response.json();
//         // console.log('result');
//         // console.log(result);

//         resulturl = result.imageUrl;
//         return resulturl;
//       } else {
//         console.error('Failed to upload image');
//       }
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };


//   // create Property Handle
//   const handleCreateProperty = async () => {

//     let newurl = null;

//     try {

//       newurl = await uploadImg(imageFile);
//       // console.log('New URL:', newurl);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }

//     // console.log('newurl is stored ');
//     // console.log(newurl);

//     try {
//       const response = await fetch(`${baseURL}/api/createproperty`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           propertyName,
//           location,
//           price,
//           description,
//           firebaseImageUrl: newurl,
//           propertyadder: decoded.email,
//         }),
//       });

//       const data = await response.json();
//       // toast.success("Property created successfully");


//       if (data.success) {
//         getPropertyByEmail();
//         setPropertyName('');
//         setLocation('');
//         setPrice('');
//         setDescription('');

//       } else {
//         console.error('Failed to create property.');
//       }
//     } catch (error) {
//       console.error('Error creating property:', error);
//     }
//   };



//   const getPropertyList = async () => {
//     try {
//       const response = await fetch(`${baseURL}/api/getProperties`);
//       const propertiesData = await response.json();
//       setProperties(propertiesData);
//     } catch (error) {
//       console.error('Error fetching properties:', error);
//     }
//   };


//   // get properties by email
//   const getPropertyByEmail = async () => {
//     try {
//       const response = await fetch(`${baseURL}/api/getpropertybyemail/${decoded.email}`);
//       const propertiesData = await response.json();
//       setProperties(propertiesData);
//     } catch (error) {
//       console.error('Error fetching properties:', error);
//     }
//   };


//   // handle delate property
//   const handleDeleteProperty = async (propertyId) => {
//     try {
//       const response = await fetch(`${baseURL}/api/deleteproperty/${propertyId}`, {
//         method: 'DELETE',
//       });

//       const data = await response.json();

//       if (data.success) {
//         getPropertyByEmail();
//       } else {
//         console.error('Failed to delete property.');
//       }
//     } catch (error) {
//       console.error('Error deleting property:', error);
//     }
//   };


//   // handle edit property
//   const handleEditProperty = (property) => {
//     setSelectedProperty(property);
//     setPropertyName(property.propertyName);
//     setLocation(property.location);
//     setPrice(property.price);
//     setDescription(property.description);
//     getPropertyByEmail();
//   };


//   // handle update property
//   const handleUpdateProperty = async () => {
//     if (!selectedProperty) {
//       console.error('No property selected for update.');
//       alert('No property selected for update.');
//       return;
//     }

//     try {
//       const response = await fetch(`${baseURL}/api/updateproperty/${selectedProperty._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           propertyName: propertyName || selectedProperty.propertyName,
//           location: location || selectedProperty.location,
//           price: price || selectedProperty.price,
//           description: description || selectedProperty.description,
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setProperties((prevProperties) =>
//           prevProperties.map((property) =>
//             property._id === selectedProperty._id
//               ? {
//                 ...property,
//                 propertyName: propertyName || selectedProperty.propertyName,
//                 location: location || selectedProperty.location,
//                 price: price || selectedProperty.price,
//                 description: description || selectedProperty.description,
//               }
//               : property
//           )
//         );

//         navigate('/');
//         setSelectedProperty(null);
//         setPropertyName('');
//         setLocation('');
//         setPrice('');
//         setDescription('');
//         window.location.reload();
//       } else {
//         console.error('Failed to update property.');
//       }
//     } catch (error) {
//       console.error('Error updating property:', error);
//     }
//     getPropertyByEmail();
//   };




//   useEffect(() => {
//     getPropertyByEmail();
//   }, []);



//   return (
//     <>

//       <div className="containerr">

//          <h2>Add Your Property</h2>

//         <div>
//           <label htmlFor="propertyName">Property Name:</label>
//           <input
//             type="text"
//             id="propertyName"
//             value={propertyName}
//             onChange={(e) => setPropertyName(e.target.value)}
//           />
//         </div>


//         <div>
//           <label htmlFor="location">Location:</label>
//           <input
//             type="text"
//             id="location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />
//         </div>


//         <div>
//           <label htmlFor="price">Price:</label>
//           <input
//             type="number"
//             id="price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//         </div>


//         <div>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             className="txtareat"
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>


//         <div>
//           <label htmlFor="image">Choose Image:</label>
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//         </div>


//         {selectedProperty ? (
//           <button onClick={handleUpdateProperty}>Update Property</button>
//         ) : (
//           <button onClick={handleCreateProperty}>Create Property</button>
//         )}

//       </div>



//       <div className="section2">


//         <div className="subsection">
//           <h1 className="subheading">
//             <span class="heading__3">Your Created Properties</span>
//           </h1>
//         </div>

//         <div className="row">
//           {properties.message == 'No properties found for this email.' ? (
//             <div className="noprop">
//               <h2 className='txtnoprop'>No Property Added</h2>
//             </div>
//           ) : (
//             properties.map((property) => (
//               <div key={property._id} className="col-md-4 mb-4 insiderow">
//                 <div className="card shadow-lg">

//                   <img
//                     className="card-img-top"
//                     style={{ width: '100%', height: '250px' }}
//                     src={property.firebaseImageUrl}
//                     alt="Property"
//                   />
//                   <div className="card-body bg-light">
//                     <p className="card-text">
//                       453 sq.ft. (42.09 sq.m.)<br />
//                       Super Built-up Area | 1 BHK
//                     </p>
//                     <h4 className="card-text">
//                       {property.location} <span>|</span>{' '}
//                       <span className="fw-bold">{property.propertyName}</span>
//                     </h4>
//                     <p className="card-text">
//                       <span>&#8377;</span>{' '}
//                       <span className="fw-bold">{property.price} L</span>
//                     </p>
//                     <p className="card-text">{property.description}</p>

//                     <button
//                       onClick={() => handleEditProperty(property)}
//                       className="editbtn"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDeleteProperty(property._id)}
//                       className="delbtn"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </>
//   );
// }









import React, { useState, useEffect } from "react";
import "../CSS/AddProperty.css";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import axios from "axios"; // Import Axios
import { baseURL } from "../Utils/BaseUrl";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddProperty() {
  const [propertyName, setPropertyName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const navigate = useNavigate();
  let decoded = null;

  // email get
  if (localStorage.getItem("token")) {
    decoded = jwtDecode(localStorage.getItem("token"));
    // console.log('xxxxxxxxyyy:', decoded);
    // console.log('email:', decoded.email);
  }

  const handleImageChange = async (e) => {
    setImageFile(e.target.files[0]);
    uploadImg(e.target.files[0]);
    // console.log(e.target.files[0]);
  };

  let resulturl = null;

  const uploadImg = async (e) => {
    // console.log('Img function called');
    try {
      const formData = new FormData();
      formData.append("image", e);

      // https://backendproperty.onrender.com/upload
      const response = await axios.post(`${baseURL}/upload`, formData);

      if (response.status === 200) {
        const result = response.data;
        // console.log('result');
        // console.log(result);

        resulturl = result.imageUrl;
        return resulturl;
      } else {
        console.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // create Property Handle
  const handleCreateProperty = async () => {
    let newurl = null;

    try {
      newurl = await uploadImg(imageFile);
      // console.log('New URL:', newurl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }

    // console.log('newurl is stored ');
    // console.log(newurl);

    try {
      const response = await axios.post(`${baseURL}/api/createproperty`, {
        propertyName,
        location,
        price,
        description,
        firebaseImageUrl: newurl,
        propertyadder: decoded.email,
      });

      const data = response.data;
      toast.success("Property created successfully");

      if (data.success) {
        getPropertyByEmail();
        setPropertyName("");
        setLocation("");
        setPrice("");
        setDescription("");
      } else {
        console.error("Failed to create property.");
       toast.error("Property is Not created ");

      }
    } catch (error) {
      console.error("Error creating property:", error);
    }
  };


  const getPropertyList = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/getProperties`);

      const propertiesData = response.data;

      setProperties(propertiesData);

    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };


  // get properties by email
  const getPropertyByEmail = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/getpropertybyemail/${decoded.email}`
      );
      const propertiesData = response.data;
      setProperties(propertiesData);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  // handle delate property
  const handleDeleteProperty = async (propertyId) => {
    try {
      const response = await axios.delete(
        `${baseURL}/api/deleteproperty/${propertyId}`
      );
      const data = response.data;

      if (data.success) {
        getPropertyByEmail();
        toast.success("Property Deleted Successfully");
      } else {
        console.error("Failed to delete property.");
      }
    } catch (error) {
      console.error("Error deleting property:", error);
      // toast.success("Property Not Deleted");

    }
  };

  // handle edit property
  const handleEditProperty = (property) => {
    setSelectedProperty(property);
    setPropertyName(property.propertyName);
    setLocation(property.location);
    setPrice(property.price);
    setDescription(property.description);
    getPropertyByEmail();
  };


  // handle update property
  const handleUpdateProperty = async () => {
    if (!selectedProperty) {
      console.error("No property selected for update.");
      alert("No property selected for update.");
      return;
    }

    try {
      const response = await axios.put(
        `${baseURL}/api/updateproperty/${selectedProperty._id}`,
        {
          propertyName: propertyName || selectedProperty.propertyName,
          location: location || selectedProperty.location,
          price: price || selectedProperty.price,
          description: description || selectedProperty.description,
        }
      );

      const data = response.data;

      if (data.success) {
        setProperties((prevProperties) =>
          prevProperties.map((property) =>
            property._id === selectedProperty._id
              ? {
                  ...property,
                  propertyName: propertyName || selectedProperty.propertyName,
                  location: location || selectedProperty.location,
                  price: price || selectedProperty.price,
                  description: description || selectedProperty.description,
                }
              : property
          )
        );
        
        toast.success("Property Updated Succesfully");
        navigate("/");
        setSelectedProperty(null);
        setPropertyName("");
        setLocation("");
        setPrice("");
        setDescription("");
        window.location.reload();
      } else {
        console.error("Failed to update property.");
      }
    } catch (error) {
      console.error("Error updating property:", error);
    }
    getPropertyByEmail();
  };

  useEffect(() => {
    getPropertyByEmail();
  }, []);

  return (
    <>
      <div className="containerr">
        <h2>Add Your Property</h2>

        <div>
          <label htmlFor="propertyName">Property Name:</label>
          <input
            type="text"
            id="propertyName"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            className="txtareat"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="image">Choose Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {selectedProperty ? (
          <button onClick={handleUpdateProperty}>Update Property</button>
        ) : (
          <button onClick={handleCreateProperty}>Create Property</button>
        )}
      </div>

      <div className="section2">
        <div className="subsection">
          <h1 className="subheading">
            <span class="heading__3">Your Created Properties</span>
          </h1>
        </div>

        <div className="row">
          {properties.message == "No properties found for this email." ? (
            <div className="noprop">
              <h2 className="txtnoprop">No Property Added</h2>
            </div>
          ) : (
            properties.map((property) => (
              <div key={property._id} className="col-md-4 mb-4 insiderow">
                <div className="card shadow-lg">
                  <img
                    className="card-img-top"
                    style={{ width: "100%", height: "250px" }}
                    src={property.firebaseImageUrl}
                    alt="Property"
                  />
                  <div className="card-body bg-light">
                    <p className="card-text">
                      453 sq.ft. (42.09 sq.m.)
                      <br />
                      Super Built-up Area | 1 BHK
                    </p>
                    <h4 className="card-text">
                      {property.location} <span>|</span>{" "}
                      <span className="fw-bold">{property.propertyName}</span>
                    </h4>
                    <p className="card-text">
                      <span>&#8377;</span>{" "}
                      <span className="fw-bold">{property.price} L</span>
                    </p>
                    <p className="card-text">{property.description}</p>

                    <button
                      onClick={() => handleEditProperty(property)}
                      className="editbtn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProperty(property._id)}
                      className="delbtn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
