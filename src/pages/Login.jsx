// Login Page Component with Enhanced Signup, Forgot Password, and OTP Reset

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    otp: '',
    newPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and Signup
  const [isForgotPassword, setIsForgotPassword] = useState(false); // Toggle Forgot Password Mode

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Mock signup logic
      alert('Signup successful! You can now log in.');
      setIsSignUp(false);
    } else if (isForgotPassword) {
      // Mock password reset logic
      if (formData.otp === '123456' && formData.newPassword) {
        alert('Password reset successful! You can now log in.');
        setIsForgotPassword(false);
      } else {
        setErrorMessage('Invalid OTP or new password.');
      }
    } else {
      // Mock login logic
      if (formData.email === 'test@a.com' && formData.password === '123') {
        alert('Login successful!');
        localStorage.setItem('isLoggedIn', true);
        window.dispatchEvent(new Event('storage')); // Notify other components
        navigate('/book-now');
      } else {
        setErrorMessage('Invalid email or password. Please try again.');
      }
    }
  };

  return (
    <div className="bg-background text-textPrimary min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-primary mb-6">
          {isSignUp ? 'Sign Up' : isForgotPassword ? 'Reset Password' : 'Login'}
        </h1>
        {errorMessage && (
          <div className="bg-red-100 text-red-800 p-3 rounded mb-4">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {!isForgotPassword && (
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          )}

          {isForgotPassword ? (
            <>
              <div className="mb-4">
                <label
                  htmlFor="otp"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </>
          ) : (
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="absolute inset-y-0 right-3 text-gray-500 focus:outline-none"
                >
                  {isPasswordVisible ? '🙈' : '👁️'}
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition duration-300"
          >
            {isSignUp
              ? 'Sign Up'
              : isForgotPassword
              ? 'Reset Password'
              : 'Login'}
          </button>
        </form>

        {!isForgotPassword && !isSignUp && (
          <p className="text-center text-gray-600 mt-4">
            <button
              onClick={() => setIsForgotPassword(true)}
              className="text-primary hover:underline focus:outline-none"
            >
              Forgot Password?
            </button>
          </p>
        )}
        <p className="text-center text-gray-600 mt-4">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setIsSignUp(false)}
                className="text-primary hover:underline focus:outline-none"
              >
                Login
              </button>
            </>
          ) : isForgotPassword ? (
            <>
              Remember your password?{' '}
              <button
                onClick={() => setIsForgotPassword(false)}
                className="text-primary hover:underline focus:outline-none"
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => setIsSignUp(true)}
                className="text-primary hover:underline focus:outline-none"
              >
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
