import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReusableForm from "../../../Components/Formik_form";
// import ReusableForm from "./Formik_form";
import CenterModal from "../../../Components/Reusable_modal";
import { FOR_POST_REQUEST } from "../../../Service/commanservice";
import { apiRoutes } from "../../../Config/endpoints";

// import Home_Container from "../Containers/Home_Container";

const GenerateMPin = () => {
  const formFields = [
    {
      type: "text",
      name: "oldpin",
      label: "Old MPIN",
      col_size: 6,
      label_size: 4,
      disable: false,
      showButton: false,
    },
    {
      type: "text",
      name: "newpin",
      label: "New MPIN",
      col_size: 6,
      label_size: 4,
      disable: false,
      showButton: false,
    },
    {
      type: "text",
      name: "confirmnewpin",
      label: "Confirm New MPIN",
      col_size: 6,
      label_size: 4,
      disable: false,
      showButton: false,
    },
  ];

  const initialValues = {
    oldpin: "",
    newpin: "",
    confirmnewpin: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      oldpin: Yup.string()
        .matches(/^\d+$/, "Old Pin must be numeric")
        .min(4, "Old Pin must be at least 4 digits")
        .required("Old Pin is required"),

      newpin: Yup.string()
        .matches(/^\d+$/, "New Pin must be numeric")
        .min(4, "New Pin must be at least 4 digits")
        .required("New Pin is required"),

      confirmnewpin: Yup.string()
        .oneOf([Yup.ref("newpin"), null], "Confirm Newpin must match New Pin")
        .matches(/^\d+$/, "Confirm Newpin must be numeric")
        .min(4, "Confirm Newpin must be at least 4 digits")
        .required("Confirm Newpin is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("Form values:", values);
      const data = {
        oldMpin: values.oldpin,
        newMpin: values.confirmnewpin,
      };
      try {
        const res = await FOR_POST_REQUEST(
          `${apiRoutes.POST_CHANGE_MPIN}`,
          data
        );
        if (res) {
          if (res.status == true) {
            // setdata(res?.data[0]);
            console.log(res);
            resetForm();
          }
        }
      } catch (error) {
        console.log(error);
      }
      // Reset the form after submission
    },
  });

  const [selectedGame, setSelectedGame] = useState(false);

  const handleOpenModal = () => {
    setSelectedGame(!selectedGame);
  };
  //   console.log(selectedGame);
  return (
    <>
      {/* <Home_Container title="MADHUR DAY - Single Digit Board"> */}
      <div className=" py-3 px-3 my-2 rounded">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex d-flex align-items-center justify-content-center flex-column">
              <div className="w-75 mb-3">
                <button
                  className="secondary-button d-flex justify-content-around align-items-center fs-13"
                  data-bs-target={`#timinig-test`}
                  data-bs-toggle="modal"
                  onClick={() => handleOpenModal()}
                >
                  <span class="icon-box  me-3">
                    <i class="fas fa-lock"></i>
                  </span>
                  Change MPIN
                  <i class="fas fa-chevron-right ms-3"></i>
                </button>
              </div>
              <div className="w-75">
                <button
                  className="secondary-button d-flex justify-content-around align-items-center fs-13"
                  onClick={() => handleOpenModal()}
                >
                  <span class="icon-box  me-3">
                    <i class="fas fa-lock"></i>
                  </span>
                  Forget MPIN
                  <i class="fas fa-chevron-right ms-3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <CenterModal
          id={`timinig-test`}
          showBtn={false}
          title="MPIN"
          size={"sm"}
          children={
            <>
              <ReusableForm
                fromDate={new Date()}
                fieldtype={formFields}
                formik={formik}
                btn_name="Update"
                title="Bank Details"
                button_Size="lg"
                Disable_Button={false}
                btn_design="btn-primary"
                disabledSubmit={false}
                isLoading={false}
                show_submit={true}
                Showtitle={false}
                label_size={4}
                show_preview={true}
                show_clear={true}
              />
            </>
          }
        />
      </div>
      {/* </Home_Container> */}
    </>
  );
};

export default GenerateMPin;
