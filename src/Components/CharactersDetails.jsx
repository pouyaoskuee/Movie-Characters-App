import Episodes from "./Episodes.jsx";
import {character} from "../../data/data.js";

const CharactersDetails = () => {
    return (
        <section className="details-episodes">
            <div className="CharactersDetails">
                <img src={character.image} alt={character.name}/>
                <div className="details__description">
                    <div>
                        <div><span> {character.gender==='Male'?'👨 ':'👩 '}</span> <span>{character.name}</span></div>
                        <div><span>{character.status==='Dead'?'🔴':'🟢'}</span> <span>{character.status}-{character.species}</span></div>
                    </div>
                    <div className={'details__location'}>
                        <p>Last known location:</p>
                        <p>{character.location.name}</p>
                    </div>
                    <button> add to your favorite</button>
                </div>
            </div>
            <Episodes />
        </section>

    );
};

export default CharactersDetails;
