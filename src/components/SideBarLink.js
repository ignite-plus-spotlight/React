import React from "react";

import "../App.css";
import SideBar from "./SideBar";

function SideBarLink() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <h1>Welcome </h1>
        <h2>Employee Recognition Platform</h2>
      </div>
    </div>
  );
}

export default SideBarLink;