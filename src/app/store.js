import { configureStore } from '@reduxjs/toolkit';
import homepageReducer from '../Pages/Homepage/homepageSlice';
import pokemonReducer from '../Pages/Pokemon/PokemonSlice';

export const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    pokemon: pokemonReducer,
  },
});
