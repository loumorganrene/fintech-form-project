import './Header.scss'
import Logo from './../../assets/images/logo.svg'
import LogoSm from './../../assets/images/logo-sm.svg'
import Nav from '../Nav'

function Header() {
  return (
    <header>
      <button className='progression-btn'>
        <i className="fa-solid fa-bars"></i>
        <p>Progression</p>
      </button>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={LogoSm}
        />
        <source
          media="(min-width: 769px)"
          srcSet={Logo}
        />
        <img
          className='header-logo'
          src={Logo}
          alt="Company's logo"
        />
      </picture>
      <Nav />
    </header>
  )
}

export default Header