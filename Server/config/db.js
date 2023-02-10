const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const USERNAME = process.env.DB_USER_NAME
const PASSWORD = process.env.DB_USER_PASSWORD

mongoose.set('strictQuery', true)

async function connect(){
    await mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.aclyoti.mongodb.net/Education_Board`);
}

module.exports=connect;