import { useState } from 'react'
import UseReducer from './components/UseReducer';
import Pokemon from './components/Pokemon';
import './App.css';


function App() {

  return (
    <div className='components-container'>
    <Pokemon/>
    <UseReducer/>
    </div>
  )
}

export default App
