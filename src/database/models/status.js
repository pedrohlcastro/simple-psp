module.exports = (sequelize, DataType) => {
    const Status = sequelize.define(
        'Status', {
            id: DataType.INTEGER,
            name: DataType.STRING(20),
        },
        {
            timestamps: true,
        },
    );

    Status.associate = (models) => (
        models.Status.hasMany(
            models.Payable, { as: 'Payable' },
        )
    );

    return Status;
};
