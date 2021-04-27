const friendsController = require('../controllers/friends-controllers');

module.exports = (app) => {
    app.get('/api', friendsController.greeting)
};
