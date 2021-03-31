import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemon = (props) => {
  const { poke } = props.match.params
  const [pokemon, setPokemon ] = useState({})

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`).then((res) => {
      setPokemon(res.data)
    })
  }, [poke])
  return (
    <div>
      <h1>{pokemon?.name}</h1>
      <img alt={pokemon?.name} src={pokemon?.sprites?.front_default} />
    </div>
  )
}
export default Pokemon