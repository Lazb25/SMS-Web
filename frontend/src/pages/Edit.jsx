import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Edit() {
    //helps to navigate to other page after update
    const navigate=useNavigate()
//helps to get id from url
const {id}=useParams()
//helps to store data of user in form
const[data,setData]=useState({
  fname:"",
  lname:"",
  course:""
})
//helps to get data of user by id and set in form
useEffect(()=>{
    axios.get(`http://localhost:4000/user/${id}`)
    .then((res)=>{
        setData(res.data.result[0])
    })
    .catch((err)=>{
        alert(err.message)
    })
},[id])
//helps to update data of user in form

const handleChange=(e)=>{
     
    const {name,value}=e.target
    setData((prev)=>{
        return {...prev,[name]:value}

    })}
//helps to submit updated data of user in form
const handleSubmit=(e)=>{

    e.preventDefault()

    axios.put(`http://localhost:4000/update/${id}`,data)

    .then((res)=>{
        alert(res.data.message)
        navigate('/users')
    })

    .catch((err)=>{
        alert(err.error)
    })
}


  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col w-1/2 mx-auto mt-10 gap-5'>
        <input type="text" name='fname' value={data.fname} onChange={handleChange} placeholder='First Name'/>
        <input type="text" name='lname' value={data.lname} onChange={handleChange} placeholder='Last Name'/>
        <input type="text" name='course' value={data.course} onChange={handleChange} placeholder='Course'/>
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default Edit
