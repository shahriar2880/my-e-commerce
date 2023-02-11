import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const Search = () => {
  return (
    <>
        <section className="search">
              <div className="container c_flex">
                  
                  <div className="logo width">
                      <img src={logo} alt="" />
                  </div>

                  <div className="search-box f_flex">
                      <i className="fa fa-search"></i>
                      <input type="text" placeholder='Search' name="" id="" />
                      <span>All Category</span>
                  </div>

                  <div className="icon f_flex width">
                      <i className="fa fa-user icon_circle"></i>
                      <div className="cart">
                          <Link to='/cart'>
                              <i className="fa fa-shopping-bag icon-circle"></i>
                              <span>O</span>
                          </Link>
                      </div>
                  </div>
            </div>      
        </section>
    </>
  )
}

export default Search
