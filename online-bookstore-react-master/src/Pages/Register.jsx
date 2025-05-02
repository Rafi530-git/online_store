import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase'; // Make sure `db` is exported from firebase.js
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    userType: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, username, userType } = form;

    if (!email || !password || !username || !userType) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      // Save user data to Firestore
      await setDoc(doc(db, userType, userId), {
        email,
        username,
        userType,
        createdAt: new Date().toISOString()
      });

      setSuccess("User registered and data saved successfully!");
      setForm({ email: '', username: '', password: '', userType: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Register</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Username</label><br />
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password</label><br />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>User Type</label><br />
          <select name="userType" value={form.userType} onChange={handleChange} required>
            <option value="">Select type</option>
            <option value="admin">Admin</option>
            <option value="member">Member</option>
          </select>
        </div>

        <button type="submit" style={{ marginTop: "1rem" }}>Register</button>
      </form>
    </div>
  );
};

export default Register;
