import React from 'react'

function ShoppingCartItem({ele}) {
    return (
        <div className='shoppingCard col-md-12 col-lg-6'>
            <hr/>
            <div className="row">
                <div className="col-3">
                    <img src="https://m.media-amazon.com/images/I/71jGPdk3mDL._AC_AA180_.jpg" alt="img"/>
                </div>
                <div className="col-9 border">
                    <h5>
                        AmazonBasics 12 Place Setting Dishwasher (Silver, Rapid, Intense Wash for Heavily Soiled Utensils) 
                    </h5>
                    <p className='shoppingCard__small text-success'>In Stock</p>
                    <p className='shoppingCard__small text-muted'>Eligible for Free Shipping</p>
                </div>
            </div>
            <p className='text-center'>
                {ele}
            </p>
        </div>
    )
}

export default ShoppingCartItem
