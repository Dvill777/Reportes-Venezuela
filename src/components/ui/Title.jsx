import React from 'react'

const Title = ({children, className = '', ...props}) => {
  return (
    <h1 {...props} className={`${className} text-5xl mb-5 font-bold` }>{children}</h1>
  )
}

export default Title