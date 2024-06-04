import { useState } from "react";
import logo from "../../img/cinema.png";
import profilelogo from "../../img/man.png";

const Navbar = () => {
  const [option, setOption] = useState(false);
  const [active, setActive] = useState(false);

  const toggleOption = () => {
    setOption((prevOption) => !prevOption);
    console.log(option);
    setActive(option);
    console.log(option);
  };

  return (
    <>
      <nav className="flex justify-center ">
        <div className="w-3/4 py-3 px-9 bg-mid-blue flex justify-between items-center rounded-xl fixed mt-4 z-10">
          <div>
            <img src={logo} alt="" width={55} />
          </div>
          <div>
            <ul className="flex">
              <li className="text-xl mx-2 text-white">Home</li>
              <li className="text-xl mx-2 text-white">Movies</li>
              <li className="text-xl mx-2 text-white">Tv Series</li>
              <li className="text-xl mx-2 text-white">BookMarks</li>
            </ul>
          </div>
          <div className="relative">
            <img
              onClick={toggleOption}
              tabIndex={0}
              className={`${
                active
                  ? ""
                  : "focus:outline focus:outline-offset-2 focus:outline-red-600 rounded-full"
              }`}
              src={profilelogo}
              alt=""
              width={40}
            />
            <div
              className={`bg-white absolute z-10 p-3 ${
                option ? "visible" : "invisible" //true
              }`}
            >
              <p className="px-4">Yash</p>
              <p className="px-4">Logout</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
