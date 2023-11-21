import './Header.scss'
import Logo from './../../assets/images/logo.svg'
import Nav from '../Nav'

function Header() {
  return (
    <header>
      <img className='header-logo' src={Logo} alt="Company's logo" />
      <Nav />
    </header>
  )
}

export default Header