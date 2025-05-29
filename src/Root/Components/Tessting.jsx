// // -------------   for add fund -------------

// import React, { useState } from "react";
// import ThirdContainer from "../Containers/New_container";
// import CommonTopSvg from "../../assets/svgs/secondary-top.svg";

// const Tessting = () => {
//   const [amount, setAmount] = useState("");

//   const handleAmountClick = (value) => {
//     setAmount(value);
//   };

//   const handleInputChange = (e) => {
//     const value = e.target.value.replace(/\D/g, "");
//     setAmount(parseInt(value));
//   };

//   return (
//     <>
//       <div>
//         <div className="Image-Container position-relative">
//           <div className="d-flex align-items-center text-light w-100 p-3">
//             <i className="fa-solid fa-arrow-left fa-2x cursor-pointer"></i>
//             <h2 className="mx-3 mb-0">Title</h2>
//           </div>
//         </div>

//         <div className="container-fluid mt-2">
//           <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center p-2 border rounded">
//                 <div>
//                   <div className="fw-bold ">TESTEMULATOR</div>
//                   <div className="text-muted">+919876543210</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-muted">Available Balance</div>
//                   <div className="fw-bold">₹ 69,000</div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-12 mt-2 ">
//               <div className="d-flex flex-column justify-content-between align-items-center p-2 border rounded">
//                 <div class="container my-5">
//                   <div class="row justify-content-center">
//                     <div class="col-md-6">
//                       <div class="input-group d-flex justify-content-center">
//                         <h2 className="fw-bold">₹</h2>
//                         <input
//                           type="text"
//                           class="fund-input-control"
//                           value={amount}
//                           placeholder="Enter amount"
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row g-2 my-5">
//                   {[100, 500, 1000, 2000, 5000, 10000].map((value) => (
//                     <div className="col-4" key={value}>
//                       <button
//                         className="btn btn-light w-100 shadow-sm"
//                         onClick={() => handleAmountClick(value)}
//                       >
//                         {value}
//                       </button>
//                     </div>
//                   ))}
//                 </div>

//                 <button
//                   className="btn btn-teal w-100 my-5 text-white fw-bold py-2"
//                   style={{ borderRadius: "25px", background: "#237f8a" }}
//                 >
//                   Add Fund
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Tessting;

// // -------------   for Manual Deposite -------------

// import React, { useState } from "react";
// import ThirdContainer from "../Containers/New_container";
// import CommonTopSvg from "../../assets/svgs/secondary-top.svg";

// const Tessting = () => {
//   const [amount, setAmount] = useState("");
//   const [previewImage, setPreviewImage] = useState(null);
//   const [text, setText] = useState("Hello, this is a copyable text!");
//   const [copied, setCopied] = useState(false);
//   const handleAmountClick = (value) => {
//     setAmount(value);
//   };

//   const handleInputChange = (e) => {
//     const value = e.target.value.replace(/\D/g, "");
//     setAmount(parseInt(value));
//   };
//   const previewImageHandler = (event) => {
//     let file = event.target.files[0];

//     if (file) {
//       let reader = new FileReader();
//       reader.onload = function (e) {
//         setPreviewImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(text).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000); // Reset message after 2 sec
//     });
//   };

//   return (
//     <>
//       <div>
//         <div className="Image-Container position-relative">
//           <div className="d-flex align-items-center text-light w-100 p-3">
//             <i className="fa-solid fa-arrow-left fa-2x cursor-pointer"></i>
//             <h2 className="mx-3 mb-0">Title</h2>
//           </div>
//         </div>
//         <div className="container-fluid mt-2">
//           <div className="row">
//             <div className="col-12">
//               <div className="d-flex flex-column justify-content-between align-items-center p-2 border rounded">
//                 <div className="d-flex align-items-center justify-content-between mt-3 ">
//                   <span>
//                     Pay This UPI ID &nbsp;
//                     <i className="fa-solid fa-arrow-right"></i>
//                     &nbsp;
//                   </span>

//                   <input
//                     type="text"
//                     class="form-control w-50"
//                     value={amount}
//                     placeholder="Enter amount"
//                     //   onChange={handleInputChange}
//                   />

