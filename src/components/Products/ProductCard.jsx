import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from '../../Context/StateProvider';
function ProductCard({card_data}) {
    const [{cart}, dispatch] = useStateValue();
    const addToCart=()=>{
        dispatch({
            type:'ADD_TO_CART',
            item:{
                img_url:card_data.img_url,
                product_title:card_data.product_title,
                product_by:card_data.product_by,
                actual_price:card_data.actual_price,
                discount_price:card_data.discount_price,
                isPrime:card_data.isPrime,
                ratings:card_data.ratings,
            },
        });
    };
    return (
        <div className='mb-3 border'>
            {/*     img_url:
                product_title:
                product_by:
                actual_price:
                discount_price:
                isPrime:
                ratings:
            */
            }
            <div className="productCard">
                <img className='' src={card_data.img_url} alt=''/>
                <p className='text-info mb-0'>{card_data.product_title}</p>
                <small className='text-muted '>by {card_data.product_by}</small>
                <div className=" row justify-content-start pl-3">
                    <p className='m-0 font-weight-bold'>&#x20B9;{card_data.discount_price}</p>
                    <s className='text-muted pl-2'>
                        &#x20B9;{card_data.actual_price}
                    </s>
                </div>
                {
                    card_data.isPrime
                        ? <small className='font-weight-bold text-capitalize text-info'>prime</small>
                        : ''
                }
                <div>

                    {
                        Array(card_data.ratings)
                            .fill()
                            .map((_) => (<StarIcon fontSize='small' style={{color:"#FFC107"}} />))
                    }
                </div>
                <div className='text-center'>
                    <button onClick={addToCart} class=' mt-2 btn btn-warning font-weight-bold'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
