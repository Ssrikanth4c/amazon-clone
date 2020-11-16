import React from 'react'
import './singleCardProduct.css';
function SingleCardProduct({image, title}) {
    return (
        <div className='singleProduct bg-white h-100 mx-2 px-2'>
            <h5 className='font-weight-bold pt-4 '>{title}</h5>
            <div className="row p-0 ">
                <div className=" col-12 w-100  my-3">
                    <img className='w-100'  src={image} alt={title}/>
                </div>
                <small className='col-12 text-info mx-0 pl-3  mt-3 '> See more</small>
            </div>
        </div>
    )
}

export default SingleCardProduct
