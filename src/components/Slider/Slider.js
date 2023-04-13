import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
const Slider = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/cardData")
      .then((res) => setCars(res.data.slice(0, 8)))
      .catch((err) => err);
  }, []);

  const clickHandler = (e) => {
    const id = e.target.id;
    const allCars = [...cars];
    const index = allCars.findIndex((car) => car.id == id);
    allCars[index].isLiked = !allCars[index].isLiked;
    setCars(allCars);
  };

  return (
    <div className="bg-gray-50 pt-14">
      <h2 className="mx-14 text-gray-500">Popular Cars</h2>
      <div className="flex items-center p-5  sm:flex-nowrap sm:overflow-x-auto xsm:flex-nowrap xsm:overflow-x-auto w-auto scrollbar-hide">
        {cars.map((car) => (
          <Card
            ClickHandler={clickHandler}
            key={car.id}
            id={car.id}
            title={car.title}
            rent={car.rent}
            isLiked={car.isLiked}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
