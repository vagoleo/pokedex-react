import React, { useEffect, useState, useContext } from 'react'
import { PokemonsContext } from '../contexts/PokemonsContext';
import { useParams } from 'react-router-dom';
import Loader from './../components/Loader';
import PokemonEvolutions from '../components/PokemonEvolutions';
import PokemonProfile from './../components/PokemonProfile/PokemonProfile';

const PokemonPage = () => {

  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {getPokemonByID} = useContext(PokemonsContext);
  const {id} = useParams();

  // -------------------------------------------------------

  const fetchPokemon = async(id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setIsLoading(false);
  }

  // -------------------------------------------------------

  useEffect(() => {
    fetchPokemon(id);
  }, [id])

  // -------------------------------------------------------

  return (
    <div className='section-profile'>
      {
        isLoading ?
        <Loader />
        :
        <>
          <section>
            <div className="container">
              <PokemonProfile pokemon={pokemon}/>
            </div>
          </section>
          <section>
            <div className="container">
              <h2>Evolution Chain</h2>
              <PokemonEvolutions id={id} />
            </div>
          </section>
        </>
      }
    </div>
  )
}

//<img src={ pokemon.sprites.front_default } alt={pokemon.name}/>
export default PokemonPage