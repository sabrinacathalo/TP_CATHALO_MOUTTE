const express = require('express');
const app = express();
const Routes = require('./route')

const HTTP_PORT = 8000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 


app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`)
});

//Basic route
app.get('/', (req, res) => {
    res.json({message: 'Hello World'});
});

// Routes
app.use('/api', Routes);