//                   <div onClick={() => copyToClipboard()}>
//                     <i class="fa-solid fa-copy "></i>
//                   </div>
//                 </div>
//                   {copied && <span className="copy-message">✅ Copied!</span>}
//                 <span className="fw-bold my-3">
//                   Upload the payment screenshot(with UTR No.) and Submit
//                 </span>
//                 <div className="mt-3 ">
//                   <div className="d-flex align-items-center justify-content-between my-2">
//                     <span>Deposite Amount &nbsp; : &nbsp;</span>
//                     <input
//                       type="text"
//                       class="form-control w-50"
//                       value={amount}
//                       placeholder="Enter amount"
//                       //   onChange={handleInputChange}
//                     />
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between my-2">
//                     <span>UTR No. &nbsp; : &nbsp;</span>
//                     <input
//                       type="text"
//                       class="form-control w-50"
//                       value={amount}
//                       placeholder="Enter UTR No."
//                       //   onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>

//                 <span className="d-flex align-items-center justify-content-between my-2">
//                   OR
//                 </span>

//                 <div className="container mt-4">
//                   <label htmlFor="uploadInput" className="upload-box">
//                     <input
//                       type="file"
//                       id="uploadInput"
//                       className="d-none"
//                       accept="image/*"
//                       onChange={previewImageHandler}
//                     />

//                     {previewImage ? (
//                       <img
//                         src={previewImage}
//                         className="upload-preview-img"
//                         alt="Uploaded Preview"
//                       />
//                     ) : (
//                       <div className="upload-content">
//                         <i className="fa-solid fa-image fa-4x"></i>
//                         <i className="fa-solid fa-plus-circle fa-2x upload-icon"></i>
//                       </div>
//                     )}
//                   </label>
//                 </div>

//                 <button
//                   className="btn btn-teal w-100 my-5 text-white fw-bold py-2"
//                   style={{ borderRadius: "25px", background: "#237f8a" }}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Tessting;

// -------------   for Add Bank Details -------------

// import React, { useState } from "react";
// import ReusableForm from "./Formik_form";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const Tessting = () => {
//   const formFields = [
//     {
//       type: "text",
//       name: "username",
//       label: "Username",
//       col_size: 6,
//       label_size: 4,
//       disable: false,
//       showButton: false,
//     },
//     {
//       type: "password",
//       name: "password",
//       label: "Password",
//       col_size: 6,
//       label_size: 4,
//       disable: false,
//       showButton: false,
//     },
//     {
//       type: "select",
//       name: "gender",
//       label: "Gender",
//       col_size: 6,
//       label_size: 4,
//       disable: false,
//       options: [
//         { value: "male", label: "Male" },
//         { value: "female", label: "Female" },
//       ],
//     },
//     // Add more fields as needed
//   ];

//   const initialValues = {
//     username: "",
//     password: "",
//     gender: "",
//   };

//   const formik = useFormik({
//     initialValues,
//     validationSchema: Yup.object({
//       username: Yup.string().required("Username is required"),
//       password: Yup.string().required("Password is required"),
//       gender: Yup.string().required("Gender is required"),
//       // Add more validation rules as needed
//     }),
//     onSubmit: (values) => {
//       console.log("Form values:", values);
//     },
//   });

//   return (
//     <>
//       <div>
//         <div className="Image-Container position-relative">
//           <div className="d-flex align-items-center text-light w-100 p-3">
//             <i className="fa-solid fa-arrow-left fa-2x cursor-pointer"></i>
//             <h2 className="mx-3 mb-0">Title</h2>
//           </div>
//         </div>
//         <div className="container-fluid mt-2">
//           <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center p-2 border rounded">
//                 <div>
//                   <div className="fw-bold ">TESTEMULATOR</div>
//                   <div className="text-muted">+919876543210</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-muted">Available Balance</div>
//                   <div className="fw-bold">₹ 69,000</div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-5 ">
//               <ReusableForm
//                 fromDate={new Date()}
//                 fieldtype={formFields}
//                 formik={formik}
//                 btn_name="Add Bank"
//                 title="Bank Details"
//                 VerifyMobileN={() => console.log("Verify Mobile Number")}
//                 button_Size="lg"
//                 Disable_Button={false}
//                 btn_design="btn-primary"
//                 disabledSubmit={false}
//                 isLoading={false}
//                 show_submit={true}
//                 label_size={4}
//                 show_preview={true}
//                 show_clear={true}
//                 setUnable={() => console.log("Set Unable")}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Tessting;

// -------------   for chat panel  -------------

// import React, { useState } from "react";

