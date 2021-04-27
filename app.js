const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    res.send({hi: 'There'})
})

app.listen(port, () => {
    console.log(`Listnening on port ${port}`)
});

module.exports = app;