import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";

const Navbar = () => {
  const [navopen,setNavOpen] = useState(false);

  return (
    <div className="navbar border-b-2 border-b-gray-200">
      <div className="logo md:text-xl lg:text-2xl">Mode UI</div>

      <div className={`menu ${navopen?"mob-nav":"hideit"} lg:flex transition-all duration-500 ease-in`}>
        <NavLink to="">
          Card access <FaAngleDown />
        </NavLink>
        <NavLink to="">Banking</NavLink>
        <NavLink to="">Processing</NavLink>
        <NavLink to="">About</NavLink>
        <NavLink to="">Carrier</NavLink>
        <NavLink to="">Contact</NavLink>
      </div>

      <div className="login-signup flex items-center">
        <button className="bg-[#eeefef] flex items-center text-[#5A6475] text-md md:text-xl rounded-lg animated-button-light">
          Login <IoMdExit className="text-xl md:text-2xl m-1" />
        </button>
        <div className="flex lg:hidden">
          <GiHamburgerMenu onClick={()=>setNavOpen(!navopen)} className="ms-5 text-xl md:text-2xl"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
