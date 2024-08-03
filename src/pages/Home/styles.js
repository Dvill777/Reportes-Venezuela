import styled from "styled-components";

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
`

export const Text = styled.p`
    font-size: 1.4rem;
    line-height: 1.5;
    margin-bottom: 20px;
`

export const Subtitle = styled.h2`
    font-size: 2rem;
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