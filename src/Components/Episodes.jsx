import {ArrowUpCircleIcon} from '@heroicons/react/24/outline'
import {useState} from "react";





const Episodes = ({episodes}) => {

    const [sortBy, setSortBy] = useState(true)

    if (sortBy) {
        episodes.sort((a, b) => new Date(a.created)-new Date(b.created))
    }else {
        episodes.sort((a, b) => new Date(b.created)-new Date(a.created))
    }

    return (
        <div className="episodes">
            <div className="episodes__title">
                <h3>List of Episode:</h3>
                <button type={"button"} onClick={()=>setSortBy((is)=> !is) } className={`episode__icon ${sortBy?'':'rotate'}`}><ArrowUpCircleIcon/></button>
            </div>
            <div className="episode__cards">
                {episodes.map((item, index) => (<EpisodeCard index={index+1} item={item} key={item.id}/>))}


            </div>
        </div>
    );
};

export default Episodes;

function EpisodeCard({item , index}){
    return(
        <div className="episode__card">
            <div className={'episode__title'}> <span>{index < 10 ?'0':''}{index} - {item.episode}: {item.name} </span></div>
            <div className='episode__date'><p>{item.air_date}</p></div>
        </div>
    )

}


