import React from 'react'

export const Header = () => {
  return (
    <div className='flex items-center justify-between bg-amber-400 rounded-xl px-10 py-5' > 
      <h1 className='text-2xl  font-medium'>Suyash <br/>
        <span className='text-3xl font-semibold'>Prakash</span> 
        </h1>  
        <button className=' bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-xl'>Log Out</button>
    </div>
  )
}
