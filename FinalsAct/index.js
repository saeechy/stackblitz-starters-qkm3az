const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'))
app.get('/', (req,res) => {
    res.render('index', {
        firstName: 'Jose Favian',
        lastName: 'Reyes',
        age: 20,
        add: 'Santa Rosa, Nueva Ecija',
        course: 'BSIT Major in WebDev'
        
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});