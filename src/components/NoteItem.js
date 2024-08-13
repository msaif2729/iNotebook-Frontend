import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

export default function NoteItem(props) {
  const context = useContext(noteContext);

  const handleDelete = () => {
    context.deleteNote(props.id);
    console.log("Note Deleted");
  };

  const date = new Date(props.date);
  const formateddate =
    date.toDateString().slice(0, 3) + "," + date.toDateString().slice(3);

  const handleModal = async () => {
    const response = await context.getOneNote(props.id,"view");
    // console.log(context.modal.hidden + " " + props.id);
  };

  const handleEdit = async () => {
    const response = await context.getOneNote(props.id,"edit");
  };

  return (
    <div className="px-3 py-5">
      <div className="flex-grow basis-28 px-3 pt-6 w-80 md:w-72 h-[215px]  bg-gray-200 shadow-xl rounded-xl">
        <div className="flex justify-between">
          <p className="text-sm  font-semibold ">{formateddate}</p>
          <i
            className="fa-solid fa-up-right-from-square cursor-pointer "
            onClick={handleModal}
          ></i>
        </div>
        <h1 className="text-lg font-bold">{props.title}</h1>
        <p className="text-sm  font-normal h-[60px]  ">
          {props.desc.length <= 100
            ? props.desc
            : props.desc.slice(0, 100) + "......"}
        </p>
        <p className="text-sm  font-semibold  my-1">{props.tag}</p>
        <div className="flex justify-end space-x-3 py-2">
          <button
            className="flex bg-blue-700 font-semibold text-sm text-white rounded-lg justify-center px-4 py-1 "
            onClick={handleEdit}
          >
            {" "}
            Edit <i className="fa-solid fa-pen-to-square self-center ml-1"></i>
          </button>
          <button
            className="flex bg-blue-700 font-semibold text-sm text-white rounded-lg justify-center px-2 py-1 "
            onClick={handleDelete}
          >
            Delete<i className="fa-solid fa-trash-can self-center ml-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
