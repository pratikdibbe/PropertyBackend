import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Copyrightpage from '../Home/Copyrightpage';
import   { baseURL} from '../Utils/BaseUrl'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async () => {

    try {

      const response = await axios.post(`${baseURL}/api/login`, {
        email,
        password,
      });
     
      localStorage.setItem("token", response.data.token);

      // Handle successful login
      // console.log('Login successful', response.data);
      
      toast.success('Login successful');
      navigate('/'); 
      window.location.reload();

      // localStorage.setItem("token", response.data.token);

      // Redirect to the Profile page

    } catch (error) {
      // Handle login error
      console.error('Login error', error.response.data);
      toast.error('Enter Correct Email or Password');
    }
  };

  return (
    <>

      <div className='containerr'>
        <h2 className='signupheading'>Login</h2>

    
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
        <button className="signbtn" onClick={handleLogin}>Login</button>

        <div className="text-center">
          <p>New User ? <a className="blulink" onClick={() => navigate('/signup')}>Signup</a></p>
        </div>

        <ToastContainer />
      </div>
      <Copyrightpage />

    </>

  );
};

export default Login;