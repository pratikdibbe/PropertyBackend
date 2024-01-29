
import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Signup.css';
import { useNavigate } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Copyrightpage from '../Home/Copyrightpage';
import   { baseURL} from '../Utils/BaseUrl'



const Signup = () => {


  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const navigate2 = useNavigate();

  const handleSignup = async () => {

    try {
      const response = await axios.post(`${baseURL}/api/signup`, {
        name,
        email,
        password,
      });

      // Handle successful signup
      // console.log('Signup successful', response.data);
      toast.success("Account created successfully");
      navigate2('/login'); 
      // toast.success("Account created successfully");

    } catch (error) {
      // Handle signup error
      const errorMessage = error.response?.data || 'An error occurred during signup.';
      console.error('Signupppp error', errorMessage);
      // toast.error('Signup error', Message);
      toast.error("Account not created");
    }
  };

  
  return (

    <>
      <ToastContainer/>
      <div className='containerr'>
      <h2 className='signupheading'>Signup</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button className='signbtn' onClick={handleSignup}>Signup</button>

      <div className="text-center">
        <p>Already User ? <a   className="blulink" onClick={() => navigate2("/login")}>Log in</a></p>
      </div>

     
    </div>

    <Copyrightpage/>
    </>
    
  );
};

export default Signup;
