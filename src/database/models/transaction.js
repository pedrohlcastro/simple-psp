module.exports = (sequelize, DataType) => {
    const Transaction = sequelize.define(
        'Transaction', {
            id: DataType.INTEGER,
            userId: DataType.INTEGER,
            value: DataType.DECIMAL(10, 2),
            description: DataType.STRING(140),
            isCreditCard: DataType.BOOLEAN,
            cardNumber: DataType.STRING(4),
            cardUserName: DataType.STRING(50),
            cardExpireDate: DataType.DATEONLY,
            cvv: DataType.STRING(3),
        },
        {
            timestamps: true,
        },
    );

    Transaction.associate = (models) => (
        models.Transaction.belongsTo(models.User, { foreignKey: 'userId', as: 'User' })
    );

    return Transaction;
};
