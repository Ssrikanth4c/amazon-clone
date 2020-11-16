import React from 'react';
import './Products.css';
function Product({product_title, product_list}) {
    console.log(product_list)
    return (
        <div className='mx-0 product'>
            <div className="p-3 m-2 bg-white ">
                <h5 className='font-weight-bold'>{product_title}</h5>
                <div className="row p-2">
                    {
                        product_list
                            ?.map((list, ind) => (
                                <div className="col-6 w-100  p-1" key={list.name}>
                                    <img className='w-100 ' src={list.image} alt={list.name}/>
                                    <small>{list.name}</small>
                                </div>
                            ))
                    }
                    <small className='text-info pl-1'>
                        See more</small>

                </div>
            </div>
        </div>
    )
}

export default Product
