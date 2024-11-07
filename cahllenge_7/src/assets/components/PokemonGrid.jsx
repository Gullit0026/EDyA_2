import { useFetch } from '../../hooks/useFetch.jsx';
import {PokemonPrint} from './PokemonPrint.jsx';


export const PokemonGrid =({counter}) => {

    const pokemon = useFetch(counter);

    console.log( pokemon)
    
    return(
        <div>
            <h3 id='name'>{pokemon?.name}</h3>
            <p id='url'>{pokemon?.url}</p>
        </div>
    )
}