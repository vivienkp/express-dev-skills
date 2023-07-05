const skills = [
    {id: 1, skill: 'Basic HTML', done: true},
    {id: 2, skill: 'Basic CSS', done: true},
    {id: 3, skill: 'Basic Javascript', done: true},
    {id: 4, skill: 'Full Stack', done: false}
];

module.exports = {
    getAll,
    getOne
};
	
function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);                       
};

function getAll() {
    return skills;
};``