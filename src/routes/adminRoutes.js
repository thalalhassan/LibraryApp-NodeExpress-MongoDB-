const express=require('express')
const fs = require('fs')
const path = require('path')
const multer = require('multer')
const adminRouter = express.Router()
const authorData = require('../model/authorData.js')
const bookData = require('../model/bookData.js')
  

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
    var item={

        Name:req.param('Name'),
        Country:req.param('Country'),
        ImageUrl:req.param('ImageUrl'),

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
        ImageUrl:req.param('ImageUrl'),

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
        Genre:req.param('Genre'),
        ImageUrl:req.param('ImageUrl'),

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
        Genre:req.param('Genre'),        
        ImageUrl:req.param('ImageUrl'),

        },
        ()=>{ 
    res.redirect('/books')    
    });
});




return adminRouter;
}



module.exports = router;
