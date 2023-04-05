import React, { useContext } from 'react'
import { PokemonsContext } from '../contexts/PokemonsContext';
import Button from './Button/Button';
import Loader from './Loader';
import PokemonCard from './PokemonCard/PokemonCard';

const PokemonGrid = () => {

    const {pokemons, isLoading, loadingMore, fetchPokemons} = useContext(PokemonsContext);

  return (
    <>
    {
      isLoading ? <Loader />
      :
      <>
        <div className='grid'>
          { pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.name} />) }
        </div>
        <div className="cta-wrapper tc">
          <Button
            text='Load more'
            style='primary'
            loading={loadingMore}
            onClick={() => fetchPokemons()}
          />
        </div>
      </>
    }
    </>
    
  )
}

export default PokemonGrid