import React from 'react'
import add from '../add_circle.png'
import NoteItem from './NoteItem'
import { Link } from 'react-router-dom'

export default function Note() {

  return (
    <div className=' h-full px-2 py-5  '>
        <div className=" justify-between flex px-3 md:px-20 ">
            <h1 className='text-2xl font-bold '>Your Notes</h1>
            <div className="flex justify-center items-center">
                <Link to="/addnote" className="flex justify-center items-center">
                    <img src={add} className='w-5 h-5 ' alt="" />
                    <p className='font-semibold text-base text-blue-700' >Add New Note</p>
                </Link>
            </div>
        </div>
        <div className='flex flex-wrap justify-center items-center pt-3'>
            <NoteItem/>
            <NoteItem/>
            <NoteItem/>
            <NoteItem/>
            <NoteItem/>
            <NoteItem/>
            <NoteItem/>
            <NoteItem/>
            
        </div>
    </div>
  )
}
