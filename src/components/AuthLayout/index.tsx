import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'
import './AuthLayout.scss'

function AuthLayout() {
  return (
    <div className='auth-layout__container'>
    <Header />
    <Sidebar />
    <Outlet />
    <Footer />
    </div>
  )
}

export default AuthLayout