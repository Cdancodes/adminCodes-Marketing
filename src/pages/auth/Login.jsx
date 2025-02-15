import React, { useState } from "react";
import { CgPhone } from "react-icons/cg";
import { IoMdMail } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

  

const Login = () => {
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

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
    <div className="p-4 sm:p-4 md:p-8 lg:p-20 xl:p-[150px] mt-16 md:mt-0">
      <div className="bg-white p-10 rounded-2xl shadow-lg mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl text-green-500 italic">Get In touch</h2>
          <h1 className="text-3xl font-bold text-gray-800 mt-2 w-full">
            Ready to bring your project <br /> ideas to life?
          </h1>
          <p className="text-gray-600 mt-4">
            Reach out to us and let's discuss how we can help you with your next big venture! Whether it's building a website, developing a mobile app, or crafting a digital marketing strategy, our team is here to assist you every step of the way
          </p>
          <div className="mt-6 w-full">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full">
                <CgPhone className="w-5 h-5" />
              </div>
              <div className="text-gray-700">
                <p>For urgent help</p>
                <div className="flex">
                  <span className="font-semibold text-gray-900 mr-2">+91-9599876298</span>
                  <span className="font-semibold text-gray-900">+91-6393377862</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <IoMdMail className="w-5 h-5" />
              </div>
              <p className="text-gray-700">
                Mail us 24/7 <br />
                <span className="font-semibold text-gray-900">
                  codesandmarketing@gmail.com
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-gray-50 p-6 rounded-2xl shadow-md">

          <Formik
            initialValues={{
              name: "",
              phoneno: "",
              email: "",
              message: "",
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
                    name="name"
                    placeholder="Enter Your Name"
                    className="p-2 border rounded w-full"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
                </div>

                <div>
                  <Field
                    type="text"
                    name="phoneno"
                    placeholder="Enter Your Contact Number"
                    className="p-2 border rounded w-full"
                  />
                  <ErrorMessage name="phoneno" component="div" className="text-red-500 text-xs" />
                </div>

                <div>
                  <Field
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                    className="p-2 border rounded w-full"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                </div>

                <div>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="How can we help you?"
                    rows="4"
                    className="p-2 border rounded w-full"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-xs" />
                </div>

                <div>
                  <div className="w-full flex items-center space-x-2">
                    <Field type="checkbox" name="agree" className="w-4 h-4" />
                    <span>I confirm that the above details are correct.</span>
                  </div>
                  <ErrorMessage name="agree" component="div" className="text-red-500 text-xs" />
                </div>

                <button
                  type="submit"
                  className="mt-4 py-3 px-6 bg-greenColor text-customBodyColor rounded-lg shadow-lg hover:shadow-xl focus:ring-4 focus:ring-green-300"
                >
                  Submit Now
                </button>
              </Form>
            )}
          </Formik>

        </div>
      </div>
    </div>
  );
};

export default Login;