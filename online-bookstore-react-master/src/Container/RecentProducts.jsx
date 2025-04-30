import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import img from "../assets/images/book1.jpg"





const RecentProducts = () => {
  return (
    <>
        <section className="product_section layout_padding">
      <div className="container mw-100">
         <div className="heading_container heading_center">
            <h2>
               Featured <span>products</span>
            </h2>
         </div>
         <div className="row justify-content-center">

         <ProductCard imgSrc="skip.jpg"  />
<ProductCard imgSrc="horta.jpg"  />
<ProductCard imgSrc="election.jpg"  />
<ProductCard imgSrc="starling.jpg"  />
<ProductCard imgSrc="suitcase.jpg"  />


         </div>
         <div className="btn-box">
            <Link to="/products">
               View All products
            </Link>
         </div>
      </div>
   </section>
    </>
  )
}

export default RecentProducts