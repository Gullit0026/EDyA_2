import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/UseReducerSlice';
import pokemonReducer from '../features/pokemonSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    pokemon: pokemonReducer,
  },
});

export default store;
