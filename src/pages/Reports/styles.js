import styled from "styled-components";

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    @media (min-width: 1024px){
        width: 50%;
    }
`

export const FilterButton = styled.button`
    background-color: var(--accent-color);
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    cursor: pointer;
    img{
        width: 25px;
        height: 25px;}
`