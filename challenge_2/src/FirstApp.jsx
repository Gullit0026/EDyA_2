import PropTypes from 'prop-types'
import './index.css'
import {useState} from 'react'

const FirstApp = ({value}) => {
    const [counter, setCounter] = useState(value);

    const handleSubstract = () => {    
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(100);
    }

    return(
        <>
        <h1>Counter</h1>
        <span>{counter}</span>
        <button onClick = {() => handleSubstract(value)}>Substract </button>
        <button onClick = {handleReset}>Reset</button>
        </>
    )
}
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
}

export default FirstApp;