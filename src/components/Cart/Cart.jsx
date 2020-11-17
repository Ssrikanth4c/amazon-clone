import React from 'react';
import './Cart.css';
import ShoppingCartItem from './ShoppingCartItem'
import {useStateValue} from '../../Context/StateProvider'
function Cart() {
    const [
        {
            cart
        }
    ] = useStateValue();
    const arr = [1, 2, 3, 4];
    return (
        <div className='ml-2'>
            <small className='font-weight-bold'>Pay faster for all your shopping needs
                <span className='text-danger'>
                    with Amazon Pay balance</span>
            </small>
            <br/>
            <small className='font-weight-bold'>Get Instant refund on cancellations | Zero payment failures
            </small>
            {
                cart.length
                    ? (
                        <div className='border'>
                            <h3>Shopping Cart</h3>
                            <div className='row m-0 p-0'>
                                {arr.map((ele, ind) => (<ShoppingCartItem key={ind} ele={ele}/>))}
                            </div>
                        </div>
                    )
                    : (<div>cart is empty</div>)
            }
        </div>
    )
}

export default Cart