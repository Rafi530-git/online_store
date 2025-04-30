import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [showOTP, setShowOTP] = useState(false); // Initially set to false
  const [otp, setOTP] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Logic for login
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setShowOTP(true);
    } else {
      console.log("Invalid email format");
    }
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{ backgroundColor: "#002c3e", borderRadius: "1.5rem" }}>
            <div className="card-header">
              <h3 className="text-center text-white mt-3">
                {showOTP ? 'Enter OTP' : 'Reset Password'}
              </h3>
              <p className='text-center text-secondary'>OTP has been sent to you email address</p>
            </div>
            <div className="card-body bg-transparent">
              <form onSubmit={showOTP ? handleOTPSubmit : handleLoginSubmit}>
                {showOTP ? (
                  <div className="form-group">
                    <label className='text-white' htmlFor="otp">
                      Enter OTP
                    </label>
                    <input
                      type="text"
                      className='m-0 rounded-lg bg-transparent text-light'
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOTP(e.target.value)}
                      required
                    />
                  </div>
                ) : (
                  <div className="form-group">
                    <label className='text-white' htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      className='m-0 rounded-lg bg-transparent text-light'
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-danger btn-block mt-4 py-2"
                  onClick={showOTP ? () => setShowOTP(false) : handleEmailSubmit}
                >
                  {showOTP ? 'Submit OTP' : 'Next'}
                </button>

              </form>
            </div>
            <div className="card-footer mb-4">
              <div className="d-flex justify-content-between">
                <Link to="/login" className='text-white' >
                  {showOTP ? "Didn't Get Opt ?" : "Remember Password?"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
