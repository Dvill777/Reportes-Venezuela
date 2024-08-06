import React from "react";
import filterIcon from "../../assets/icons/filter.svg";
import searchIcon from "../../assets/icons/search.svg";
import Report from "./Report/Report";
import Title from "../../components/ui/Title";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const Reports = () => {
  return (
    <>
      <Title>Reportes</Title>
      <div className="flex items-center gap-2 lg:w-1/2">
        <Input type="text" placeholder="Buscar por nombre" />
        <Button className="py-1 px-2 rounded-lg">
          <img className="w-6 h-6" src={searchIcon} alt="Search" />
        </Button>
        <Button className="py-1 px-2 rounded-lg">
          <img className="w-6 h-6" src={filterIcon} alt="Filter" />
        </Button>
      </div>
      <div className="w-full grid grid-cols-1 auto-rows-auto lg:grid-cols-4 gap-5 mt-5">
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
      </div>
    </>
  );
};

export default Reports;
