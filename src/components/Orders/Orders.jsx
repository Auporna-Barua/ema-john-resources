import React, { useState } from 'react';
import './Orders.css';
import Cart from '../Cart/Cart'
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const savedCart = useLoaderData();
    console.log("cart 1", savedCart);
    const [cart, setCart] = useState(savedCart)
    // console.log(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }


    return (
      <div className="shop-container">
        <div className='review-container'>
                {/* <h2>Orders page:{cart.length}</h2> */}

                {
                    savedCart.map(product => <ReviewItem
                        key = {product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
      </div>
    );
};

export default Orders;