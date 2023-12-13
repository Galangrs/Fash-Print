import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { fetchDeleteProductData } from '../strores/actions/action.js'

export default function TableHomePage({ product }) {
    const dispatch = useDispatch()

    function deleteProduct() {
        dispatch(fetchDeleteProductData(product.id_produk))
    }

    return (
        <>
            <tr>
                <td className="text-center">{product.no}</td>
                <td className="text-center">{product.nama_produk}</td>
                <td className="text-center">{product.kategori}</td>
                <td className="text-center">{product.harga}</td>
                <td className="text-center d-flex justify-content-end">
                    <Button variant="outline-warning" style={{ marginRight: "5px" }}><Link to={"/" + product.id_produk} >EDIT</Link></Button>
                    <Button variant="outline-danger" style={{ marginLeft: "5px" }} onClick={deleteProduct}>DELETE</Button>
                </td>
            </tr>
        </>
    );
}
