import React from "react";
import Header from "../components/header/Header";
import MainFooter from "../components/footer/MainFooter";
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
