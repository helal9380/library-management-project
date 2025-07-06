/** @format */

import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./pages/home/Footer";

const App = () => {
  return (
    <div className="p-4">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
