import Logo from "./../../Assets/Icons/Logo.png";

const Footer = () => {
  return (
    <div className="px-14 pt-20 pb-10 w-full bg-slate-50">
      <div className="w-full md:flex md:justify-between border-b">
        <div className="flex-col">
          <div className=" w-28 flex items-center">
            <img alt="Logo" src={Logo} />
          </div>
          <p className="mt-6 font-extralight text-gray-500 text-sm leading-loose">
            Our vision is to provide convenience
            <br /> and help increase your sales business.
          </p>
        </div>
        <div className="flex flex-wrap justify-between sm:mt-14 xsm:mt-14 md:mt-0 md:justify-end md:ml-8">
          <div className="mr-16 mb-8">
            <h2 className=" text-lg">About</h2>
            <ul className="mt-5">
              <li className=" font-extralight text-gray-400">How it works</li>
              <li className=" font-extralight text-gray-400 mt-2">featured</li>
              <li className=" font-extralight text-gray-400 mt-2">
                Partnership
              </li>
              <li className=" font-extralight text-gray-400 mt-2">
                Business Relation
              </li>
            </ul>
          </div>
          <div className="mr-16 mb-8">
            <h2 className=" text-lg">Socials</h2>
            <ul className="mt-5">
              <li className="font-extralight text-gray-400">Discord</li>
              <li className=" font-extralight text-gray-400 mt-2">Instagram</li>
              <li className=" font-extralight text-gray-400 mt-2">Twitter</li>
              <li className=" font-extralight text-gray-400 mt-2">Facebook</li>
            </ul>
          </div>
          <div className="mb-8 md:mr-16">
            <h2 className="text-lg">Community</h2>
            <ul className="mt-5">
              <li className=" font-extralight text-gray-400">Events</li>
              <li className=" font-extralight text-gray-400 mt-2">Blog</li>
              <li className=" font-extralight text-gray-400 mt-2">Podcast</li>
              <li className=" font-extralight text-gray-400 mt-2">
                Invite a friend
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 md:flex md:justify-between ">
        <div className="flex justify-between font-extralight text-sm">
          <h6>Privacy & Policy</h6>
          <h6 className="md:ml-10">Terms & Condition</h6>
        </div>
        <div className="text-sm xsm:mt-8 md:mt-0 sm:mt-8 ">
          ©2022 MORENT. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
