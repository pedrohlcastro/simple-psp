module.exports = (sequelize, DataType) => (
    sequelize.define(
        'Transaction', {
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
