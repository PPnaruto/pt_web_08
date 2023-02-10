const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    university:{
        university_id:mongoose.Schema.Types.ObjectId,
        university_name:String,
        _id:false
    },
    courses:[{
        course_id:mongoose.Schema.Types.ObjectId,
        course_name:String,
        _id:false
    }],
    teachers:[{
        teacher_id:String,
        teacher_name:String,
        _id:false
    }]
});

const Students = mongoose.model("Student",studentSchema);

module.exports = {Students}