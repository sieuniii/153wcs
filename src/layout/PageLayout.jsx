import React from 'react'
import Header from '../components/header/header'
import PageFooter from '../components/footer/pageFooter'
import { Outlet } from 'react-router-dom'

function PageLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <PageFooter/>
    </div>
  )
}

export default PageLayout