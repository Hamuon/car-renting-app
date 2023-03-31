import RentDetail from "../RentInfo/RentDetail";
import Car2 from "./../../../Assets/Icons/Car2.png";
const HeroCard = () => {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-wrap justify-center items-center">
        <div className="md:w-6/12 m-10 rounded-lg shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-5 lg:w-4/12 max-w-5xl ">
          <h2 className="text-md font-normal">
            The Best Platform for Car Rental
          </h2>
          <p className="text-xs font-extralight mt-4">
            Ease of doing a car rental safely and <br /> reliably Of course at a
            low price.
          </p>
          <button className="bg-blue-600 px-8 py-2 font-extralight rounded-md mt-5">
            Rental car
          </button>
          <div className="w-full flex justify-center mt-8">
            <img alt="car" src={Car2} />
          </div>
        </div>
        <div className="xsm:hidden sm:hidden lg:block m-10 rounded-lg shadow-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-5 lg:w-4/12 max-w-5xl">
          <h2 className=" text-md font-normal">
            The Best Platform for Car Rental
          </h2>
          <p className="text-xs font-extralight mt-4">
            Ease of doing a car rental safely and <br /> reliably Of course at a
            low price.
          </p>
          <button className="bg-blue-600 px-8 py-2 font-extralight rounded-md mt-5">
            Rental car
          </button>
          <div className="w-full flex justify-center mt-8">
            <img alt="car" src={Car2} />
          </div>
        </div>
      </div>
      <RentDetail />
    </div>
  );
};

export default HeroCard;
