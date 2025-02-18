import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import Logo from '../../../public/assets/brand.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must not exceed 20 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Handle submission
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

      {/* Header */}
      <div className="relative z-10 p-6">
        <img src={Logo} alt="brand" className="h-12" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center flex-1">
        {/* Left section */}
        <div className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent text-center">
              Welcome to Admin Portal
            </h1>
            <div className="relative hidden lg:block">
              <p className="text-gray-600 text-lg leading-relaxed backdrop-blur-sm  p-8 rounded-2xl  text-center">
                Access your dashboard to manage and monitor your system's performance. 
                Secure authentication required for advanced administrative controls.
              </p>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-2xl blur-lg -z-10"></div>
            </div>
          </div>
        </div>

        {/* Login form */}
        <div className="lg:w-5/12 w-full">
          <div className="backdrop-blur-xl bg-white/95 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-greenColor flex items-center justify-center">
                <FaLock className="text-2xl text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Authentication</h2>
                <p className="text-gray-500">Please login to continue</p>
              </div>
            </div>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="space-y-6">
                  <div>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <Field
                        type="text"
                        name="email"
                        placeholder="Enter Your Email"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition duration-200"
                      />
                    </div>
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1.5" />
                  </div>

                  <div>
                    <div className="relative">
                      <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter Your Password"
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
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1.5" />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500/20 mr-2" />
                      Remember me
                    </label>
                    <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-custom-gradient text-black font-roboto rounded-xl shadow-lg  hover:bg-custom-gradient font-medium transition duration-200 transform hover:scale-105"
                  >
                    Login to Dashboard
                  </button>
                </Form>
              )}
            </Formik>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link 
                  to="/signup" 
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign up
                </Link>
              </p>
            </div>

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

export default Login;