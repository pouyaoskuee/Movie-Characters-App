import {useEffect, useState} from 'react'
import './App.css'
import Header from './components/Header'
import CharactersList from './components/CharactersList'
import CharactersDetails from './components/CharactersDetails'
import toast, { Toaster } from 'react-hot-toast';
// import {allCharacters} from '/data/data.js'


function App() {
    const [characters, setCharacters] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    // useEffect(() => {
    //     fetch('https://rickandmortyapi.com/api/character').then(response => response.json()).then(data => setCharacters(data.results))
    // },[])
    // console.log(characters.results)

    useEffect(()=>{
        async function fetchCharacters(){
            try {
            setIsFetching(true)
            const res = await fetch('https://rickandmortyapi.com/api/characterj')
                console.log(res)
            if (!res.ok) throw new Error('this is a error')
            const data = await res.json()
            setCharacters(data.results)
            }catch(err){
                toast.error(err.message)
            }finally{
                setIsFetching(false)
            }
        }

        fetchCharacters()

    },[])


  return (
      <div className="App">
          <Header results={characters.length} />
          <main className="main">

              <section className="content">
                        <Toaster/>
                      <CharactersList allCharacters={characters} isFetching={isFetching} />
                      <CharactersDetails   />
              </section>
          </main>
      </div>
  )
}

export default App

