const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller.js");

router.get("/kategori", Controller.getCategories);
router.get("/", Controller.getAvailableToSell);
router.post("/", Controller.postProduct);
router.get("/:id_produk", Controller.getProductDetail);
router.put("/:id_produk", Controller.putProduct);
router.delete("/:id_produk", Controller.deleteProduct);

module.exports = router;
