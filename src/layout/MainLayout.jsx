import React from 'react'
import Header from '../components/header/header'
import MainFooter from '../components/footer/mainFooter'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <MainFooter/>
    </div>

  )
}

export default MainLayout