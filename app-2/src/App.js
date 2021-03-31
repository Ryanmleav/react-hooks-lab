import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListAnime from './ListAnime'
import './App.css'

function App() {

  const [anime, setAnime] = useState([])

  useEffect(() => {
    axios.get('https://animechan.vercel.app/api/available/anime').then((res) => {
    console.log(res.data) 
    setAnime(res.data)
    })
  }, [])
  return (
    <div className="App">
      {anime.map((element, index) => {
        return <ListAnime title={element} key={index} />
      })}
    </div>
  )
}

export default App;
