import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