// const Tessting = () => {
//   return (
//     <>
//       <div>
//         <div className="Image-Container position-relative">
//           <div className="d-flex align-items-center text-light w-100 p-3">
//             <i className="fa-solid fa-arrow-left fa-2x cursor-pointer"></i>
//             <div className="d-flex flex-column align-items-center">
//               <h2 className="mx-3 mb-0">Title</h2>
//               <span className="">online</span>
//             </div>
//           </div>
//         </div>
//         <div className="container-fluid mt-2">
//           <div className="row">
//             <div className="col-12">
//               <div className="chat-container">
//                 <div className="chat-body d-flex flex-column">
//                   <div className="message sent">
//                     <p>hello</p>
//                   </div>
//                   <div className="text-muted small text-end">01:05 PM ✅</div>
//                   <div className="message received">
//                     <p>hello</p>
//                   </div>
//                   <div className="text-muted small text-start">01:15 PM</div>
//                 </div>
//                 {/* Chat Footer */}
//                 <div className="chat-footer">
//                   <i class="fa-solid fa-upload uploadImg"></i>
//                   <input type="text" placeholder="Type a message" />
//                   <button>
//                     <i className="fas fa-paper-plane" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Tessting;

// // -------------   fund Deposite History  -------------

// import React, { useState } from "react";

// const Tessting = () => {
//   return (
//     <>
//       <div>
//         <div className="Image-Container position-relative">
//           <div className="d-flex align-items-center text-light w-100 p-3">
//             <i className="fa-solid fa-arrow-left fa-2x cursor-pointer"></i>
//             <div className="d-flex flex-column align-items-center">
//               <h2 className="mx-3 mb-0">Title</h2>
//               <span className="">online</span>
//             </div>
//           </div>
//         </div>
//         <div className="container-fluid mt-2">
//           <div className="row">
//             <div className="col-12">
//               <div className="test p-2 border rounded mb-2">
//                 <div className="d-flex justify-content-between align-items-center mb-2">
//                   <span className=" ">19/07/2025 04:47:87PM</span>
//                   <span className="text-danger">
//                     <i class="fa-solid fa-clock"></i> failed
//                   </span>
//                 </div>

//                 <div className="d-flex justify-content-between align-items-center ">
//                   <h1 className=" text-muted">₹ 500</h1>
//                   <div className="flex-column d-flex text-center ">
//                     <span className="fw-bold">order id</span>
//                     <span className="">dfgfdg34534</span>
//                   </div>
//                 </div>
//                 <hr className="p-0"/>
//                 <div className="d-flex justify-content-between align-items-center ">
//                   <div className="flex-column d-flex text-left ">
//                     <span className="fw-bold">Request Type</span>
//                     <span className="">Credit</span>
//                   </div>
//                   <div className="flex-column d-flex text-center ">
//                     <span className="fw-bold">Withdraw Mode</span>
//                     <span className="">UPI/Bank</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Tessting;

// ----------   Passbook  -------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import NewContainer from "../Containers/New_container";

// const Tessting = () => {
//   return (
//     <>
//       <NewContainer title="Passbook">
//         <div className="test p-3 border rounded mb-2">
//           <div className="d-flex justify-content-between align-items-center mb-2">
//             <span className="text-success fw-bold">
//               wallet Fund Credit via Payment Gatway
//             </span>
//           </div>
//           <div className="d-flex justify-content-between align-items-center">
//             <span>24/02/2025 </span>
//             <span>+100.0 </span>
//           </div>

//           <div className="d-flex justify-content-between align-items-center">
//             <div className="d-flex justify-content-between flex-column align-items-center">
//               <span className="passbook-title">Previous Amount</span>
//               <span>690</span>
//             </div>
//             <div className="d-flex justify-content-between flex-column align-items-center">
//               <span className="passbook-title">Curent Amount</span>
//               <span>790</span>
//             </div>
//           </div>
//         </div>
//       </NewContainer>
//     </>
//   );
// };

// export default Tessting;

// ----------------- starline jackpot bid hostory   -------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import NewContainer from "../Containers/New_container";

