import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PokemonList = (props) => {
  const [list, setList ] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
    console.log(res.data) 
    setList(res.data.results)
    })
  }, [])
console.log(list)
  return (
    <div>
      {list.map((pokemon) => (
        <Link key={pokemon.url} to={`/pokemon/${pokemon.name}`}>
          <h2>{pokemon.name}</h2>
         </Link>
      ))}
    </div>
  )
}

export default PokemonList