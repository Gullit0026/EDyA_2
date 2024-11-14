import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const cache = {};

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async (pokemonName) => {
  if (cache[pokemonName]) {
    return cache[pokemonName];
  }

  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const data = response.data;

  cache[pokemonName] = data;

  return data;
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;