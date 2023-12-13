const fetchingJadi = require("../helper/feching");

module.exports = {
    async up(queryInterface, Sequelize) {
        const data = await fetchingJadi();

        await queryInterface.bulkInsert("Status", [
            {
                id_status: 1,
                nama_status: "bisa dijual",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id_status: 2,
                nama_status: "tidak bisa dijual",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);

        await queryInterface.bulkInsert("Kategori", data.kategori);
        await queryInterface.bulkInsert("Produk", data.produk);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Status", {}, {});
        await queryInterface.bulkDelete("Kategori", {}, {});
        await queryInterface.bulkDelete("Produk", {}, {});
    },
};
