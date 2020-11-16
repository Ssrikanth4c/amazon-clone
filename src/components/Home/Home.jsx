import React from 'react';
import './Home.css';
import SingleCardProduct from '../singeCardProduct/SingleCardProduct';
import Product from '../Products/Products';
const Home=()=> {
    const products=[
        {
            home_title: "Top picks fro your home",
            home_list:[
                {
                    image:'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_DB_QC_186x116_1._SY116_CB433700928_.jpg',
                    name:' Dishwashers'
                },
                {
                    image:'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_QC_Washing-machine_186x116._SY116_CB432544816_.jpg',
                    name:'Washing machines'
                },
                {
                    image:'https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/April/MSO/DCQC_TV_186x116_5._SY116_CB434051404_.jpg',
                    name:'Televisions'
                },
                {
                    image:'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/Ref_graphic_desktop_QC_186x116._SY116_CB429411324_.png',
                    name:'Refrigerators'
                }
                
            ]
        }
    ]
    return (
        <div className='home '>
            <img className="home__image image-fluid" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Mi_days/Nov/Bunting/D18787601_BAU_Xiaomi_Family_DesktopHero_1500x600._CB417082045_.jpg" alt=""/>
            {/* product- title, image, product name, see more */}
            <div className="row m-0 home__products">
                <div className='home__product col-md-4 col-lg-3  p-0'>
                    <Product  product_title={products[0].home_title} product_list={products[0].home_list} />
                </div>
                <div className='home__product col-md-4 col-lg-3 p-0'>
                    <Product  product_title={products[0].home_title} product_list={products[0].home_list} />
                </div>
                <div className='home__product col-md-4 col-lg-3 p-0'>
                <SingleCardProduct image='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Gift_Cards/DesktopGateway_CategoryCard_758X608_1._SY304_CB417134419_.jpg' title=' Amazon Pay Gift Cards'/>
                </div>
                <div className='home__product col-md-4 col-lg-3 p-0'>
                    <SingleCardProduct image='https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Nov20/Diwali/DesktopGateway_CategoryCard_379X304_Giving_Pink._SY304_CB417108832_.jpg' title='Spread festive happiness'/>
                </div>
                <div className='home__product col-md-4 col-lg-3  p-0'>
                    <Product  product_title={products[0].home_title} product_list={products[0].home_list} />
                </div>
            </div>
        </div>
    )
}

export default Home
