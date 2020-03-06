const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.htm');

});

app.get('/about', (req,res) => {
    res.sendFile(__dirname + '/about.htm');

});

app.get('/contact', (req,res) => {
    res.sendFile(__dirname + '/contact.htm');

});



const port = process.env.PORT || 3000

app.listen(port,()=> {
    console.log(`listening on port ${port}...`);
});