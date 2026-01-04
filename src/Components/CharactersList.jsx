import {EyeIcon} from '@heroicons/react/24/outline'



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
                <img src={item.image} alt={item.name}/>
                <div className="card__description">
                    <div><span>{item.gender==='Male'?'👨 ':'👩 '}</span> <span>{item.name}</span></div>
                    <div><span>{item.status==='Dead'?'🔴':'🟢'}</span> <span>{item.status}-{item.species}</span></div>
                </div>
            </div>
            <div className="card__icon"><EyeIcon/></div>
        </div>


    )
}


