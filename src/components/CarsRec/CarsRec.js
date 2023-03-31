import Card from "../Card/Card";
const cars = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const CarsRec = ({ isLiked, ClickHandler }) => {
  return (
    <div className="bg-gray-50">
      <h2 className="mx-14 text-gray-500">Popular Cars</h2>
      <div className="flex items-center justify-around p-5 w-auto flex-wrap">
        {cars.map((car) => (
          <Card isLiked={isLiked} ClickHandler={ClickHandler} id={car.id} />
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
