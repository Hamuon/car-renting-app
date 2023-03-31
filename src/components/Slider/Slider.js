import { useState } from "react";
import Card from "../Card/Card";
const Slider = () => {
  const cars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  const [isLiked, setIsLiked] = useState(false);

  const ClickHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-gray-50 pt-14">
      <h2 className="mx-14 text-gray-500">Popular Cars</h2>
      <div className="flex items-center p-5  sm:flex-nowrap sm:overflow-x-auto xsm:flex-nowrap xsm:overflow-x-auto w-auto scrollbar-hide">
        {cars.map((car) => (
          <Card isLiked={isLiked} ClickHandler={ClickHandler} id={car.id} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
