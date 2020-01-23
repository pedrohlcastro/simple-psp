module.exports = (sequelize, DataType) => {
    const User = sequelize.define(
        'User', {
            id: DataType.INTEGER,
            name: DataType.STRING(100),
        },
        {
            timestamps: true,
        },
    );

    User.associate = (models) => (
        models.User.hasMany(
            models.Transaction, { as: 'Transaction' },
        )
    );

    User.associate = (models) => (
        models.User.hasMany(
            models.Payable, { as: 'Payable' },
        )
    );

    return User;
};
