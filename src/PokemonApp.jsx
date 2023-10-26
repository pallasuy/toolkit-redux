import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

    //Si quiero que algo se ejecute una unica vez utilizo useEffect

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());

    }, []);


    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <ul>
                <li>Hola</li>
                <li>Hola</li>
                <li>Hola</li>
            </ul>
        </>

    )
}