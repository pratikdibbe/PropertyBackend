import React from 'react'
import { useState, useEffect } from 'react';
import '../CSS/PropertySection.css'
import   { baseURL} from '../Utils/BaseUrl'


export default function PropertySection() {

  const [propertyName, setPropertyName] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const getPropertyList = async () => {
    try {

      const response = await fetch(`${baseURL}/api/getProperties`);

      const propertiesData = await response.json();

      setProperties(propertiesData);
      
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };


  useEffect(() => {
    getPropertyList();
  }, []);

  return (
    <div className='section2'>
      <div className="subsection">
        <h1 className='subheading'> <span class="heading__3">Find Your Dream House</span>  </h1>
      </div>
      <div className="row">

        {properties.map((property) => (

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
                  453 sq.ft. (42.09 sq.m.)<br />
                  Super Built-up Area | 
                </p>
                <h4 className="card-text">
                  {property.propertyName} <span>|</span>{" "}
                  <span className="fw-bold">{property.location}</span>
                </h4>
                <p className="card-text">
                  <span>&#8377;</span>{" "}
                  <span className="fw-bold">{property.price} L</span>
                </p>
                <p className="card-text">{property.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );


}
