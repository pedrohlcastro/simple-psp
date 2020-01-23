module.exports = {
    up: (queryInterface, DataTypes) => queryInterface.createTable('Payable', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        value: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        fee: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        transactionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Transaction',
                key: 'id',
            },
        },
        statusId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Status',
                key: 'id',
            },
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            },
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

    down: (queryInterface) => queryInterface.dropTable('Payables'),
};
