import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/International_Pokémon_logo.svg.png'

const Header = () => {

  return (
    <header>
        <div className="container flex a-center j-center">
            <Link to={`/`}>
                <img className='logo' src={logo} alt='Pokemon Logo' />
            </Link>
        </div>
    </header>
  )
}

export default Header