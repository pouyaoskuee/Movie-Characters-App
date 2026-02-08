import Episodes from "./Episodes.jsx";
import {Fragment} from "react";

const CharactersDetails = ({Detils , episodes , setFavorites, favorites}) => {
    if (Detils.id!=null) {
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
                            <p>{(Detils.location).name}</p>
                        </div>
                        <button onClick={()=> setFavorites(([...favorites , Detils.id]))}>{favorites.find((e)=> e===Detils.id)?'in your favorite':'add to your favorite'}</button>
                    </div>
                </div>
                <Episodes episodes={episodes} />
            </section>

        );
    }else {
        return (
            <Messages/>
            )

    }

};

export default CharactersDetails;


const Messages = () => {
    return (
        <div style={{flexGrow: 1}}>
            <h3>
                not select a character</h3>
        </div>
    )
}