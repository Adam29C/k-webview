// import React from "react";

// const Footer = () => {
//   return (
//     <div>
//       <ul class="bottom-menu">
//         <li>
//           <a href="home.html" class="active">
//             {/* <i class="iconsax text-content" data-icon="home-2"></i> */}
//             <i class="bottom-icons-font-size fa-regular fa-clipboard"></i>
//             <h6>My Bids</h6>
//           </a>
//         </li>

//         <li>
//           <a href="category.html">
//             {/* <i class="iconsax text-content" data-icon="grid-apps"></i> */}
//             <i class="bottom-icons-font-size fa-solid fa-file-signature fa-"></i>
//             <h6>Passbook</h6>
//           </a>
//         </li>

//         <li>
//           <a href="cart.html">
//             {/* <i class="iconsax text-content" data-icon="shopping-cart"></i> */}
//             <i class="bottom-icons-font-size fa-solid fa-house"></i>
//             <h6>Home</h6>
//           </a>
//         </li>

//         <li>
//           <a href="wishlist.html">
//             {/* <i class="iconsax text-content" data-icon="heart"></i> */}
//             <i class="bottom-icons-font-size fa-solid fa-dollar-sign"></i>
//             <h6>Fund</h6>
//           </a>
//         </li>

//         <li>
//           <a href="account.html">
//             {/* <i class="iconsax text-content" data-icon="user-2"></i> */}
//             <i class="bottom-icons-font-size fa-regular fa-comment text-content iconsax000"></i>
//             <h6>Support</h6>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="bottom-menu">
        <li>
          <Link to="bids" className="menu-item">
            <i className="bottom-icons-font-size fa-regular fa-clipboard"></i>
            <h6>My Bids</h6>
          </Link>
        </li>

        <li className="active">
          <Link to="passbook" className="menu-item ">
            <i className="bottom-icons-font-size fa-solid fa-file-signature"></i>
            <h6>Passbook</h6>
          </Link>
        </li>

        {/* Active Center Button */}
        <li className="">
          <Link to="home" className="menu-item active-item">
            <div className="active-icon-bg">
              <i className="bottom-icons-font-size fa-solid fa-house"></i>
            </div>
            <h6>Home</h6>
          </Link>
        </li>

        <li>
          <Link to="funds" className="menu-item">
            <i className="bottom-icons-font-size fa-solid fa-dollar-sign"></i>
            <h6>Fund</h6>
          </Link>
        </li>

        <li>
          <Link to="support" className="menu-item">
            <i className="bottom-icons-font-size fa-regular fa-comment"></i>
            <h6>Support</h6>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;














