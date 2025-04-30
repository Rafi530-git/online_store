import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card" style={{backgroundColor:"#002c3e", borderRadius:"1.5rem"}}>
                            <div className="card-header">
                                <h3 className="text-center text-white">Register</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email" className='text-white'>Email</label>
                                        <input type="email" className='m-0 rounded-lg bg-transparent text-light' placeholder="Enter email"  required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username" className='text-white'>Username</label>
                                        <input type="text" className='m-0 rounded-lg bg-transparent text-light' placeholder="Enter username"  required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className='text-white'>Password</label>
                                        <input type="password" className='m-0 rounded-lg bg-transparent text-light' placeholder="Enter your full name"  required />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block py-2 mt-4">Sign In</button>
                                </form>
                            </div>
                            <div className="card-footer mb-4">
                                <div className="d-flex justify-content-between">
                                    <Link href="#" className='text-white'>Terms and Conditions</Link>
                                    <Link to="/login" className='text-white'>Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register