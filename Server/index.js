const express = require('express');
const cors = require("cors");
const connect = require('./config/db');
const  router = require('./Routes/router');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/',router);

app.get('/',(req,res)=>{
    res.send('Working...');
})
const PORT = process.argv[2] || 8080;


app.listen(PORT,async()=>{
    try{
        
        console.log(`server is listening on http://localhost:${PORT}`);
        await connect();
    }catch(err){
        console.error(err.message);
    }
    
})