// const Tessting = () => {
//   return (
//     <>
//       <NewContainer title="jackpot bid History">
//         <div className="test mt-2   rounded-4 ">
//           <div className="history-title mb-2">
//             <span className=" ">8:30 PM (JODI, JODI)</span>
//           </div>
//           <div className="d-flex justify-content-around align-items-center">
//             <div className="d-flex  flex-column ">
//               <span className="passbook-title">Bid ID</span>
//               <span>690</span>
//             </div>
//             <div className="d-flex  flex-column ">
//               <span className="passbook-title">Digit </span>
//               <span>690</span>
//             </div>
//             <div className="d-flex  flex-column ">
//               <span className="passbook-title">Point</span>
//               <span>790</span>
//             </div>
//           </div>
//           <div>
//             <div className="d-flex justify-content-around align-items-center">
//               <div className="d-flex  flex-column text-center ">
//                 <span className="passbook-title">Play On :</span>
//                 <span>09/01/2025 thursday</span>
//               </div>
//               <div className="d-flex  flex-column text-center ">
//                 <span className="passbook-title">Play For :</span>
//                 <span>09/01/2025 thursday</span>
//               </div>
//             </div>
//             <div className="d-flex my-2 justify-content-center ">
//               <div className="d-flex  align-items-center  text-center">
//                 <span className="fw-bold">Play For :</span>
//                 <span>09/01/2025 thursday</span>
//               </div>
//             </div>
//             <div className="  text-center">
//               <span className="">Better Luck Next Time</span>
//             </div>
//           </div>
//         </div>
//       </NewContainer>
//     </>
//   );
// };

// export default Tessting;

// //   -------------  game result history  -------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import NewContainer from "../Containers/New_container";

// const Tessting = () => {
//   return (
//     <>
//       <NewContainer title="jackpot bid History">
//         <div className="game-result-card   rounded-pill mb-2 d-flex">
//           <div className="col-6 p-2  game-result-left">
//             <span className="w-50  "> <i class="fa-solid fa-calendar-days"></i> &nbsp; 08/08/2025</span>
//           </div>
//           <div className="col-6 p-2 game-result-right">
//             <span className="w-50  ">8:30 PM</span>
//           </div>
//         </div>

//         <div className=" py-3 px-3 my-2 border rounded">
//           <div className="d-flex primary-color fw-bold justify-content-between align-items-center  ">
//             <span className="">
//               <i class="fa-solid fa-clock"></i> &nbsp; Indra Morning
//             </span>
//             <span>777-77-777</span>
//           </div>
//         </div>
//       </NewContainer>
//     </>
//   );
// };

// export default Tessting;

// //   -------------  FUND REQUEST HISTORY  -------------


import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewContainer from "../Containers/NastedLayout";

const Tessting = () => {
  return (
    <>
      <NewContainer title="jackpot bid History">
        <div className="fund-request-card p-2  rounded-4 mb-2">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="flex-column d-flex  ">
              <span className="bold-font">order id</span>
              <span className="">dfgfdg34534</span>
            </div>
            <h1 className=" text-muted">₹ 500</h1>
          </div>
          <div className="d-flex  mt-2 flex-column ">
            <div className=" d-flex text-left ">
              <span className="bold-font">
                Request Type &nbsp; : &nbsp;&nbsp;
              </span>
              <span className="">Credit</span>
            </div>
            <div className="d-flex text-center ">
              <span className="bold-font">
                Withdraw Mode &nbsp; : &nbsp;&nbsp;
              </span>
              <span className="">UPI/Bank</span>
            </div>
            <div className="d-flex text-center ">
              <span className="bold-font">Status &nbsp; : &nbsp;&nbsp;</span>
              <span className="">Decliend</span>
            </div>
            <div className="d-flex text-center ">
              <span className="bold-font">Date &nbsp; : &nbsp;&nbsp;</span>
              <span className="">25/02/2025 </span>
            </div>
          </div>
        </div>
      </NewContainer>
    </>
  );
};

export default Tessting;

//---------------------- GAME TYPE DASHBOARD  -------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import NewContainer from "../Containers/New_container";

