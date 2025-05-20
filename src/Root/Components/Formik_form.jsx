import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useFormik, FieldArray } from "formik";
// import CustomDatePicker from "./DatePickers";

const ReusableForm = ({
  fromDate,
  fieldtype,
  formik,
  btn_name,
  title,
  VerifyMobileN,
  button_Size,
  Disable_Button,
  after_password_field,
  after_submit_button,
  after_text_field,
  btn_design,
  disabledSubmit,
  isLoading,
  show_submit,
  label_size,
  show_preview,
  after_submit_button1,
  show_clear,
  Showtitle,
  setUnable,
}) => {
  const location = useLocation();
  const [passwordVisible, setPasswordVisible] = useState({});
  const [dateStates, setDateStates] = useState({});
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (event, index, name) => {
    const file = event.target.files[0];
    if (file) {
      const newPreviews = [...previews];
      newPreviews[index] = URL.createObjectURL(file);
      setPreviews(newPreviews);

      const reader = new FileReader();
      reader.onload = () => {
        formik.setFieldValue(`${name}_base64`, reader.result);
      };
      reader.readAsDataURL(file);
      formik.setFieldValue(name, file);
    }
  };

  const renderField = (field, index) => {
    switch (field.type) {
      case "select":
        return (
          <div
            className={`col-lg-${field.col_size} ${
              field.Visiblity === "hidden" ? "d-none" : "d-block"
            } ${field.hideField ? "hideFieldCss" : ""}`}
          >
            <div className="mb-1 row">
              {/* <label className={`custom-label col-lg-${field.label_size}`} htmlFor={field.name}>
                {field.label}
                <span className="text-danger">*</span>
              </label> */}
              <div className={`col-lg-${title === "addgroup" ? 12 : 12}`}>
                <select
                  className="default-select wide form-control  rounded-pill"
                  id={field.name}
                  {...formik.getFieldProps(field.name)}
                  disabled={field.disable}
                  defaultValue={field.default}
                  onChange={(e) => {
                    formik.handleChange(e);
                    if (field.onChange) field.onChange(e);
                  }}
                >
                  <option value="" selected disabled>
                    Please Select {field.label}
                  </option>
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {formik.errors[field.name] && (
                  <div className="error-text text-danger">
                    {formik.errors[field.name]}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      case "checkbox":
        return (
          <>
            {field.options.map((option) => (
              <div
                className={`mb-3 col-md-4 col-sm-6 col-6 col-lg-${field.col_size}`}
                key={option.id}
              >
                <div className="form-check custom-checkbox mb-2">
                  <input
                    type={field.type}
                    className="form-check-input"
                    id={option.name}
                    {...formik.getFieldProps(option.name)}
                    defaultChecked={
                      field.pagetype
                        ? option.checked
                        : formik.values[option.name] || false
                    }
                    value={
                      field.pagetype
                        ? option.checked
                        : formik.values[option.name] || false
                    }
                  />
                  {/* <label className="form-check-label fw-bolder" htmlFor={option.name}>
                    {option.name}
                  </label> */}
                </div>
                {option.Nasted &&
                  option.Nasted.map((subOption) => (
                    <div className="row d-flex" key={subOption.id}>
                      <div className={`col-lg-12`}>
                        <div className="form-check custom-checkbox mb-2 ml-3">
                          <input
                            type={field.type}
                            className="form-check-input"
                            id={subOption.name}
                            {...formik.getFieldProps(subOption.name)}
                            defaultChecked={subOption.checked}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={subOption.name}
                          >
                            {subOption.name}
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
            {formik.errors[field.name] && (
              <div className="error-text">{formik.errors[field.name]}</div>
            )}
          </>
        );
      case "radio":
        return (
          <div className={`col-lg-${field.title_size}`}>
            <h5>permission</h5>
            <div className="row">
              {field.options.map((option) => (
                <div className={`col-lg-${field.col_size}`} key={option.id}>
                  <div className="row d-flex">
                    <div className={`col-lg-${field.col_size}`}>
                      <div className="form-check custom-checkbox mb-2">
                        <input
                          type={field.type}
                          className="form-check-input"
                          id={option.label}
                          {...formik.getFieldProps(option.name)}
                          defaultChecked={option.checked}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={option.label}
                        >
                          {option.label}
                        </label>
                      </div>
                      {formik.errors[field.name] && (
                        <div className="error-text">
                          {formik.errors[field.name]}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "password":
        return (
          <>
            {after_password_field}
            <div className={`col-lg-${field.col_size}`}>
              <div className="mb-3 row">
                {/* <label className={`custom-label col-lg-${field.label_size} col-form-label`} htmlFor={field.name}>
                  {field.label}
                  <span className="text-danger">*</span>
                </label> */}
                <div style={{ position: "relative" }}>
                  <input
                    id={field.name}
                    disabled={field.disable}
                    type={passwordVisible[field.name] ? "text" : field.type}
                    placeholder={field.label}
                    {...formik.getFieldProps(field.name)}
                    className={`form-control  rounded-pill`}
                  />
                  <i
                    className={`fa-solid ${
                      !passwordVisible[field.name] ? "fa-eye-slash" : "fa-eye"
                    }`}
                    style={{
                      position: "absolute",
                      top: "1.5px",
                      right: "20px",
                      padding: "12.4px 6.6px",
                      borderRadius: "3px",
                    }}
                    onClick={() =>
                      setPasswordVisible((prevState) => ({
                        ...prevState,
                        [field.name]: !prevState[field.name],
                      }))
                    }
                  ></i>
                  {formik.errors[field.name] && (
                    <div className="error-text" style={{ color: "red" }}>
                      {formik.errors[field.name]}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        );
      case "date":
        <></>;
      // return <CustomDatePicker field={field} formik={formik} setDateStates={setDateStates} dateStates={dateStates} />;
      case "time":
        return (
          <div className={`col-lg-${field.col_size} mb-3`}>
            <label
              className={`custom-label col-lg-${field.label_size}`}
              htmlFor={field.name}
            >
              {field.label}
              <span className="text-danger">*</span>
            </label>
            <input
              type={field.type}
              name={field.name}
              className="form-control  rounded-pill"
              id={field.name}
              {...formik.getFieldProps(field.name)}
              min={field.min && field.min.actual_date_formet}
              max={field.max && field.max.actual_date_formet}
            />
          </div>
        );
      case "msgbox":
        return (
          <div className={`col-lg-${field.col_size}`}>
            <div className="row d-flex">
              <div className="mb-3">
                <label
                  className={`custom-label custom-padding-for-label col-lg-${field.label_size} col-form-label`}
                  htmlFor={field.name}
                >
                  {field.label}
                  <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  style={{ backgroundColor: "#ebe1e1" }}
                  rows={field.row_size}
                  id={field.name}
                  name={field.name}
                  {...formik.getFieldProps(field.name)}
                  placeholder={field.label}
                ></textarea>
                {formik.errors[field.name] && (
                  <div className="error-text">{formik.errors[field.name]}</div>
                )}
              </div>
            </div>
          </div>
        );
      case "file":
        return (
          <div className={`col-lg-${field.col_size}`}>
            <div className="row d-flex">
              <div className={`col-lg-${title === "addgroup" ? 6 : 12}`}>
                <div className="mb-3">
                  <label
                    className={`custom-label col-form-label`}
                    htmlFor={field.name}
                  >
                    {field.label}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="file"
                    id={field.name}
                    onChange={(e) => handleFileChange(e, index, field.name)}
                    className={`form-control  rounded-pill`}
                  />
                  {show_preview && (
                    <span>
                      {formik.getFieldProps(field?.name).value &&
                      formik.getFieldProps(field?.name).value.name ? (
                        <span>
                          {formik.getFieldProps(field?.name).value.name}
                        </span>
                      ) : (
                        formik.getFieldProps(field?.name).value
                      )}
                    </span>
                  )}
                </div>
                {formik.errors[field.name] && (
                  <div className="error-text">{formik.errors[field.name]}</div>
                )}
                {show_preview !== true ||
                formik.getFieldProps(`${field?.name}_base64`)?.value ||
                formik.getFieldProps(field?.name)?.value ? (
                  <img
                    src={
                      show_preview
                        ? ""
                        : formik.getFieldProps(`${field.name}_base64`).value ||
                          formik.getFieldProps(field.name).value
                    }
                    name={field.name}
                    id={field.name}
                    alt={show_preview ? "" : `Preview ${index}`}
                    className={show_preview ? "" : "superadmin-preview-img"}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        );
      case "fieldarray":
        return (
          <FieldArray name={field.name}>
            {({ push, remove }) => (
              <div>
                {formik.values[field.name].map((arrayField, i) => (
                  <div key={i} className="row mb-3">
                    <div className="col-lg-5">
                      <input
                        type="text"
                        name={`${field.name}.${i}.title`}
                        placeholder="Title"
                        className="form-control  rounded-pill"
                        value={arrayField.title}
                        onChange={formik.handleChange}
                      />
                      {formik.errors[field.name] &&
                        formik.errors[field.name][i] &&
                        formik.errors[field.name][i].title && (
                          <div className="error-text">
                            {formik.errors[field.name][i].title}
                          </div>
                        )}
                    </div>
                    <div className="col-lg-5">
                      <input
                        type="text"
                        name={`${field.name}.${i}.videoUrl`}
                        placeholder="Video URL"
                        className="form-control  rounded-pill"
                        value={arrayField.videoUrl}
                        onChange={formik.handleChange}
                      />
                      {formik.errors[field.name] &&
                        formik.errors[field.name][i] &&
                        formik.errors[field.name][i].videoUrl && (
                          <div className="error-text">
                            {formik.errors[field.name][i].videoUrl}
                          </div>
                        )}
                    </div>
                    <div className="col-lg-2">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => remove(i)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => push({ title: "", videoUrl: "" })}
                >
                  Add Row
                </button>
              </div>
            )}
          </FieldArray>
        );
      default:
        return (
          <div
            className={`col-lg-${field.col_size} ${
              field.Visiblity === "hidden" ? "d-none" : "d-block"
            }`}
          >
            <div className="mb-3 row flex-column">
              {/* <label className={`custom-label col-lg-${field.label_size}`} htmlFor={field.name}>
                {field.label}
                <span className="text-danger">*</span>
              </label> */}
              <div className={`d-flex`}>
                <input
                  type="text"
                  autoComplete="off"
                  className="form-control rounded-pill"
                  style={{ background: field.disable ? "#eeeeee" : "" }}
                  id={field.name}
                  placeholder={`Enter ${field.label}`}
                  {...formik.getFieldProps(field.name)}
                  readOnly={field.disable}
                  onChange={(e) => formik.handleChange(e)}
                />
                {field.showButton && (
                  <button
                    style={{ background: "#4e3897", width: "100px" }}
                    className="btn border-0 btn-primary ms-3 col-4"
                    onClick={(e) => {
                      e.preventDefault();
                      VerifyMobileN();
                    }}
                    disabled={Disable_Button}
                  >
                    Send OTP
                  </button>
                )}
                <div className="invalid-feedback">
                  Please enter {field.label}
                </div>
              </div>
              {formik.errors[field.name] && (
                <div className="error-text">{formik.errors[field.name]}</div>
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {Showtitle && <h6 className="text-center ms-5"> {title}</h6>}
      <form
        onSubmit={formik.handleSubmit}
        className="d-flex justify-content-center align-items-center "
      >
        <div
          className="row test-form"
          style={{
            height: `${title === "addgroup" ? "65vh" : ""}`,
            overflowY: `${title === "addgroup" ? "scroll" : ""}`,
          }}
        >
          {/* <div className={`row`}> */}
          {fieldtype.map((field, index) => (
            <React.Fragment key={index}>
              {renderField(field, index)}
              {field.showButton && after_text_field}
            </React.Fragment>
          ))}
          <div className="form-group mb-0 button-main">
            {show_submit && (
              <button
                className={`primary-button mt-2 ${button_Size} ${
                  location.pathname === "resetpassword" ? "col-md-11" : ""
                } ${btn_design && "btn_design"}`}
                type="submit"
                disabled={formik.isSubmitting || disabledSubmit}
              >
                {btn_name}
              </button>
            )}
            {after_submit_button1}
          </div>
        </div>
        {/* </div> */}
      </form>
      <div className="row">{after_submit_button}</div>
    </>
  );
};

export default ReusableForm;
