import React from 'react';
import { PacmanLoader } from "react-spinners";

const Loader = () => (
  <div className="flex flex-col items-center justify-center px-6" style={{ height: "90vh"}}>
    <PacmanLoader color="rgb(134 239 172)"/>
  </div>

);

export default Loader;
