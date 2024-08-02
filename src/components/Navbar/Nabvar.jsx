import React, { useState } from "react";
import { MenuIcon, Nav, NavItem, StyledNavbar } from "./styles";
import navbarMenu from "../../assets/icons/bars.svg";

const Nabvar = () => {
  const isDesktop = window.innerWidth >= 1024;
  const [showMenu, setShowMenu] = useState(isDesktop);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledNavbar>
      <h3>Reportes Venezuela</h3>
      <MenuIcon src={navbarMenu} alt="Navbar Menu" onClick={toggleMenu} />
      <Nav $show={showMenu}>
        <NavItem to="/">Reportar una persona</NavItem>
        <NavItem to="/">Publicaciones</NavItem>
        <NavItem to="/">Reportes verificados</NavItem>
      </Nav>
    </StyledNavbar>
  );
};

export default Nabvar;
