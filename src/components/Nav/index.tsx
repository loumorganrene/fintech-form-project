import './Nav.scss'

function Nav() {
  return (
<nav className="header-nav">
    <ul className="header-nav__link">
        <li>
            <a id="user-icon" href="#" aria-label='Go to your account settings'>
                <i className="fa-solid fa-circle-user"></i>
            </a>
        </li>
        <li>
            <a id="help-icon" href="#" aria-label='Ask for assistance'>
                <i className="fa-regular fa-circle-question"></i>
            </a>
        </li>
        <li>
            <a id="logout-icon" href="#" aria-label='Log out'>
                <i className="fa-solid fa-power-off"></i>
            </a>
        </li>
    </ul>
</nav>
  )
}

export default Nav