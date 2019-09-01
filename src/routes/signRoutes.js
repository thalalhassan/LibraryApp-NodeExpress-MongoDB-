const express=require('express');
const signRouter = express.Router();
<<<<<<< HEAD
const userData = require('../model/userData');


function router(nav){
signRouter.route('/login').get((req,res) => {
=======

function router(nav){

signRouter.route('/').get((req,res) => {
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8
    res.render('login',
        {
            nav,
            title:'LogIn',
        })
    
});

<<<<<<< HEAD
signRouter.route('/login/log').get((req,res) => {
    name= req.param('username');
    pwd= req.param('pwd')
    userData.findOne({name:name},(err,user)=>{
        if(!user){
            // res.send('500','User Doesn\'t exist ')
            console.log("no user")
            res.redirect('/sign/login')
        }           
        else{
            console.log(user);
            if(user.password==pwd){
                if(user.userType == "admin"){
                    console.log("admn log")
                     flag=1;
                }
                else{
                    console.log("normal log")
                      flag=0;
                }
                 res.render('index',{
                     nav,
                     title:'Library',
                     flag,
                 });

            }
            else{
                // res.send('500','Incorrect user data ')
                console.log("user data error")
                res.redirect('/sign/login')
            }
        }  

    })


    
});

=======
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8
signRouter.route('/signup').get((req,res)=>{
    res.render('signup',
    {
        nav,
        title:'SignUp',
    })
});
<<<<<<< HEAD
signRouter.route('/signup/add').get((req,res)=>{
    var item={
        name:req.param('name'),
        userType:req.param('userType').toLowerCase(),
        email:req.param('email'),
        phone:req.param('phone'),
        password:req.param('password'),
    };
    userData.findOne({$or :[{name:item.name},{email:item.email}]},(err,user)=>{
       if(!user) {
        var user = new userData(item);
        user.save().then(()=>{
            res.redirect('/sign/login')
        });
        console.log(user)
             }
        else{
            // res.send('500','Username/email already exist ')
            console.log("user exist")
            console.log(user)
            res.redirect('/sign/signup');

        }
        });
    
});






=======
>>>>>>> 27d9458439e32ecee3f3c198cb889841a71297a8

return signRouter;
}

module.exports = router;