import React from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {
    return (
        <>
            <section className="slider_section ">
            
                <div className="slider_bg_box d-flex justify-content-end bg-light ">
                    <img src="https://shortiedesigns.com/wp-content/uploads/2019/01/website-design-brisbane-shortie-designs.svg" alt="" style={{height: '580px', width: '600px'}}/>
                </div>
                <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-7 col-lg-6 ">
                                        <div className="detail-box">
                                            <h1>
                                                <span>
                                                    Get 20% Off
                                                </span>
                                                <br/>
                                                    On All Titles!
                                            </h1>
                                            <p>
                                                Looking for your next thrilling adventure, a heartwarming romance, or an insightful journey through knowledge?
                                                Look no further! We're delighted to offer you an incredible 20% discount on every book in our store.
                                            </p>
                                            <div className="btn-box">
                                                <Link to="/products" className="btn1">
                                                    Shop Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-7 col-lg-6 ">
                                        <div className="detail-box">
                                            <h1>
                                                <span>
                                                    Wide Selection
                                                </span>
                                                <br/>
                                                    Quality Reads
                                            </h1>
                                            <p>
                                                Explore a vast collection of handpicked titles, carefully curated to cater to every taste and interest. Whether you're a fiction enthusiast,
                                                a history buff, a tech guru, or a cookbook connoisseur, we've got something special for you.
                                            </p>
                                            <div className="btn-box">
                                                <a href="" className="btn1">
                                                    Shop Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className='d-none d-md-block' src="https://shortiedesigns.com/wp-content/uploads/2019/01/website-design-brisbane-shortie-designs.svg" alt="" style={{height: '580px', width: '600px', marginLeft:"50%"}}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider