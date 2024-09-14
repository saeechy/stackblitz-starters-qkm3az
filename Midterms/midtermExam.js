// Reyes, Jose Favian P. WD302
const express = require('express');
const app = express();
const dishes = [
    {type: 'Sisig', province: 'Pampanga', price: 220},
    {type: 'Salpicao', province: 'Quezon', price: 180},
    {type: 'Bagnet', province: 'Ilocos', price: 220}
];


app.get('/dishes', function(request, response){
    response.json(dishes)
});

app.get('/dishes/:type', (request, response) =>{
    const dish = dishes.find(d => d.type.toLowerCase() === dishType.toLowerCase()); 
    const type = req.params.type;
    if (dish) {
        response.json(dish);
    }
    else {
        response.status(404).json({message: 'The record cannot be found.' })
    }
});

app.use((request, response)=>{
    response.status(404).json({message: 'The record cannot be found.'})
});

app.listen(3000, function(){
    console.log('Server is running on http://localhost:3000')
});

