import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 1) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());
        //TODO: realizar peticion http

        const offset = (page - 1) * 10;

        //utilizando fetch: 

        /*  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
         const data = await response.json(); */


        //utilizandio axios 
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${offset}`);

        dispatch(setPokemons({ pokemons: data.results, page: page }));
        //dispatch(setPokemons());
    }

}