const { Produk, Kategori, Status } = require("../models");

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
                            nama_status: true,
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
                    : "item tidak memilik kategori",
                harga: String(item.harga),
                status: "bisa dijual",
            }));
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    static async getProductDetail(req, res, next) {
        const { id_produk } = req.params;
        try {
            const item = await Produk.findOne({
                attributes: [
                    "id_produk",
                    "nama_produk",
                    "harga",
                    "kategori_id",
                ],
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
                    },
                ],
                order: [["id_produk", "ASC"]],
                where: {
                    id_produk,
                },
            });
            if (!item)
                throw { name: "notfound", message: "Produk tidak ditemukan" };
            if (!item.status.nama_status)
                throw { name: "forbiden", message: "Produk tidak bisa dijual" };
            res.status(200).json({
                id_produk: item.id_produk,
                nama_produk: item.nama_produk,
                kategori: item.kategori
                    ? item.kategori.nama_kategori
                    : "item tidak memilik kategori",
                kategori_id: item.kategori_id,
                harga: String(item.harga),
                status: "bisa dijual",
            });
        } catch (error) {
            next(error);
        }
    }

    static async postProduct(req, res, next) {
        const { nama_produk, harga, kategori_id } = req.body;
        let config;
        try {
            if (!nama_produk || !harga) {
                throw {
                    name: "InvalidPostProduct",
                    message: "nama_produk dan harga tidak boleh kosong",
                };
            }
            if (Number(harga) != harga) {
                throw {
                    name: "InvalidPostProduct",
                    message: "harga hanya boleh angka",
                };
            } else if (Number(kategori_id) != kategori_id) {
                throw {
                    name: "InvalidPostProduct",
                    message: "kategori_id hanya boleh angka",
                };
            } else if (kategori_id == "") {
                config = {
                    nama_produk,
                    harga,
                    status_id: 1,
                };
            } else {
                config = {
                    nama_produk,
                    harga,
                    kategori_id,
                    status_id: 1,
                };
            }
            await Produk.create(config);
            res.status(201).json({
                ket: `Produk ${nama_produk} Berhasil ditambahkan`,
            });
        } catch (error) {
            next(error);
        }
    }

    static async putProduct(req, res, next) {
        const { id_produk } = req.params;
        const { nama_produk, harga, kategori_id, status_id } = req.body;
        try {
            if (!id_produk) {
                throw {
                    name: "InvalidPutProduct",
                    message: "ID tidak boleh kosong",
                };
            }
            if (Number(harga) != harga) {
                throw {
                    name: "InvalidPutProduct",
                    message: "harga hanya boleh angka",
                };
            } else if (
                Number(kategori_id) != kategori_id &&
                kategori_id != null
            ) {
                throw {
                    name: "InvalidPutProduct",
                    message: "kategori_id hanya boleh angka",
                };
            }

            const item = await Produk.findOne({
                where: {
                    id_produk,
                },
            });
            if (!item)
                throw { name: "notfound", message: "Produk tidak ditemukan" };
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
            res.status(201).json({
                ket: `Produk ${nama_produk} Berhasil diupdate`,
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
                throw { name: "notfound", message: "Produk tidak ditemukan" };
            await Produk.destroy({
                where: {
                    id_produk,
                },
            });
            res.status(200).json({
                ket: `Produk ${data.nama_produk} berhasil dihapus`,
            });
        } catch (error) {
            next(error);
        }
    }

    static async getCategories(req, res, next) {
        try {
            const data = await Kategori.findAll();
            const response = data.map((el) => {
                return {
                    id_kategori: el.id_kategori,
                    nama_kategori: el.nama_kategori,
                };
            });
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Controller;
