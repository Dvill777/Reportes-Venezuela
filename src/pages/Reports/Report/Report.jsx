import React from 'react'
import { Button, Card, CardImg } from '../../../globalStyles'
import yendri from '../../../assets/images/veneco.jpg'

const Report = () => {
  return (
    <Card>
      <CardImg src={yendri} alt="Persona del reporte" />
      <h3>Yendri Rodriguez</h3>
      <p>Estado: Distrito Capital</p>
      <p>Status: Preso</p>
      <Button>Ver más</Button>
    </Card>
  )
}

export default Report