import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Task from './Task'

const Projects = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    delivery_date: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

Projects.hasMany(Task, {foreignKey: 'project_id', sourceKey: 'id'});
Task.belongsTo(Projects, {foreignKey: 'project_id', sourceKey: 'id'})

export default Projects;