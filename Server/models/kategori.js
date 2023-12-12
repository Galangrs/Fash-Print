"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Kategori extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Kategori.hasOne(models.Produk, {
                foreignKey: "kategori_id",
                as: "kategori",
                primaryKey: "id_kategori",
            });
        }
    }
    Kategori.init(
        {
            id_kategori: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nama_kategori: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Kategori",
            tableName: "Kategori",
        }
    );
    return Kategori;
};
