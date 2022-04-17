import React from 'react'
import { NavLink } from 'react-router-dom'
import './all.css';
import  web from "../Images/Pathlogin.jpg"

const Home = () => {
  return (
    <>
     
      <section className='' id='header'>
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center'>
              <h1> Welcome to <strong className='brand-name'> E-pathology</strong>
              </h1>
            
             

                <div className='mt-5 '>
                  <NavLink to="/login" className='btn-get-started'>
                    Get Started
                  </NavLink>

                </div>
            </div>

            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img
                  src={web}
                  className="img-fluid animated"
                  alt="home img"
                  Style="width:80%"
                  />

            </div>




          </div>
        </div>
      </section>
        

    </>
  )
}

export default Home