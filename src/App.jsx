import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbaravbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className=" bg-emerald-50 min-h-[86.8vh] min-w-full">
        <Manager />
      </div>
      <Footer />
    </>
  );
}

export default App;
 