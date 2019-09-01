const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryAppDB');
<<<<<<< HEAD
// mongoose.connect('mongodb+srv://encodeURIComponent(thalalhassan:thalal424)@webapp-a2odf.mongodb.net/test?retryWrites=true&w=majority');
=======
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8

const Schema = mongoose.Schema;

var newAuthorData = new Schema({
    Name:String,
    Country:String,
<<<<<<< HEAD
    Image: { data: Buffer, contentType: String }


=======
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8

});

var authorData= mongoose.model('author-Data',newAuthorData);
module.exports = authorData;
