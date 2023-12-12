const { sequelize, Produk, Kategori, Status } = require("../models");

class Controller {
    static async getAvailableToSell(req, res, next) {
        try {
            const result = await Produk.findAll({
                attributes: ["id_produk", "nama_produk", "harga"],
                include: [
                    {
                        model: Kategori,
                        attributes: ["nama_kategori"],
                        as: "kategori",
                    },
                    {
                        model: Status,
                        attributes: ["nama_status"],
                        as: "status",
                        where: {
                            nama_status: "bisa dijual",
                        },
                    },
                ],
                order: [["id_produk", "ASC"]],
            });
            const data = result.map((item, index) => ({
                no: index + 1,
                id_produk: item.id_produk,
                nama_produk: item.nama_produk,
                kategori: item.kategori
                    ? item.kategori.nama_kategori
                    : "item tidak memili kategori",
                harga: item.harga,
                status: item.status,
            }));
            console.log(data);
            res.status(200).json({ data });
        } catch (error) {
            next(error);
        }
    }

    static async postProduct(req, res, next) {
        const { nama: nama_produk, harga, kategori_id } = req.body;
        try {
            if (!nama_produk || !harga) {
                throw {
                    name: "InvalidPostProduct",
                    message: "Nama dan harga tidak boleh kosong",
                };
            }
            await Produk.create({
                nama_produk,
                harga,
                kategori_id,
                id_status: 1,
            });
            res.status(200).json({
                ket: `Product ${nama_produk} Berhasil ditambahkan`,
            });
        } catch (error) {
            next(error);
        }
    }

    static async putProduct(req, res, next) {
        const { id_produk } = req.params;
        const { nama: nama_produk, harga, kategori_id, status_id } = req.body;
        try {
            if (!id_produk) {
                throw {
                    name: "InvalidPutProduct",
                    message: "ID tidak boleh kosong",
                };
            }
            if (!nama_produk || !harga) {
                throw {
                    name: "InvalidPutProduct",
                    message: "Nama dan harga tidak boleh kosong",
                };
            }
            await Produk.update(
                {
                    nama_produk,
                    harga,
                    kategori_id,
                    status_id,
                },
                {
                    where: {
                        id_produk,
                    },
                }
            );
            res.status(200).json({
                ket: `Product ${nama_produk} Berhasil diupdate`,
            });
        } catch (error) {
            next(error);
        }
    }

    static async deleteProduct(req, res, next) {
        const { id_produk } = req.params;
        try {
            if (!id_produk)
                throw {
                    name: "InvalidDeleteProduct",
                    message: "id tidak boleh kosong",
                };
            const data = await Produk.findOne({
                where: {
                    id_produk,
                },
            });
            if (!data)
                throw { name: "forbiden", message: "Product tidak ditemukan" };
            await Produk.destroy({
                where: {
                    id_produk,
                },
            });
            res.status(200).json({ ket: "Product berhasil dihapus" });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Controller;
