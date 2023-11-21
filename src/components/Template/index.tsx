import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'
import './Template.scss'

function Template() {
  return (
    <div className='template__container'>
    <Header />
    <Sidebar />
    <Outlet />
    <Footer />
    </div>
  )
}

export default Template