var express = require('express');
var router = express.Router();
var quizzesController = require('../controllers/quizzesController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/credits', function(req, res, next) {
  res.render('credits');
});

router.get('/quizzes', quizzesController.quizzesIndex);

module.exports = router;
