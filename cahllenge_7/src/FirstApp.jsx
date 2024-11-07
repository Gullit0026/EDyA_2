import './index.css'
import {useCounter} from './hooks/useCounter'
import {PokemonGrid} from './assets/components/PokemonGrid.jsx'

const FirstApp = ({value}) => {

    const obj = useCounter()
    const {counter, handleAdd} = obj

    return(
        <div className='pokemon'>
        <h1 id='title'>Pokemon</h1>
        <span id='counter'>{counter}</span>
        <button onClick = {() => handleAdd(value)} id='add'>Add</button>
        <PokemonGrid counter = {counter}/>
        </div>
    )
}

export default FirstApp;