import React from 'react'
import { ButtonWrapper } from '../wrappers/componentWrappers/button'

const Button = ({text , onClick ,className , dark}) => {
  return (
    <ButtonWrapper dark={dark} className={className} onClick={onClick}>
     {text}
    </ButtonWrapper>
  )
}

export default Button