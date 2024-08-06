import React, { useState } from "react";
import navbarMenu from "../../assets/icons/bars.svg";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

const Nabvar = () => {
  const isDesktop = window.innerWidth >= 1024;
  const [showMenu, setShowMenu] = useState(isDesktop);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="w-full h-16 flex items-center justify-between px-5 fixed top-0 z-10 bg-sky-800 text-white">
      <Link to="/">
        <h3>Reportes Venezuela</h3>
      </Link>
      <img className="w-6 h-6 cursor-pointer lg:hidden" src={navbarMenu} alt="Navbar Menu" onClick={toggleMenu} />
      <div className={`${showMenu ? "flex" : "hidden"} bg-sky-800 w-full absolute top-16 left-2/4 transform -translate-x-2/4 flex-col items-center lg:w-7/12 lg:flex-row lg:static lg:transform lg:-translate-x-0`}>
        <NavItem to="/crear-publicacion">Reportar una persona</NavItem>
        <NavItem to="/publicaciones">Publicaciones</NavItem>
        <NavItem to="/reportes">Reportes verificados</NavItem>
      </div>
    </nav>
  );
};

export default Nabvar;
