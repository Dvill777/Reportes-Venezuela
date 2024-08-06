import React from 'react'
import Nabvar from '../components/Navbar/Nabvar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <>
        <Nabvar />
        <main className='w-full mt-16 p-8 min-h-screen lg:p-4 bg-sky-950 text-white'>
            <Outlet />
        </main>
        <Footer />
    </>
    
  )
}

export default MainLayout