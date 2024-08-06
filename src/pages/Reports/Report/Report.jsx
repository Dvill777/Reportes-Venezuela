import React from 'react'
import yendri from '../../../assets/images/veneco.jpg'
import { Link } from 'react-router-dom'
import Card from '../../../components/Card/Card'
import CardImage from '../../../components/Card/CardImage'
import Button from '../../../components/ui/Button'

const Report = () => {
  return (
    <Card>
      <CardImage src={yendri} alt="Persona del reporte" />
      <h3>Yendri Rodriguez</h3>
      <p>Estado: Distrito Capital</p>
      <p>Status: Preso</p>
      <Link to={"/reportes/1"}>
        <Button>Ver más</Button>
      </Link>
    </Card>
  )
}

export default Report