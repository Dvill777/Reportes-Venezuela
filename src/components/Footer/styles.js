import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    background-color: var(--secondary-bg-color);
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 1024px){
        flex-direction: row;
    }
`