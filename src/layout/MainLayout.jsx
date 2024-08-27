import React from "react";
import Header from "../components/header/header";
import MainFooter from "../components/footer/mainFooter";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <MainFooter />
    </>
  );
}

export default MainLayout;
