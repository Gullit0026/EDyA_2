import PropTypes from 'prop-types'
import './index.css'
import {getCounter} from './hooks/useCounter'

const FirstApp = ({value}) => {

    const obj = getCounter()
    const {counter, handleSubstract, handleReset, handleAdd} = obj

    return(
        <>
        <h1>Counter</h1>
        <span>{counter}</span>
        <button onClick = {() => handleSubstract(value)}>Substract </button>
        <button onClick = {handleReset}>Reset</button>
        <button onClick = {() => handleAdd(value)}>Add</button>
        </>
    )
}
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
}

export default FirstApp;