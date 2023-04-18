const bodyParser = require('body-parser');
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const app=express();
var mongoURL='mongodb://127.0.0.1:27017/sheyrooms';
app.use(cookieParser());


mongoose.connect(mongoURL,{useUnifiedTopology:true ,useNewUrlParser:true})
.then(()=>{console.log('connected to mongodb succefully')})
.catch((err)=>console.log(err))

const userControllers=require('./server/controllers/UserController')
 
app.use(cors())
const port=4000;

app.use('v1.0.0/api/userInfos',userControllers);

app.use(bodyParser.urlencoded({extended:true}))
app.listen(port,()=>{
    console.log(`the application is running on port ${port}`);
});
