const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
// Categories JSON Data
const categories = require('./data/categories.json');

app.use(cors());
app.get('/',(req,res) => {
    res.send('Hellow world');
})

// Categories API
app.get('/categories',(req,res)=>{
    res.send(categories);
})

app.listen(port,()=>{
    console.log(`The api is running on the port: ${port}`);
})