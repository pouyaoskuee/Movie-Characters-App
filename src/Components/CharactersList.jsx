
export function CharactersList({allCharacters}) {
    return (
        <section className="charactersList">
            {allCharacters.map((item) => (
                <CharacterItem item={item} key={item.id}  />
            ))}
            <p>heloooo</p>
        </section>
    )
}

export default CharactersList;


function CharacterItem(item){
    return(
        <div className={'card'}>
            <p>{item.name}</p>
            <img src="" alt=""/>
            <div className="description"></div>
            <div className="icon"></div>
        </div>


    )
}