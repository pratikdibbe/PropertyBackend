import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navimg from '../Images/propertydeals.png'
import '../CSS/Navbar.css'

function Navbar() {

  const token = localStorage.getItem('token');


  const [showMenu, setShowMenu] = useState(false);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };



  return (

    <>
      <nav className="Navbar navbar navbar-expand-lg bg-body-tertiary sticky-top">

        <div className="container-fluid">

          <Link className="navbar-brand" to="/">
            <img src={navimg} alt="" className='navimgclass'  />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">


              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  About
                </Link>
              </li>

              {token ? (
                <>

                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/addproperty">
                      AddProperty
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/profile">
                      Profile
                    </Link>
                  </li>

                </>
              ) : (
                <>

                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/signup">
                      Signup
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/login">
                      Login
                    </Link>
                  </li>

                </>
              )}

            </ul>
          </div>
        </div>
      </nav>
    </>

  );
}

export default Navbar;
