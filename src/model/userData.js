const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://thalalhassan:thalalhassan@webapp-a2odf.mongodb.net/test?retryWrites=true&w=majority');



const Schema =mongoose.Schema;
var newUserData= new Schema({
    name:String,
    userType:String,
    email:String,
    phone:String,
    password:String
});

var userData = mongoose.model('user-Data',newUserData);

module.exports=userData;

