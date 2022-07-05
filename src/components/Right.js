import React from 'react';

const Right = () => {
  return (
    <div className='right flex flex-col bg-white p-8 rounded-xl
                    w-30'>

       <input className='px-4 h-12 my-2 border-2 border-gray-300 rounded-lg' type="text" placeholder='Email address or phone number' />

       <input className='px-4 h-12 my-2 border-2 border-gray-300 rounded-lg' t ype="password" placeholder='Password' />

       <button className=' my-2 h-10 font-bold bg-blue-600 hover:bg-blue-700
       hover:cursor-pointer text-white rounded-md '>Log In</button>

       <span className=' my-2 text-blue-500 hover:underline hover:cursor-pointer text-center text-sm'>Forgotten password?</span>

       <hr className='my-2'/>

       <button className=' my-2 h-10 font-bold bg-green-600 hover:bg-green-700 text-white rounded-md hover:cursor-pointer mx-auto py-3 px-4 w-fit align-middle'>Create New Account</button>
    </div>
  )
}

export default Right