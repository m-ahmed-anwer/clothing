import React from "react";
import Directory from "../../components/directory/directory.component";

import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Outlet />
      <Directory />
    </>
  );
}

export default Home;
