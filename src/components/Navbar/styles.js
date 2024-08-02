import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
    width: 100%;
    height: 60px;
    background-color: var(--secondary-bg-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    z-index: 999;
`

export const Nav = styled.div`
    display: ${({ $show }) => ($show ? "flex" : "none")};
    background-color: var(--secondary-bg-color);
    width: 100%;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translate(-50%, 0);
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px){
        width: 600px;
        flex-direction: row;
        position: static;
        transform: translate(0, 0);
    }
`

export const NavItem = styled(Link)`
    width: 100%;
    padding: 0.7rem;
    text-align: center;
    color: #fff;
    font-weight: 500;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
        color: var(--accent-color);
    }
`

export const MenuIcon = styled.img`
    height: 25px;
    width: 25px;
    cursor: pointer;
    @media (min-width: 1024px){
        display: none;
    }
`