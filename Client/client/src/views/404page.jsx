import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

export default function InvalidPage() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/')
    })
    return (
        <div className="container">
            <h1>404 PAGE</h1>
        </div>
    );
}
