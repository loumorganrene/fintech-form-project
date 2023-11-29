import './Nav.scss'

function Nav() {
    return (
        <nav className="header-nav">
            <button className="user-btn">
                <i className="fa-solid fa-circle-user"></i>
                <p>Account</p>
            </button>
            <ul className="header-nav__link">
                <li>
                    <a id="user-icon" href="#" aria-label='Go to your account settings'>
                        <i className="fa-solid fa-circle-user"></i>
                        <p>Account</p>
                    </a>
                </li>
                <li>
                    <a id="help-icon" href="#" aria-label='Ask for assistance'>
                        <i className="fa-regular fa-circle-question"></i>
                        <p>Help</p>
                    </a>
                </li>
                <li>
                    <a id="logout-icon" href="#" aria-label='Log out'>
                        <i className="fa-solid fa-power-off"></i>
                        <p>Logout</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav