const express = require('express');
const app = express();

const HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`)
});

//Basic route
app.get('/', (req, res) => {
    res.json({message: 'Hello World'});
});

// Routes "Todo"
app.use('/api', Routes);

// Fallback route
app.use((req, res) => {
    res.status(404);
});
