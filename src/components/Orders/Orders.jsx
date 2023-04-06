import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products=useLoaderData();
    console.log(products);
    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h2>This is page for orders{products.length}</h2>
            </div>
            <dir className='cart-container'>
                <Cart cart={products}></Cart>
            </dir>
        </div>
    );
};

export default Orders;