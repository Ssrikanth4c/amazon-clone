import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import SingleCardProduct from '../singeCardProduct/SingleCardProduct';
import Product from '../Products/Product';
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
        },
        {
            home_title: "Automotive essentials",
            home_list:[
                {
                    image:'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_372x232._SY116_CB405083904_.jpg',
                    name:'Helmets'
                },
                {
                    image:'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Tyre_372x232._SY116_CB405083904_.jpg',
                    name:'Tyres'
                },
                {
                    image:'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Pressurewasher_372x232._SY116_CB405083904_.jpg',
                    name:'Pressure washers'
                },
                {
                    image:'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Protective_gear_372x232._SY116_CB405083904_.jpg',
                    name:'Protective gear'
                }
                
            ]
        },

    ]
    return (
        <div className='home '>
            <img className="home__image image-fluid" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Mi_days/Nov/Bunting/D18787601_BAU_Xiaomi_Family_DesktopHero_1500x600._CB417082045_.jpg" alt=""/>
            {/* product- title, image, product name, see more */}
            <div className="row m-0 home__products">
                <div className='home__product col-md-4 col-lg-3  p-0 mb-3'>
                    <Link to='/home_products'>
                        <Product  product_title={products[0].home_title} product_list={products[0].home_list} />
                    </Link>
                </div>
                <div className='home__product col-md-4 col-lg-3 p-0 mb-3'>
                    <Product  product_title={products[1].home_title} product_list={products[1].home_list} />
                </div>
                <div className='home__product col-md-4 col-lg-3 p-0 mb-3'>
                    <SingleCardProduct image='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Gift_Cards/DesktopGateway_CategoryCard_758X608_1._SY304_CB417134419_.jpg' title=' Amazon Pay Gift Cards'/>
                </div>
                <div className='home__product col-md-4 col-lg-3 p-0 mb-3'>
                    <SingleCardProduct image='https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Nov20/Diwali/DesktopGateway_CategoryCard_379X304_Giving_Pink._SY304_CB417108832_.jpg' title='Spread festive happiness'/>
                </div>
                <div className='home__product col-md-4 col-lg-3  p-0 mb-3'>
                    <Link to='/home_products'>
                        <Product  product_title={products[0].home_title} product_list={products[0].home_list} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
