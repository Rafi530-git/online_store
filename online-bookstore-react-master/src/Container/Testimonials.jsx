import React from 'react'
import Testimonial from '../components/Testimonial'

const Testimonials = () => {
    return (
        <>
            <section className="client_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Customer's Testimonial
                        </h2>
                    </div>
                    <div id="carouselExample3Controls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            
                            <Testimonial/>
                                                        
                        </div>
                        <div className="carousel_btn_box">
                            <a className="carousel-control-prev" href="#carouselExample3Controls" role="button" data-slide="prev">
                                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExample3Controls" role="button" data-slide="next">
                                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials
