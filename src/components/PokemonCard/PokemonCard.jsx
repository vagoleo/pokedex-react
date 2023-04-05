import React from 'react'
import { Link } from 'react-router-dom'
import { capitalize } from '../../services/methods';
import IconType from '../IconType/IconType';
import './PokemonCard.css'


const PokemonCard = ({pokemon, disabled}) => {

  const state = disabled ? 'disabled' : '';

  return (
    <div className={`card ${state}`}>
      <Link to={`/pokemon/${pokemon.id}`}>
        <div className='card-content'>
          <img className='card-img' src={ pokemon.sprites.other['official-artwork'].front_default } alt={pokemon.name} loading='lazy' />
          <h3>{`${pokemon.id}. ${capitalize(pokemon.name)}` }</h3>
          { pokemon.types.map(type => <IconType type={type.type.name} key={type.type.name} />) }
        </div>
      </Link>
    </div>
  )
}

export default PokemonCard

//pokemon.sprites.front_default
  //pokemon.sprites.other['official-artwork'].front_default
  //pokemon.sprites.other.dream_world.front_default