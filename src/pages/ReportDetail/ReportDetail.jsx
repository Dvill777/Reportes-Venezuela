import React from "react";
import { Button, StyledLink } from "../../globalStyles";
import {
  PersonData,
  PersonDescription,
  PersonPhoto,
  RelatedPosts,
  ReportContainer,
} from "./styles";
import yendri from "../../assets/images/veneco.jpg";

const ReportDetail = () => {
  return (
    <>
      <StyledLink to="/reportes">
        <Button>Volver</Button>
      </StyledLink>
      <ReportContainer>
        <PersonPhoto src={yendri} alt="Persona del reporte" />
        <PersonData>
          <h3>Yendri Rodriguez</h3>
          <p>C.I. 12345678</p>
          <p>Estado: Distrito Capital</p>
          <p>Status: Preso</p>
          <p>Último lugar de avistamiento: Av. Los Próceres</p>
          <p>Fecha de último avistamiento: 12/04/2020</p>
        </PersonData>
        <PersonDescription>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            incidunt quas dignissimos deserunt dicta cum quae itaque,
            necessitatibus facilis ipsam porro minima consequuntur aperiam
            recusandae. Quia dolor iste itaque quae maiores officia nulla vel
            recusandae cumque similique nihil, quibusdam exercitationem culpa,
            magnam sunt delectus asperiores, necessitatibus nobis error ad unde.
          </p>
        </PersonDescription>
      </ReportContainer>
      <RelatedPosts>
        <h2>Posts relacionados a Yendri</h2>
      </RelatedPosts>
    </>
  );
};

export default ReportDetail;
