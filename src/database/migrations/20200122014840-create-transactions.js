module.exports = {
    up: (queryInterface, DataTypes) => queryInterface.createTable('Transactions', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    }),

    down: (queryInterface) => queryInterface.dropTable('Transactions'),
};
