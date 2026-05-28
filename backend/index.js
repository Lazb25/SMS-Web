const express=require('express')
const cors=require('cors')

const con=require('./database')

const app=express()

//middlewares

app.use(express.json())
app.use(cors())
//endpoint to get a single user using id and re.params

app.get('/users/:id',(req,res)=>{
    const{id}=req.params

    con.query(`SELECT * FROM users WHERE id=${id}`,(err,data)=>{
        if(err){
            return res.status(500).json({
                message:"internal server error",
                error:err.message
            })
        }
        return res.status(200).json({
            message:"User fetched succesfully!",
            result:data[0]
        })
    })

})
//defining endpoints to get all users from sms db
app.get('/users',(req,res)=>{
    con.query("SELECT * FROM users",(err,data)=>{
        if(err){
            return res.status(500).json({
                message:"Internal server error",
                error:err.message
            })
        }
        return res.status(200).json({
            message:"User fetched succesfully!",
            result:data
        })
    })
})

//defining post endpoint to create new user to the users table in sms db

app.post('/create',(req,res)=>{
    //this helps to get form data from the frontend
    const {fname,lname,course}=req.body

    //form validation to ensure that there is no empty fields left
    if(!fname || !lname || !course){
        return res.status(400).json({
            message:"Fill all the fields"

        })
    }
    //After form validation define the sql commands to insert a new user

con.query(`INSERT INTO users VALUES(NULL,'${fname}','${lname}','${course}')`,(err)=>{
    if(err){
        return res.status(500).json({
            message:"internal server error",
            error:err.message
        })
    }
    return res.status(201).json({
        message:"User created!"
    })
})

})

//endpoint to delete a user from the users table in sms db
app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params
    con.query(`DELETE FROM users WHERE id=${id}`,(err)=>{
        if(err){
            return res.status(500).json({
                message:"internal server error",
                error:err.message
            })
        }
        return res.status(200).json({
            message:"User deleted!"
        })
    })
})
//endpoint to update a user from the users table in sms db
app.put('/update/:id',(req,res)=>{
    const {id}=req.params
    const {fname,lname,course}=req.body 
    if(!fname || !lname || !course){
        return res.status(400).json({
            message:"Fill all the fields"
        })
    }
    con.query(`UPDATE users SET fname='${fname}',lname='${lname}',course='${course}' WHERE id=${id}`,(err)=>{
        if(err){
            return res.status(500).json({
                message:"internal server error",
                error:err.message
            })
        }
        return res.status(200).json({
            message:"User updated!"
        })
    }
    )
})



//starting dev server

const port=process.env.PORT || 4000

app.listen(port,()=>{
    console.log("App is running")
})