import React from 'react';
import { useNavigate } from 'react-router';
import { jwtDecode } from 'jwt-decode';
import '../CSS/Profile.css'
import Copyrightpage from '../Home/Copyrightpage';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Profile() {
  const navigate = useNavigate();

  let decoded = null;
  if (localStorage.getItem('token')) {
    decoded = jwtDecode(localStorage.getItem('token'));
    // console.log('decoded:', decoded);
    // console.log('email:', decoded.email);
  }


  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    toast.success("Logout Succesfull");
    window.location.reload();
  };


  return (
  <>
    <div className="profile-container">
     
      <section>
        <div className="profile-details">
          
          <div className="user-info">
            
            <p className="fw-bold text-center">Name Of The Visitor</p>

            {decoded && <p>{decoded.name}</p>}

            <p className="fw-bold text-center">Email Of The Visitor</p>
            {decoded && <p>{decoded.email}</p>}

            <button className="btn btn-danger" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </div>
      </section>
      

    </div>
    <Copyrightpage/>

    </>
  );
}


