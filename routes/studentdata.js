const express=require("express")
const studentEndata=require("../controller/studentdata")
const router=express.Router();


router.post('/detail',studentEndata.saveStudentEnrolmentData)
router.get('/detail',studentEndata.getStudentEnrolmentData)
router.get('/detail1',studentEndata.get1ToDB)
router.get('/detail2',studentEndata.get2ToDB)
router.get('/detail3',studentEndata.get3ToDB)
router.put('/detail',studentEndata.updateStudentEnrolmentData)
router.delete('/detail',studentEndata.deleteStudentEnrolmentData)
module.exports=router