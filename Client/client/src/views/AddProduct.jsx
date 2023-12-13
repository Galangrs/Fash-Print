import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAddProduct,
    fetchCategoriesData,
} from "../strores/actions/action.js";
import Form from "react-bootstrap/Form";

export default function AddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const categories = useSelector((state) => state.todos.categories);
    const [LocalCategorytData, setLocalCategorytData] = useState(categories || []);

    useEffect(() => {
        dispatch(fetchCategoriesData()).then((data) => setLocalCategorytData(data));
    }, []);

    const [productData, setProductData] = useState({
        nama_produk: "",
        kategori_id: "",
        harga: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductData({
            ...productData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchAddProduct(productData)).then(res => {
            if (res) {
                navigate("/")
            }
        })
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "80vw" }}>
                <h2>Add Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nama_produk">Nama:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nama_produk"
                            name="nama_produk"
                            value={productData.nama_produk}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="kategori_id">Kategori :</label>
                        <Form.Select
                            aria-label="Kategori"
                            name="kategori_id"
                            onChange={handleInputChange}
                        >
                            <option value="" disabled defaultValue selected>
                                Pilih Option
                            </option>
                            {LocalCategorytData.map((el, index) => (
                                <option key={index} value={el.id_kategori}>
                                    {el.nama_kategori}
                                </option>
                            ))}
                        </Form.Select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="harga">Harga:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="harga"
                            name="harga"
                            value={productData.harga}
                            onChange={handleInputChange}
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">
                        ADD PRODUCT
                    </button>
                </form>
            </div>
        </div >
    );
}
