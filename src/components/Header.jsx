import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div>
        <header class="header">
       
        <nav class="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#community">Community</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
        </nav>
        <a href="#login" class="login-signup">Login/Sign Up</a>
    </header>
      
    </div>
  )
}

export default Header