// const Tessting = () => {
//   return (
//     <>
//       <NewContainer title="MADHUR DAY - Single Digit Board">
//         <div className="container mt-2">
//           <div className="mb-3 text-center d-flex justify-content-between align-items-center">
//             <label className="form-label">Select Game Type</label>
//             <select className="form-select d-inline w-auto rounded-pill">
//               <option>MADHUR DAY Close</option>
//             </select>
//           </div>
//           <hr />
//           <div className="row text-center my-5">
//             <div className="col-6 col-md-4 mb-2">
//               <div className="custom-input">
//                 <span>1</span>
//                 <input type="text" placeholder="Enter Points" />
//               </div>
//             </div>
//             <div className="col-6 col-md-4 mb-2">
//               <div className="custom-input">
//                 <span>2</span>
//                 <input type="text" placeholder="Enter Points" />
//               </div>
//             </div>
//             <div className="col-6 col-md-4 mb-2">
//               <div className="custom-input">
//                 <span>3</span>
//                 <input type="text" placeholder="Enter Points" />
//               </div>
//             </div>
//             <div className="col-6 col-md-4 mb-2">
//               <div className="custom-input">
//                 <span>4</span>
//                 <input type="text" placeholder="Enter Points" />
//               </div>
//             </div>
//             <div className="col-6 col-md-4 mb-2">
//               <div className="custom-input">
//                 <span>5</span>
//                 <input type="text" placeholder="Enter Points" />
//               </div>
//             </div>
//             <div className="col-6 col-md-4 mb-2">
//               <div className="custom-input">
//                 <span>6</span>
//                 <input type="text" placeholder="Enter Points" />
//               </div>
//             </div>
//             <div className="col-6 col-md-4 mb-2">
//               <div className="custom-input">
//                 <span>7</span>
//                 <input type="text" placeholder="Enter Points" />
//               </div>
//             </div>
//             <div className="col-6 col-md-4 mb-2">
//               <div className="custom-input">
//                 <span>8</span>
//                 <input type="text" placeholder="Enter Points" />
//               </div>
//             </div>
//             <div className="col-6 col-md-4 mb-2">
//               <div className="custom-input">
//                 <span>9</span>
//                 <input type="text" placeholder="Enter Points" />
//               </div>
//             </div>
//             <div className="col-6 col-md-4 mb-2 mx-auto">
//               <div className="custom-input">
//                 <span>0</span>
//                 <input type="text" placeholder="Enter Points" />
//               </div>
//             </div>
//           </div>
//           <div className="text-center mt-3 d-flex justify-content-around align-items-center">
//             {/* <div>Bids: 0 | Points: 0</span> */}
//             <div className="d-flex justify-content-start align-items-center">
//               <div className="d-flex text-justify  flex-column">
//                 <span className="bold-font ">BIDS &nbsp;  &nbsp;&nbsp;</span>
//                 <span className="">0</span>
//               </div>
//               <div className="d-flex text-center flex-column ">
//                 <span className="bold-font">POINTS &nbsp;  &nbsp;&nbsp;</span>
//                 <span className="">0</span>
//               </div>
//             </div>
//             <button className="dashboard-primary-button w-50">Submit</button>
//           </div>
//         </div>
//       </NewContainer>
//     </>
//   );
// };

// export default Tessting;

// // ---------------------- GAME TYPE DASHBOARD -2   -------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import NewContainer from "../Containers/New_container";

// const Tessting = () => {
//   return (
//     <>
//       <NewContainer title="MADHUR DAY - Single Digit Board">
//         <div className="container mt-2">
//           <div className="mb-3 text-center d-flex justify-content-between align-items-center">
//             <label className="form-label primary-color">Select Game Type</label>
//             <select className="form-select d-inline w-auto rounded-pill">
//               <option>MADHUR DAY Close</option>
//             </select>
//           </div>

//           <div className="mb-3 text-center d-flex justify-content-between align-items-center">
//             <label className="form-label primary-color">Enter Points</label>
//             <input
//               type="text"
//               placeholder="Enter Points"
//               className="form-control  rounded-pill w-50"
//             />
//           </div>
//           <hr />
//           <div className="row text-center my-5">
//             <div className="col-4 col-md-4 mb-4">
//               <button className="dashboard-primary-button w-100">1</button>
//             </div>
//             <div className="col-4 col-md-4 mb-4">
//               <button className="dashboard-primary-button w-100">2</button>
//             </div>
//             <div className="col-4 col-md-4 mb-4">
//               <button className="dashboard-primary-button w-100">3</button>
//             </div>
//             <div className="col-4 col-md-4 mb-4">
//               <button className="dashboard-primary-button w-100">4</button>
//             </div>
//             <div className="col-4 col-md-4 mb-4">
//               <button className="dashboard-primary-button w-100">5</button>
//             </div>
//             <div className="col-4 col-md-4 mb-4">
//               <button className="dashboard-primary-button w-100">6</button>
//             </div>
//             <div className="col-4 col-md-4 mb-4">
//               <button className="dashboard-primary-button w-100">7</button>
//             </div>
//             <div className="col-4 col-md-4 mb-4">
//               <button className="dashboard-primary-button w-100">8</button>
//             </div>
//             <div className="col-4 col-md-4 mb-4">
//               <button className="dashboard-primary-button w-100">9</button>
//             </div>
//             <div className="col-4 col-md-4 mb-4 mx-auto">
//               <button className="dashboard-primary-button w-100">0</button>
//             </div>
//           </div>
//           <div className="text-center mt-5 d-flex justify-content-around align-items-center set-buttons">
//             {/* <div>Bids: 0 | Points: 0</span> */}
//             <div className="d-flex justify-content-start align-items-center">
//               <div className="d-flex text-justify  flex-column">
//                 <span className="bold-font ">BIDS &nbsp; &nbsp;&nbsp;</span>
//                 <span className="">0</span>
//               </div>
//               <div className="d-flex text-center flex-column ">
//                 <span className="bold-font">POINTS &nbsp; &nbsp;&nbsp;</span>
//                 <span className="">0</span>
//               </div>
//             </div>
//             <button className="dashboard-primary-button w-50">Submit</button>
//           </div>
//         </div>
//       </NewContainer>
//     </>
//   );
// };

