import {TrashIcon} from '@heroicons/react/24/outline'
import {HeartIcon} from '@heroicons/react/24/outline'
import Episodes from './Episodes'



export function CharactersList({allCharacters}) {
    return (
        <section className="charactersList">
            {allCharacters.map((item) => (
                <CharacterItem item={item} key={item.id}  />
            ))}
        </section>
    )
}

export default CharactersList;


function CharacterItem({item}){
    return(
        <div className={'card'}>
            <div className="card__content">
                <img src='/src/assets/1.jpeg' alt=""/>
                <div className="card__description">
                    <p>{item.name}</p>
                    <p>dls;jlfdksa;l</p>
                </div>
            </div>
            <div className="card__icon">❌</div>
        </div>


    )
}


