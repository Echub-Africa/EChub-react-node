import React from "react";
import ClientsDashBoardOverview from "../Reusable/ClientDashboardOverView/ClientsDashBoardOverview";
import "./threegrid.css";

const Layout = ({ children,layoutSetings }) => {
  console.log(layoutSetings)
  return (
    <main className={layoutSetings=== true?'FullLayout':'layout'}>
      <ClientsDashBoardOverview />
      <section className="sectionLayout">{children}</section>
    </main>
  );
};

export default Layout;
