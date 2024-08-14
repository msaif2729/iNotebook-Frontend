import React, { useContext, useEffect, useRef } from 'react'
import noteContext from '../context/notes/noteContext'
import account from "../account.png"


export default function AccountModal() {

    const div = useRef(null)
    const context = useContext(noteContext)

    useEffect(()=>{
        div.current.style.display=context.amodal.hidden?"none":"flex"
        if(localStorage.getItem("token"))
        {
            context.getuser()
        }
    },[context.amodal.hidden])

    const handleLogout = ()=>{
        context.updateData();
        context.hideAModal(!context.amodal.hidden)
    }

    const handleClose = () => {
       context.hideAModal(!context.amodal.hidden)
    };



  return (
    <div
    id="modal"
    className="fixed inset-0 bg-gray-600 bg-opacity-30 flex justify-center items-center z-30 "
    ref={div}
>
    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-5 md:mx-0">
        <div className="border-b px-4 py-2 flex justify-between items-center">
            <h3 className="text-xl font-semibold">Account Details</h3>
            <button onClick={handleClose} className="text-gray-900">
                &times;
            </button>
        </div>

        <div className="p-5 flex flex-col justify-center items-center">
            <img src={account} alt="" className='w-20 py-5' />
            <p className="text-lg font-semibold pb-1">{context.account.name}</p>
            <p className="text-sm font-semibold pb-1">{context.account.email}</p>
        </div>

        <div className="border-t px-4 py-2 flex justify-end">
            <button
                onClick={handleClose}
                className="bg-gray-700 mx-5 text-white font-semibold text-sm py-1 px-4 rounded hover:bg-gray-800"
            >
                Cancle
            </button>
            <button
                onClick={handleLogout}
                className="bg-blue-700 text-white font-semibold text-sm py-1 px-4 rounded hover:bg-blue-800"
            >
                Logout
            </button>
        </div>
    </div>
</div>
  )
}
