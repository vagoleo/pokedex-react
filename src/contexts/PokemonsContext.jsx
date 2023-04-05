import { createContext, useEffect, useState } from "react";
import { getPokemons, getPokemonByID } from "../services/api";

export const PokemonsContext = createContext();


export const PokemonsProvider = ({ children }) => {

    const QUANTITY = 25;

    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [offset, setOffset] = useState(0);

    // -----------------------------------------------------------

    const fetchPokemons = async() => {
        setLoadingMore(true);
        const data = await getPokemons(QUANTITY, offset);
        setPokemons([...pokemons, ...data]);
        setOffset(offset + QUANTITY); 
        setIsLoading(false);
        setLoadingMore(false);
    }

    // -----------------------------------------------------------
    
    useEffect(() => {
        fetchPokemons()
    }, [])

    // -----------------------------------------------------------
    
    return (
        <PokemonsContext.Provider value={{
            pokemons,
            fetchPokemons,
            getPokemonByID,
            isLoading,
            loadingMore
        }}>
            {children}
        </PokemonsContext.Provider>
    );
};
