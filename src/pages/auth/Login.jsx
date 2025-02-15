
import React, { useState } from "react";
import Logo from '../../../public/assets/brand.png';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";



const Login = () => {
  // const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);


  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name can't exceed 50 characters")
      .required("Name is required"),
    phoneno: Yup.string()
      .matches(/^\d+$/, "Only numbers are allowed")
      .length(10, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
    agree: Yup.boolean().oneOf([true], "You must confirm the details"),
  });

  const handleSubmit = (values, { resetForm }) => {

  };

  return (

    <section className="text-gray-600 bg-slate-50 h-[100vh] body-font  flex flex-col">
      <div className="p-6">
        <img src={Logo} atl="brand" className="w-40 h-16" />
      </div>
      <div className="container px-5 mx-auto flex flex-wrap items-center">

        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">Admin Panel</h1>
          <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font">Login</h2>

          <hr className="border border-b-2 border-greenColor my-5 " />

          <Formik
            initialValues={{
              email: "",
              password: "",
              agree: false
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="flex flex-col gap-4">

                <div>
                  <Field
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                    className="p-2 border rounded w-full"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                </div>

                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter Your Password"
                    className="p-2 border rounded w-full pr-10"
                  />
                  <span
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                  </span>
                  <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                <button
                  type="submit"
                  className="mt-4 py-3 px-6 bg-greenColor text-customBodyColor rounded-xl shadow-lg hover:shadow-xl focus:ring-4 focus:ring-green-300 text-xs"
                >
                  Submit Now
                </button>
              </Form>
            )}
          </Formik>
          <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
    </section>
  );
};

export default Login;