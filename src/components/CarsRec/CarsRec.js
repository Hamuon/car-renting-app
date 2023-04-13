import Card from "../Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
const CarsRec = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/cardData")
      .then((res) => setCars(res.data))
      .catch((err) => err);
  }, []);

  const clickHandler = (e) => {
    const id = e.target.id;
    const allCars = [...cars];
    const index = allCars.findIndex((car) => car.id == id);
    const changedItem = allCars[index];
    allCars[index].isLiked = !allCars[index].isLiked;
    setCars(allCars);
  };

  return (
    <div className="bg-gray-50">
      <h2 className="mx-14 text-gray-500">Popular Cars</h2>
      <div className="flex items-center justify-around p-5 w-auto flex-wrap">
        {cars.map((car) => (
          <Card
            id={car.id}
            title={car.title}
            rent={car.rent}
            isLiked={car.isLiked}
            key={car.id}
            ClickHandler={clickHandler}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-blue-600 px-4 py-2 font-extralight rounded-md text-white hover:shadow-md ease-in-out duration-300">
          Show More Car
        </button>
      </div>
    </div>
  );
};

export default CarsRec;
