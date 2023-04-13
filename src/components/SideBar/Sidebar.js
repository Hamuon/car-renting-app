const SideBar = () => {
  const typeCheckBox = [
    { name: "Sport", quantity: 10 },
    { name: "SUV", quantity: 10 },
    { name: "MPV", quantity: 10 },
    { name: "Sedan", quantity: 10 },
    { name: "Coupe", quantity: 10 },
    { name: "Hatchback", quantity: 10 },
  ];

  const capacityCheckBox = [
    { capacity: "2 Person", quantity: 10 },
    { capacity: "4 Person", quantity: 10 },
    { capacity: "6 Person", quantity: 10 },
    { capacity: "8 or More", quantity: 10 },
  ];
  return (
    <div className=" z-50 flex flex-col fixed top-0 left-0  w-56 h-full p-4 bg-white">
      <span className="font-extralight ml-2 text-xs">TYPE</span>
      <div>
        {typeCheckBox.map((type) => (
          <div key={Math.random()} className=" flex mt-3 ml-2">
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {type.name}
              </label>
            </div>
            <div className="text-sm font-normal text-gray-500 ml-1">
              ({type.quantity})
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <span className="font-extralight ml-2 text-xs">CAPACITY</span>
        {capacityCheckBox.map((cap) => (
          <div key={Math.random()} className=" flex mt-3 ml-2">
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {cap.capacity}
              </label>
            </div>
            <div className="text-sm font-normal text-gray-500 ml-1">
              ({cap.quantity})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
