import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";
import { store } from './store/'

export const PokemonApp = () => {

    //Si quiero que algo se ejecute una unica vez utilizo useEffect

    const dispatch = useDispatch();
    const { isLoading = false, page = 1, pokemons = [] } = useSelector(state => state.pokemons);//UseSelector para que se vuelva a renderizar el componente

    const handlePreviousClick = (page) => {
        console.log(page);
        const nextPage = (page - 1) > 1 ? (page - 1) : 1;

        dispatch(getPokemons(nextPage));
    };

    const handleNextClick = (page) => {
        console.log(page);
        const nextPage = page + 1;
        dispatch(getPokemons(nextPage));
    };

    useEffect(() => {
        dispatch(getPokemons());

    }, []);


    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span> Loading:  {isLoading ? 'True' : 'False'} </span>
            <hr />

            <ul>
                {pokemons.map((pokemon) => {
                    return <li key={pokemon.name}> {pokemon.name} ( {pokemon.url} ] </li>
                })
                }
            </ul>

            <button
                disabled={isLoading || page <= 1}
                onClick={() => {
                    handlePreviousClick(page)
                }}
            >
                Previous
            </button>

            <button
                disabled={isLoading}
                onClick={() => {
                    handleNextClick(page)
                }}
            >
                Next
            </button>
        </>

    )
}