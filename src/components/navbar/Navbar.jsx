import React, { useState } from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyles'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  const [open,setOpen]=useState(false)


  return (
    <Nav>
      <Logo to="/home">
        <i>{'<Clarusway/>'}</i>
        <span>recipe</span>
      </Logo>

      <Hamburger onClick={()=>setOpen(!open)} >
        <GiHamburgerMenu/>
      </Hamburger>

    <Menu osman={open} onClick={()=>setOpen(!open)} >
      <MenuLink to="/about">About</MenuLink>
      <a href="https://github.com/" target="_blank">Github</a>
      <MenuLink to="/">Logout</MenuLink>
    </Menu>

    </Nav>
  )
}

export default Navbar