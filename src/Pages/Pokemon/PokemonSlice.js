import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  pokemonDetails: {
    abilities: [
      {
        ability: {
          name: "loading",
        },
      },
    ],
  },
  loaded: false,
}

export const fetchPokemonDetail = createAsyncThunk(
  "pokemon/GetPokemon",
  async (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
      res.json()
    )
  }
)

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchPokemonDetail.pending]: (state, action) => {
      state.loaded = false
    },
    [fetchPokemonDetail.fulfilled]: (state, action) => {
      state.pokemonDetails = action.payload
      state.loading = true
    },
    [fetchPokemonDetail.rejected]: (state, action) => {
      state.loading = false
    },
  },
})

export const selectPokemonDetails = (state) => state.pokemon.pokemonDetails

export const selectPokemonLoading = (state) => state.pokemon.loading

export default pokemonSlice.reducer
