var express = require('express')
    , router = express.Router();

/*  Index Routes */

var IndexController = require("../controllers/IndexController");
router.get('/',IndexController.index);

/*Comment Routes*/
var TaskController = require("../controllers/TaskController");
router.get('/tasks/:id',TaskController.view);

module.exports = router;