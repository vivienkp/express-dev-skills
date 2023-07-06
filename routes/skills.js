var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');



//GET request /skills
router.get('/', skillsCtrl.index);
//GET /skills/new 
router.get('/new', skillsCtrl.new);
//Get /skills/:id
router.get('/:id', skillsCtrl.show);
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

//POST /skills
router.post('/', skillsCtrl.create);

module.exports = router;
