import {EyeIcon, XCircleIcon , TrashIcon} from '@heroicons/react/24/outline'
import Loading from './Loading.jsx'
import {useState} from "react";
// import {allCharacters} from "../../data/data.js";



export function CharactersList({allCharacters , isFetching , setCard , isClose,favorites , setFavorites}) {
    console.log(isClose)



    if (isFetching) {
        return (
            <Loading />
        )
    }

    return (

        <section className="charactersList">
            {allCharacters.map((item) => (
                    <CharacterItem setCard={setCard} item={item} key={item.id} isClose={isClose} favorites={favorites} setFavorites={setFavorites} />
                ))
            }
        </section>
    )
}

export default CharactersList;


export function CharacterItem({item , setCard, isClose ,setFavorites , favorites}) {
    console.log(isClose)
    console.log(favorites)
    return(
        <div className={'card'} onClick={()=>setCard(prevId => prevId===item.id?null:item.id)}>
            <div className="card__content">
                <img src={item.image} alt={item.name}/>
                <div className="card__description">
                    <div><span>{item.gender==='Male'?'👨 ':'👩 '}</span> <span>{item.name}</span></div>
                    <div><span>{item.status==='Dead'?'🔴':'🟢'}</span> <span>{item.status}-{item.species}</span></div>
                </div>
            </div>
            <div className="card__icon">
                {isClose?<EyeIcon/>:<TrashIcon onClick={() => setFavorites(favorites.filter((e)=> e.id!==item.id))} />}
            </div>
        </div>


    )
}


