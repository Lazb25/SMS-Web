import React from 'react'
import {Link}  from 'react-router-dom'


function NavBar() {
  return (
    <div className='w-full bg-black text-white p-2'>
      
      <nav className="flex flex-row items-center justify-between w-full p-4 ">
        <h1 className="text-xl font-bold text-white ">SMS-system</h1>

        <Link to='/' >Home</Link>
        
        <Link to='/users'>All students</Link>
        <Link to ='/create'>Add student</Link>
        
      </nav>
    </div>
  )
}
export default NavBar

