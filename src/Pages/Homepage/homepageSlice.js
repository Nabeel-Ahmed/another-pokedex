import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    pokemon: new Array(5),
  };

export const fetchPokemon = createAsyncThunk(
    'pokemon/GetPokemon',
    async () => {
        return fetch(
            'https://pokeapi.co/api/v2/pokemon/',
        ).then((res) => res.json())
    }
)

export const homepageSlice = createSlice({
    name: 'homepage',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
      },
    extraReducers: {
        [fetchPokemon.fulfilled]: (state, action) => {
            state.pokemon = action.payload.results
        },
    },
})

export const selectPokemon = (state) => state.homepage.pokemon

export default homepageSlice.reducer