const {Student}=require('../models/student');

// insert ops
const saveStudentEnrolmentData= async function(req,res){
    const studentData=req.body;
 
try {
    const studentObj=studentData.map((val)=>{
        return({
        firstName:val.firstName,
        lastName:val.lastName,
        salary:val.salary,
        department:val.department,
        lastCompany:val.lastCompany,
        lastSalary:val.lastSalary,
        overallExp:val.overallExp,
        contactInfo:val.contactInfo,
        yearGrad:val.yearGrad,
        gradStream:val.gradStream
})
})
const insertManyResponce=await Student.insertMany(studentObj);
console.log("insertManyResponce",insertManyResponce)
    return res.status(200).send({success:insertManyResponce}); 
    } 
catch (error) {
    console.log("error occured while saving the data=>",error);
     return res.status(500).send({message:"something went wrong while inserting data"})
  }
}

// read or query ops

const getStudentEnrolmentData= async function(req,res){
    const studentFirstName=req.query.firstName; 
try {
    const student=await Student.find({firstName:studentFirstName});
    console.log("student",student)
    return res.status(200).send({student})
}
 catch (error) {
    console.log("error occured while fetching the data=>",error);
    return res.status(500).send({message:"something went wrong while fetching data"})
   }
}

//  salary more than 30000

const get1ToDB= async function(req,res){
    const query={salary:{$gt:"30000"}}; 
try {
    const student=await Student.find(query);
    console.log("student",student)
    return res.status(200).send({student})
}
 catch (error) {
    console.log("error occured while fetching the data=>",error);
    return res.status(500).send({message:"something went wrong while fetching data"})
   }
}

//   experience more than 1 years.

const get2ToDB= async function(req,res){
    const query={overallExp:{$gt:"1"}} 
try {
    const student=await Student.find(query);
    console.log("student",student)
    return res.status(200).send({student})
}
 catch (error) {
    console.log("error occured while fetching the data=>",error);
    return res.status(500).send({message:"something went wrong while fetching data"})
   }
}

// graduated after 2015 and having experience more than 1 year

const get3ToDB= async function(req,res){
    const query={yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}}; 
try {
    const student=await Student.find(query);
    console.log("student",student)
    return res.status(200).send({student})
}
 catch (error) {
    console.log("error occured while fetching the data=>",error);
    return res.status(500).send({message:"something went wrong while fetching data"})
   }
}


// update ops
const updateStudentEnrolmentData= async function(req,res){
    const filter=req.body.filter
    const update=req.body.update
    const changeData={
        $set:update
    }
try {
    const student=await Student.updateMany(filter,changeData)
    return res.status(200).send({updateDetails:student})
} catch (error) {
    console.log("error occured while updating the data=>",error);
    return res.status(500).send({message:"something went wrong while updating data"})
}
}
const deleteStudentEnrolmentData= async function(req,res){
    const studentDeleteLastCompany=req.body.lastCompany;
    const filter={
        "lastCompany":studentDeleteLastCompany
    }
    
try {
    const DeleteResponce=await Student.deleteMany(filter)
    return res.status(200).send({"DeleteDetails":DeleteResponce});
}
 catch (error) {
    console.log("error occured while delete the data=>",error);
    return res.status(500).send({message:"something went wrong while delete data"})
}
}

module.exports={saveStudentEnrolmentData,getStudentEnrolmentData,updateStudentEnrolmentData,get1ToDB,get2ToDB,get3ToDB,deleteStudentEnrolmentData}