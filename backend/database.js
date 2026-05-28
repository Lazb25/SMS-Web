const mysql=require('mysql2')
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sms'
})
//checking db connection using connect() method

con.connect((err)=>{
    if(err){
        return console.log("Error connecting to db")
    }
    return console.log("Database Connected succesfully!")
})
module.exports=con