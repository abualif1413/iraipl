const { sequelize, DataTypes } = require('../connection');

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey,
            autoIncrement,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'tbl-user',
    }
);

(async () => {
    await User.sync({ alter: true });
})();

module.exports = User;
