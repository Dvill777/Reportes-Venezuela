import React from 'react'
import Nabvar from '../components/Navbar/Nabvar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { Main } from '../globalStyles'

const MainLayout = () => {
  return (
    <>
        <Nabvar />
        <Main>
            <Outlet />
        </Main>
        <Footer />
    </>
    
  )
}

export default MainLayout