import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import CharactersList from './components/CharactersList'
import CharactersDetails from './components/CharactersDetails'
import {allCharacters} from '/data/data.js'


function App() {
  return (
      <div className="App">
              <Header/>
          <main className="main">

              <section className="content">
                      <CharactersList allCharacters={allCharacters} />
                      <CharactersDetails   />
              </section>
          </main>
      </div>
  )
}

export default App

