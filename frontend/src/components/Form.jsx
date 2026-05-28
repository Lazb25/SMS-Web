import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Form() {

  const navigate=useNavigate()//this helps us to navigate to other pages after form submission


    const [data,setData]=useState({
        fname:'',
        lname:'',
        course:''
    })

    const handleChange=(e)=>{
        const {name,value}=e.target
        setData((prev)=>({...prev,[name]:value}))
    }
const handleSubmit=(e)=>{
  e.preventDefault()

  axios.post('http://localhost:4000/create',data)
  .then((res)=>{
    alert(res.data.message)

    navigate('/users')

  })
  .catch((err)=>{
    alert(err)
  })

}
  return (
    <div className='mt-28'><center>
      <form className='h-full bg-white shadow-2xl p-11 w-96' onSubmit={handleSubmit}>
        <h1 className='p-5 text-lg font-bold text-green-600'>Create new student</h1>
        <div className='flex flex-col ' >
        <input type="text" className='p-2 border'onChange={handleChange} name="fname" value={data.fname} placeholder='First name' />
        <input type="text" className='p-2 border' onChange={handleChange} name="lname" value={data.lname} placeholder='Last name' />
        <input type="text" className='p-2 border' onChange={handleChange} name="course" value={data.course} placeholder='Course name' />
        <button className='p-2 text-white bg-green-600 rounded' type='submit'>send</button>
        </div>
      </form>
      </center>
    </div>
  )
}

export default Form
