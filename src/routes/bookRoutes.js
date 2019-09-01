const express=require('express');
const booksRouter = express.Router();
const bookData = require('../model/bookData.js')

function router(nav){
    

booksRouter.route('/').get((req,res) => {
   bookData.find().then((books)=>{ 
       res.render('books',
        {
            nav,
            title:'Books',
<<<<<<< HEAD
            books,
            flag:1
=======
            books
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8
        })
    });
    
});
booksRouter.route('/:id').get((req,res)=>{
    const id = req.params.id //to id value
    bookData.findOne({_id:id}).then((book)=>{ 
    res.render('book',
    {
        nav,
<<<<<<< HEAD
        title:book.Title,
=======
        title:'single Book',
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8
        book
        })
    });
});
booksRouter.route('/delete/:id').get((req,res)=>{
    const id = req.params.id //to id value
    bookData.deleteOne({_id:id}).then(()=>{ 
    res.redirect('/books');
    });
});

booksRouter.route('/editbook/:id').get((req,res)=>{
    const id = req.params.id //to id value
    bookData.findOne({_id:id}).then((book)=>{ 
        res.render('addbook',
        {
            nav,
            title:'Edit Book',
            book,
            flag:1
            })
        });
});


return booksRouter;
}

module.exports = router;