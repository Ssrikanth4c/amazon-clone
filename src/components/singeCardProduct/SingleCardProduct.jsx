import React from 'react'
import './singleCardProduct.css';
function SingleCardProduct({image, title}) {
    return (
        <div className='singleProduct bg-white mt-2 mr-2 px-2'>
            <h5 className='font-weight-bold pt-3'>{title}</h5>
            <div className="w-100 my-2 ">
                <img className='w-100'  src={image} alt={title}/>
            </div>
            <small className='text-info'> See more</small>
        </div>
    )
}

export default SingleCardProduct
