var Task = require('../models/Task'),
    taskObj = new Task();


function TaskController(){

};

TaskController.prototype.view = function (req,res) {
    taskObj.get(req.params.id, function (err, task) {
        res.render('tasks/task', {task: task});
    });
};

module.exports = new TaskController();