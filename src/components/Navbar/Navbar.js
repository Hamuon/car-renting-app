import Logo from "./../../Assets/Icons/Logo.png";
import Profile from "./../../Assets/Icons/Head.png";
const Navbar = ({ open, setOpen }) => {
  return (
    <>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-5 rounded dark:bg-gray-900 shadow-[0_0px_200px_0px_rgba(0,0,0,0.3)]">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex justify-start items-center">
            <a href="https://flowbite.com/" class="flex items-center">
              <img alt="logo" src={Logo} />
            </a>
            <form className="lg:block mx-12 md:hidden sm:hidden xsm:hidden xlsm:hidden">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
              </div>
            </form>
          </div>
          <div class="flex items-center md:order-2">
            <div className="sm:flex justify-center items-center xsm:hidden">
              <div className="flex justify-center items-center border-2 p-2 rounded-full mr-3 hover:shadow-md ease-in-out duration-200 cursor-pointer">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.44 0.0996094C12.63 0.0996094 11.01 0.979609 10 2.32961C8.99 0.979609 7.37 0.0996094 5.56 0.0996094C2.49 0.0996094 0 2.59961 0 5.68961C0 6.87961 0.19 7.97961 0.52 8.99961C2.1 13.9996 6.97 16.9896 9.38 17.8096C9.72 17.9296 10.28 17.9296 10.62 17.8096C13.03 16.9896 17.9 13.9996 19.48 8.99961C19.81 7.97961 20 6.87961 20 5.68961C20 2.59961 17.51 0.0996094 14.44 0.0996094Z"
                    fill="#596780"
                  />
                </svg>
              </div>
              <div className="flex justify-center items-center border-2 p-2 rounded-full mr-3 hover:shadow-md ease-in-out duration-200 cursor-pointer">
                <button
                  onClick={() => setOpen(!open)}
                  className="z-40 ease-in-out duration-300"
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.1 7.22043C16.29 7.22043 15.55 5.94042 16.45 4.37042C16.97 3.46042 16.66 2.30042 15.75 1.78042L14.02 0.790425C13.23 0.320425 12.21 0.600425 11.74 1.39042L11.63 1.58042C10.73 3.15042 9.25 3.15042 8.34 1.58042L8.23 1.39042C7.78 0.600425 6.76 0.320425 5.97 0.790425L4.24 1.78042C3.33 2.30042 3.02 3.47042 3.54 4.38042C4.45 5.94042 3.71 7.22043 1.9 7.22043C0.86 7.22043 0 8.07042 0 9.12042V10.8804C0 11.9204 0.85 12.7804 1.9 12.7804C3.71 12.7804 4.45 14.0604 3.54 15.6304C3.02 16.5404 3.33 17.7004 4.24 18.2204L5.97 19.2104C6.76 19.6804 7.78 19.4004 8.25 18.6104L8.36 18.4204C9.26 16.8504 10.74 16.8504 11.65 18.4204L11.76 18.6104C12.23 19.4004 13.25 19.6804 14.04 19.2104L15.77 18.2204C16.68 17.7004 16.99 16.5304 16.47 15.6304C15.56 14.0604 16.3 12.7804 18.11 12.7804C19.15 12.7804 20.01 11.9304 20.01 10.8804V9.12042C20 8.08042 19.15 7.22043 18.1 7.22043ZM10 13.2504C8.21 13.2504 6.75 11.7904 6.75 10.0004C6.75 8.21042 8.21 6.75042 10 6.75042C11.79 6.75042 13.25 8.21042 13.25 10.0004C13.25 11.7904 11.79 13.2504 10 13.2504Z"
                      fill="#596780"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button
              type="button"
              class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <img class="w-12 h-12 rounded-full" src={Profile} alt="user" />
            </button>
          </div>
        </div>

        <form className="mt-6 mx-12 lg:hidden">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              required
            />
          </div>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
