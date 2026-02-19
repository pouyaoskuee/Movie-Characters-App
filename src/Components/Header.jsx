import {HeartIcon} from '@heroicons/react/24/outline'



function Header({results , setName , favorites , setIsClose}) {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <h1 className="logo">logo 😍</h1>
                    </li>
                    <li>
                        <input onChange={(e)=>{ setName(e.target.value)}} type="search" name="" id="search" placeholder="Search" />
                    </li>
                    <li>
                        <h2 className="title"> found {results} results</h2>
                    </li>
                    <li>
                        <div className="favorites" onClick={()=>setIsClose(false)}><HeartIcon className={'heart-icon'}/><span>{[...new Set(favorites)].length}</span></div>
                    </li>
                </ul>
            </nav>
        </header>

    )
}


export default Header;