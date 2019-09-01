const mongoose= require('mongoose');
<<<<<<< HEAD
 mongoose.connect('mongodb://localhost:27017/LibraryAppDB');
// mongoose.connect('mongodb+srv://encodeURIComponent(thalalhassan:thalal424)@webapp-a2odf.mongodb.net/test?retryWrites=true&w=majority');

=======
mongoose.connect('mongodb://localhost:27017/LibraryAppDB');
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8

const Schema =mongoose.Schema;
var newUserData= new Schema({
    name:String,
    userType:String,
    email:String,
<<<<<<< HEAD
    phone:String,
=======
    phone:Number,
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8
    password:String
});

var userData = mongoose.model('user-Data',newUserData);
<<<<<<< HEAD
module.exports=userData;
=======
exports=userData;
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8
