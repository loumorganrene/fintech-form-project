import './Nav.scss'

function Nav() {
  return (
<ul className="header-nav">
    <li>
        <a href="#" aria-label='Go to your account settings'>
            <i className="fa-solid fa-circle-user"></i>
        </a>
    </li>
    <li>
        <a href="#" aria-label='Ask for assistance'>
            <i className="fa-regular fa-circle-question"></i>
        </a>
    </li>
    <li>
        <a href="#" aria-label='Log out'>
            <i className="fa-solid fa-power-off"></i>
        </a>
    </li>
</ul>
  )
}

export default Nav