import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import axios from 'axios'


export default function useCharacters ( name , Card) {

    const [characters, setCharacters] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [Detils, setDetils] = useState([])
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        async function fetchCharacters() {
            try {

                setIsFetching(true)
                const fetch = await axios.get(`https://rickandmortyapi.com/api/character?name=${name}`)
                const FetchDetils = await axios.get(`https://rickandmortyapi.com/api/character/${Card}`)
                setDetils(FetchDetils.data)
                const characters = await fetch.data.results
                setCharacters(characters)
                const episodes = FetchDetils.data.episode || [];
                const arrayepisodes = episodes.map((episode) => {
                    return Number(episode.split("/").at(-1))
                })


                if (Card!==''){
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

    return {characters , isFetching , Detils , episodes }
}



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


// useEffect(() => {
//     async function fetchCharacters() {
//         try {
//
//             setIsFetching(true)
//             const fetch = await axios.get(`https://rickandmortyapi.com/api/character?name=${name}`)
//             const FetchDetils = await axios.get(`https://rickandmortyapi.com/api/character/${Card}`)
//             setDetils(FetchDetils.data)
//             const characters = await fetch.data.results
//             setCharacters(characters)
//             const episodes = FetchDetils.data.episode || [];
//             const arrayepisodes = episodes.map((episode) => {
//                 return Number(episode.split("/").at(-1))
//             })
//
//
//             if (Card!==''){
//                 const episodesList = await axios.get(`https://rickandmortyapi.com/api/episode/${arrayepisodes}`)
//                 console.log(episodesList.data)
//                 if (Array.isArray(episodesList.data)) {
//                     setEpisodes(episodesList.data)
//                 }else {
//                     setEpisodes([])
//                 }
//
//             }
//
//
//
//
//
//         }catch(err){
//             setDetils('')
//             console.log(err)
//             toast.error(err.response.data.error)
//
//         }finally {
//             setIsFetching(false)
//         }
//
//
//     }
//
//
//     fetchCharacters()
//
// },[name,Card])