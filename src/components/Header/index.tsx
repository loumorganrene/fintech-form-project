import './Header.scss'
import Logo from './../../assets/images/logo.svg'

function Header() {
  return (
    <header>
      <img src={Logo} alt="Company's logo" />
    </header>
  )
}

export default Header