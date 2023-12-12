"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Status extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Status.hasOne(models.Produk, {
                foreignKey: "status_id",
                as: "status",
                primaryKey: "id_status",
            });
        }
    }
    Status.init(
        {
            id_status: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nama_status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Status",
            tableName: "Status",
        }
    );
    return Status;
};
