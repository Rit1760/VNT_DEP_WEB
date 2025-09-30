"use client";

import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import "../Styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp , faBars } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
  const [set, togSet] = useState(false);
  const [set1, togSet1] = useState(false);
  const [set2, togSet2] = useState(false);

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Refs to detect clicks inside dropdown
  const aboutRef = useRef(null);
  const solutionsRef = useRef(null);
  const productsRef = useRef(null);

  const clickBTn = () => {
    togSet(!set);
    // Close others when opening this dropdown
    if (!set) {
      togSet1(false);
      togSet2(false);
    }
  };

  
  const clickBTn1 = () => {
    togSet1(!set1);
    if (!set1) {
      togSet(false);
      togSet2(false);
    }
  };

  const clickBTn2 = () => {
    togSet2(!set2);
    if (!set2) {
      togSet(false);
      togSet1(false);
    }
  };

  // Navbar scroll behavior
  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  
  // Close dropdown on click outside or on scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If any dropdown is open
      if (set || set1 || set2) {
        // Check if click is outside all dropdown refs
        if (
          (set && aboutRef.current && !aboutRef.current.contains(event.target)) &&
          (set1 && solutionsRef.current && !solutionsRef.current.contains(event.target)) &&
          (set2 && productsRef.current && !productsRef.current.contains(event.target))
        ) {
          togSet(false);
          togSet1(false);
          togSet2(false);
        }
      }
    };


    const handleScroll = () => {
      if (set || set1 || set2) {
        togSet(false);
        togSet1(false);
        togSet2(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [set, set1, set2]);

  return (
    <>
      <div
        className="container1_Nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          transition: 'transform 0.3s ease-in-out',
          transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
          backgroundColor: 'rgba(127, 127, 127, 0.9)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <div className="row1_Nav">
          <div className="col2_Nav">
            <ul>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/Cleanwatts">VNT CLEANWATTS</Link></li>
              <li ref={aboutRef} onClick={clickBTn} style={{ cursor: "pointer" }}>
                <Link href="#">
                  ABOUT US {set ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                </Link>
              </li>
              <li ref={solutionsRef} onClick={clickBTn1} style={{ cursor: "pointer" }}>
                <Link href="#">
                  SOLUTIONS {set1 ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                </Link>
              </li>
              <li ref={productsRef} onClick={clickBTn2} style={{ cursor: "pointer" }}>
                <Link href="#">
                  PRODUCTS {set2 ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                </Link>
              </li>
              <li><Link href="/Service">SERVICES</Link></li>
              <li><Link href="/contact">CONTACT US</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {set && (
        <div className='container2_NAV'>
          <div className='row2_NAV'>
            <div className='col3_NAV'>
              <ul>
                <li><Link href="/CompanyProfile">Company Profile</Link></li>
                <li><Link href="/CompanyHistory">Company History</Link></li>
                <li><Link href="/LeaderShip">Leadership</Link></li><br />
              </ul>
            </div>
          </div>
        </div>
      )}
      {set1 && (
        <div className='container3_NAV'>
          <div className='row3_NAV'>
            <div className='col4_NAV'>
              <ul>
                <li><Link href="/SolarSolutions">Solor</Link></li>
                <li><Link href="/EnergyManagement">Energy Management</Link></li>
                <li><Link href="/Telecome">Telecome</Link></li>
                <li><Link href="#">E-Mobility</Link></li>
                <li><Link href="/FireAndSafety">Fire & Safety</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {set2 && (
        <div className='container4_NAV'>
          <div className='row4_NAV'>
            <div className='col5_NAV'>
              <ul>
                <li><Link href="/SolarProduct">Solor</Link></li>
                <li><Link href="/TelecomeProduct">Telecome</Link></li>
                <li><Link href="EVproducts">E-Mobility</Link></li>
                <li><Link href="/FireAndSafetyProduct">Fire & Safety</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
          

// "use client";

// import { useState, useEffect } from 'react';
// import Link from "next/link";
// import "../Styles/Header.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

// export default function Header() {
//   const [set, togSet] = useState(false);
//   const [set1, togSet1] = useState(false);
//   const [set2, togSet2] = useState(false);

//   // State to handle navbar visibility on scroll
//   const [showNav, setShowNav] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const clickBTn = () => {
//     togSet(!set);
//   };
//   const clickBTn1 = () => {
//     togSet1(!set1);
//   };
//   const clickBTn2 = () => {
//     togSet2(!set2);
//   };



//   // Scroll handler
//   const controlNavbar = () => {
//     if (window.scrollY < lastScrollY) {
//       setShowNav(true);
//     } else {
//       setShowNav(false);
//     }
//     setLastScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", controlNavbar);
//     return () => {
//       window.removeEventListener("scroll", controlNavbar);
//     };
//   }, [lastScrollY]);

//   return (
//     <>
//       <div
//         className="container1_Nav"
//         style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 9999,
//           transition: 'transform 0.3s ease-in-out',
//           transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
//           backgroundColor: 'rgba(127, 127, 127, 0.9)', // thoda transparent background
//           backdropFilter: 'blur(10px)',
//           WebkitBackdropFilter: 'blur(10px)',
//         }}
//       >
//         <div className="row1_Nav">
//           {/* <div className="col1_Nav">
//             <img src="/Images/VNT-logo.png" alt="VNT-logo" width={100} />
//           </div> */}
//           <div className="col2_Nav">
//             <ul>
//               <li><Link href="/">HOME</Link></li>
//               <li><Link href="/Cleanwatts">VNT CLEANWATTS</Link></li>
//               <li onClick={clickBTn}>
//                 <Link href="#">
//                   ABOUT US  {set ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
//                 </Link>
//               </li>
//               <li onClick={clickBTn1}>
//                 <Link href="#">
//                   SOLUTIONS {set1 ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
//                 </Link>
//               </li>
//               <li onClick={clickBTn2}>
//                 <Link href="#">
//                   PRODUCTS  {set2 ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
//                 </Link>
//               </li>
//               <li><Link href="/Service">SERVICES</Link></li>
//               <li><Link href="/contact">CONTACT US</Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {set && (
//         <div className='container2_NAV'>
//           <div className='row2_NAV'>
//             <div className='col3_NAV'>
//               <ul>
//                 <li><Link href="/CompanyProfile">Company Profile</Link></li>
//                 <li><Link href="/CompanyHistory">Company History</Link></li>
//                 <li><Link href="/LeaderShip">Leadership</Link></li><br />
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//       {set1 && (
//         <div className='container3_NAV'>
//           <div className='row3_NAV'>
//             <div className='col4_NAV'>
//               <ul>
//                 <li><Link href="/SolarSolutions">Solor</Link></li>
//                 <li><Link href="/EnergyManagement">Energy Management</Link></li>
//                 <li><Link href="/Telecome">Telecome</Link></li>
//                 <li><Link href="#">E-Mobility</Link></li>
//                 <li><Link href="/FireAndSafety">Fire & Safety</Link></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//       {set2 && (
//         <div className='container4_NAV'>
//           <div className='row4_NAV'>
//             <div className='col5_NAV'>
//               <ul>
//                 <li><Link href="/SolarProduct">Solor</Link></li>
//                 <li><Link href="/TelecomeProduct">Telecome</Link></li>
//                 <li><Link href="EVproducts">E-Mobility</Link></li>
//                 <li><Link href="/FireAndSafetyProduct">Fire & Safety</Link></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }