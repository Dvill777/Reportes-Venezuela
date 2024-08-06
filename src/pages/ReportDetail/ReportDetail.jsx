import React from "react";
import yendri from "../../assets/images/veneco.jpg";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

const ReportDetail = () => {
  return (
    <>
      <Link to="/reportes">
        <Button>Volver</Button>
      </Link>
      <section className="w-full bg-sky-800 p-4 grid grid-cols-[100%] grid-rows-[repeat(3,auto)] md:grid-cols-[60%_40%] md:grid-rows-[repeat(2,auto)] lg:grid-cols-[30%_20%_45%] lg:grid-rows-1 gap-5 mt-2">
        <img
          className="w-full max-h-80 object-cover"
          src={yendri}
          alt="Persona del reporte"
        />
        <div className="flex flex-col gap-2">
          <h3>Yendri Rodriguez</h3>
          <p>C.I. 12345678</p>
          <p>Estado: Distrito Capital</p>
          <p>Status: Preso</p>
          <p>Último lugar de avistamiento: Av. Los Próceres</p>
          <p>Fecha de último avistamiento: 12/04/2020</p>
        </div>
        <div className="md:max-lg:col-span-2 p-1">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            incidunt quas dignissimos deserunt dicta cum quae itaque,
            necessitatibus facilis ipsam porro minima consequuntur aperiam
            recusandae. Quia dolor iste itaque quae maiores officia nulla vel
            recusandae cumque similique nihil, quibusdam exercitationem culpa,
            magnam sunt delectus asperiores, necessitatibus nobis error ad unde.
          </p>
        </div>
      </section>
      <div className="w-full p-4 mt-5 grid grid-cols-1 auto-rows-auto lg:grid-cols-4 gap-5">
        <h2>Posts relacionados a Yendri</h2>
      </div>
    </>
  );
};

export default ReportDetail;