// export default Tessting;

// ---------------------- GAME TYPE DASHBOARD -3    -------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import NewContainer from "../Containers/New_container";

// const Tessting = () => {
//   return (
//     <>
//       <NewContainer title="MADHUR DAY - Single Digit Board">
//         <div className="container mt-2">
//           <div className="mb-3 text-center d-flex justify-content-between align-items-center">
//             <label className="form-label primary-color">Select Game Type</label>
//             <select className="form-select d-inline w-auto rounded-pill">
//               <option>MADHUR DAY Close</option>
//             </select>
//           </div>

//           <div className="mb-3 text-center d-flex justify-content-between align-items-center">
//             <label className="form-label primary-color">Double Points</label>
//             <input
//               type="text"
//               placeholder="Double Points"
//               className="form-control  rounded-pill w-50"
//             />
//           </div>
//           <div className="mb-3 text-center d-flex justify-content-between align-items-center">
//             <label className="form-label primary-color">Enter Points</label>
//             <input
//               type="text"
//               placeholder="Enter Points"
//               className="form-control  rounded-pill w-50"
//             />
//           </div>

//           <div className="d-flex ms-auto  justify-content-end ">
//             <button className="dashboard-primary-button w-50">Add More</button>
//           </div>

//           {/* <hr /> */}

//           <div className="row text-center mt-5">
//           <div style={{ maxHeight: "300px", overflowY: "auto", border: "1px solid #ddd" }}>
//             <table class="table">
//               <thead style={{ position: "sticky", top: 0, background: "#fff", zIndex: 10 }}>
//                 <tr>
//                   <th scope="col">Jodi</th>
//                   <th scope="col">Points</th>
//                   <th scope="col">Game Type</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <th scope="row">1</th>
//                   <td>Mark</td>
//                   <td>Otto</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">2</th>
//                   <td>Jacob</td>
//                   <td>Thornton</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">3</th>
//                   <td>Larry the Bird</td>
//                   <td>@twitter</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">3</th>
//                   <td>Larry the Bird</td>
//                   <td>@twitter</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">3</th>
//                   <td>Larry the Bird</td>
//                   <td>@twitter</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">3</th>
//                   <td>Larry the Bird</td>
//                   <td>@twitter</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">3</th>
//                   <td>Larry the Bird</td>
//                   <td>@twitter</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">3</th>
//                   <td>Larry the Bird</td>
//                   <td>@twitter</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           </div>
//           <div className="text-center mt-5 d-flex justify-content-around align-items-center set-buttons">
//             {/* <div>Bids: 0 | Points: 0</span> */}
//             <div className="d-flex justify-content-start align-items-center">
//               <div className="d-flex text-justify  flex-column">
//                 <span className="bold-font ">BIDS &nbsp; &nbsp;&nbsp;</span>
//                 <span className="">0</span>
//               </div>
//               <div className="d-flex text-center flex-column ">
//                 <span className="bold-font">POINTS &nbsp; &nbsp;&nbsp;</span>
//                 <span className="">0</span>
//               </div>
//             </div>
//             <button className="dashboard-primary-button w-50">Submit</button>
//           </div>
//         </div>
//       </NewContainer>
//     </>
//   );
// };

// export default Tessting;

// // ---------------------- SIDEBAR - SETTING    -------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Home_Container from "../Containers/Home_Container";

