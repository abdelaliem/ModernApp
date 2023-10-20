import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

function Navbar() {
  const [isToggle, setisToggle] = useState(false);
  function handleIsToggle() {
    setisToggle(!isToggle);
  }
  return (
    <nav className="w-ful flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h[32px]" />
      <ul className=" list-none sm:flex justify-end items-center flex-1 hidden">
        {navLinks.map((nav, index) => (
          <li
            className={`text-white font-poppins cursor-pointer font-normal text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-6"
            } `}
            key={nav.id}
          >
            <a  href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={isToggle ? close : menu}
          onClick={() => handleIsToggle()}
          className="w-[28px] h-[28px] object-contain"
        />
        <div
          className={`${
            isToggle ? "flex" : "hidden"
          } p-6 absolute bg-black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className=" list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                className={`text-white font-poppins cursor-pointer font-normal text-[16px] mb-4 `}
                key={nav.id}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
