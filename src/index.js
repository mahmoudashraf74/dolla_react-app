import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Signin from "./components/Navbar/Signin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="signin" element={<Signin />}/>

    </Routes>
  </BrowserRouter>
);
