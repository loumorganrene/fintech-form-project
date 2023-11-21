import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'
import './Template.scss'

function Template() {
  return (
    <>
    <Header />
    <Sidebar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Template