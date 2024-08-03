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

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 10px;
  border: 2px solid var(--accent-color);
  border-radius: 5px;
  &:focus-visible {
    outline: none;
  }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
    border: 1px solid #C2C2C2;
    padding: 0.5rem;
`

export const CardImg = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`