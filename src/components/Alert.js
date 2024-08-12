import React, { useContext, useEffect, useRef } from 'react'
import noteContext from '../context/notes/noteContext'

export default function Alert() {

    const context = useContext(noteContext);

    var text = context.alert.alerttype;
    
    const reff = useRef(null);

    useEffect(()=>{

        if(text!==null)
        {
            reff.current.style.transform="translateY(0px)"
            setTimeout(()=>{
            reff.current.style.transform="translateY(-70px)"
            },2000)
        }

    },[context.alert.time])
    
    

  return (
   
    
    <div className='w-full pb-5 pt-20 px-4  bg-blue-300 transition-all duration-500 fixed -translate-y-20  '  ref={reff}>
        <h1 className='text-base font-semibold'>{text}</h1>
      
    </div>
  )
}
