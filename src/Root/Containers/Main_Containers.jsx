import React from "react";

const Main_Containers = ({ children }) => {
  return (
    <div>
      {/* <section className="section-b-space"> */}
        <div className="custom-container">
          <div className="row ">
            <div className="col-12">{children}</div>
          </div>
        </div>
      {/* </section> */}
    </div>
  );
};

export default Main_Containers;

// import React from "react";

// const Main_Containers = () => {
//   return (
//     <div>

//       <section className="section-b-space">
//         <div className="custom-container">
//           <div className="row gy-3 gx-0">
//             <div className="col-12">
//               <div className="product-box vertical-product">
//                 <a href="product-details.html" className="product-img">
//                   <img
//                     src="../src/assets/images/product/11.png"
//                     className="img-fluid"
//                     alt=""
//                   />
//                 </a>
//                 <div className="product-content">
//                   <h6 className="content-color">Apple</h6>
//                   <a href="product-details.html" className="product-top">
//                     <h5 className="title-color white-nowrap">
//                       Smart TV System
//                     </h5>
//                   </a>
//                   <div className="bottom-content">
//                     <h5 className="price">
//                       $450 <del>$460</del>
//                     </h5>
//                   </div>
//                 </div>
//                 <div className="like-icon animate ">
//                   <img
//                     className="img-fluid icon outline-icon"
//                     src="../src/assets/images/svg/heart-outline.svg"
//                     alt=""
//                   />
//                   <img
//                     className="img-fluid icon fill-icon"
//                     src="../src/assets/images/svg/heart-fill.svg"
//                     alt=""
//                   />
//                   <div className="effect-group">
//                     <span className="effect" />
//                     <span className="effect" />
//                     <span className="effect" />
//                     <span className="effect" />
//                     <span className="effect" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Main_Containers;
