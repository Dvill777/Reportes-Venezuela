import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
    margin-top: 60px;
    width: 100%;
    padding: 2rem;
    min-height: 85vh;
    @media (min-width: 1024px){
        padding: 4rem;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
`

export const Button = styled.button`
    background-color: var(--accent-color);
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 1.4rem;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
    transition: color,background-color 0.25s ease-in-out;
    &:hover{
        background-color: #fff;
        color: var(--accent-color);
    }
`