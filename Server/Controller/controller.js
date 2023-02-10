const { Course } = require("../models/Courses.model")
const { Students } = require("../models/Students.model");
const { Teacher } = require("../models/Teacher.model");
const { University } = require("../models/University.model")


let getStudentData=async(page,pagesize)=>{
    try{
        let limit = pagesize>0 ? pagesize : 20;
        let skip = page > 0 ? pagesize*(page-1) : 0;
        let data = await Students.find().skip(skip).limit(limit);
        
        let info = data.map((ele)=>{
           const {name,university,courses} = ele;
           let len = courses.length;
           return {name,university,no_of_courses:len};
        })
        // console.log(info);
        return info;
    }catch(err){
        console.error(err.message);
    }
}

let getUniversities =async(page,pagesize)=>{
    let limit = pagesize>0 ? pagesize : 20;
    let skip = page > 0 ? pagesize*(page-1) : 0;
    return await University.find().skip(skip).limit(limit);
}

let getStudentCourses = async()=>{
    
    let data = await Students.find().limit(20);
    data = data.map((ele)=>{
        const { name,courses } = ele;
        
        return {name,courses};
    })
    for(let i=0;i<data.length;i++){
        // data[i] = await Course.findById()
        // console.log(data[i].courses);
        const arr = data[i].courses;
        for(let j=0;j<arr.length;j++){
            // console.log(arr[j]);

            const {course_name,duration} = await Course.findById(arr[j].course_id);
            data[i].course_name = course_name,
            data[i].duration = duration;
           
            console.log({course_name,duration});
        }
        delete data[i].courses;
    }
    
    return data;
}

let getTeacher=async(page,pagesize)=>{
    let limit = pagesize>0 ? pagesize : 20;
    let skip = page > 0 ? pagesize*(page-1) : 0;
    const data = await Teacher.find().skip(skip).limit(limit);
    let info = data.map((ele)=>{
        const {teacher_name,students_opt} = ele;
        return {teacher_name,students_opt}
    })
    // console.log(data)
     return info;
}

let addStudent=async(data)=>{
   const student = await Students.create({...data});
    return student;
}

module.exports={
    getStudentData,
    getUniversities,
    getStudentCourses,
    getTeacher,
    addStudent,
}