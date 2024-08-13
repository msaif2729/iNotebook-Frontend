import React, { useContext, useState, useRef, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

export default function EditModal(props) {
  const context = useContext(noteContext);
  const { _id, date, title, desc, tag } = context.emodal.data;

  const [note, setNote] = useState({ title: "", desc: "", tag: "" });
  const div = useRef(null);

  useEffect(() => {
    if (!context.emodal.hidden) {
      div.current.style.display = "flex";
      setNote({ title: title || "", desc: desc || "", tag: tag || "" });
      // console.log(context.emodal.hidden);
    } else {
      div.current.style.display = "none";
    }
  }, [context.emodal, title, desc, tag]);

  const handleClick = (e) => {
    e.preventDefault();
    if (note.title && note.desc && note.tag) {
        console.log("Note Updated",_id); 
      context.editNote(_id, note.title, note.desc, note.tag);
      context.hideEModal(true, {});
    //   setNote({ title: "", desc: "", tag: "" });
    } else {
      console.log("Please fill all fields.");
    }
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    context.hideEModal(true, {});
    setNote({ title: "", desc: "", tag: "" }); 
  };

  return (
    <div
      id="modal"
      className="fixed inset-0 bg-gray-600 bg-opacity-30 flex justify-center items-center z-30"
      ref={div}
    >
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-10 md:mx-0">
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="text-xl font-semibold">Edit Note</h3>
          <button onClick={handleClose} className="text-gray-900">
            &times;
          </button>
        </div>

        <div className="p-4">
          <form className="w-full">
            <div className="flex py-2 flex-col w-full">
              <label className="font-bold text-sm md:text-base pb-1 px-2">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter Title..."
                className="md:w-full bg-white border border-gray-600 rounded-lg text-base px-4 py-2 shadow-sm focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                name="title"
                value={note.title}
                onChange={handleChange}
              />

              <label className="pt-4 font-bold text-sm md:text-base pb-1 px-2">
                Description
              </label>
              <textarea
                rows="4"
                placeholder="Enter Description..."
                className="md:w-full bg-white border border-gray-600 rounded-lg text-base px-4 py-2 shadow-sm focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                name="desc"
                value={note.desc}
                onChange={handleChange}
              ></textarea>

              <label className="pt-4 font-bold text-sm md:text-base pb-1 px-2">
                Tag
              </label>
              <input
                type="text"
                placeholder="Enter Tag..."
                className="md:w-full bg-white border border-gray-600 rounded-lg text-base px-4 py-2 shadow-sm focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                name="tag"
                value={note.tag}
                onChange={handleChange}
              />

              <label className="pt-4 font-bold text-sm md:text-base pb-1 px-2">
                Date
              </label>
              <input
                type="text"
                readOnly
                className="md:w-full bg-white border border-gray-600 rounded-lg text-base px-4 py-2 shadow-sm focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                value={
                  new Date(date).toDateString().slice(0, 3) +
                  ", " +
                  new Date(date).toDateString().slice(4)
                }
              />

              <div className="border-t px-4 py-2 flex justify-end">
                <button
                  className="bg-blue-700 text-base my-4 p-2 self-center md:self-start text-white rounded-lg"
                  onClick={handleClick}
                >
                  Update Note
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
