import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from '../features/pokemonSlice';
import {FaSearch} from 'react-icons/fa'
import './Pokemon.css';

const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState('');
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon.data);
  const status = useSelector((state) => state.pokemon.status);
  const error = useSelector((state) => state.pokemon.error);

  const handleSearch = () => {
    if (pokemonName.trim() !== '') {
      dispatch(fetchPokemon(pokemonName.toLowerCase()));
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPokemonName(value);
    }
  };

  return (
    <div className="pokemon-container">
      <h2>¡Busca un Pokemon!</h2>
      <div className='search-container'>
        <input type="text"value={pokemonName} onChange={handleInputChange}  placeholder="Ingresa el id del pokemon(numero)"/>
        <FaSearch className='btn-search' onClick={handleSearch}/>
      </div>

      {status === 'loading' && <p>cargando...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {pokemon && status === 'succeeded' && (
        <div>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
};

export default Pokemon;
