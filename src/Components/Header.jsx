// "use client";

// import { useState, useEffect, useRef } from 'react';
// import Link from "next/link";
// import "../Styles/Header.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown, faAngleUp , faBars } from '@fortawesome/free-solid-svg-icons';


// export default function Header() {
//   const [set, togSet] = useState(false);
//   const [set1, togSet1] = useState(false);
//   const [set2, togSet2] = useState(false);

//   const [showNav, setShowNav] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);


//   const aboutRef = useRef(null);
//   const solutionsRef = useRef(null);
//   const productsRef = useRef(null);

//   const clickBTn = () => {
//     togSet(!set);

//     if (!set) {
//       togSet1(false);
//       togSet2(false);
//     }
//   };

  
//   const clickBTn1 = () => {
//     togSet1(!set1);
//     if (!set1) {
//       togSet(false);
//       togSet2(false);
//     }
//   };

//   const clickBTn2 = () => {
//     togSet2(!set2);
//     if (!set2) {
//       togSet(false);
//       togSet1(false);
//     }
//   };


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

  

//   useEffect(() => {
//     const handleClickOutside = (event) => {
    
//       if (set || set1 || set2) {
  
//         if (
//           (set && aboutRef.current && !aboutRef.current.contains(event.target)) &&
//           (set1 && solutionsRef.current && !solutionsRef.current.contains(event.target)) &&
//           (set2 && productsRef.current && !productsRef.current.contains(event.target))
//         ) {
//           togSet(false);
//           togSet1(false);
//           togSet2(false);
//         }
//       }
//     };


//     const handleScroll = () => {
//       if (set || set1 || set2) {
//         togSet(false);
//         togSet1(false);
//         togSet2(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [set, set1, set2]);

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
//           backgroundColor: 'rgba(127, 127, 127, 0.9)',
//           backdropFilter: 'blur(10px)',
//           WebkitBackdropFilter: 'blur(10px)',
//         }}
//       >

