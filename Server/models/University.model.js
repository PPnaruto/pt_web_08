const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
    university_name:String,
    no_of_students:Number
});

const University = mongoose.model("University",universitySchema);

module.exports = {University}