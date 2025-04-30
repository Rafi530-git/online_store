import React from 'react'
const ProductDetailCard = () => {
    return (
        <>
            <section className="product_section layout_padding p-0 my-5 h-100 ">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-lg-4 left-side-product-box pb-3">
                            <img src="http://nicesnippets.com/demo/pd-image1.jpg" className="border-none p-3" />
                            <span className="d-flex justify-content-center sub-img">
                                <img src="http://nicesnippets.com/demo/pd-image2.jpg" className="border p-2 m-2" />
                                <img src="http://nicesnippets.com/demo/pd-image3.jpg" className="border p-2 m-2" />
                                <img src="http://nicesnippets.com/demo/pd-image4.jpg" className="border p-2 m-2" />
                            </span>
                        </div>
                        <div className="col-lg-8">
                            <div className="right-side-pro-detail border-none p-3 m-0">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <p className="m-0 p-0">Product Name</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <p className="m-0 p-0 price-pro">$30</p>
                                        <hr className="p-0 m-0" />
                                    </div>
                                    <div className="col-lg-12 pt-2">
                                        <h5>Product Detail</h5>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris.</span>
                                        <hr className="m-0 pt-2 mt-2" />
                                    </div>
                                    <div className="col-lg-12">
                                        <p className="tag-section"><strong>Category : </strong> Book</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <p className="tag-section"><strong>Quantity : </strong>
                                            <input type="number" className="form-control text-center w-25 shadow-none border d-inline " defaultValue="7" />
                                        </p>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <div className="row">
                                            <div className="col-lg-6 pb-2">
                                                <a href="#" className="btn btn-danger w-100">Add To Cart</a>
                                            </div>
                                            <div className="col-lg-6">
                                                <a href="#" className="btn btn-dark w-100">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetailCard