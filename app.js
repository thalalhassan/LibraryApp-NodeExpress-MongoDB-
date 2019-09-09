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
const signRouter = require('./src/routes/signRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);





app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/sign',signRouter);
app.use('/admin',adminRouter);



app.use(express.static(path.join(__dirname,'public')));
app.set('views','./src/views');
app.set('view engine','ejs');


app.get('/',(req,res)=>{
res.render('index',
    {
        nav,
        title:'Library',
        flag:-1,
    })

}).listen(3333,()=>{
    console.log(`${chalk.green('listening to port : ')}${chalk.green('3333')}`);
}); 

