    const BASE_URL = 'https://pokeapi.co/api/v2'
    

    /*export const getPokemons = async (limit = 50, offset = 0) => {
        // Get list of pokemons {name, url-to-fetch}
        const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)
        const data = res.ok ? await res.json() : null;
        // Fetch each pokemon url => get promises
        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        })
        // Resolve promises => get data
        const response = await Promise.all(promises);
        return response;
    }
    */

    export const getPokemons = async(limit = 50, offset = 0) => {
        const data = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => {
            if(!res.ok) throw new Error(res.status)
            return res
        })
        .then(data => {
            return data.json();
        })
        .catch((err) => console.log(err))

        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        })
        const response = await Promise.all(promises);
        return response;
    }

    export const getPokemonByID = async(id) => {
        const res = await fetch(`${BASE_URL}/pokemon/${id}`);
        const data = await res.json();
        return data;
    }

    export const getSpeciesByID = async(id) => {
        const res = await fetch(`${BASE_URL}/pokemon-species/${id}`);
        const data = await res.json();
        return data;
    }

    export const getEvolutions = async(url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data.chain;
    }

    export const getCharacteristicById = async(id) => {
        const res = await fetch(`${BASE_URL}/characteristic/${id}`);
        const data = await res.json();
        return data;
    }