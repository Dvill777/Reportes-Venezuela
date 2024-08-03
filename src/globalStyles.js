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