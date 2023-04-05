import React from 'react'
import { capitalize } from '../../services/methods';
import PokemonStats from '../PokemonStats';
import IconType from '../IconType/IconType';
import './PokemonProfile.css'


const PokemonProfile = ({ pokemon }) => {
    console.log(pokemon)

  return (
    <div className='profile'>
        <div className="profile-content">
            <div className="col col-img">
                <img className='card-img' src={ pokemon.sprites.other['official-artwork'].front_default } alt={pokemon.name} />
            </div>
            <div className="col col-info">
                <h1 className='profile-title'><strong>{ capitalize(pokemon.name) }</strong> <span>{ `#${pokemon.id}` }</span></h1>
                <div className={`profile-stats ${pokemon.types[0].type.name}`}>
                    <PokemonStats stats={ pokemon.stats } />
                </div>
                <div className="profile-types">
                    { pokemon.types.map(type => (
                        <div className="type-box" key={type.type.name}>
                            <IconType type={type.type.name} size='md' />
                            <span className="type-name">{capitalize(type.type.name)}</span>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    </div>
  )
}

export default PokemonProfile