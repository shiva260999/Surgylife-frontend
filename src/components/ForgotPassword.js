import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://surgylife-backend.onrender.com", {
        email,
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error sending reset link");
    }
  };

  return (
    <div className="container py-5">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded-4 bg-light">
        <input
          type="email"
          placeholder="Enter your email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-100">
          Send Reset Link
        </button>
        {message && <p className="mt-3 text-success">{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
