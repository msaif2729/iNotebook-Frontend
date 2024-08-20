import React, { useContext, useEffect } from 'react'
import NoteItem from './NoteItem'
import { Link } from 'react-router-dom'
import noteContext from '../context/notes/noteContext'
import nodata from "./nodata.png"
import notestaking from './notestaking.png'

export default function Note() {

    const context = useContext(noteContext)
    const {notes,getNote} = context

    // console.log(notes)

    useEffect(()=>{
        const token = localStorage.getItem("token");
        console.log("Token retrieved:", token);
        if (token  && token !== "null") {
            getNote();
            console.log(token);
        }
        // eslint-disable-next-line
    },[])



  return (
    <div className=' pb-2 py-5 pt-14 '>
        <div className=" justify-evenly flex flex-col px-3 md:px-20 lg:flex-row pb-5 items-center pt-5 bg-blue-200">
            <div className='self-center w-[100%] flex flex-col justify-center items-center lg:items-start '>
                <h1 className='font-semibold text-4xl lg:text-6xl text-center md:text-start '>Welcome to<br></br> <strong>i<span className='text-blue-700 text-5xl lg:text-7xl'>Notebook</span></strong></h1>
                <p className='text-2xl mt-3 text-center lg:text-start'> Your personal notebook in the cloud.<br></br> Securely access and manage your notes from anywhere, anytime.</p>
            </div>
            <div className='self-center w-[100%] flex flex-col justify-center items-center lg:items-end '>
                <img src={notestaking} alt="" className='w-96 ' />
            </div>
        </div>
        <div className=" justify-between flex px-3 pt-5 md:px-20 ">
            <h1 className='text-2xl font-bold '>Your Notes</h1>
            <div className={`flex justify-center items-center ${localStorage.getItem("token")?"block":"hidden"}`}>
                <Link to="/addnote" className="flex justify-center items-center">
                    <i className="fa-solid fa-circle-plus self-center mr-1 text-blue-700"></i>
                    <p className='font-semibold text-base text-blue-700' >Add New Note</p>
                </Link>
            </div>
        </div>
        <div className={`${localStorage.getItem("token")?"hidden":"block"} flex flex-col justify-center items-center pt-3 transition-all duration-100`}> 

            <img src={nodata} className='w-60' alt="" />
            <h1>To create a note plz <strong className='text-blue-700 cursor-pointer'><u> <Link to="/login">Sign-in</Link></u></strong></h1>

        </div>
        <div className={`${localStorage.getItem("token")?"block":"hidden"} flex flex-wrap justify-center items-center pt-3 transition-all duration-100`}>
            {notes.length===0 && <h1 className='font-bold '>No Notes to display</h1>}
            {notes.map((note)=>{
                // console.log(note)
                return  <div  key={note._id}>
                    <NoteItem title={note.title} id={note._id} desc={note.desc} tag={note.tag} date={note.date}/>
                </div>
            })}
        </div>
       
    </div>
  )
}
