import React from 'react'
import './Label.css'

function Label(props) {
    const {variant = 'small', children, ...rest} = props
  return (
    <label className={`label ${variant}`} {...rest}>
      {children}
    </label>
  )
}

export default Label
