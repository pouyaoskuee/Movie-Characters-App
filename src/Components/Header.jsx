import {HeartIcon} from '@heroicons/react/24/outline'
function Header() {
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
                        <h1 className="title"> found X results</h1>
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