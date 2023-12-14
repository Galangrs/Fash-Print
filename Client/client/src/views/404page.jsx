import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

export default function InvalidPage() {
    const navigate = useNavigate();
    useEffect(() => {
    })
    return (
        <div className="container">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h1>404 PAGE</h1>
            </div>
        </div>
    );
}
