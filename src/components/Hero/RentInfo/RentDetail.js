import Arrow from "./../../../Assets/Icons/Arrow.png";
const RentDetail = () => {
  const options = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  var x = 5; //minutes interval
  var times = []; // time array
  var tt = 0; // start time
  var ap = ["AM", "PM"]; // AM-PM

  //loop to increment the time and push results in array
  for (var i = 0; tt < 24 * 60; i++) {
    var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
    var mm = tt % 60; // getting minutes of the hour in 0-55 format
    times[i] =
      ("0" + (hh % 12)).slice(-2) +
      ":" +
      ("0" + mm).slice(-2) +
      " " +
      ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
    tt = tt + x;
  }

  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="flex-col p-3 rounded-xl bg-white lg:w-4/12 md:w-6/12 sm:w-96 xsm:w-96 m-5">
        <div class="flex items-center p-2 px-6">
          <input
            checked
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-2"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Pick Up
          </label>
        </div>
        <div className="flex justify-center mt-3">
          <div className="flex-col flex items-center justify-start font-normal border-r p-2 w-4/12">
            <div>Location</div>
            <div>
              <select className=" text-gray-500 font-extralight">
                <option>tabriz</option>
                <option>tabriz</option>
                <option>tabriz</option>
              </select>
            </div>
          </div>
          <div className="flex-col flex items-center justify-start font-normal border-r p-2 w-4/12">
            <div>Date</div>
            <div>
              <select className=" text-gray-500 font-extralight">
                {options.map((option) => (
                  <option>{option}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex-col flex items-center justify-start font-normal p-2 w-4/12">
            <div>Time</div>
            <div>
              <select className=" text-gray-500 font-extralight">
                {times.map((t) => (
                  <option>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute flex justify-center xsm:w-full lg:w-auto">
        <img
          alt="Arrow"
          className="bg-blue-600 p-4 rounded-2xl shadow-xl"
          src={Arrow}
        />
      </div>
      <div className="flex-col p-3 rounded-xl bg-white  lg:w-4/12 md:w-6/12 sm:w-96 xsm:w-96 m-5">
        <div class="flex items-center p-2 px-6">
          <input
            checked
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-2"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Drop Off
          </label>
        </div>
        <div className="flex justify-center mt-3">
          <div className="flex-col flex items-center justify-start font-normal border-r p-2 w-4/12">
            <div>Location</div>
            <div>
              <select className=" text-gray-500 font-extralight">
                <option>tabriz</option>
                <option>tabriz</option>
                <option>tabriz</option>
              </select>
            </div>
          </div>
          <div className="flex-col flex items-center justify-start font-normal border-r p-2 w-4/12">
            <div>Date</div>
            <div>
              <select className=" text-gray-500 font-extralight">
                {options.map((option) => (
                  <option>{option}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex-col flex items-center justify-start font-normal p-2 w-4/12">
            <div>Time</div>
            <div>
              <select className=" text-gray-500 font-extralight">
                {times.map((t) => (
                  <option>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentDetail;
