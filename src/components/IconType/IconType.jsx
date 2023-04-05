import React, { useState } from 'react'
import { useEffect } from 'react';
import './IconType.css'

const IconType = ({ type, size='' }) => {

  console.log('changed')

    const [icon, setIcon] = useState('');

    const fetchImage = async(type) => {
        const BASE_URL = '/src/assets/icons/types'
        const image = await import(`${BASE_URL}/${type}.svg`);
        setIcon(image.default);
    }

    useEffect(() => {
        fetchImage(type);
    }, [])

  return (
    <div className={`icon-type ${type} ${size}`}> 
        <img src={ `/assets/${type}.svg` } alt={`icon ${type}`} title={type} />
    </div>
  )
}

export default IconType