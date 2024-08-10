import React, { useContext, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";

export default function LeftNav() {
  const { s1 } = useContext(noteContext);

  const div = useRef(null);

  useEffect(() => {
    if (s1.click) {
      div.current.style.transform = "translateX(-120%)";
    } else {
      div.current.style.transform = "translateX(0%)";
    }
  }, [s1.click]);

  return (
    <div
      className=" transition-all duration-100 translateX(0%) fixed h-full md:w-52 justify-evenly"
      ref={div}
    >
      <div className="h-full justify-between bg-gray-100 flex flex-col pt-[60px]">
        <div className=" h-full flex flex-col">
            <div className="notes px-4 py-5 h-[50%]">
                <h1 className="text-lg font-bold">Notes</h1>
            </div>
            <div className="tags px-4 py-5 h-[50%]">
                <h1 className="text-lg font-bold">Tags</h1>
            </div>
        </div>
        <div className="tags px-4 py-5 md:hidden bg-purple-400">
            <h1 className="text-lg font-bold">Account</h1>
        </div>
      </div>
    </div>
  );
}
