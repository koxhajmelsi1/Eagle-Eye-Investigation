import React from 'react'
import './Product.css'
import prod_1 from '../../assets/prod_1.png'
import prod_2 from '../../assets/prod_2.png'
import prod_3 from '../../assets/prod_3.png'
import prod_4 from '../../assets/prod_4.png'
import prod_5 from '../../assets/prod_5.png'
import prod_6 from '../../assets/prod_6.png'

const Product = () => {

    return (
        <div className="product">

            <div className='card'>

                <div className="card-body">
                    <div className="imgBox">
                        <img src={prod_1} alt="" />
                    </div>

                    <div className='contentBox'>
                        <h3 className='tit'>DETECTOR FOR Eavesdropping Devices <br />- TELEPHONE TAPING <br />- WIFI HIDDEN CAMERAS  <br /> - GPS / GSM SIGNAL</h3>
                        <h2 className='price'>554.<small>99</small>€</h2>
                        <a href="#" className='buy'>Buy Now</a>
                    </div>
                </div>
            </div>


            <div className='card'>

                <div className="card-body">
                    <div className="imgBox">
                        <img src={prod_2} alt=""  className='img2'/>
                    </div>

                    <div className='contentBox'>
                        <h3 className='tit2'>INTELLIGENT DETECTOR FOR GPS DETECTION; LISTENING DEVICES; HIDDEN CAMERAS; <br />EQUIPPED WITH INTELLIGENT CHIP FOR DIFFICULT DISCOVERIES</h3>
                        <h2 className='price'>164.<small>99</small>€</h2>
                        <a href="#" className='buy'>Buy Now</a>
                    </div>
                </div>
            </div>

            <div className='card'>

                <div className="card-body">
                    <div className="imgBox">
                        <img src={prod_3} alt="" className='img3' />
                    </div>

                    <div className='contentBox'>
                        <h3 className='tit'>HIGH POWER PORTABLE SIGNAL BLOCKER 8 ANTENNA BLOCKER/WAVE P8N</h3>
                        <h2 className='price'>99.<small>99</small>€</h2>
                        <a href="#" className='buy'>Buy Now</a>
                    </div>
                </div>
            </div>

            <div className='card'>

                <div className="card-body">
                    <div className="imgBox">
                        <img src={prod_4} alt=""  className='img4' />
                    </div>

                    <div className='contentBox'>
                        <h3 className='tit' >Chief Deluxe Fingerprint Kit</h3>
                        <h2 className='price'>79.<small>99</small>€</h2>
                        <a href="#" className='buy'>Buy Now</a>
                    </div>
                </div>
            </div>

            <div className='card'>

                <div className="card-body">
                    <div className="imgBox">
                        <img src={prod_5} alt="" className='img5'/>
                    </div>

                    <div className='contentBox'>
                        <h3 className='tit'>Kit Size Fiber Brush</h3>
                        <h2 className='price'>9.<small>99</small>€</h2>
                        <a href="#" className='buy'>Buy Now</a>
                    </div>
                </div>
            </div>

            <div className='card'>
                

                <div className="card-body">
                    <div className="imgBox">
                        <img src={prod_6} alt=""  className='img6'/>
                    </div>

                    <div className='contentBox'>
                        <h3 className='tit'>Master Blood Spatter Documentation Kit</h3>
                        <h2 className='price'>225.<small>99</small>€</h2>
                        <a href="#" className='buy'>Buy Now</a>
                    </div>
                </div>
            </div>


        </div>








    )
}

export default Product
