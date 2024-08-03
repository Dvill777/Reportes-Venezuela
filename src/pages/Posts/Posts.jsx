import React from 'react'
import { Title } from '../../globalStyles'
import { PostsContainer } from './styles'
import Post from './Post/Post'

const Posts = () => {
  return (
    <>
      <Title>Publicaciones</Title>
      <PostsContainer>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </PostsContainer>
    </>
  )
}

export default Posts