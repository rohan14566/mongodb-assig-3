const express=require('express');
const app=express();
const bodyParser=require("body-parser");
const studentdataRouter=require("./routes/studentdata")
const connect=require("./database/mongoose")


app.use(bodyParser.json());

app.use(studentdataRouter);


app.listen(5000,async()=>{
    console.log('server is running')
    console.log("Running the database connection");
    await connect()
})