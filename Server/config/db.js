const mongoose = require('mongoose');

// const dotenv = require('dotenv');

// dotenv.config();
// const USERNAME = process.env.DB_USER_NAME
// const PASSWORD = process.env.DB_USER_PASSWORD

mongoose.set('strictQuery', true)

async function connect(){
    // await mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.aclyoti.mongodb.net/Education_Board`);
    await mongoose.connect(`mongodb+srv://Educational_Board:Educational_Board_123@cluster0.aclyoti.mongodb.net/Education_Board`);

    //we could make this url secret using .env file by putting DB name and password in .env file
    //as you can see in commented Code...
    //But for now to make it run on outside local system and since server is not deployeed, I am using URL directly.
}

module.exports=connect;