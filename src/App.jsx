import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import CharactersList from './components/CharactersList'
import CharhactersDetails from './components/CharhactersDetails'
// import Episodes from './components/Episodes'
import {allCharacters} from '/data/data.js'


function App() {
  return (
      <div className="App">
              <Header/>
          <main className="main">

              <section className="content">
                      <CharactersList allCharacters={allCharacters} />
                      <CharhactersDetails/>
              </section>

              {/*<Episodes/>*/}
          </main>
      </div>
  )
}

export default App
