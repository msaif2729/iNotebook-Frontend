import React, { useContext, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";

export default function Modal(props) {

    const div = useRef(null);
    const context = useContext(noteContext);
    
    
    // console.log(context.modal.data)

    const { date, title, desc, tag } = context.modal.data;
    
    useEffect(() => {
        if (!context.modal.hidden) {
            div.current.style.display = "flex";
            console.log(context.modal.hidden)
        } else {
            div.current.style.display = "none";
        }
    }, [context.modal]);
    
    const handleClose = () => {
        context.hideModal(true,"",{});
    };
    
    const d = new Date(date)
  const formateddate = d.toDateString().slice(0,3)+","+d.toDateString().slice(3)


    return (
        <div
            id="modal"
            className="fixed inset-0 bg-gray-600 bg-opacity-30 flex justify-center items-center z-30 "
            ref={div}
        >
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-5 md:mx-0">
                <div className="border-b px-4 py-2 flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Note</h3>
                    <button onClick={handleClose} className="text-gray-900">
                        &times;
                    </button>
                </div>

                <div className="p-4">
                    <p className="text-sm font-semibold pb-1">{formateddate}</p>
                    <p className="text-lg font-bold pb-1">{title}</p>
                    <p className="text-sm font-base pb-1">{desc}</p>
                    <p className="text-sm font-semibold  ">{tag}</p>
                </div>

                <div className="border-t px-4 py-2 flex justify-end">
                    <button
                        onClick={handleClose}
                        className="bg-blue-700 text-white font-semibold text-sm py-1 px-4 rounded hover:bg-blue-800"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
