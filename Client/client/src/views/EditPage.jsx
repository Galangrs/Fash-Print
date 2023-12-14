import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchProductData,
    fetchUpdateProduct,
    fetchCategoriesData,
} from "../strores/actions/action.js";
import Form from "react-bootstrap/Form";

export default function EditPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.todos.categories);
    const [LocalCategorytData, setLocalCategorytData] = useState(categories || []);

    const productData = useSelector((state) => state.todos.product);
    const [localProductData, setLocalProductData] = useState(productData);

    useEffect(() => {
        dispatch(fetchCategoriesData()).then((data) => setLocalCategorytData(data));
        dispatch(fetchProductData(id))
            .then((data) => {
                if (!data) {
                    navigate('/');
                } else {
                    setLocalProductData(data);
                }
            });
    }, []);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLocalProductData({
            ...localProductData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchUpdateProduct(id, localProductData));
        navigate("/");
    };

    return (
        <div className="container">
            <div>
                <h2>Edit Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nama_produk">Nama:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nama_produk"
                            name="nama_produk"
                            value={localProductData.nama_produk}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="kategori_id">Kategori :</label>
                        <Form.Select
                            aria-label="Kategori"
                            name="kategori_id"
                            value={localProductData.kategori_id || ""}
                            onChange={handleInputChange}
                        >
                            <option value="" disabled defaultValue>
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
                        <label htmlFor="price">Harga:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="harga"
                            name="harga"
                            value={localProductData.harga}
                            onChange={handleInputChange}
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">
                        Update Produk
                    </button>
                </form>
            </div>
        </div>
    );
}
