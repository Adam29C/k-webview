// -------------   for Add Bank Details -------------

import React, { useState } from "react";
import ReusableForm from "./Formik_form";
import { useFormik } from "formik";
import * as Yup from "yup";



const Tessting = () => {
  const formFields = [
    {
      type: "text",
      name: "username",
      label: "Username",
      col_size: 6,
      label_size: 4,
      disable: false,
      showButton: false,
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      col_size: 6,
      label_size: 4,
      disable: false,
      showButton: false,
    },
    {
      type: "select",
      name: "gender",
      label: "Gender",
      col_size: 6,
      label_size: 4,
      disable: false,
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
    },
    // Add more fields as needed
  ];

  const initialValues = {
    username: "",
    password: "",
    gender: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
      gender: Yup.string().required("Gender is required"),
      // Add more validation rules as needed
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  return (
    <>
      <div>
        <div className="Image-Container position-relative">
          <div className="d-flex align-items-center text-light w-100 p-3">
            <i className="fa-solid fa-arrow-left fa-2x cursor-pointer"></i>
            <h2 className="mx-3 mb-0">Title</h2>
          </div>
        </div>
        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center p-2 border rounded">
                <div>
                  <div className="fw-bold ">TESTEMULATOR</div>
                  <div className="text-muted">+919876543210</div>
                </div>
                <div className="text-center">
                  <div className="text-muted">Available Balance</div>
                  <div className="fw-bold">₹ 69,000</div>
                </div>
              </div>
            </div>
            <div className="mt-5 ">
              <ReusableForm
                fromDate={new Date()}
                fieldtype={formFields}
                formik={formik}
                btn_name="Add Bank"
                title="Bank Details"
                VerifyMobileN={() => console.log("Verify Mobile Number")}
                button_Size="lg"
                Disable_Button={false}
                //   after_password_field={<div>After Password Field</div>}
                //   after_submit_button={<div>After Submit Button</div>}
                //   after_text_field={<div>After Text Field</div>}
                btn_design="btn-primary"
                disabledSubmit={false}
                isLoading={false}
                show_submit={true}
                label_size={4}
                show_preview={true}
                //   after_submit_button1={<div>After Submit Button 1</div>}
                show_clear={true}
                setUnable={() => console.log("Set Unable")}
              />
            </div>

            {/* <div className="col-12">
              <div className="d-flex flex-column justify-content-between align-items-center p-2 border rounded">
                <div className="d-flex align-items-center justify-content-between mt-3 ">
                  <span>
                    Pay This UPI ID &nbsp;
                    <i className="fa-solid fa-arrow-right"></i>
                    &nbsp;
                  </span>

                  <input
                    type="text"
                    class="form-control w-50"
                    value={amount}
                    placeholder="Enter amount"
                    //   onChange={handleInputChange}
                  />

                  <div onClick={() => copyToClipboard()}>
                    <i class="fa-solid fa-copy "></i>
                  </div>
                </div>
                {copied && <span className="copy-message">✅ Copied!</span>}
                <span className="fw-bold my-3">
                  Upload the payment screenshot(with UTR No.) and Submit
                </span>
                <div className="mt-3 ">
                  <div className="d-flex align-items-center justify-content-between my-2">
                    <span>Deposite Amount &nbsp; : &nbsp;</span>
                    <input
                      type="text"
                      class="form-control w-50"
                      value={amount}
                      placeholder="Enter amount"
                      //   onChange={handleInputChange}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between my-2">
                    <span>UTR No. &nbsp; : &nbsp;</span>
                    <input
                      type="text"
                      class="form-control w-50"
                      value={amount}
                      placeholder="Enter UTR No."
                      //   onChange={handleInputChange}
                    />
                  </div>
                </div>

                <span className="d-flex align-items-center justify-content-between my-2">
                  OR
                </span>

                <div className="container mt-4">
                  <label htmlFor="uploadInput" className="upload-box">
                    <input
                      type="file"
                      id="uploadInput"
                      className="d-none"
                      accept="image/*"
                      onChange={previewImageHandler}
                    />

                    {previewImage ? (
                      <img
                        src={previewImage}
                        className="upload-preview-img"
                        alt="Uploaded Preview"
                      />
                    ) : (
                      <div className="upload-content">
                        <i className="fa-solid fa-image fa-4x"></i>
                        <i className="fa-solid fa-plus-circle fa-2x upload-icon"></i>
                      </div>
                    )}
                  </label>
                </div>

                <button
                  className="btn btn-teal w-100 my-5 text-white fw-bold py-2"
                  style={{ borderRadius: "25px", background: "#237f8a" }}
                >
                  Submit
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tessting;
