import React from 'react';
import '../CSS/Section1.css'
import imgfirst from "../Images/img1.jpg"
import imgsecond from "../Images/img2.jpg"
import { useNavigate } from 'react-router-dom'; 


export default function Section1() {

  const navigate = useNavigate(); 
   
  const handlesection1btn = () =>{

    const isLoggedIn = !!localStorage.getItem('token');

    if (isLoggedIn) {
      // If logged in, redirect to another page (e.g., home)
      navigate('/');
    } else {
      // If not logged in, navigate to the login page
      navigate('/login');
    }
  }


  return (
    <div className='maindiv'>
       
       <section class="container">
      <div class="content__container">
        <h1>
          The Simplest Way<br />
          <span class="heading__1">To Find The House</span><br />
          <span class="heading__2">Around The World</span>
        </h1>
        
        <form>
         
          <button type="submit" onClick={handlesection1btn}>Explore</button>
        </form>
      </div>
      <div class="image__container">
        <img src={imgfirst} alt="header" className='img-fluid' />

        <img src={imgsecond} alt="header" className='img-fluid' />

        
      </div>
    </section>
  
    </div>
  )
}
