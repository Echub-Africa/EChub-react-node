import React from "react";
import styling from "./threegrid.module.css";

const threeGridLayout = (props) => {
  const { layout } = styling;
  return <div className={layout}>{props.children}</div>;
};

export default threeGridLayout;
