import Car2 from "./../../Assets/Icons/Car2.png";
import User from "./../../Assets/Icons/User.png";
import Wheel from "./../../Assets/Icons/Wheel.png";
import Gas from "./../../Assets/Icons/Gas.png";
import { useState, useEffect, useRef } from "react";
import CarsRec from "../CarsRec/CarsRec";
import getOneCar from "../../services/getOneCar";
import { useParams } from "react-router-dom";
import updateCars from "../../services/updateCars";
const CarDetail = () => {
  const [car, setCar] = useState(null);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    const fetchOneCar = async () => {
      const { data } = await getOneCar(id);
      setCar(data);
    };
    try {
      fetchOneCar();
    } catch (err) {}
  }, [id]);

  useEffect(() => {
    const fetchCards = async () => {
      const newCarRate = { ...car };
      newCarRate.rate = rating;
      setRating(newCarRate.rate);
      setCar(newCarRate);
      try {
        await updateCars(car.id, car);
      } catch (error) {}
    };
    fetchCards();
  }, [rating]);

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col justify-center items-center lg:flex-row ">
        <div className="m-10">
          <div className=" rounded-lg shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-5  ">
            <h2 className="text-md font-normal">
              The Best Platform for Car Rental
            </h2>
            <p className="text-xs font-extralight mt-4">
              Ease of doing a car rental safely and <br /> reliably Of course at
              a low price.
            </p>
            <button className="bg-blue-600 px-8 py-2 font-extralight rounded-md mt-5">
              Rental car
            </button>
            <div className="w-full flex justify-center mt-8">
              <img alt="car" src={Car2} />
            </div>
          </div>
        </div>
        <div className="w-96 lg:w-4/12 xsm:w-4/6 bg-white p-5 rounded-xl mx-8 mb-12 lg:mb-0">
          <div className="flex-col w-full">
            <div className="flex justify-between items-center w-full">
              <h3 className=" font-normal text-lg">Nissan GT - R</h3>
            </div>
            <div className="flex w-24 justify-between my-2">
              {[...Array(5)].map((star, index) => {
                index += 1;

                return (
                  <button
                    type="button"
                    key={index}
                    className={index <= (hover || rating) ? "on" : "off"}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill={index <= (hover || rating) ? "#FBAD39" : "#ffff"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.50008 1.595C5.53462 1.48548 5.60317 1.38982 5.69579 1.32192C5.7884 1.25402 5.90024 1.21741 6.01508 1.21741C6.12992 1.21741 6.24177 1.25402 6.33438 1.32192C6.42699 1.38982 6.49555 1.48548 6.53008 1.595L7.46008 4.455H10.4601C10.579 4.45051 10.6962 4.48507 10.7936 4.55342C10.8911 4.62177 10.9635 4.72014 10.9997 4.83351C11.036 4.94688 11.0342 5.069 10.9945 5.18123C10.9549 5.29346 10.8795 5.38961 10.7801 5.455L8.34508 7.22L9.27508 10.085C9.31186 10.1941 9.31279 10.3122 9.27773 10.4219C9.24267 10.5316 9.17345 10.6272 9.0802 10.6947C8.98694 10.7623 8.87452 10.7983 8.75936 10.7974C8.6442 10.7966 8.53233 10.7589 8.44008 10.69L6.00008 8.905L3.56508 10.675C3.47284 10.7439 3.36097 10.7816 3.2458 10.7824C3.13064 10.7833 3.01823 10.7473 2.92497 10.6797C2.83171 10.6122 2.7625 10.5166 2.72744 10.4069C2.69238 10.2972 2.6933 10.1791 2.73008 10.07L3.66008 7.205L1.22508 5.44C1.12562 5.37461 1.05031 5.27846 1.01064 5.16623C0.970978 5.054 0.969144 4.93188 1.00542 4.81851C1.0417 4.70514 1.11409 4.60677 1.21154 4.53842C1.30899 4.47007 1.42614 4.43551 1.54508 4.44H4.54508L5.50008 1.595Z"
                        stroke={
                          index <= (hover || rating) ? "#FBAD39" : "#90A3BF"
                        }
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                );
              })}
            </div>
            <span className=" font-light text-gray-400">sport</span>
          </div>
          <div>
            <p className="text-gray-400 font-light">
              NISMO has become the embodiment of Nissan's outstanding
              performance, inspired by the most unforgiving proving ground, the
              "race track".
            </p>
          </div>
          <div className="flex justify-around pt-6 w-full">
            <div className="flex items-center justify-center">
              <img alt="gas" className="mr-1 w-4 h-4" src={Gas} />
              <span className="text-gray-400">90L</span>
            </div>
            <div className="flex items-center justify-center">
              <img alt="Wheel" className="mr-1 w-4 h-4" src={Wheel} />
              <span className="text-gray-400">Manual</span>
            </div>
            <div className="flex items-center justify-center">
              <img alt="User" className="mr-1 w-4 h-4" src={User} />
              <span className="text-gray-400">2 People</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center mr-5">
              <span className="font-bold text-xl">$80.00/ </span>
              <span className="ml-1 mt-1 font-bold text-gray-500"> day</span>
            </div>
            <button className="bg-blue-600 px-3 py-2 font-extralight rounded-md text-white hover:shadow-md ease-in-out duration-300">
              Rental Now
            </button>
          </div>
        </div>
      </div>
      <div></div>
      <CarsRec />
    </div>
  );
};

export default CarDetail;
