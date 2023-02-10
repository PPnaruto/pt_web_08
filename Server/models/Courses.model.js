const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
   course_name:String,
   duration: String,
   teachers:[{
    teacher_id:mongoose.Schema.Types.ObjectId,
    teacher_name:String,
    _id:false
   }]
});

const Course = mongoose.model("Course",courseSchema);

module.exports = { Course }