function IndexController(){};

IndexController.prototype.index=function(req, res) {
    res.render('index')
};

module.exports = new IndexController();