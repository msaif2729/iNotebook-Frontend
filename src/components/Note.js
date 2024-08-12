import React, { useContext, useEffect } from 'react'
import NoteItem from './NoteItem'
import { Link } from 'react-router-dom'
import noteContext from '../context/notes/noteContext'

export default function Note() {

    const context = useContext(noteContext)
    const {notes,getNote} = context

    // console.log(notes)

    useEffect(()=>{
        getNote()
    },[])



  return (
    <div className=' pb-2 py-5 pt-20 '>
        <div className=" justify-between flex px-3 md:px-20 ">
            <h1 className='text-2xl font-bold '>Your Notes</h1>
            <div className="flex justify-center items-center">
                <Link to="/addnote" className="flex justify-center items-center">
                    <i className="fa-solid fa-circle-plus self-center mr-1 text-blue-700"></i>
                    <p className='font-semibold text-base text-blue-700' >Add New Note</p>
                </Link>
            </div>
        </div>
        <div className='flex flex-wrap justify-center items-center pt-3 transition-all duration-100'>
            {notes.length==0 && <h1 className='font-bold '>No Notes to display</h1>}
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
