var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chastain Marchildon'});
});
router.get('/projects',indexController.projects);
router.get('/about',indexController.about);

module.exports = router;
