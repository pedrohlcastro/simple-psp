module.exports = {
    up: (queryInterface, DataTypes) => queryInterface.createTable('Transaction', {
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
        description: {
            type: DataTypes.STRING(140),
        },
        isCreditCard: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        cardNumber: {
            type: DataTypes.STRING(4),
            allowNull: false,
        },
        cardUserName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        cardExpireDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        cvv: {
            type: DataTypes.STRING(3),
            allowNull: false,
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

    down: (queryInterface) => queryInterface.dropTable('Transactions'),
};
