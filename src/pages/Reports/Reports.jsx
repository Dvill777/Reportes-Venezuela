import React from "react";
import { Title } from "../../globalStyles";
import { FilterButton, FilterContainer } from "./styles";
import filterIcon from "../../assets/icons/filter.svg";
import searchIcon from "../../assets/icons/search.svg";
import { Input } from "../../globalStyles";

const Reports = () => {
  return (
    <>
      <Title>Reportes</Title>
      <FilterContainer>
        <Input type="text" placeholder="Buscar por nombre" />
        <FilterButton>
          <img src={searchIcon} alt="Search" />
        </FilterButton>
        <FilterButton>
          <img src={filterIcon} alt="Filter" />
        </FilterButton>
      </FilterContainer>
    </>
  );
};

export default Reports;
