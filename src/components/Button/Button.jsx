import React from 'react'
import icon from '../../assets/loaders/loading-icon.gif'
import './Button.css'

const Button = ({text, loading, onClick, style}) => {

    const content = loading ? <img src={icon} /> : text;

  return (
    <button className={`btn ${style} ${loading ? 'loading' : ''}`} onClick={onClick}>
        { content }
    </button>
  )
}

export default Button