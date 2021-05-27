import React, { useEffect } from "react"

// Styles
import styles from "./Homepage.module.scss"

// Components
import ProductCard from "../../Components/ProductCard/ProductCard"

// Slice
import { useDispatch, useSelector } from "react-redux"
import { fetchPokemon, selectPokemon } from "./homepageSlice"

export default function Homepage() {
  const dispatch = useDispatch()

  const pokemon = useSelector(selectPokemon)

  useEffect(() => {
    dispatch(fetchPokemon())
  }, [dispatch])

  const pokemonList = pokemon.map((e, i) => (
    <ProductCard key={e.name} name={e.name} url={e.url} />
  ))

  return <div className={styles.homepageContainer}>{pokemonList}</div>
}
