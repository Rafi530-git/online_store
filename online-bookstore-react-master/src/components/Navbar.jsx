import React from 'react'
import { Link } from 'react-router-dom'

<Link to="/cart">🛒 View Cart</Link>
import logo from "../assets/images/logo.png"

const Navbar = () => {
    return (
        <>
            <header className="header_section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="index.html">
                            <img width="250" src={logo} alt="#" />
                        </a>
                        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">Products</Link>
                                </li>

                                <li className="nav-item ">
                                    <Link className="nav-link mr-0 mr-mb-5" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart">
                                        <i className="fa-solid h5 fa-cart-shopping">
                                        </i>
                                    </Link>
                                   
                                </li>
                                <li className="nav-item rounded-pill mx-2" style={{ backgroundColor: "#f7444e" }}>
                                    <Link className="nav-link text-white" to="/login">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" style={{ maxWidth: "1200px" }} role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src="item-image.jpg" alt="Item Image" className="img-fluid" />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Item Name</h5>
                                                        <p className="card-text">Price: $X.XX</p>
                                                        <p className="card-text">Quantity: X</p>
                                                        <button className="btn btn-danger">Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar