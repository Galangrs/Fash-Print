import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import TableHomePage from "../components/TableHomePage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../strores/actions/action.js";

export default function ProductTable() {
    const products = useSelector((state) => state.todos.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsData());
    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Table style={{ width: "80vw" }}>
                <thead>
                    <tr>
                        <th className="text-center">No</th>
                        <th className="text-center">Nama</th>
                        <th className="text-center">Kategori</th>
                        <th className="text-center">Harga</th>
                        <th className="text-center">Edit / delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <TableHomePage
                            key={index}
                            product={product}
                            dispatch={dispatch}
                            fetchProducts={fetchProductsData}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