//         <div className="row1_Nav">
//           <div className="col2_Nav">
//             <ul>
//               <li><Link href="/">HOME</Link></li>
//               <li><Link href="https://vnt.in/vnt-cleanwatts/">VNT CLEANWATTS</Link></li>
//               <li ref={aboutRef} onClick={clickBTn} style={{ cursor: "pointer" }}>
//                 <Link href="https://vnt.in/company-profile/">
//                   ABOUT US {set ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
//                 </Link>
//               </li>
//               <li ref={solutionsRef} onClick={clickBTn1} style={{ cursor: "pointer" }}>
//                 <Link href="https://vnt.in/solar-solutions/">
//                   SOLUTIONS {set1 ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
//                 </Link>
//               </li>
//               <li ref={productsRef} onClick={clickBTn2} style={{ cursor: "pointer" }}>
//                 <Link href="https://vnt.in/Solutions/solar-products/">
//                   PRODUCTS {set2 ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
//                 </Link>
//               </li>
//               <li><Link href="https://vnt.in/services/">SERVICES</Link></li>
//               <li><Link href="https://vnt.in/contact-us/">CONTACT US</Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {set && (
//         <div className='container2_NAV'>
//           <div className='row2_NAV'>
//             <div className='col3_NAV'>
//               <ul>
//                 <li><Link href="https://vnt.in/company-profile/">Company Profile</Link></li>
//                 <li><Link href="https://vnt.in/history/">Company History</Link></li>
//                 <li><Link href="https://vnt.in/leadership/">Leadership</Link></li><br />
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
//                 <li><Link href="https://vnt.in/solar-solutions/">Solor</Link></li>
//                 <li><Link href="https://vnt.in/energy-management-solutions/">Energy Management</Link></li>
//                 <li><Link href="https://vnt.in/telecom-solutions/">Telecome</Link></li>
//                 <li><Link href="https://vnt.in/e-mobility-solutions/">E-Mobility</Link></li>
//                 <li><Link href="https://vnt.in/fire-and-safety-solutions/">Fire & Safety</Link></li>
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
//                 <li><Link href="https://vnt.in/Solutions/solar-products/">Solor</Link></li>
//                 <li><Link href="https://vnt.in/Solutions/telecom-products/">Telecome</Link></li>
//                 <li><Link href="https://vnt.in/Solutions/e-mobility-products/">E-Mobility</Link></li>
//                 <li><Link href="https://vnt.in/Solutions/fire-safety-products/">Fire & Safety</Link></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
          

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "../Styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faBars, faX } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [set, togSet] = useState(false);
  const [set1, togSet1] = useState(false);
  const [set2, togSet2] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const aboutRef = useRef(null);
  const solutionsRef = useRef(null);
  const productsRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "about") {
      togSet(!set);
      togSet1(false);
      togSet2(false);
    } else if (dropdown === "solutions") {
      togSet1(!set1);
      togSet(false);
      togSet2(false);
    } else if (dropdown === "products") {
      togSet2(!set2);
      togSet(false);
      togSet1(false);
    }
  };

  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) setShowNav(true);
    else setShowNav(false);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (set && aboutRef.current && !aboutRef.current.contains(event.target)) ||
        (set1 && solutionsRef.current && !solutionsRef.current.contains(event.target)) ||
        (set2 && productsRef.current && !productsRef.current.contains(event.target))
      ) {
        togSet(false);
        togSet1(false);
        togSet2(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [set, set1, set2]);

  return (
    <>
      {/* Navbar */}
      <div
        className="container1_Nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          transition: "transform 0.3s ease-in-out",
          transform: showNav ? "translateY(0)" : "translateY(-100%)",
          backgroundColor: "rgba(127, 127, 127, 0.9)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div className="row1_Nav">
          <div className="col2_Nav">
            <div className="mobileHamburger" onClick={() => setMobileMenu(!mobileMenu)}>
              <FontAwesomeIcon icon={mobileMenu ? faX : faBars} size="lg" />
            </div>

            <ul className={mobileMenu ? "navMenu active" : "navMenu"}>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="https://vnt.in/vnt-cleanwatts/">VNT CLEANWATTS</Link></li>

              <li ref={aboutRef} onClick={() => toggleDropdown("about")} style={{ cursor: "pointer" }}>
                ABOUT US {set ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
              </li>

              <li ref={solutionsRef} onClick={() => toggleDropdown("solutions")} style={{ cursor: "pointer" }}>
                SOLUTIONS {set1 ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
              </li>

              <li ref={productsRef} onClick={() => toggleDropdown("products")} style={{ cursor: "pointer" }}>
                PRODUCTS {set2 ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
              </li>

              <li><Link href="https://vnt.in/services/">SERVICES</Link></li>
              <li><Link href="https://vnt.in/contact-us/">CONTACT US</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dropdowns */}
      {set && (
        <div className="container2_NAV">
          <div className="row2_NAV">
            <div className="col3_NAV">
              <ul>
                <li><Link href="https://vnt.in/company-profile/">Company Profile</Link></li>
                <li><Link href="https://vnt.in/history/">Company History</Link></li>
                <li><Link href="https://vnt.in/leadership/">Leadership</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {set1 && (
        <div className="container3_NAV">
          <div className="row3_NAV">
            <div className="col4_NAV">
              <ul>
                <li><Link href="https://vnt.in/solar-solutions/">Solar</Link></li>
                <li><Link href="https://vnt.in/energy-management-solutions/">Energy Management</Link></li>
                <li><Link href="https://vnt.in/telecom-solutions/">Telecom</Link></li>
                <li><Link href="https://vnt.in/e-mobility-solutions/">E-Mobility</Link></li>
                <li><Link href="https://vnt.in/fire-and-safety-solutions/">Fire & Safety</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {set2 && (
        <div className="container4_NAV">
          <div className="row4_NAV">
            <div className="col5_NAV">
              <ul>
                <li><Link href="https://vnt.in/Solutions/solar-products/">Solar</Link></li>
                <li><Link href="https://vnt.in/Solutions/telecom-products/">Telecom</Link></li>
                <li><Link href="https://vnt.in/Solutions/e-mobility-products/">E-Mobility</Link></li>
                <li><Link href="https://vnt.in/Solutions/fire-safety-products/">Fire & Safety</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}