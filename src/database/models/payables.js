module.exports = (sequelize, DataType) => (
    sequelize.define(
        'Payable', {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
        },
        {
            timestamps: true,
        },
    )
);
