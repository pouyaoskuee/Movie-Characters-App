import Episodes from "./Episodes.jsx";
import {character} from "../../data/data.js";
import episodes from "./Episodes.jsx";

const CharactersDetails = ({Detils}) => {
    console.log(Detils);

    return (
        <section className="details-episodes">
            <div className="CharactersDetails">
                <img src={Detils.image} alt={Detils.name}/>
                <div className="details__description">
                    <div>
                        <div><span> {Detils.gender==='Male'?'👨 ':'👩 '}</span> <span>{Detils.name}</span></div>
                        <div><span>{Detils.status==='Dead'?'🔴':'🟢'}</span> <span>{Detils.status}-{Detils.species}</span></div>
                    </div>
                    <div className={'details__location'}>
                        <p>Last known location:</p>
                        {/*<p>{Detils.location.name}</p>*/}
                    </div>
                    <button> add to your favorite</button>
                </div>
            </div>
            <Episodes Episodes={Detils.episode} />
        </section>

    );
};

export default CharactersDetails;
