const express =require('express');
const chalk =require('chalk');
const path=require('path')
const app=express();// new optional

var nav = [
    {
        link:'/books',
        title:'Books'
    },
    {
        link:'/authors',
        title:'Authors'
    },
    {
<<<<<<< HEAD
        link:'/sign/login',
        title:'LogIn'
    },
    {
        link:'/sign/signup',
        title:'SignUp'
    },
    {
        link:'/admin/addbook',
        title:'Add Book'
    },
    {
        link:'/admin/addauthor',
        title:'Add Author'
    },
    
    ];

const booksRouter = require('./src/routes/bookRoutes')(nav);   // passing nav to booksRoutes.js (routerFunction)
const authorsRouter = require('./src/routes/authorsRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
=======
        link:'/addbook',
        title:'Add Book'
    },
    {
        link:'/addauthor',
        title:'Add Author'
    },
    {
        link:'/login',
        title:'LogIn'
    },
    {
        link:'/login/signup',
        title:'SignUp'
    }
    ];




const booksRouter = require('./src/routes/bookRoutes')(nav);   // passing nav to booksRoutes.js (routerFunction)
const authorsRouter = require('./src/routes/authorsRoutes')(nav);
const addAuthorRouter = require('./src/routes/addAuthorRoutes')(nav);
const addBookRouter = require('./src/routes/addBookRoutes')(nav);
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8
const signRouter = require('./src/routes/signRoutes')(nav);




app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
<<<<<<< HEAD
app.use('/sign',signRouter);
app.use('/admin',adminRouter);

=======
app.use('/login',signRouter);
app.use('/addauthor',addAuthorRouter);
app.use('/addbook',addBookRouter);
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8

app.use(express.static(path.join(__dirname,'public')));
app.set('views','./src/views');
app.set('view engine','ejs');

<<<<<<< HEAD


=======
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8
app.get('/',(req,res)=>{
res.render('index',
    {
        nav,
<<<<<<< HEAD
        title:'Library',
        flag:-1,
    })

}).listen(4000,()=>{
    console.log(`${chalk.green('listening to port : ')}${chalk.green('4000')}`);
}); 

=======
        title:'Library'
    })

}).listen(4000,()=>{
    console.log(`listening to port ${chalk.green('4000')}`)
}); 


>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8
