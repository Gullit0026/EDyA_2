import { useEffect, useState } from "react";
import {useCounter} from './useCounter'

export const useFetch =(counter) => {

    const [pokemon, setPokemon] = useState();

    const getPokemon = async() => {

        const url = `https://pokeapi.co/api/v2/pokemon/${counter}`
    
        const resp = await fetch(url);
        const {forms} = await resp.json();
        const poke =forms.map(img => {
            return({
                name: forms[0].name,
                url: forms[0].url
            })
        })
        setPokemon(poke[0]);
    }

    useEffect(() => {
        getPokemon();
    }, [counter])

    return pokemon
}


