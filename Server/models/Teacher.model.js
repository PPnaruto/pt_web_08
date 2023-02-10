const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
   teacher_name:String,
   course_name:String,
   students_opt:Number
});

const Teacher = mongoose.model("Teacher",teacherSchema);

module.exports = {Teacher}