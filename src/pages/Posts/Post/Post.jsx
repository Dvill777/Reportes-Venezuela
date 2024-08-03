import React from 'react'
import { PostImg, StyledPost } from './styles'
import yendri from '../../../assets/images/veneco.jpg'

const Post = () => {
  return (
    <StyledPost>
        <PostImg src={yendri} alt="Persona del post" />
        <h3>Yendri Rodriguez</h3>
        <p>C.I. 12345678</p>
        <p>Estado: Districo Capital</p>
        <p>Status: Preso</p>
        <p>Último lugar de avistamiento: Av. Los Próceres</p>
        <p>Fecha de último avistamiento: 12/04/2020</p>
    </StyledPost>
  )
}

export default Post