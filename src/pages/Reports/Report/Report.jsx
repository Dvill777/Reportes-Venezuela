import React from 'react'
import { Button, Card, CardImg, StyledLink } from '../../../globalStyles'
import yendri from '../../../assets/images/veneco.jpg'

const Report = () => {
  return (
    <Card>
      <CardImg src={yendri} alt="Persona del reporte" />
      <h3>Yendri Rodriguez</h3>
      <p>Estado: Distrito Capital</p>
      <p>Status: Preso</p>
      <StyledLink to={"/reportes/1"}>
        <Button>Ver más</Button>
      </StyledLink>
    </Card>
  )
}

export default Report