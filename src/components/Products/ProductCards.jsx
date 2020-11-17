import React from 'react';
import ProductCard from './ProductCard';
import './ProductCards.css'

function ProductCards({home_products}) {
    console.log(home_products)
    return (
        <div className="productCards">
            <div className="productCards__Filter">
                <p className="text-center">filter</p>
            </div>
            <div className="productCards__card w-100">
                <div className='row m-0'>

                    {
                        home_products
                            ?.map(
                                (product, index) => (<div className='col-md-4 m-0'>
                                   <ProductCard key={index+Math.random()} card_data={product} />
                                </div>)
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductCards
