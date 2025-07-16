import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://surgylife-backend.onrender.com/${id}`,
        { password }
      );
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <div className="container py-5">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded-4 bg-light">
        <input
          type="password"
          placeholder="Enter new password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success w-100">
          Reset Password
        </button>
        {message && <p className="mt-3 text-success">{message}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
