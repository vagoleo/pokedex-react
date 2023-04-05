import React, { useEffect, useState } from 'react'
import { getSpeciesByID, getEvolutions, getPokemonByID } from '../services/api';
import Loader from './Loader';
import PokemonCard from './PokemonCard/PokemonCard';

const PokemonEvolutions = ({id}) => {

    const [evolutions, setEvolutions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const mapEvolutionChain = (pokemon) => {
        if (pokemon.evolves_to.length == 0){
            return [pokemon.species];
        }

        return [mapEvolutionChain(pokemon.evolves_to[0]), pokemon.species].flat();
    }

    const fetchEvolutions = async(id) => {
        const species = await getSpeciesByID(id);
        const chain = await getEvolutions(species.evolution_chain.url);
        const evNames = mapEvolutionChain(chain);

        const promises = evNames.map(pokemon => getPokemonByID(pokemon.name) )
        const data = await Promise.all(promises);

        setEvolutions(data.reverse());
        setIsLoading(false);
    } 

    // ------------------------------------------

    useEffect(() => {
        fetchEvolutions(id);
    }, [])

    // ------------------------------------------

  return (
    <div className='grid evolutions'>
        {
            isLoading
            ?
            <Loader type='icon' />
            :
            evolutions.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} disabled={pokemon.id == id ? true : false } />)
        }
    </div>
  )
}

export default PokemonEvolutions