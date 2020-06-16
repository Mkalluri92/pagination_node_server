const express = require('express');
var cors = require('cors');

const app = express();
const port = 8081;

app.use(cors())


let setHeader = (req, res, next) => {
    res.set('Content-Type', 'application/json');
    next();
}

app.use(setHeader);

app.get('/', (req, res) => {

    let response = {
        data: []
    };
    
    for(let i=1; i<=10000; i++){
        response.data.push({
        firstName: i+''+i,
        lastName: i,
        country: 'USA',
        age: (Math.random()*100).toFixed(2)
    });
    }
     
    res.status(200).send(response);
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
