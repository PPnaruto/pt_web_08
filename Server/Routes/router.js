const express = require('express');
const { getStudentData,getUniversities,getStudentCourses,addStudent, getTeacher } = require('../Controller/controller');
const router = express.Router();


router.get('/studentdetail',async(req,res)=>{
    try{
        // const {name,university,courses} = req.query;
        const {page,pagesize} = req.query;
        const Student = await getStudentData(page,pagesize);

        res.send({
            data:Student
        })
    }catch(err){
        console.error(err.message);
        res.status(400).send({
            message:"Something Went wrong"
        })
    }
    
})

router.get('/getuniversities',async(req,res)=>{
    try{
          const {page,pagesize} = req.query;
        const Student = await getUniversities(page,pagesize);

        res.status(200).send({
            data:Student
        })
    }catch(err){
        console.error(err.message);
        res.status(400).send({
            message:"Something Went wrong"
        })
    }
    
})

router.get('/studentcourses',async(req,res)=>{
    try{
        // const {name,university,courses} = req.query;
        const Student = await getStudentCourses();

        res.status(200).send({
            data:Student
        })
    }catch(err){
        console.error(err.message);
        res.status(400).send({
            message:"Something Went wrong"
        })
    }
    
})

router.get('/teacher',async(req,res)=>{
    try{
          const {page,pagesize} = req.query;
        const Student = await getTeacher(page,pagesize);

        res.status(200).send({
            data:Student
        })
    }catch(err){
        console.error(err.message);
        res.status(400).send({
            message:"Something Went wrong"
        })
    }
    
})

router.post("/addstudent",async(req,res)=>{
    try{
        const data = req.body;
        const student = await addStudent(data);
        res.send({
            data:student
        })
    }catch(err){
        console.error(err.message);
        res.status(400).send({
            message:"Something Went wrong"
        })
    }
})

module.exports = router;