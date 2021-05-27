import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

// Styles
import styles from "./Pokemon.module.scss"

// Redux
import {
  fetchPokemonDetail,
  selectPokemonDetails,
  selectPokemonLoading,
} from "./PokemonSlice"

export default function Pokemon() {
  let { id } = useParams()

  const dispatch = useDispatch()
  const pokemonDetails = useSelector(selectPokemonDetails)
  const loading = useSelector(selectPokemonLoading)

  useEffect(() => {
    dispatch(fetchPokemonDetail(id))
  }, [dispatch, id])

  let abilityList = pokemonDetails.abilities.map((e, i) => (
    <>
      <h2> {e.ability.name}</h2>
    </>
  ))

  return (
    <>
      a = {id}
      {/* {loading === true && pokemonDetails.forms[0].name} */}
      {/* {JSON.stringify(pokemonDetais)}     */}
      <button onClick={() => console.log(pokemonDetails)}> log details </button>
      {loading === true && (
        <div className={styles.container}>
          <div className={styles.image}></div>
          <div className={styles.details}>
            <h1> {pokemonDetails.forms[0].name} </h1>
            {abilityList}
          </div>
        </div>
      )}
    </>
  )
}
