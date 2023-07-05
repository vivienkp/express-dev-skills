var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/skills');

//GET request /skills
router.get('/', skillsCtrl.index);

//Get /todos/:id
router.get('/:id', skillsCtrl.show);
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

module.exports = router;
