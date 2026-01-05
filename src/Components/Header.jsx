import {HeartIcon} from '@heroicons/react/24/outline'
function Header({results}) {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <h1 className="logo">logo 😍</h1>
                    </li>
                    <li>
                        <input type="search" name="" id="search" placeholder="Search" />
                    </li>
                    <li>
                        <h2 className="title"> found {results} results</h2>
                    </li>
                    <li>
                        <div className="favorites"><HeartIcon className={'heart-icon'}/><span>3</span></div>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;