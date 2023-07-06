const Skill = require('../models/skill')

module.exports = {
    index, 
    show, 
    new: newSilk,
    create
};

function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
}

function newSKill(req, res) {
    res.render('skills/new', { title: 'New Skill'});
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }