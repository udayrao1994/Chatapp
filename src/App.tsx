import React, { FC } from "react";
import "./App.css";
import Land from "./Landpage";
import axios from "axios";

let App: FC = (any, Props) => {
  return (
    <div className="App">
      <Land />
    </div>
  );
};
export default App;
