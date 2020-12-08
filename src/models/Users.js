import Sequelize from 'sequelize'
import { sequelize } from '../database/database';

//add bcryptjs
import bcrypt from 'bcryptjs';

const Users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.TEXT
    },
    position: {
        type: Sequelize.TEXT
    },
    password: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false,
    instanceMethods: {
        encryptPassword: async function (password) {
            try {
                const salt = await bcrypt.genSalt(10);
                return bcrypt.hash(password, salt);
            } catch (error) {
                console.log("Error encryptPassword " + error);
            }
        }
    }
});


export default Users;