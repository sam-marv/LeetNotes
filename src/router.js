const express = require('express');
const userController = require('./controllers/user/index'); // the "/index" part of the path is technically not required here, by default, when provided with a folder, the index file will be imported

const pageController = require('./controllers/page');
const tagController = require('./controllers/tag');
const leetcodeController = require('./controllers/leetcode');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');

const Router = express.Router();
Router.use(addModelsToRequest);

Router.get('/users', userController.list);
Router.post('/users', userController.create);
Router.get('/users/:id/pages', pageController.list);
Router.get('/users/:id', userController.show);

Router.post('/login', userController.login);
Router.delete('/logout', userController.logout);
Router.get('/me', userController.showMe);

// Pages Routes
// Router.get('users/pages/:userid', pageController.list);
Router.post('/pages', pageController.create);
Router.patch('/pages', pageController.update);
Router.get('/pages/:pageid', pageController.getPage);

// Tags routes
Router.get('/tags', tagController.list);
Router.post('/tags', tagController.create);

// Leetcode routes
Router.get('/leetcodes', leetcodeController.list50);

// These actions require authentication (only valid logged in users can do these things)
// The checkAuthentication middleware will only run for these specified routes.
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

module.exports = Router;
