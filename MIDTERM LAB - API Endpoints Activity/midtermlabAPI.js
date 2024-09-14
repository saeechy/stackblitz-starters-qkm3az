//Reyes, Jose Favian P.     WD-303
const express= require('express');
const app= express();
const port= 3000;

const bodyparse = require('body-parser')
app.use(bodyparse.json());

//API
const user= [
    {id:1, name:'Carmela', email:'mela@gmail.com', age:25, salary:25000 },
    {id:2, name:'Joseph', email:'joe@yahoo.com', age:30, salary:45000 },
    {id:3, name:'James', email:'james@msn.com', age:35, salary:30000 },
    {id:4, name:'John', email:'john@gmail.com', age:40, salary:25000 },
    {id:5, name:'Frank', email:'frank@yahoo.com', age:45, salary:45000 },
    {id:6, name:'Alex', email:'alex@msn.com', age:21, salary:33000 },
];

app.get('/',(req, res) => {
    res.send('Root Routes: http://localhost:3000/user, http://localhost:3000/user/1(replace 1 if you want to change), you can also POST and DELETE')
});

app.get('/user', (req, res) => {
    res.json(user);
});

app.get('/user/:id', (req,res) =>{
    const userID = parseInt(req.params.id, 10)
    const User= user.find (u=>u.id ===userID);
    if (User){
        res.json(User);
    }
    else{
        res.status(404).send('User is not found!');
    }
});

app.post('/user', (req,res) => {
    const userNew= req.body;
    userNew.id= lengthUser? user[lengthUser -1].id + 1:1;
    user.push(userNew);
    res.status(201).json(userNew);
});

app.delete('/user/:id', (req, res) =>{
    const userID= parseInt(req.params.id, 10);
    const index= user.findIndex(u=>u.id === userID);
    
    if(index !== -1) {
        const userDelete= user.splice(index,1);
        res.json(userDelete);
    }
    else {
        res.status(404).send('User is not found!')
    }
});

app.listen(3000, function(){
    console.log('Server is running on http://localhost:3000')
});