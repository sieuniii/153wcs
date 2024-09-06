import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import PageLayout from "./layout/PageLayout";
import HomePage from "./pages/home/HomePage";
import PrayPage from "./pages/introduction/PrayPage";
import PhilosophyPage from "./pages/education/PhilosophyPage";
import PrincipalPage from "./pages/introduction/PrincipalPage";
import EntrancePage from "./pages/entrance/EntrancePage";
import ReadyPage from "./pages/ReadyPage";
import TeacherPage from "./pages/introduction/TeacherPage";
import GalleryPage from "./pages/schoolLife/GalleryPage";
import "./styles/App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* mainlayout 사용 */}
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<HomePage />}></Route>
        </Route>

        {/* pagelayout 사용 */}
        <Route path="/page" element={<PageLayout />}>
          <Route path="principal" element={<PrincipalPage />}></Route>
          <Route path="pray" element={<PrayPage />}></Route>
          <Route path="education" element={<PhilosophyPage />}></Route>
          <Route path="entrance" element={<EntrancePage />}></Route>
          <Route path="ready" element={<ReadyPage />}></Route>
          <Route path="teacher" element={<TeacherPage />}></Route>
          <Route path="gallery" element={<GalleryPage />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
