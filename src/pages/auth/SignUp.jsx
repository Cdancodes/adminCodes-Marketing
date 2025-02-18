import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaLock, FaEnvelope, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from '../../../public/assets/brand.png';
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex flex-col">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 10 + 'px',
                height: Math.random() * 10 + 'px',
                background: 'linear-gradient(45deg, #4f46e533, #0ea5e933)',
                top: Math.random() * 100 + 'vh',
                left: Math.random() * 100 + 'vw',
                animation: `float ${10 + Math.random() * 20}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 p-6">
        <img src={Logo} alt="brand" className="h-12" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center flex-1">
        {/* Left section */}
        <div className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent text-center">
              Create Your Account
            </h1>
            <div className="relative hidden lg:block">
              <p className="text-gray-600 text-lg leading-relaxed backdrop-blur-sm p-8 rounded-2xl text-center">
                Join our platform to access advanced features and personalized experiences.
                Your journey begins with a secure account creation.
              </p>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-2xl blur-lg -z-10"></div>
            </div>
          </div>
        </div>

        {/* Signup form */}
        <div className="lg:w-5/12 w-full">
          <div className="backdrop-blur-xl bg-white/95 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-custom-gradient flex items-center justify-center">
                <FaUser className="text-2xl text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
                <p className="text-gray-500">Create a new account</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition duration-200"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition duration-200"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create Password"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition duration-200"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition duration-200"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500/20"
                />
                <label className="ml-2 text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-custom-gradient text-black font-roboto rounded-xl shadow-lg hover:bg-custom-gradient font-medium transition duration-200 transform hover:scale-105"
              >
                Create Account
              </button>

              {/* Login Link */}
             
              <div className="text-center text-sm text-gray-600">
              <Link to="/">
                Already have an account?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Login 
                </a>
                </Link>
              </div>
         
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Protected by reCAPTCHA and subject to the{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, 10px); }
          50% { transform: translate(0, 20px); }
          75% { transform: translate(-10px, 10px); }
        }
      `}</style>
    </div>
  );
};

export default Signup;