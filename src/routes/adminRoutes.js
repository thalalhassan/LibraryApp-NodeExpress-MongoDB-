const express=require('express')
const adminRouter = express.Router();
const multer =require('multer');

const authorData = require('../model/authorData.js')
const bookData = require('../model/bookData.js')

// var uploading = multer({
//     dest: __dirname + '../public/img/',
//     limits: {fileSize: 1000000, files:1},
//   })
  

function router(nav){
   
adminRouter.route('/addauthor').get((req,res) => {
    res.render('addauthor',
        {
            nav,
            title:'Add Author',
            flag:0
        })
    
});
adminRouter.route('/addauthor/add').get((req,res) => {
    // const image = req.files.map((file) => {
    //     return {
    //       filename: file.filename,
    //       originalname: file.originalname
    //     }
    //   })
    var item={

        Name:req.param('Name'),
        Country:req.param('Country'),
        // Image:image,
    }
    var author = new authorData(item);
    author.save();
    res.redirect('/authors')    
});

adminRouter.route('/addauthor/edit/:id').get((req,res) => {
    const id = req.params.id 
    authorData.updateOne({_id:id},{
       
        Name:req.param('Name'),
        Country:req.param('Country'),
        },
        ()=>{ 
        res.redirect('/authors')
        });
});
   
adminRouter.route('/addbook').get((req,res) => {
    res.render('addbook',
        {
            nav,
            title:'Add Book',
            flag:0
            
        })
    
});

adminRouter.route('/addbook/add').get((req,res) => {
    var item={
        Title:req.param('Title'),
        Author:req.param('Author'),
        Genre:req.param('Genre')
    }
    var book = new bookData(item);
    book.save()
    res.redirect('/books')    
});

adminRouter.route('/addbook/edit/:id').get((req,res) => {
    const id = req.params.id 
    bookData.updateOne({_id:id},{
        Title:req.param('Title'),
        Author:req.param('Author'),
        Genre:req.param('Genre')
        },
        ()=>{ 
    res.redirect('/books')    
    });
});




return adminRouter;
}



module.exports = router;

