import React from 'react'
import './Button.css'


function Buttons(props) {
    const {variant = 'primary', children, ...rest} = props
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default Buttons

