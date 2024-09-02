import React from "react";
import Header from "../components/header/Header";
import PageFooter from "../components/footer/PageFooter";
import { Outlet } from "react-router-dom";

function PageLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <PageFooter />
    </div>
  );
}

export default PageLayout;
