import React from 'react'
import Post from './Post/Post'
import Title from '../../components/ui/Title'

const Posts = () => {
  return (
    <>
      <Title>Publicaciones</Title>
      <section className='w-full grid grid-cols-1 auto-rows-auto lg:grid-cols-4 gap-5'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </section>
    </>
  )
}

export default Posts