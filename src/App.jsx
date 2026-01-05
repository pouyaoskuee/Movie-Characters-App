import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import CharactersList from './components/CharactersList'
import CharactersDetails from './components/CharactersDetails'
import {allCharacters} from '/data/data.js'


function App() {
    const [characters, setCharacters] = useState(allCharacters)
  return (
      <div className="App">
              <Header results={characters.length} />
          <main className="main">

              <section className="content">
                      <CharactersList allCharacters={characters} />
                      <CharactersDetails   />
              </section>
          </main>
      </div>
  )
}

export default App

