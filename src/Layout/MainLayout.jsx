import React from 'react'
import Nabvar from '../components/Navbar/Nabvar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <>
        <Nabvar />
        <Outlet />
        <Footer />
    </>
    
  )
}

export default MainLayout