import React from 'react'
import ProductDetailCard from '../components/ProductDetailCard'
import Comment from '../components/Comment'

const ProductDetail = () => {
    return (
        <>
            <section className="product_section layout_padding p-0 mb-5 h-auto">
                <div className="container">
                    <div className="col-lg-10 border border p-3 main-section bg-white" >
                        <div className="row m-0">

                            <ProductDetailCard/>

                        </div>

                        {/* Comment Starts */}
                        <div className="container mt-5 mb-5 border">
                            <div className="d-flex justify-content-center row">
                                <div className="d-flex flex-column col-md-10">

                                    <div className="coment-bottom bg-white p-2 px-4">
                                        <div className="d-flex flex-row add-comment-section mt-4 mb-4">
                                            <img className="img-fluid img-responsive rounded-circle mr-2"
                                                src="https://st3.depositphotos.com/3260171/32990/i/600/depositphotos_329906660-stock-photo-studio-portrait-handsome-man-wearing.jpg"
                                                width="38"/>
                                                <input type="text" className="form-control mr-3" placeholder="Add comment"/>
                                                    <button className="btn btn-dark" type="button">Comment</button>
                                                </div>
                                                
                                                <Comment/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-center pt-3">
                                    <h4>Related Product</h4>
                                </div>
                            </div>
                            <div className="row mt-3 p-0 text-center pro-box-section">
                                <div className="col-lg-3 pb-2">
                                    <div className="pro-box border p-0 m-0">
                                        <img src="http://nicesnippets.com/demo/pd-b-image1.jpg"/>
                                    </div>
                                </div>
                                <div className="col-lg-3 pb-2">
                                    <div className="pro-box border p-0 m-0">
                                        <img src="http://nicesnippets.com/demo/pd-b-images2.jpg"/>
                                    </div>
                                </div>
                                <div className="col-lg-3 pb-2">
                                    <div className="pro-box border p-0 m-0">
                                        <img src="http://nicesnippets.com/demo/pd-b-images3.jpg"/>
                                    </div>
                                </div>
                                <div className="col-lg-3 pb-2">
                                    <div className="pro-box border p-0 m-0">
                                        <img src="http://nicesnippets.com/demo/pd-b-images4.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default ProductDetail