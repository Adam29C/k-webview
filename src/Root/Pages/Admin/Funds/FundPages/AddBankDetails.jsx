import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PagesIndex from "../../../pageIndex";
import { GetIFSCCode } from "../../../../Config/baseurl";
import axios from "axios";
import toast from "react-hot-toast";
const AddBankDetails = () => {
  const navigate = PagesIndex.useNavigate();
  const { getProfile } = PagesIndex.useSelector((state) => state.CommonSlice);

  const [modal, setmodal] = useState(false);

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
      disable: true,
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
      accountholdername: Yup.string().required(
        "Account Holder Name is required"
      ),

      // Add more validation rules as needed
    }),
    onSubmit: async (values) => {
      const res = await PagesIndex.commanservice.FOR_GET_LIST(
        PagesIndex.apiRoutes.CHECK_BANK_ACCOUNT_AVAILABLTY
      );

      if (res?.status) {
        const payload = {
          account_no: values.accountnumber,
          bank_name: values.bankname,
          ifsc_code: values.ifsccode,
          account_holder_name: values.accountholdername,
        };

        const res = await PagesIndex.commanservice.FOR_POST_REQUEST(
          PagesIndex.apiRoutes.ADD_BANK_ACCOUNT,
          payload
        );

        if (res.status) {
          toast.success(res.message);
          navigate("/funds");
        } else {
          toast.error(res.message);
        }
      }
    },
  });

  const getbalance = async () => {
    try {
      const res = await axios.get(
        `${GetIFSCCode}${formik.values.ifsccode.toUpperCase()}`
      );

      if (res.status === 200) {
        formik.setFieldValue("bankname", res.data.BANK);
      }
    } catch (error) {
      formik.setFieldValue("bankname", "");
    }
  };

  PagesIndex.useEffect(() => {
    if (formik.values.ifsccode.length > 8) {
      getbalance();
    }
  }, [formik.values.ifsccode]);

  return (
    <>
      <div>
        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center p-2 border rounded">
                <div>
                  <div className="fw-bold ">{getProfile?.username}</div>
                  <div className="text-muted">+91{getProfile?.mobile}</div>
                </div>
                <div className="text-center">
                  <div className="text-muted">Available Balance</div>
                  <div className="fw-bold">₹ {getProfile?.wallet_balance}</div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <PagesIndex.ReusableForm
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
        <PagesIndex.Toast position="top - center" />
      </div>
      <PagesIndex.InformModal
        isOpen={modal}
        onClose={() => setmodal(!modal)}
        title={"Please Add Bank Details"}
        icon={"fa fa-info-circle"}
        buttontitle={"OK"}
      />
    </>
  );
};

export default AddBankDetails;
