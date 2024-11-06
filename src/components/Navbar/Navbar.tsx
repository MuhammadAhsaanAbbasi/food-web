"use client"

import React, { useState } from 'react'



const Navbar = () => {

const[menu,setMenu]=useState("home")

  return (
    <div className='navbar'>
      
    <img src="/logo.png" alt="" className="logo" />
    <ul className="navbar-menu">
      <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
      <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
      <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</li>
      <li onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>Contact Us</li>
    </ul>
    <div className="navbar-right">

      <img src='/search_icon.png' alt='/'/>
      <div className="navbar-search-icon">
        <img src="/basket_icon.png" alt="" />
        <div className="dot"></div>
      </div>
      <button>sign in</button>



    </div>
      
    </div>
  )
}

export default Navbar
