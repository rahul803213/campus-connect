"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { updatePasswordApi } from "@/network/userApi";
import { SetMealTwoTone } from "@mui/icons-material";
import Alert from "@/components/Alert/Alert";
import { useRouter } from "next/navigation";

function PasswordResetPage() {
  const Router = useRouter();
  const { token } = useParams();

  console.log(token);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messagee, setMessagee] = useState("");
  const [messageType, setMessageType] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    console.log(newPassword);
    const data = await updatePasswordApi(newPassword, token);
    if (data.success) {
      setMessagee(data.message);
      setMessageType("success");
      Router.push("/reglogin");
    } else {
      setMessage(data.message);
      setMessageType("error");
    }

    /*  try {
      const response = await fetch(`/api/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error resetting password:', error);
      setMessage('An error occurred while resetting your password');
    } */
  };

  return (
    <div>
      <h2>Reset Your Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {message && <p>{message}</p>}
        <button type="submit">Reset Password</button>
        {messagee && <Alert message={messagee} type={messageType} />}
      </form>
    </div>
  );
}

export default PasswordResetPage;
