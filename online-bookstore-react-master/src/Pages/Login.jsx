import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card" style={{backgroundColor:"#002c3e", borderRadius:"1.5rem"}}>
                            <div className="card-header">
                                <h3 className="text-center text-white">Login</h3>
                            </div>
                            <div className="card-body bg-transparent">
                                <form>
                                    <div className="form-group">
                                        <label className='text-white' htmlFor="username">Username</label>
                                        <input type="text" className='m-0 rounded-lg bg-transparent text-light' placeholder="Enter username" required />
                                    </div>
                                    <div className="form-group">
                                        <label className='text-white' htmlFor="password ">Password</label>
                                        <input type="password" className='m-0 rounded-lg bg-transparent text-light' placeholder="Enter your full name" required />
                                    </div>
                                    <button type="submit" className="btn btn-danger btn-block mt-4 py-2">Login</button>
                                </form>
                            </div>
                            <div className="card-footer mb-4">
                                <div className="d-flex justify-content-between">
                                    <Link to="/forgot-password" className='text-white'>Forgot Password?</Link>
                                    <Link to="/register" className='text-white'>Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login