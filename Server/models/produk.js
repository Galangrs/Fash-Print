"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Produk extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Produk.belongsTo(models.Status, {
                as: "status",
                foreignKey: "status_id",
                primaryKey: "id_status",
            });
            Produk.belongsTo(models.Kategori, {
                as: "kategori",
                foreignKey: "kategori_id",
                primaryKey: "id_kategori",
            });
        }
    }
    Produk.init(
        {
            id_produk: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nama_produk: DataTypes.STRING,
            harga: DataTypes.STRING,
            kategori_id: {
                type: DataTypes.INTEGER,
            },
            status_id: {
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            modelName: "Produk",
            tableName: "Produk",
        }
    );
    return Produk;
};
