import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
