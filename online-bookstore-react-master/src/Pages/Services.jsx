import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
   return (
      <>
         <div className="container mt-5">
            <div className="heading_container heading_center d-flex mb-3">
               <h2 className="d-inline">
                  Our <span>Services</span>
               </h2>
            </div>
            <div className="row text-light">
               <div className="col-md-4">
                  <div className="card bg-transparent border-0 mb-4">
                     <div className="card-body p-4" style={{ borderRadius: "1.5rem" }}>
                        <i className="fas fa-book fa-4x mb-3"></i>
                        <h5 className="font-weight-bold card-title">Vast Collection</h5>
                        <small className="card-text text-secondary">We offer a vast collection of books in various genres, catering to all reading preferences.</small>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="card bg-transparent border-0 mb-4">
                     <div className="card-body p-4" style={{ borderRadius: "1.5rem" }}>
                        <i className="fas fa-truck fa-4x mb-3"></i>
                        <h5 className="font-weight-bold card-title">Fast Delivery</h5>
                        <small className="card-text text-secondary">Enjoy fast and reliable book deliveries right to your doorstep, anywhere in the country.</small>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="card bg-transparent border-0 mb-4">
                     <div className="card-body p-4" style={{ borderRadius: "1.5rem" }}>
                        <i className="fas fa-lock fa-4x mb-3"></i>
                        <h5 className=" font-weight-bold card-title">Secure Payment</h5>
                        <small className="card-text text-secondary">We ensure secure payment integration options to protect your sensitive information.</small>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="card bg-transparent border-0 mb-4">
                     <div className="card-body p-4" style={{ borderRadius: "1.5rem" }}>
                        <i className="fas fa-gift fa-4x mb-3"></i>
                        <h5 className="font-weight-bold card-title">Gift Cards</h5>
                        <small className="card-text text-secondary">Surprise your loved ones with our gift cards and let them choose their favorite books.</small>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="card bg-transparent border-0 mb-4">
                     <div className="card-body p-4" style={{ borderRadius: "1.5rem" }}>
                        <i className="fas fa-user fa-4x mb-3"></i>
                        <h5 className="font-weight-bold card-title">Recommendations</h5>
                        <small className="card-text text-secondary">Get personalized book recommendations based on your reading history and preferences.</small>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="card bg-transparent border-0 mb-4">
                     <div className="card-body p-4" style={{ borderRadius: "1.5rem" }}>
                        <i className="fas fa-headphones fa-4x mb-3"></i>
                        <h5 className="font-weight-bold card-title">Audiobooks</h5>
                        <small className="card-text text-secondary">Explore our vast collection of audiobooks for an immersive reading experience.</small>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <section className="arrival_section">
            <div className="container">
               <div className="box" >
                  <div className="arrival_bg_box">
                     <img src="https://svgsilh.com/svg/1973672.svg" className='h-75 w-50 mt-5' alt="" />
                  </div>
                  <div className="row ">
                     <div className="col-md-6 ml-auto pl-5">
                        <div className="heading_container remove_line_bt">
                           <h2>
                              Explore Our Latest Arrivals!
                           </h2>
                        </div>
                        <p style={{ marginTop: '20px', marginBottom: "30px" }}>
                           Introducing our handpicked selection of new arrival books that are sure to captivate your imagination. Whether you're a dedicated reader or just looking for your next literary adventure, our collection has something for everyone.

                        </p>
                        <Link to="/products" >
                           Shop Now
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Services