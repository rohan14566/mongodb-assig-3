const mongoose=require("mongoose");
const url="mongodb://127.0.0.1:27017/createData";

const connect=async()=>{
    try {
        const client=await mongoose.connect(url);
        console.log("Connected to the db successfully")
        return client;
    } catch (error) {
        console.log("error in connection via mongoose")
    }
}
connect().catch(err=>err);

module.exports=connect