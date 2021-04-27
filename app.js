const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`Listnening on port ${port}`)
})

app.listen(port, () => {
    console.log(`Listnening on port ${port}`)
});

