import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReusableForm from "../../../Components/Formik_form";
import NewContainer from "../../../Containers/New_container";
import { FOR_POST_REQUEST } from "../../../Service/commanservice";
import { apiRoutes } from "../../../Config/endpoints";
// import ReusableForm from "./Formik_form";

// import NewContainer from "../Containers/New_container";

const SubmitYourIdea = () => {
  const formFields = [
    {
      type: "msgbox",
      name: "msg",
      label: "Type Your Idea's Here...",
      col_size: 12,
      label_size: 12,
      disable: false,
      showButton: false,
      row_size: 9,
    },
  ];
  const initialValues = {
    msg: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      msg: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      // console.log("Form values:", values);
      // Reset the form after submission
      const data = { idea: values.msg };
      try {
        const res = await FOR_POST_REQUEST(
          `${apiRoutes.POST_USER_IDEAS}`,
          data
        );
        if (res) {
          if (res.status == true) {
            // setdata(res?.data[0]);
            console.log(res.data);
            resetForm();
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      {/* <NewContainer title="MADHUR DAY - Single Digit Board"> */}
      <div className="my-2">
        <div className="d-flex primary-color fw-bold justify-content-around align-items-center">
          <div className="">
            <ReusableForm
              fromDate={new Date()}
              fieldtype={formFields}
              formik={formik}
              btn_name="Submit"
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
              Showtitle={false}
              label_size={4}
              show_preview={true}
              //   after_submit_button1={<div>After Submit Button 1</div>}
              show_clear={true}
              setUnable={() => console.log("Set Unable")}
            />
          </div>
        </div>
      </div>
      {/* </NewContainer> */}
    </>
  );
};

export default SubmitYourIdea;
