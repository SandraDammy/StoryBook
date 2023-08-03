import React from 'react'
import './TextField.css'

function TextField(props) {
    const {text = 'empty', ...rest} = props

  return (
    <input className={`input ${text}`} {...rest}/>
  )
}

export default TextField