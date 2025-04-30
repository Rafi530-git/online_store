import React from 'react'
import img from '../assets/images/face.jpg'

const Testimonial = () => {
    return (
        <>
            <div className="carousel-item active">
                <div className="box col-lg-10 mx-auto">
                    <div className="img_container">
                        <div className="img-box">
                            <div className="img_box-inner">
                                { <img src={img} alt="" /> }
                            </div>
                        </div>
                    </div>
                    <div className="detail-box">
                        <h5>
                           Rafia nawaz
                        </h5>
                        <h6>
                            Customer
                        </h6>
                        <p>
                            The website is easy to navigate, and the checkout process was a breeze. Plus, the 20% discount
                            I got during the sale was a fantastic bonus. I've already recommended this store to all my bookworm friends!"
                        </p>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Testimonial