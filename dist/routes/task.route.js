"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _project = require("../controllers/project.controller");

var _task = require("../controllers/task.controller");

var router = (0, _express.Router)();
router.post('/', _task.createTask);
router.get('/', _task.getTasks);
router.get('/:id', _task.getOneTask);
router["delete"]('/:id', _task.deleteTask);
router.get('/project/:project_id', _task.getOneTaskByProject);
var _default = router;
exports["default"] = _default;