import React from 'react'
import del from './delete.png'
import edit from './edit.png'


export default function NoteItem() {
  return (
    <div className='px-3 py-5'>
        <div className='flex-grow basis-28 px-3 pt-6 w-80 md:w-72   bg-gray-200 shadow-xl rounded-xl'>
            <p className='text-sm  font-semibold '>Date</p>
            <h1 className='text-lg font-bold'>Title</h1>
            <p className='text-sm  font-normal '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veritatis nisi possimus tenetur repellendus molestias placeat consequuntur ut aperiam. Nam, assumenda aperiam. Eius, odio cupiditate. Quia blanditiis accusantium itaque earum?</p>
            <p className='text-sm  font-semibold  '>Tag</p>
            <div className='flex justify-end space-x-3 py-2' >
                <button className='flex bg-blue-700 font-semibold text-sm text-white rounded-lg justify-center px-4 py-1 ' > Edit <img src={edit} alt="" className='h-5 self-center px-[2px]'/></button>
                <button className='flex bg-blue-700 font-semibold text-sm text-white rounded-lg justify-center px-2 py-1 '>Delete<img src={del} alt="" className='h-5 self-center'/></button>
            </div>
        </div>
    </div>
  )
}