// const Tessting = () => {
//   return (
//     <>
//       <Home_Container title="MADHUR DAY - Single Digit Board">

//         <div className=" py-3 px-3 my-2 border rounded">
//           <div className="d-flex primary-color fw-bold justify-content-between align-items-center  ">
//             <span className="">
//               <i class="fa-solid fa-clock"></i> &nbsp; Indra Morning
//             </span>
//             <span>777-77-777</span>
//           </div>
//         </div>
//       </Home_Container>
//     </>
//   );
// };

// export default Tessting;

// ---------------------- YOUR- IDEA    -------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import ReusableForm from "./Formik_form";

// import NewContainer from "../Containers/New_container";

// const Tessting = () => {
//   const formFields = [
//     {
//       type: "msgbox",
//       name: "username",
//       label: "Type Your Idea's Here...",
//       col_size: 12,
//       label_size: 12,
//       disable: false,
//       showButton: false,
//       row_size:9
//     },
//   ];

//   const initialValues = {
//     username: "",
//     password: "",
//     gender: "",
//   };

//   const formik = useFormik({
//     initialValues,
//     validationSchema: Yup.object({
//       username: Yup.string().required("Username is required"),
//     }),
//     onSubmit: (values) => {
//       console.log("Form values:", values);
//     },
//   });

//   return (
//     <>
//       <NewContainer title="MADHUR DAY - Single Digit Board">
//         {/* <div className=" my-2 "> */}
//           {/* <div className="d-flex primary-color fw-bold justify-content-between align-items-center  "> */}
//             {/* <div className=""> */}
//               <ReusableForm
//                 fromDate={new Date()}
//                 fieldtype={formFields}
//                 formik={formik}
//                 btn_name="Add Bank"
//                 title="Bank Details"
//                 VerifyMobileN={() => console.log("Verify Mobile Number")}
//                 button_Size="lg"
//                 Disable_Button={false}
//                 //   after_password_field={<div>After Password Field</div>}
//                 //   after_submit_button={<div>After Submit Button</div>}
//                 //   after_text_field={<div>After Text Field</div>}
//                 btn_design="btn-primary"
//                 disabledSubmit={false}
//                 isLoading={false}
//                 show_submit={true}
//                 Showtitle={false}
//                 label_size={4}
//                 show_preview={true}
//                 //   after_submit_button1={<div>After Submit Button 1</div>}
//                 show_clear={true}
//                 setUnable={() => console.log("Set Unable")}
//               />
//             {/* </div> */}
//           {/* </div> */}
//         {/* </div> */}
//       </NewContainer>
//     </>
//   );
// };

// export default Tessting;

// ---------------------- MPIN    -------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import ReusableForm from "./Formik_form";
// import CenterModal from "./Reusable_modal";

// import Home_Container from "../Containers/Home_Container";

// const Tessting = () => {
//   const formFields = [
//     {
//       type: "text",
//       name: "username",
//       label: "Old MPIN",
//       col_size: 6,
//       label_size: 4,
//       disable: false,
//       showButton: false,
//     },
//     {
//       type: "text",
//       name: "username",
//       label: "New MPIN",
//       col_size: 6,
//       label_size: 4,
//       disable: false,
//       showButton: false,
//     },
//     {
//       type: "text",
//       name: "username",
//       label: "Confirm New MPIN",
//       col_size: 6,
//       label_size: 4,
//       disable: false,
//       showButton: false,
//     },
//   ];

//   const initialValues = {
//     username: "",
//     password: "",
//     gender: "",
//   };

//   const formik = useFormik({
//     initialValues,
//     validationSchema: Yup.object({
//       username: Yup.string().required("Username is required"),
//     }),
//     onSubmit: (values) => {
//       console.log("Form values:", values);
//     },
//   });

//   const [selectedGame, setSelectedGame] = useState(false);

//   const handleOpenModal = () => {
//     setSelectedGame(!selectedGame);
//   };

