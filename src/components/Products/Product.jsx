import React from 'react';
import './Product.css';
function Product({product_title, product_list}) {
    console.log(product_list)
    return (
        <div className='product bg-white h-100 mx-2'>
                <h5 className='font-weight-bold pt-4 px-2'>{product_title}</h5>
                <div className="row p-2 mx-0 ">
                    {
                        product_list
                            ?.map((list, ind) => (
                                <div className="col-6 w-100  p-1" key={list.name}>
                                    <img className='w-100' src={list.image} alt={list.name}/>
                                    <small>{list.name}</small>
                                </div>
                            ))
                    }
                    <small className='col-12 text-info mx-0 pl-1  mt-3'>
                        See more</small>
            </div>
        </div>
    )
}

export default Product
