const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://thalalhassan:thalalhassan@webapp-a2odf.mongodb.net/test?retryWrites=true&w=majority');



const Schema = mongoose.Schema;

var newAuthorData = new Schema({
    Name:String,
    Country:String,
    ImageUrl:String

});

var authorData= mongoose.model('author-Data',newAuthorData);
module.exports = authorData;
