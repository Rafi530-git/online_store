import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = form;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // Change this to your actual post-login route
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card" style={{ backgroundColor: "#002c3e", borderRadius: "1.5rem" }}>
              <div className="card-header">
                <h3 className="text-center text-white">Login</h3>
              </div>
              <div className="card-body bg-transparent">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className='text-white' htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className='form-control m-0 rounded-lg bg-transparent text-light'
                      placeholder="Enter email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className='text-white' htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className='form-control m-0 rounded-lg bg-transparent text-light'
                      placeholder="Enter password"
                      value={form.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {error && <p className="text-danger mt-2">{error}</p>}
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
  );
};

export default Login;
