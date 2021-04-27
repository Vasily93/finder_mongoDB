const express = require('express');
const app = express();
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

routes(app);


app.listen(port, () => {
    console.log(`Listnening on port ${port}`)
});

module.exports = app;