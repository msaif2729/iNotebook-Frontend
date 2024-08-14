import React, { useContext, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import { useLocation, Link } from "react-router-dom";
import AccountModal from "./AccountModal";

export default function Navbar() {
  const context = useContext(noteContext);

  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);
  const option = useRef(null);


  const location = useLocation();
  // console.log(location)

  const handleclick = () => {
    if (context.s1.click) {
      div1.current.style.transform = "translateY(0.1rem) rotate(-45deg)";
      div2.current.style.transform = "translateY(-0.315rem) rotate(45deg)";
      div3.current.style.display = "none";
      option.current.style.display = "block";
      context.updatestate(false);
    } else {
      div1.current.style.transform = "rotate(0deg)";
      div2.current.style.transform = "rotate(0deg)";
      div3.current.style.display = "block";
      option.current.style.display = "none";
      context.updatestate(true);
    }
  };

  const logout = () => {
    context.hideAModal(false)
    console.log(context.amodal.hidden)
  };

  return (
    <div>
      <nav
        className={` bg-gray-100 px-3 py-4 w-full flex justify-between transition-all duration-100 z-20 fixed ${
          location.pathname === "/login" ? "hidden" : "block"
        } `}
      >
        <Link to="/" className=" tracking-wide text-xl cursor-pointer">
          <b>i</b>
          <span className=" font-extrabold text-blue-700">NoteBook</span>
        </Link>
        <ul className="flex justify-between font-sans space-x-5 ">
          <li className="relative md:static">
            <div className="hidden md:flex">
              <ul className="space-x-5 flex">
                <li className=" tracking-wide cursor-pointer self-center">
                  <Link
                    to="/"
                    className={
                      location.pathname === "/"
                        ? "text-blue-700 font-semibold"
                        : "text-gray-800"
                    }
                  >
                    Home
                  </Link>
                </li>
                <li className=" tracking-wide cursor-pointer self-center ">
                  <Link
                    to="/about"
                    className={
                      location.pathname === "/about"
                        ? "text-blue-700 font-semibold"
                        : "text-gray-800"
                    }
                  >
                    About
                  </Link>
                </li>
                <li
                  className={`${
                    localStorage.getItem("token") ? "block" : "hidden"
                  } tracking-wide cursor-pointer self-center `}
                >
                  <Link
                    to="/addnote"
                    className={
                      location.pathname === "/addnote"
                        ? "text-blue-700 font-semibold"
                        : "text-gray-800"
                    }
                  >
                    Add Note
                  </Link>
                </li>
                <li className=" tracking-wide cursor-pointer self-center ">
                  <Link
                    to="/login"
                    className={`${
                      localStorage.getItem("token") ? "hidden" : "block"
                    } text-blue-700 font-bold border  py-1 px-3 rounded-lg border-blue-700  `}
                  >
                    Login
                  </Link>
                  <Link
                    to="/"
                    className={`${
                      localStorage.getItem("token") ? "block" : "hidden"
                    } text-blue-700 font-bold  py-1  `}
                    onClick={logout}
                  >
                    Account
                  </Link>
                </li>
                {/* <li className="flex cursor-pointer self-center">
                  <div className="flex justify-center items-center space-x-1">
                    <p>Account</p>
                    <a href="/account">
                      <img
                        src={account}
                        alt="account"
                        className="w-7 self-center"
                      />
                    </Link >
                  </div>
                </li> */}
              </ul>
            </div>
          </li>
          <li className="flex md:hidden">
            <div
              className="flex space-y-1 flex-col self-center p-1"
              onClick={handleclick}
            >
              <div
                className=" bg-black w-5 h-[2px] transition-all duration-75"
                ref={div1}
              ></div>
              <div
                className=" bg-black w-5 h-[2px] transition-all duration-75"
                ref={div2}
              ></div>
              <div
                className=" bg-black w-5 h-[2px] transition-all duration-75"
                ref={div3}
              ></div>
            </div>
          </li>
        </ul>
      </nav>
      <div
        className="bg-gray-200 px-5 py-2 fixed w-full mt-[60px] hidden md:hidden transition-all duration-100"
        ref={option}
      >
        <ul className="space-y-2 ">
          <li className=" tracking-wide cursor-pointer self-center">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "text-blue-700 font-semibold"
                  : "text-gray-800"
              }
            >
              Home
            </Link>
          </li>
          <li className=" tracking-wide cursor-pointer self-center ">
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "text-blue-700 font-semibold"
                  : "text-gray-800"
              }
            >
              About
            </Link>
          </li>
          <li
            className={`${
              localStorage.getItem("token") ? "block" : "hidden"
            } tracking-wide cursor-pointer self-center `}
          >
            <Link
              to="/addnote"
              className={
                location.pathname === "/addnote"
                  ? "text-blue-700 font-semibold"
                  : "text-gray-800"
              }
            >
              Add Note
            </Link>
          </li>
          <li className=" tracking-wide cursor-pointer self-center py-2">
          <Link
                    to="/login"
                    className={`${
                      localStorage.getItem("token") ? "hidden" : ""
                    } text-blue-800 font-bold border  py-1 px-3 rounded-lg border-blue-700  `}
                  >
                    Login
                  </Link>
                  <Link
                    to="/"
                    className={`${
                      localStorage.getItem("token") ? "" : "hidden"
                    } text-blue-800 font-bold border  py-1  `}
                    onClick={logout}
                  >
                    Account
                  </Link>
        </li>
        </ul>
      </div>

      <AccountModal/>
    </div>
  );
}
