"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Task = _interopRequireDefault(require("./Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Projects = _database.sequelize.define('projects', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  priority: {
    type: _sequelize["default"].INTEGER
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  delivery_date: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

Projects.hasMany(_Task["default"], {
  foreignKey: 'project_id',
  sourceKey: 'id'
});

_Task["default"].belongsTo(Projects, {
  foreignKey: 'project_id',
  sourceKey: 'id'
});

var _default = Projects;
exports["default"] = _default;