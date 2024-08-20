import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import { useNavigate } from "react-router-dom";

export default function AddNote() {

    const [note,setNote] = useState({title:"",desc:"",tag:""})

    const context = useContext(noteContext)

    const navigate = useNavigate()



    const handleClick = (e) => {
        e.preventDefault();
        if (note.title && note.desc && note.tag) {
            context.addNote(note.title, note.desc, note.tag);
            setNote({ title: "", desc: "", tag: "" });
            
            navigate("/")
        } else {
            console.log("Please fill all fields.");
        }
    };

    const handleChange = (e)=>{

        setNote({...note,[e.target.name]:e.target.value})
        // console.log(note)
        

    }


  return (
    <div className=' flex flex-col px-5 pb-5 pt-20 md:px-20 '>

        <h1 className='text-2xl font-bold pb-2'>Add Notes</h1>
        <div className="bg-white flex flex-col justify-center items-center">
        
            <form action="" method='post'  className=' w-full '>
                <div className='flex py-2 flex-col justify-start w-full'>
                    <span className=' font-bold text-sm md:text-base rounded-l-lg pb-1 px-2'>Title</span>
                    <input type="text" placeholder='Enter Title...' className=" md:w-[50%]  bg-white border border-gray-600  rounded-lg text-base  px-4 py-2 shadow-sm focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 " value={note.title} name='title' onChange={handleChange} />
               
                    <span className=' pt-4 font-bold text-sm md:text-base rounded-l-lg pb-1 px-2'>Description</span>
                    <textarea type="text" rows='4' placeholder='Enter Description...' className="md:w-[50%] bg-white border border-gray-600 rounded-lg text-base  px-4 py-2 shadow-sm focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 " value={note.desc} name='desc' onChange={handleChange}></textarea>
                
                    <span className=' pt-4 font-bold text-sm md:text-base rounded-l-lg pb-1 px-2'>Enter Tag</span>
                    <input type="text" placeholder='Enter Tag...' className="md:w-[50%]  bg-white border border-gray-600 rounded-lg text-base  px-4 py-2 shadow-sm focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 " value={note.tag} name='tag'  onChange={handleChange}/>

                    <span className=' pt-4 font-bold text-sm md:text-base rounded-l-lg pb-1 px-2'>Date</span>
                    <input type="text" placeholder='Enter Tag...' className="md:w-[50%]  bg-white border border-gray-600 rounded-lg text-base  px-4 py-2 shadow-sm focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 " readOnly value={new Date().toDateString().slice(0,3)+", "+new Date().toDateString().slice(4)} />

                    <button className='bg-blue-700 text-base my-4 p-2 w-52 self-center md:self-start text-white rounded-lg' onClick={handleClick}>Add Note</button>
                </div>


            </form>
        
        </div>

    </div>
  )
}
