import {useState} from 'react'
import './App.css'
import Header from './components/Header'
import CharactersList, {CharacterItem} from './components/CharactersList'
import CharactersDetails, {Messages} from './components/CharactersDetails'
import toast, { Toaster } from 'react-hot-toast';
import Modal from "./Components/Modal.jsx";
import Input from "./Components/Test.jsx";
import useCharacters from "./hooks/UseCharacters.js";
import useLocalStorage from "./hooks/useLocalStorage.js";
import Test from "./Components/Test.jsx";



function App() {
    const [name, setName] = useState('')
    const [Card , setCard] = useState('')
    const {characters , isFetching , Detils , episodes } = useCharacters(name , Card)
    const [favorites ,setFavorites] = useLocalStorage('favorites')
    const [isClose, setIsClose] = useState(true);




  return (
      <div className="App">
          <Modal isClose={isClose} setIsClose={setIsClose}>
              {
                  favorites.length?favorites.map((item) => (<CharacterItem item={item} setCard={()=>{}} key={item.id} setFavorites={setFavorites} favorites={favorites}  />)):<Messages />

              }
          </Modal>
          <Header results={characters.length} setName={setName} favorites={favorites} setIsClose={setIsClose} />
          <main className="main">

              <section className="content">
                        <Toaster/>
                      <CharactersList setCard={setCard} allCharacters={characters} isFetching={isFetching} isClose={isClose} favorites={favorites} setFavorites={setFavorites}/>

                      <CharactersDetails Detils={Detils} Characters={characters} episodes={episodes} setFavorites={setFavorites} favorites={favorites} />
              </section>
          </main>
          <Test/>
      </div>
  )
}

export default App


