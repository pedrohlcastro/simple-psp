module.exports = (sequelize, DataType) => {
    const Payable = sequelize.define(
        'Payable', {
            id: DataType.INTEGER,
            value: DataType.DECIMAL(10, 2),
            fee: DataType.DECIMAL(10, 2),
            transactionId: DataType.INTEGER,
            statusId: DataType.INTEGER,
            userId: DataType.INTEGER,
        },
        {
            timestamps: true,
        },
    );

    Payable.associate = (models) => (
        models.Payable.belongsTo(models.Transaction, { foreignKey: 'transactionId', as: 'Transaction' })
    );

    Payable.associate = (models) => (
        models.Payable.belongsTo(models.Status, { foreignKey: 'statusId', as: 'Status' })
    );

    Payable.associate = (models) => (
        models.Payable.belongsTo(models.User, { foreignKey: 'userId', as: 'User' })
    );
};