//   return (
//     <>
//       <Home_Container title="MADHUR DAY - Single Digit Board">
//         <div className=" py-3 px-3 my-2 border rounded">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-12 d-flex d-flex align-items-center justify-content-center flex-column">
//                 <div className=" w-75 mb-3  ">
//                   <button
//                     className="secondary-button d-flex align-items-center"
//                     data-bs-target={`#timinig-test`}
//                     data-bs-toggle="modal"
//                     onClick={() => handleOpenModal()}
//                   >
//                     <span class="icon-box  me-3">
//                       <i class="fas fa-lock"></i>
//                     </span>
//                     Change MPIN
//                     <i class="fas fa-chevron-right ms-3"></i>
//                   </button>
//                 </div>
//                 <div className="w-75">
//                   <button
//                     className="secondary-button d-flex align-items-center"
//                     onClick={() => handleOpenModal()}
//                   >
//                     <span class="icon-box  me-3">
//                       <i class="fas fa-lock"></i>
//                     </span>
//                     Forget MPIN
//                     <i class="fas fa-chevron-right ms-3"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <CenterModal
//             id={`timinig-test`}
//             showBtn={false}
//             title="MPIN"
//             size={"sm"}
//             children={
//               <>
//                 <ReusableForm
//                   fromDate={new Date()}
//                   fieldtype={formFields}
//                   formik={formik}
//                   btn_name="Update"
//                   title="Bank Details"
//                   button_Size="lg"
//                   Disable_Button={false}
//                   btn_design="btn-primary"
//                   disabledSubmit={false}
//                   isLoading={false}
//                   show_submit={true}
//                   Showtitle={false}
//                   label_size={4}
//                   show_preview={true}
//                   show_clear={true}
//                 />
//               </>
//             }
//           />
//         </div>
//       </Home_Container>
//     </>
//   );
// };

// export default Tessting;

// ---------------------- GAME RATES    -------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import ReusableForm from "./Formik_form";
// import CenterModal from "./Reusable_modal";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import ReusableForm from "./Formik_form";
// import CenterModal from "./Reusable_modal";

// import Home_Container from "../Containers/Home_Container";
// import Home_Container from "../Containers/Home_Container";

// const Tessting = () => {
//   const formFields = [
//     {
//       type: "text",
//       name: "username",
//       label: "Old MPIN",
//       col_size: 6,
//       label_size: 4,
//       disable: false,
//       showButton: false,
//     },
//     {
//       type: "text",
//       name: "username",
//       label: "New MPIN",
//       col_size: 6,
//       label_size: 4,
//       disable: false,
//       showButton: false,
//     },
//     {
//       type: "text",
//       name: "username",
//       label: "Confirm New MPIN",
//       col_size: 6,
//       label_size: 4,
//       disable: false,
//       showButton: false,
//     },
//   ];
// const Tessting = () => {
//   const formFields = [
//     {
//       type: "text",
//       name: "username",
//       label: "Old MPIN",
//       col_size: 6,
//       label_size: 4,
//       disable: false,
//       showButton: false,
//     },
//     {
//       type: "text",
//       name: "username",
//       label: "New MPIN",
//       col_size: 6,
//       label_size: 4,
//       disable: false,
//       showButton: false,
//     },
//     {
//       type: "text",
//       name: "username",
//       label: "Confirm New MPIN",
//       col_size: 6,
//       label_size: 4,
//       disable: false,
//       showButton: false,
//     },
//   ];

//   const initialValues = {
//     username: "",
//     password: "",
//     gender: "",
//   };
//   const initialValues = {
//     username: "",
//     password: "",
//     gender: "",
//   };

//   const formik = useFormik({
//     initialValues,
//     validationSchema: Yup.object({
//       username: Yup.string().required("Username is required"),
//     }),
//     onSubmit: (values) => {
//       console.log("Form values:", values);
//     },
//   });
//   const formik = useFormik({
//     initialValues,
//     validationSchema: Yup.object({
//       username: Yup.string().required("Username is required"),
//     }),
//     onSubmit: (values) => {
//       console.log("Form values:", values);
//     },
//   });

//   const [selectedGame, setSelectedGame] = useState(false);
//   const [selectedGame, setSelectedGame] = useState(false);

//   const handleOpenModal = () => {
//     setSelectedGame(!selectedGame);
//   };
//   const handleOpenModal = () => {
//     setSelectedGame(!selectedGame);
//   };

//   return (
//     <>
//       <Home_Container title="MADHUR DAY - Single Digit Board">
//         <div className=" py-3 px-3 my-2 border rounded">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-12 d-flex d-flex align-items-center justify-content-center flex-column">
//                 <div className="border-bottom border-2 w-100 my-2 text-center ">
//                   <span className="text-center   ">Jodi Digit : 100</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Home_Container>
//     </>
//   );
// };

// export default Tessting;

// import React from "react";

// function Tessting() {
//   return <div>Tessting</div>;
// }

// export default Tessting;
