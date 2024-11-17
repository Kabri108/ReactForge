import React from 'react'
import MainContent from '../Component/Maincontent'
import Navbar from '../Component/Navbar'
import Sidebar from '../Component/Sidebar'


export default function HomeScreen() {
  return (
    <>
    <Navbar/>
    <div className='flex bg-white dark:bg-gray-800 h-screen'>
      <Sidebar/>
      <MainContent/>
    </div>
    </>
  )
}
