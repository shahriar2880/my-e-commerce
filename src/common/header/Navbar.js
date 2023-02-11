import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
          <header className="header">
              <div className="container d_flex">
                  <div className="categories d_flex">
                      <span className="fa-solid fa-border-all"></span>
                          <h4>
                              Categories <i className="fa fa-chevron-down"></i>
                          </h4> 
                  </div>
                  <div className="navlink">
                      <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"}
                          onClick={()=>setMobileMenu(false)}>
                          <ul>
                              <Link to='/'>home</Link>
                          </ul>
                          <ul>
                              <Link to='/pages'>pages</Link>
                          </ul>
                          <ul>
                              <Link to='/user'>user account</Link>
                          </ul>
                          <ul>
                              <Link to='/vendor'>vendor account</Link>
                          </ul>
                          <ul>
                              <Link to='/track'>track my order</Link>
                          </ul>
                          <ul>
                              <Link to='/contact'>contact</Link>
                          </ul>
                      </ul>
                      <button className='toggle' onClick={()=> setMobileMenu(!MobileMenu)}>
                          {
                              MobileMenu ?
                                  <i className="fas fa-times close home-bth"></i> :
                                  <i className="fas fa-bars open"></i>
                          }
                      </button>
                  </div>
              </div>
        </header>      
    </>
  )
}

export default Navbar
