import { useFormik } from "formik";
import * as Yup from "yup";
import NastedLayout from "../../../Containers/NastedLayout";
import PagesIndex from "../../pageIndex";
import toast from "react-hot-toast";

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
      const data = { idea: values.msg };
      try {
        const res = await PagesIndex.commanservice.FOR_POST_REQUEST(
          `${PagesIndex.apiRoutes.POST_USER_IDEAS}`,
          data
        );

        if (res) {
          if (res.status) {
            toast.success(res.message);

            console.log(res.data);
            resetForm();
          }
        }
      } catch (error) {
        toast.success(error.message);

        console.log(error);
      }
    },
  });

  return (
    <NastedLayout title={"SUBMIT YOUR IDEAS"} route={"/home"}>
      <div className="my-2">
        <div className="d-flex primary-color fw-bold justify-content-around align-items-center">
          <div className="">
            <PagesIndex.ReusableForm
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
      <PagesIndex.Toast position={"top-center"} />
    </NastedLayout>
  );
};

export default SubmitYourIdea;
