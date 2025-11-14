'use client'

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import IcoHeader from "@/Components/IcoHeader";
import { useEffect } from "react";
import gsap from 'gsap';
import Loading from "./Loading.jsx"; 
import './globals.css';


export default function RootLayout({ children }) {

  //   useEffect(() => {
  //   const crsr = document.querySelector("#crsr");
  //   const moveCursor = (e) => {
  //     gsap.to(crsr, {
  //       x: e.clientX - 15,
  //       y: e.clientY - 15,
  //       duration: 0.2,
  //       ease: "power2.out",
  //     });
  //   };
  //   document.addEventListener("mousemove", moveCursor);
  //   return () => {
  //     document.removeEventListener("mousemove", moveCursor);
  //   };
  // }, []);
  return (
    <html lang="en">
      <body>
              {/* <div id="crsr"></div> */}
        <Loading>
          <Header />
        <IcoHeader />
        {children}
        <Footer/>
        </Loading>
      </body>
    </html>
  );
}
