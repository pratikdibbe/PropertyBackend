
import React from 'react'
import '../CSS/Home.css'
import Section1 from './Section1'
import PropertySection from './PropertySection'
import Footer from './Footer';
import { jwtDecode } from 'jwt-decode';


export default function Home() {

  let decoded = null;

  if (localStorage.getItem('token')) {
    decoded = jwtDecode(localStorage.getItem('token'));
    // console.log('decoded:', decoded);
    // console.log('email:', decoded.email);
  }


  return (

      <div> 
        
        <Section1/>
        {decoded == null ? (
          <h3 className='plzlogin'>Plz login first</h3>
                  ) : (
              <PropertySection/>
            )}
        <Footer/>
      </div>


  )
}




























































