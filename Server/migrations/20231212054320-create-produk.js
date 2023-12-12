"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Produk", {
            id_produk: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nama_produk: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            harga: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            kategori_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Kategori",
                    key: "id_kategori",
                },
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            },
            status_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Status",
                    key: "id_status",
                },
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Produk");
    },
};
