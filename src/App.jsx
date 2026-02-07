import {useEffect, useState} from 'react'
import './App.css'
import Header from './components/Header'
import CharactersList from './components/CharactersList'
import CharactersDetails from './components/CharactersDetails'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
// import {episodes} from "../data/data.js";
// import {character} from "../data/data.js";
// import {allCharacters} from '/data/data.js'


function App() {
    const [characters, setCharacters] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [name, setName] = useState('')
    const [Card , setCard] = useState('')
    const [Detils, setDetils] = useState([])
    const [episodes, setEpisodes] = useState([])

    console.log(Card)



    // useEffect(() => {
    //     fetch('https://rickandmortyapi.com/api/character').then(response => response.json()).then(data => setCharacters(data.results))
    // },[])
    // console.log(characters.results)

    // useEffect(()=>{
    //     async function fetchCharacters(){
    //         try {
    //         setIsFetching(true)
    //         const res = await fetch('https://rickandmortyapi.com/api/character')
    //             console.log(res)
    //         if (!res.ok) throw new Error('this is a error')
    //         const data = await res.json()
    //         setCharacters(data.results)
    //         }catch(err){
    //             toast.error(err.message)
    //         }finally{
    //             setIsFetching(false)
    //         }
    //     }
    //
    //     fetchCharacters()
    //
    // },[])


    useEffect(() => {
        async function fetchCharacters() {
            try {
                console.log(Card)
                console.log(name)

                setIsFetching(true)
                const fetch = await axios.get(`https://rickandmortyapi.com/api/character?name=${name}`)
                const FetchDetils = await axios.get(`https://rickandmortyapi.com/api/character/${Card}`)
                console.log(FetchDetils)
                setDetils(FetchDetils.data)
                const characters = await fetch.data.results
                setCharacters(characters)
                console.log(FetchDetils.data.episode)
                const episodes = FetchDetils.data.episode || [];
                const arrayepisodes = episodes.map((episode) => {
                    return Number(episode.split("/").at(-1))
                })

                console.log(arrayepisodes)

                if (Card!=''){
                    const episodesList = await axios.get(`https://rickandmortyapi.com/api/episode/${arrayepisodes}`)
                    console.log(episodesList.data)
                    if (Array.isArray(episodesList.data)) {
                        setEpisodes(episodesList.data)
                    }else {
                        setEpisodes([])
                    }

                }














            }catch(err){
                setDetils('')
                console.log(err)
                toast.error(err.response.data.error)

            }finally {
                setIsFetching(false)
            }


        }



        fetchCharacters()

    },[name,Card])


    // useEffect(() => {
    //
    //     // setFilterCharacters(characters.find((character) => character.name === name))
    //     // setCharacters('Rick')
    //     // characters.map((character) => {
    //     //     console.log(character)
    //     // })
    //
    //
    // },[ isFetching ,name])
    //
    //
    // console.log(filterCharacters)








  return (
      <div className="App">
          <Header results={characters.length} setName={setName} />
          <main className="main">

              <section className="content">
                        <Toaster/>
                      <CharactersList setCard={setCard} allCharacters={characters} isFetching={isFetching} />

                      <CharactersDetails Detils={Detils} Characters={characters} episodes={episodes} />
              </section>
          </main>
      </div>
  )
}

export default App

