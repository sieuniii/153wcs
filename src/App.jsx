import React from "react"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"

import MainLayout from "./layout/mainLayout"
import PageLayout from "./layout/pageLayout"
import HomePage from "./pages/home/HomePage"
import PrayPage from "./pages/introduction/prayPage"
import EducationPage from "./pages/introduction/EducationPage"

import './styles/App.css';

function App() {

  return (
  <Router>
    <Routes>

      {/* mainlayout  사용 */}
      <Route path="/" element= {<MainLayout/>}>
        <Route path="" element= {<HomePage/>}></Route>
      </Route>

      {/* pagelayout 사용 */}
      <Route path="/page" element = {<PageLayout/>}>
        <Route path = "pray" element = {<PrayPage/>}></Route>
        <Route path = "education" element = {<EducationPage/>}></Route>
      </Route>

    </Routes>
  </Router>
  )
}

export default App
