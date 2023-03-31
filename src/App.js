import { useRef, useState, useEffect } from "react";
import CarsRec from "./components/CarsRec/CarsRec";
import Footer from "./components/Footer/Footer";
import HeroCard from "./components/Hero/HeroCard/HeroCard";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/Sidebar";
import Slider from "./components/Slider/Slider";
const App = () => {
  const [open, setOpen] = useState(false);

  let sideRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!sideRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.addEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div className={open ? "" : "hidden"} ref={sideRef}>
        {<SideBar />}
      </div>
      <Navbar open={open} setOpen={setOpen} />
      <HeroCard />
      <Slider />
      <CarsRec />
      <Footer />
    </>
  );
};

export default App;
