import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReusableForm from "../../../../Components/Formik_form";
import InformModal from "../../../../Components/InformModal";
const AddBankDetails = () => {
  const formFields = [
    {
      type: "text",
      name: "accountnumber",
      label: "Account Number",
      col_size: 6,
      label_size: 4,
      disable: false,
      showButton: false,
    },
    {
      type: "text",
      name: "ifsccode",
      label: "IFSC Code",
      col_size: 6,
      label_size: 4,
      disable: false,
      showButton: false,
    },
    {
      type: "text",
      name: "bankname",
      label: "Bank Name",
      col_size: 6,
      label_size: 4,
      disable: false,
      showButton: false,
    },
    {
      type: "text",
      name: "accountholdername",
      label: "Account Holder Name",
      col_size: 6,
      label_size: 4,
      disable: false,
      showButton: false,
    },

    // Add more fields as needed
  ];

  const initialValues = {
    accountnumber: "",
    ifsccode: "",
    bankname: "",
    accountholdername: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      accountnumber: Yup.string().required("Account Number is required"),
      ifsccode: Yup.string().required("IFSC Code is required"),
      bankname: Yup.string().required("Bank Name is required"),
      accountholdername: Yup.string().required("Account Holder Name is required"),

      // Add more validation rules as needed
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });
const [modal,setmodal]=useState(true)
  return (
    <>
      <div>
        {/* <div className="Image-Container position-relative">
          <div className="d-flex align-items-center text-light w-100 p-3">
            <i className="fa-solid fa-arrow-left fa-2x cursor-pointer"></i>
            <h2 className="mx-3 mb-0">Title</h2>
          </div>
        </div> */}
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
            <div className="mt-4">
              <ReusableForm
                fromDate={new Date()}
                fieldtype={formFields}
                formik={formik}
                btn_name="Add Bank"
                title="Bank Details"
                VerifyMobileN={() => console.log("Verify Mobile Number")}
                button_Size="lg"
                Disable_Button={false}
                btn_design="btn-primary"
                disabledSubmit={false}
                isLoading={false}
                show_submit={true}
                label_size={4}
                show_preview={true}
                show_clear={true}
                setUnable={() => console.log("Set Unable")}
              />
            </div>
          </div>
        </div>
      </div>
      <InformModal  isOpen={modal}
        onClose={() => setmodal(!modal)}
        title={"Please Add Bank Details"}
        icon={"fa fa-info-circle"}
        buttontitle={"OK"}/>
    </>
  );
};

export default AddBankDetails;
