const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Qurilo_Solutions");



          //....I have to use this code snippet if that process is not working....

// \const uploaded_file=mongoose.Schema(
// {
//     file_name:String,
//     type:String,
//     file_content:String   //use of buffer 
// }
// );




const user=mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    dob:Date,
    residential_address:String,
    permanent_address:String,
    file_name:String,
    type:String,
    upload_docs:[],
})

module.exports=mongoose.model('user_detail',user);
