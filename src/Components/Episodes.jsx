import {ArrowUpCircleIcon} from '@heroicons/react/24/outline'
import {episodes} from '/data/data.js'

const Episodes = ({Episodes}) => {
    console.log(Episodes)
    return (
        <div className="episodes">
            <div className="episodes__title">
                <h3>List of Episode:</h3>
                <div className="episode__icon"><ArrowUpCircleIcon/></div>
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

