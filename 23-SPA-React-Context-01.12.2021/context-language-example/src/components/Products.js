import React from 'react';
import { useParams } from 'react-router-dom';

function Products() {
    const { productName } = useParams()
    return (
        <div>
            <h2>Products Page </h2>
            <h3>{productName}</h3>
        </div>
    )
}

export default Products
 