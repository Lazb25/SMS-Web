import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'


function View() {

  const [students,setStudents]=useState([])

 useEffect(()=>{
   axios.get('http://localhost:4000/users')
  .then((res)=>{
    setStudents(res.data.result)
  })
  .catch((err)=>{
    alert(err.error)
  })
 },[])

  return (
    <div>
      <h1 className='text-3xl font-bold text-center mt-10 text-green-600'>All Students</h1>
      <p className='text-center mt-5 text-lg'>Here you can view all the students enrolled in the system. You can see their names, courses, and other relevant information.</p>
<table className='mt-10 w-full text-center border '>
  <thead className='bg-gray-200 text-gray-700'>
    <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Course</th>
      <th>Actions</th>
    </tr>

  </thead>
  <tbody className='text-gray-600 '>
    {students.map((student,index)=>(
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{student.fname}</td>
        <td>{student.lname}</td>
        <td>{student.course}</td>
        <td>
          <button className='bg-green-600 text-white px-4 py-2 rounded hover:bg-black'>Edit</button>
          <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2'>Delete</button>
        </td>
      </tr>
    ))}

  </tbody>
</table>
     
    </div>
  )
}

export default View
