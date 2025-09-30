'use client'

import "../../Styles/AC_WALLBOX.css"
import {  useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Head from "next/head";



gsap.registerPlugin(ScrollTrigger);



import Link from "next/link";
import EVHOME from "@/Components/EVHome";
export default function AC_WALLBOX(){
const [set , togset] = useState(false)
const [set1 , togset1] = useState(false)
const [set2 , togset2] = useState(false)
const [set3 , togset3] = useState(false)
const [set4 , togset4] = useState(false)
const [set5 , togset5] = useState(false)

  const [hovered1, setHovered1] = useState(false)
  const [hovered2, setHovered2] = useState(false)

 const containerRef = useRef(null);
 const containerRef1 = useRef(null);
  const elementsRef = useRef([]);
  const elementsRef1 = useRef([]);
 const containerRef7 = useRef(null);
  const elementsRef7 = useRef([]);


  
//             useGSAP(() => {
// const tl = gsap.timeline({ repeat: 0 });

// tl.to(iconRef1.current, { 
//     y: -20, 
//     duration: 0.5, 
//     ease: "power1.inOut" ,
//     opacity:'0.5'
//   })
//   .to(iconRef2.current, { 
//     y: -20, 
//     duration: 0.5, 
//     ease: "power1.inOut" 
//   }, "+=0.2") 
//   .to(iconRef3.current, { 
//     y: -20, 
//     duration: 0.5, 
//     ease: "power1.inOut" 
//   }, "+=0.2")
//   .to([iconRef1.current, iconRef2.current, iconRef3.current, iconRef4.current], { 
//     y: 0, 
//     duration: 0.5, 
//     ease: "power1.inOut" 
//   });
//   }, []);




  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    });




    gsap.set(elementsRef.current, { y: 50, opacity: 0});


    tl.to(elementsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, 
      ease: 'power2.out',
    });

  }, { scope: containerRef });




    useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef1.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    });


    gsap.set(elementsRef1.current, { y: 50, opacity: 0 });

    tl.to(elementsRef1.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, 
      ease: 'power2.out',
    });
  }, { scope: containerRef1 });


  
    useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef7.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    });

    gsap.set(elementsRef7.current, { y: 50, opacity: 0 });

    tl.to(elementsRef7.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, 
      ease: 'power2.out',
    });
  }, { scope: containerRef7 });


const languageNames = {
  en: 'En',
  hi: 'Hi',
  ar: 'العربية',
  es: 'Es',
  'pt-BR': 'Português (BR)',
  de: 'Deutsch',  
};

const setCli = () => {
  togset(!set);
  togset1(false);
  togset2(false);
  togset3(false);
  togset4(false);
  togset5(false);
}

const setCli1 = () => {
  togset1(!set);
  togset(false);
  togset2(false);
  togset3(false);
  togset4(false);
  togset5(false);
}

const setCli2 = () => {
  togset2(!set);
  togset1(false);
  togset(false);
  togset3(false);
  togset4(false);
  togset5(false);
}

const setCli3 = () => {
  togset3(!set);
  togset1(false);
  togset2(false);
  togset(false);
  togset4(false);
  togset5(false);
}

const setCli4 = () => {
  togset4(!set);
  togset1(false);
  togset2(false);
  togset3(false);
  togset(false);
  togset5(false);
}

// const setCli5 = () => {
//   togset5(!set);
//   togset1(false);
//   togset2(false);
//   togset3(false);
//   togset4(false);
//   togset(false);
// }

    const [lang, setLang] = useState('en');

const translations = {
  en: {
    button: 'EN',
},
   hi: {
       button: 'HI',
   },
   ar: {
  button: 'AR',
   },
    es: {
button:'ES',
    },
    'pt-BR': {
button:'PT',
    },
    de: {
  button:'DE',
},
}

const toggleLanguage = () => {
  if (lang === 'en') setLang('hi');
  else if (lang === 'hi') setLang('ar');
  else if (lang === 'ar') setLang('es');
  else if (lang === 'es') setLang('pt-BR');  
  else if (lang === 'pt-BR') setLang('de');  
  else setLang('en');
};
  const t = translations[lang];
    return(
        <>

<Head>                
  <title>AC Wallbox | VNT - Reliable AC EV Charging Solutions</title>

  <meta
    name="description"
    content="Explore VNT's AC Wallbox solutions, offering safe, efficient, and user-friendly AC electric vehicle chargers for residential and commercial use across India."
  />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="VNT | AC Wallbox EV Chargers" />
  <meta property="og:description" content="VNT provides advanced AC Wallbox chargers designed for easy installation and reliable EV charging at homes and workplaces." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vnt.in/solutions/AC_WALLBOX/" />
  <meta property="og:site_name" content="VNT" />

  <meta
    name="keywords"
    content="VNT, AC Wallbox, EV charger India, AC electric vehicle charging, home EV charger, workplace EV charging, reliable AC charger, electric vehicle infrastructure"
  />
</Head>





        <div
  style={{
    padding: '11px 20px',
    fontFamily: lang === 'ar' ? "'Cairo', sans-serif" : 'Arial, sans-serif',
  }}
  dir={lang === 'ar' ? 'rtl' : 'ltr'}
  lang={lang}
>
  <button onClick={toggleLanguage}>
    {t.button} 
  </button>
</div>




        <div className="main1_AC_WALLBOX">




{/* <div className="cont1_nav">
  <div className="row1_Nav">
     <Link href="/AC_WALLBOX" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-residential">
       <h4>Residential</h4>
    </div>
    </Link>
    <Link href="/DC_FAST" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-public">
    <h4>Public</h4>
    </div>
     </Link>
    <Link href="/CMS" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-cms">
       <h4>CMS/APP</h4>
    </div>
     </Link>
  </div>
</div> */}
<EVHOME />
            <div className="container1_AC_WALLBOX">
                <div className="row1_AC_WALLBOX">
                </div>
            </div>
            {/* section two  */}
            <div className="container2_RESIDENCE">
              <div className="row2_RESIDENCE">
                <div className="col1_RESIDENCE" onClick={setCli} >
                  <h2>WallBox 7.4 KW AC Type-11</h2>
                </div>
                <div className="col2_RESIDENCE" onClick={setCli1} >
                  <h2>Wallbox 11kW AC Type-11</h2>
                </div>
                <div className="col3_RESIDENCE" onClick={setCli2} >
                  <h2>Wallbox 22kW AC Type-11</h2>
                </div>
                <div className="col4_RESIDENCE" onClick={setCli3} >
                  <h2>Portable 3.3kW AC Type-11</h2>
                </div>
                <div className="col5_RESIDENCE" onClick={setCli4} >
                  <h2>Portable 7.4kW AC Type-11</h2>
                </div>
                {/* <div className="col6_RESIDENCE" onClick={setCli5}>
                  <h2>AC001 3.3kW</h2>
                </div> */}
              </div>
              {set && (
                <div className="row3_RESIDENCE">
<div className="col66_RESIDENCE">
  <h2>Wallbox 7.4 kW AC Charger (Type 11) – Smart, Fast & Reliable EV Charging</h2>
  <p>Upgrade your EV charging experience with the Wallbox 7.4 kW AC Charger (Type 11). Designed for residential and commercial use, this charger delivers efficient, safe, and intelligent charging for all compatible electric vehicles.</p>
<h3>Fast & Efficient Charging</h3>
<p>With a 7.4 kW output, this charger can power up your EV significantly faster than standard chargers, making it perfect for daily use.</p>
<h3>Type 11 Connector Compatibility</h3>
<p>Compatible with all EVs that support Type 11 connectors, ensuring wide usability across most electric car brands.</p>
</div>
<div className="col7_RESIDENCE">
  <Image src="/Images/ACTYPE74.png" width={700} height={570} alt="AC11KW" />
</div>
              </div>
              )} 
              {set1 &&  (
                            <div className="row4_RESIDENCE">
                <div className="col8_RESIDENCE">

                    <h2>Wallbox 11kW AC Charger (Type-II) – High-Performance Charging for Modern EVs</h2>
  <p>The Wallbox 11kW AC Type-II Charger offers powerful, safe, and smart charging for electric vehicles. Ideal for homes, offices, and commercial spaces, it ensures faster charging with advanced features and wide EV compatibility.</p>
               <h3>High-Speed Charging</h3>
               <p>Delivers up to 11kW of power, reducing EV charging time significantly compared to lower-power chargers.</p>
               <h3>Type-II Connector Support</h3>
               <p>Compatible with all electric vehicles using the Type-II standard — widely accepted across Europe and India.</p>
                </div>
<div className="col9_RESIDENCE">
  <Image src="/Images/AC-TYPE2.png" width={700} height={580} alt="AC-TYPE2" />
</div>
              </div>
                )}
                {set2 && (
                            <div className="row5_RESIDENCE" >
                <div className="col10_RESIDENCE">
                    <h2>Wallbox 22kW AC Charger (Type-II) – Ultra-Fast EV Charging for High-Performance Needs</h2>
  <p>Experience ultra-fast and efficient EV charging with the Wallbox 22kW AC Type-II Charger. Designed for heavy-duty use in homes, commercial spaces, and fleet operations, this charger ensures reliable, smart, and future-ready charging for all compatible electric vehicles</p>
                <h3>Ultra-Fast Charging</h3>
                <p>Delivers up to 22kW charging power — ideal for large battery EVs and high daily usage, cutting down charge time drastically.</p>
                <h3>Universal Type-II Compatibility</h3>
                <p>Supports the Type-II (IEC 62196) connector, compatible with the majority of EVs in India and globally.</p>
                </div>
<div className="col11_RESIDENCE">
  <Image src="/Images/AC-KW2.png" width={700} height={580} alt="AC-KW" />
</div>
              </div>
               )}
               {set3 && (
                            <div className="row6_RESIDENCE" >
                <div className="col12_RESIDENCE">
                    <h2>Portable 3.3kW AC EV Charger (Type-II) – Compact, Convenient & Reliable Charging On-the-Go</h2>
                    <p>The Portable 3.3kW AC Type-II EV Charger offers a reliable and convenient solution for home and travel charging. Lightweight, plug-and-play, and compatible with all Type-II EVs, it’s the perfect everyday companion for EV owners.</p>
               <h3>Plug & Play Charging</h3>
               <p>No installation required — simply plug into a standard 15A socket and start charging your EV anywhere.</p>
                <h3>Lightweight & Portable Design</h3>
                <p>Compact, travel-friendly build makes it ideal for daily use at home or carrying in your EV for emergencies.</p>
                </div>
<div className="col13_RESIDENCE">
  <Image src="/Images/PORTABLE33TYPE2.png" width={700} height={580} alt="PORTABLE33TYPE2" />
</div>

              </div>
                )}
                {set4 && (
                            <div className="row7_RESIDENCE" >
                <div className="col14_RESIDENCE">
                    <h2>Portable 7.4kW AC EV Charger (Type-II) – High-Speed Charging, Anytime, Anywhere </h2>
  <p>Charge your EV faster on the go with the Portable 7.4kW AC Type-II Charger. Designed for mobility and performance, this compact charger offers powerful, safe, and reliable charging for all Type-II electric vehicles — no installation required.</p>
              <h3>High-Speed 7.4kW Charging</h3>
              <p>Delivers up to 7.4kW power output — ideal for faster home or portable charging via single-phase power supply.</p>
               <h3>Type-II Compatibility</h3>
               <p>Equipped with a universal Type-II (IEC 62196) connector, compatible with most electric vehicles in India and worldwide.</p>
                </div>
<div className="col15_RESIDENCE">
  <Image src="/Images/PORTABLE74AC2.png" width={700} height={580} alt="PORTABLE74AC2" />
</div>

              </div>
                )}
                {/* {set5 && (
                <div className="row8_RESIDENCE">
                  <div className="col15_RESIDENCE">
<h2>AC001 3.3kW EV Charger – Smart & Compliant Charging Solution (Bharat Standard)</h2>
<p>The AC001 EV Charger is a 3.3kW Bharat-standard AC charging unit designed for electric vehicles in India. Ideal for public, commercial, and residential use, this charger provides safe, efficient, and standardized charging with support for multiple EVs simultaneously.</p>
                <h3>Bharat AC001 Compliant</h3>
                <p>Fully compliant with Government of India’s Bharat EV charging protocol (AC001) — suitable for Indian EV ecosystem.</p>
                 <h3>3.3kW Output per Socket</h3>
                 <p>Delivers 3.3kW per charging port, ideal for electric two-wheelers, three-wheelers, and compact electric cars.</p>
                 <h3>Multiple Socket Support</h3>
                 <p>Comes with 3 charging sockets (typically IEC 60309) — allowing simultaneous charging of multiple vehicles.</p>
                  </div>
                  <div className="col16_RESIDENCE">
  <Image src="/Images/AC00133.png" width={700} height={580} alt="AC00133" />
                  </div>
                </div>
                  )} */}
            </div>

            {/* section two  end*/}

      <div className="container3_RES">
        <div className="row9_RESIDENCE">
        <div className="col17_RES">
          <Image src="/Images/resedence-cont3-1.png" width={600} height={500} alt="residence-cont3" />
        </div>
        <div className="col18_RES">
          <h3> Best for</h3>
          <h4><FontAwesomeIcon icon={faHouse} /> Residential Properties</h4>
          <h2><FontAwesomeIcon icon={faBuilding} /> Apartment Complexes</h2>
        </div>
        </div>
      </div>

      <div className="container4_RES">
        <div className="row10_RES">
          <div className="col19_RES">
            <Image src="/Images/AC-port22.png" width={600} height={600} alt="AC-port22" />
          </div>

          {/* <div className="col20_RES" ref={containerRef}>
            <h4><FontAwesomeIcon icon={faHouse} />  For Home</h4>
            <h3 ref={iconRef1}>Pulsar Plus</h3>
            <h2 ref={iconRef2}>Choose between 40 and 48 Amps</h2>
            <p ref={iconRef3}>Pick the variant that fits your needs. Pulsar Plus 40A offers easy NEMA 14-50 plug installation.</p>
            <h5 ref={iconRef4}>Starting from</h5>
          </div> */}

              <div className="col20_RES" ref={containerRef}>
      <h4 ref={(el) => (elementsRef.current[0] = el)}>
        <FontAwesomeIcon icon={faHouse} /> For Home
      </h4>
      <h3 ref={(el) => (elementsRef.current[1] = el)}>Pulsar Plus</h3>
      <h2 ref={(el) => (elementsRef.current[2] = el)}>
        Reliable. Efficient. Designed for Your Home.
      </h2>
      <p ref={(el) => (elementsRef.current[3] = el)}>
       Choose the variant that suits your home charging needs. The 40A model provides easy installation with a standard NEMA 14-50 plug for hassle-free setup
      </p>
      <h5 ref={(el) => (elementsRef.current[4] = el)}>Starting from</h5>
    </div>
        </div>
      </div>
      
      <div className="container5_RES">
        <div className="row11_RES">
          <div className="col21_RES"  ref={containerRef1}>
            <h3 ref={(el) => (elementsRef1.current[0] = el)}>Why VNT charger?</h3>
            <h5 ref={(el) => (elementsRef1.current[1] = el)}><FontAwesomeIcon icon={faClockRotateLeft} style={{color:"#ff6600"}} /> Rapid Charging</h5>
            <p ref={(el) => (elementsRef1.current[2] = el)}>Up to 11.5 kW, for up to<span style={{background:"#ff6600",padding:"2px 20px", borderRadius:"20px" , color:"#fff"}}>8x faster</span>  charging</p>
          </div>
          <div className="col22_RES">
            <Image src="/Images/AC-port33.png"  width={600} height={600} alt="AC-port33" />
          </div>
        </div>
      </div>
      <div className="container6_RES">
        <div className="row12_RES">


        </div>
        </div>
      </div>
      
      <div className="container8_RES">
        <div className="row14_RES">
 <div
      onMouseEnter={() => setHovered2(true)}
      onMouseLeave={() => setHovered2(false)}
      style={{
        width: '302px',
        height: '392px',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '10px',
        border: '1px solid #ccc',
        cursor:'pointer',
        marginLeft:'401px',

      }}
    >

      <div
        style={{
          display: 'flex',
          width: '200%', 
          height: '100%',
          transition: 'transform 0.5s ease',
          transform: hovered2 ? 'translateX(-50%)' : 'translateX(0)',
        }}
      >

        {/* Image Card */}
        <div style={{ width: '50%', height: '100%', position: 'relative' }}>
          <Image
            src="/Images/vth4.jpg"
            alt="vth1"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: '10px' }}
          />
        </div>

        {/* Content Card */}
        <div
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            padding: '20px',
            boxSizing: 'border-box',
                background:'#000',
              color:'#fff',
            fontFamily:'Lato , sans-serif',
          }}
        >
          
          <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Vehicle-to-Home</h2>
          <p style={{ fontSize: '14px', marginBottom: '10px' }}>
            Power your home with the energy stored in your EV. Whether you're storing energy from
            your solar panels or the grid, you'll save big during peak hours.
          </p>
          <h3 style={{ fontSize: '14px', marginBottom: '5px' }}>
            No need to purchase expensive battery storage
          </h3>
          <h3 style={{ fontSize: '14px' }}>Avoid peak energy costs</h3>
        </div>
      </div>
    </div>
    
        <div
          onMouseEnter={() => setHovered1(true)}
          onMouseLeave={() => setHovered1(false)}
          style={{
            width: '302px',
            height: '392px',
            overflow: 'hidden',
            position: 'relative',
            borderRadius: '10px',
            border: '1px solid #ccc',
            cursor:'pointer',
        marginLeft:'100px',    
          }}
        >

          <div
            style={{
              display: 'flex',
              width: '200%', 
              height: '100%',
              transition: 'transform 0.5s ease',
              transform: hovered1 ? 'translateX(-50%)' : 'translateX(0)',
            }}
          >

            {/* Image Card */}
            <div style={{ width: '50%', height: '100%', position: 'relative' }}>
              <Image
                src="/Images/vth2.jpg"
                alt="vth1"
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: '10px' }}
              />
            </div>
    
            {/* Content Card */}
            <div
              style={{
                width: '50%',
                height: '100%',
                backgroundColor: 'white',
                padding: '20px',
                boxSizing: 'border-box',
                    background:'#000',
                  color:'#fff',
                fontFamily:'Lato , sans-serif',    
              }}
            >
              
              <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Vehicle-to-Home</h2>
              <p style={{ fontSize: '14px', marginBottom: '10px' }}>
                Power your home with the energy stored in your EV. Whether you're storing energy from
                your solar panels or the grid, you'll save big during peak hours.
              </p>
              <h3 style={{ fontSize: '14px', marginBottom: '5px' }}>
                No need to purchase expensive battery storage
              </h3>
              <h3 style={{ fontSize: '14px' }}>Avoid peak energy costs</h3>
            </div>
          </div>
        </div>
      </div>


              <div className="container7_RES" ref={containerRef7}>
          <div className="row13_RES">
            <div className="col23_RES">
              <h5 ref={(el) => (elementsRef7.current[0] = el)}>Software</h5>
              <h3 ref={(el) => (elementsRef7.current[1] = el)}>Seamless Charging, One App</h3>
              <p ref={(el) => (elementsRef7.current[2] = el)}>Easily schedule charging sessions, track energy consumption, and activate advanced energy management—all through a single intuitive app. </p>
            </div>
            <div className="col24_RES">
              <h5 ref={(el) => (elementsRef7.current[3] = el)}>Home EV Charging</h5>
              <h3 ref={(el) => (elementsRef7.current[4] = el)}>Explore VNT’s all-in-one residential charger solution.</h3>
            </div>
          </div>
        </div>

</div>
        </>
    )
}






// 'use client'

// import "../../Styles/AC_WALLBOX.css"
// import {  useState } from "react";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFont, faHouse } from "@fortawesome/free-solid-svg-icons";
// import { faBuilding } from "@fortawesome/free-solid-svg-icons";
// import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
// import { useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Head from "next/head";

// gsap.registerPlugin(ScrollTrigger);



// import Link from "next/link";
// export default function AC_WALLBOX(){
// const [set , togset] = useState(false)
// const [set1 , togset1] = useState(false)
// const [set2 , togset2] = useState(false)
// const [set3 , togset3] = useState(false)
// const [set4 , togset4] = useState(false)
// const [set5 , togset5] = useState(false)

//   const [hovered1, setHovered1] = useState(false)
//   const [hovered2, setHovered2] = useState(false)

//  const containerRef = useRef(null);
//  const containerRef1 = useRef(null);
//   const elementsRef = useRef([]);
//   const elementsRef1 = useRef([]);
//  const containerRef7 = useRef(null);
//   const elementsRef7 = useRef([]);





// //             useGSAP(() => {
// // const tl = gsap.timeline({ repeat: 0 });

// // tl.to(iconRef1.current, { 
// //     y: -20, 
// //     duration: 0.5, 
// //     ease: "power1.inOut" ,
// //     opacity:'0.5'
// //   })
// //   .to(iconRef2.current, { 
// //     y: -20, 
// //     duration: 0.5, 
// //     ease: "power1.inOut" 
// //   }, "+=0.2") 
// //   .to(iconRef3.current, { 
// //     y: -20, 
// //     duration: 0.5, 
// //     ease: "power1.inOut" 
// //   }, "+=0.2")
// //   .to([iconRef1.current, iconRef2.current, iconRef3.current, iconRef4.current], { 
// //     y: 0, 
// //     duration: 0.5, 
// //     ease: "power1.inOut" 
// //   });
// //   }, []);


//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: 'top 80%',
//         toggleActions: 'play none none none', 
//       },
//     });

//     gsap.set(elementsRef.current, { y: 50, opacity: 0});

//     tl.to(elementsRef.current, {
//       y: 0,
//       opacity: 1,
//       duration: 0.8,
//       stagger: 0.2, 
//       ease: 'power2.out',
//     });
//   }, { scope: containerRef });




//     useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef1.current,
//         start: 'top 80%',
//         toggleActions: 'play none none none', 
//       },
//     });

//     gsap.set(elementsRef1.current, { y: 50, opacity: 0 });

//     tl.to(elementsRef1.current, {
//       y: 0,
//       opacity: 1,
//       duration: 0.8,
//       stagger: 0.2, 
//       ease: 'power2.out',
//     });
//   }, { scope: containerRef1 });


  
//     useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef7.current,
//         start: 'top 80%',
//         toggleActions: 'play none none none', 
//       },
//     });

//     gsap.set(elementsRef7.current, { y: 50, opacity: 0 });

//     tl.to(elementsRef7.current, {
//       y: 0,
//       opacity: 1,
//       duration: 0.8,
//       stagger: 0.2, 
//       ease: 'power2.out',
//     });
//   }, { scope: containerRef7 });



// const languageNames = {
//   en: 'En',
//   hi: 'Hi',
//   ar: 'العربية',
//   es: 'Es',
//   'pt-BR': 'Português (BR)',
//   de: 'Deutsch',  
// };

// const setCli = () => {
//   togset(!set);
//   togset1(false);
//   togset2(false);
//   togset3(false);
//   togset4(false);
//   togset5(false);
// }

// const setCli1 = () => {
//   togset1(!set);
//   togset(false);
//   togset2(false);
//   togset3(false);
//   togset4(false);
//   togset5(false);
// }
// const setCli2 = () => {
//   togset2(!set);
//   togset1(false);
//   togset(false);
//   togset3(false);
//   togset4(false);
//   togset5(false);
// }
// const setCli3 = () => {
//   togset3(!set);
//   togset1(false);
//   togset2(false);
//   togset(false);
//   togset4(false);
//   togset5(false);
// }
// const setCli4 = () => {
//   togset4(!set);
//   togset1(false);
//   togset2(false);
//   togset3(false);
//   togset(false);
//   togset5(false);
// }
// const setCli5 = () => {
//   togset5(!set);
//   togset1(false);
//   togset2(false);
//   togset3(false);
//   togset4(false);
//   togset(false);
// }
//     const [lang, setLang] = useState('en');

// const translations = {
//   en: {
//     button: 'EN',
// },
//    hi: {
//        button: 'HI',
//    },
//    ar: {
//   button: 'AR',
//    },
//     es: {
// button:'ES',
//     },
//     'pt-BR': {
// button:'PT',
//     },
//     de: {
//   button:'DE',
// },
// }
// const toggleLanguage = () => {
//   if (lang === 'en') setLang('hi');
//   else if (lang === 'hi') setLang('ar');
//   else if (lang === 'ar') setLang('es');
//   else if (lang === 'es') setLang('pt-BR');  
//   else if (lang === 'pt-BR') setLang('de');  
//   else setLang('en');
// };
//   const t = translations[lang];
//     return(
//         <>

// <Head>                
//   <title>AC Wallbox | VNT - Reliable AC EV Charging Solutions</title>

//   <meta
//     name="description"
//     content="Explore VNT's AC Wallbox solutions, offering safe, efficient, and user-friendly AC electric vehicle chargers for residential and commercial use across India."
//   />

//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <meta name="robots" content="index, follow" />

//   <meta property="og:title" content="VNT | AC Wallbox EV Chargers" />
//   <meta property="og:description" content="VNT provides advanced AC Wallbox chargers designed for easy installation and reliable EV charging at homes and workplaces." />
//   <meta property="og:type" content="website" />
//   <meta property="og:url" content="https://vnt.in/solutions/AC_WALLBOX/" />
//   <meta property="og:site_name" content="VNT" />

//   <meta
//     name="keywords"
//     content="VNT, AC Wallbox, EV charger India, AC electric vehicle charging, home EV charger, workplace EV charging, reliable AC charger, electric vehicle infrastructure"
//   />
// </Head>




//         <div
//   style={{
//     padding: '11px 20px',
//     fontFamily: lang === 'ar' ? "'Cairo', sans-serif" : 'Arial, sans-serif',
//   }}
//   dir={lang === 'ar' ? 'rtl' : 'ltr'}
//   lang={lang}
// >
//   <button onClick={toggleLanguage}>
//     {t.button} 
//   </button>
// </div>
//         <div className="main1_AC_WALLBOX">



// <div className="cont1_nav">
//   <div className="row1_Nav">
//      <Link href="/AC_WALLBOX" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
//     <div className="nav-item nav-residential">
//        <h4>Residential</h4>
//     </div>
//     </Link>
//     <Link href="/DC_FAST" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
//     <div className="nav-item nav-public">
//     <h4>Public</h4>
//     </div>
//      </Link>
//     <Link href="/CMS" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
//     <div className="nav-item nav-cms">
//        <h4>CMS/APP</h4>
//     </div>
//      </Link>

//   </div>
// </div>


//             <div className="container1_AC_WALLBOX">
//                 <div className="row1_AC_WALLBOX">
//                 </div>
//             </div>
//             {/* section two  */}
//             <div className="container2_RESIDENCE">
//               <div className="row2_RESIDENCE">
//                 <div className="col1_RESIDENCE" onClick={setCli} >
//                   <h2>WallBox 7.4 KW AC Type-II</h2>
//                 </div>
//                 <div className="col2_RESIDENCE" onClick={setCli1} >
//                   <h2>Wallbox 11kW AC Type-II</h2>
//                 </div>
//                 <div className="col3_RESIDENCE" onClick={setCli2} >
//                   <h2>Wallbox 22kW AC Type-II</h2>
//                 </div>
//                 <div className="col4_RESIDENCE" onClick={setCli3} >
//                   <h2>Portable 3.3kW AC Type-II</h2>
//                 </div>
//                 <div className="col5_RESIDENCE" onClick={setCli4} >
//                   <h2>Portable 7.4kW AC Type-II</h2>
//                 </div>
//                 <div className="col6_RESIDENCE" onClick={setCli5}>
//                   <h2>AC001 3.3kW</h2>
//                 </div>
//               </div>
//               {set && (
//                 <div className="row3_RESIDENCE">
// <div className="col66_RESIDENCE">
//   <h2>Wallbox 7.4 kW AC Charger (Type 11) – Smart, Fast & Reliable EV Charging</h2>
//   <p>Upgrade your EV charging experience with the Wallbox 7.4 kW AC Charger (Type 11). Designed for residential and commercial use, this charger delivers efficient, safe, and intelligent charging for all compatible electric vehicles.</p>
// <h3>Fast & Efficient Charging</h3>
// <p>With a 7.4 kW output, this charger can power up your EV significantly faster than standard chargers, making it perfect for daily use.</p>
// <h3>Type 11 Connector Compatibility</h3>
// <p>Compatible with all EVs that support Type 11 connectors, ensuring wide usability across most electric car brands.</p>
// <h3>Smart Charging Technology</h3>
// <p>Control your charger remotely via mobile app integration (optional) for scheduling, monitoring, and energy usage insights.</p>
// </div>
// <div className="col7_RESIDENCE">
//   <Image src="/Images/ACTYPE74.png" width={700} height={570} alt="AC11KW" />
// </div>
//               </div>
//               )} 
//               {set1 &&  (
//                             <div className="row4_RESIDENCE">
//                 <div className="col8_RESIDENCE">
//                     <h2>Wallbox 11kW AC Charger (Type-II) – High-Performance Charging for Modern EVs</h2>
//   <p>The Wallbox 11kW AC Type-II Charger offers powerful, safe, and smart charging for electric vehicles. Ideal for homes, offices, and commercial spaces, it ensures faster charging with advanced features and wide EV compatibility.</p>
//                <h3>High-Speed Charging</h3>
//                <p>Delivers up to 11kW of power, reducing EV charging time significantly compared to lower-power chargers.</p>
//                <h3>Type-II Connector Support</h3>
//                <p>Compatible with all electric vehicles using the Type-II standard — widely accepted across Europe and India.</p>
//                 <h3>Smart Control (Optional)</h3>
//                 <p>Supports mobile app integration (Wi-Fi/Bluetooth) for remote charging, scheduling, and monitoring energy usage.</p>
//                 </div>
// <div className="col9_RESIDENCE">
//   <Image src="/Images/AC-TYPE2.png" width={700} height={580} alt="AC-TYPE2" />
// </div>
//               </div>
//                 )}
//                 {set2 && (
//                             <div className="row5_RESIDENCE" >
//                 <div className="col10_RESIDENCE">
//                     <h2>Wallbox 22kW AC Charger (Type-II) – Ultra-Fast EV Charging for High-Performance Needs</h2>
//   <p>Experience ultra-fast and efficient EV charging with the Wallbox 22kW AC Type-II Charger. Designed for heavy-duty use in homes, commercial spaces, and fleet operations, this charger ensures reliable, smart, and future-ready charging for all compatible electric vehicles</p>
//                 <h3>Ultra-Fast Charging</h3>
//                 <p>Delivers up to 22kW charging power — ideal for large battery EVs and high daily usage, cutting down charge time drastically.</p>
//                 <h3>Universal Type-II Compatibility</h3>
//                 <p>Supports the Type-II (IEC 62196) connector, compatible with the majority of EVs in India and globally.</p>
//                 <h3>Comprehensive Safety Protection</h3>
//                 <p>Built with overload, short-circuit, overvoltage, and thermal protection to ensure safe charging at high power.</p>
//                 </div>
// <div className="col11_RESIDENCE">
//   <Image src="/Images/AC11KW.png" width={700} height={580} alt="AC11KW" />
// </div>
//               </div>
//                )}
//                {set3 && (
//                             <div className="row6_RESIDENCE" >
//                 <div className="col12_RESIDENCE">
//                     <h2>Portable 3.3kW AC EV Charger (Type-II) – Compact, Convenient & Reliable Charging On-the-Go</h2>
//                     <p>The Portable 3.3kW AC Type-II EV Charger offers a reliable and convenient solution for home and travel charging. Lightweight, plug-and-play, and compatible with all Type-II EVs, it’s the perfect everyday companion for EV owners.</p>
//                <h3>Plug & Play Charging</h3>
//                <p>No installation required — simply plug into a standard 15A socket and start charging your EV anywhere.</p>
//                 <h3>Lightweight & Portable Design</h3>
//                 <p>Compact, travel-friendly build makes it ideal for daily use at home or carrying in your EV for emergencies.</p>
//                 <h3>Safe & Efficient 3.3kW Output</h3>
//                 <p>Delivers up to 3.3kW of charging power — suitable for overnight charging and topping up your EV battery with ease.</p>
//                 </div>
// <div className="col13_RESIDENCE">
//   <Image src="/Images/PORTABLE33TYPE2.png" width={700} height={580} alt="PORTABLE33TYPE2" />
// </div>
//               </div>
//                 )}
//                 {set4 && (
//                             <div className="row7_RESIDENCE" >
//                 <div className="col14_RESIDENCE">
//                     <h2>Portable 7.4kW AC EV Charger (Type-II) – High-Speed Charging, Anytime, Anywhere </h2>
//   <p>Charge your EV faster on the go with the Portable 7.4kW AC Type-II Charger. Designed for mobility and performance, this compact charger offers powerful, safe, and reliable charging for all Type-II electric vehicles — no installation required.</p>
//               <h3>High-Speed 7.4kW Charging</h3>
//               <p>Delivers up to 7.4kW power output — ideal for faster home or portable charging via single-phase power supply.</p>
//                <h3>Type-II Compatibility</h3>
//                <p>Equipped with a universal Type-II (IEC 62196) connector, compatible with most electric vehicles in India and worldwide.</p>
//                 <h3>Portable & Travel-Friendly</h3>
//                 <p>Compact, rugged, and easy to carry — perfect for charging at home, work, or during road trips.</p>
//                 </div>
// <div className="col15_RESIDENCE">
//   <Image src="/Images/PORTABLE74AC2.png" width={700} height={580} alt="PORTABLE74AC2" />
// </div>
//               </div>
//                 )}
//                 {set5 && (
//                 <div className="row8_RESIDENCE">
//                   <div className="col15_RESIDENCE">
// <h2>AC001 3.3kW EV Charger – Smart & Compliant Charging Solution (Bharat Standard)</h2>
// <p>The AC001 EV Charger is a 3.3kW Bharat-standard AC charging unit designed for electric vehicles in India. Ideal for public, commercial, and residential use, this charger provides safe, efficient, and standardized charging with support for multiple EVs simultaneously.</p>
//                 <h3>Bharat AC001 Compliant</h3>
//                 <p>Fully compliant with Government of India’s Bharat EV charging protocol (AC001) — suitable for Indian EV ecosystem.</p>
//                  <h3>3.3kW Output per Socket</h3>
//                  <p>Delivers 3.3kW per charging port, ideal for electric two-wheelers, three-wheelers, and compact electric cars.</p>
//                  <h3>Multiple Socket Support</h3>
//                  <p>Comes with 3 charging sockets (typically IEC 60309) — allowing simultaneous charging of multiple vehicles.</p>
//                   </div>
//                   <div className="col16_RESIDENCE">
//   <Image src="/Images/AC00133.png" width={700} height={580} alt="AC00133" />
//                   </div>
//                 </div>
//                   )}
//             </div>

//             {/* section two  end*/}

//       <div className="container3_RES">
//         <div className="row9_RESIDENCE">
//         <div className="col17_RES">
//           <Image src="/Images/resedence-cont3-1.png" width={600} height={500} alt="residence-cont3" />
//         </div>
//         <div className="col18_RES">
//           <h3> Best for</h3>
//           <h4><FontAwesomeIcon icon={faHouse} /> Residential Properties</h4>
//           <h2><FontAwesomeIcon icon={faBuilding} /> Apartment Complexes</h2>
//         </div>
//         </div>
//       </div>
//       <div className="container4_RES">
//         <div className="row10_RES">
//           <div className="col19_RES">
//             <Image src="/Images/AC-port22.png" width={600} height={600} alt="AC-port22" />
//           </div>
//           {/* <div className="col20_RES" ref={containerRef}>
//             <h4><FontAwesomeIcon icon={faHouse} />  For Home</h4>
//             <h3 ref={iconRef1}>Pulsar Plus</h3>
//             <h2 ref={iconRef2}>Choose between 40 and 48 Amps</h2>
//             <p ref={iconRef3}>Pick the variant that fits your needs. Pulsar Plus 40A offers easy NEMA 14-50 plug installation.</p>
//             <h5 ref={iconRef4}>Starting from</h5>
//           </div> */}
//               <div className="col20_RES" ref={containerRef}>
//       <h4 ref={(el) => (elementsRef.current[0] = el)}>
//         <FontAwesomeIcon icon={faHouse} /> For Home
//       </h4>
//       <h3 ref={(el) => (elementsRef.current[1] = el)}>Pulsar Plus</h3>
//       <h2 ref={(el) => (elementsRef.current[2] = el)}>
//         Reliable. Efficient. Designed for Your Home.
//       </h2>
//       <p ref={(el) => (elementsRef.current[3] = el)}>
//        Choose the variant that suits your home charging needs. The 40A model provides easy installation with a standard NEMA 14-50 plug for hassle-free setup
//       </p>
//       <h5 ref={(el) => (elementsRef.current[4] = el)}>Starting from</h5>
//     </div>
//         </div>
//       </div>
      
//       <div className="container5_RES">
//         <div className="row11_RES">
//           <div className="col21_RES"  ref={containerRef1}>
//             <h3 ref={(el) => (elementsRef1.current[0] = el)}>Why VNT charger?</h3>
//             <h5 ref={(el) => (elementsRef1.current[1] = el)}><FontAwesomeIcon icon={faClockRotateLeft} style={{color:"#ff6600"}} /> Rapid Charging</h5>
//             <p ref={(el) => (elementsRef1.current[2] = el)}>Up to 11.5 kW, for up to<span style={{background:"#ff6600",padding:"2px 20px", borderRadius:"20px" , color:"#fff"}}>8x faster</span>  charging</p>
//           </div>
//           <div className="col22_RES">
//             <Image src="/Images/AC-port33.png"  width={600} height={600} alt="AC-port33" />
//           </div>
//         </div>
//       </div>
//       <div className="container6_RES">
//         <div className="row12_RES">
  

//         </div>
//         </div>
//       </div>
//       <div className="container8_RES">
//         <div className="row14_RES">
//  <div
//       onMouseEnter={() => setHovered2(true)}
//       onMouseLeave={() => setHovered2(false)}
//       style={{
//         width: '302px',
//         height: '392px',
//         overflow: 'hidden',
//         position: 'relative',
//         borderRadius: '10px',
//         border: '1px solid #ccc',
//         cursor:'pointer',
//         marginLeft:'470px',

//       }}
//     >
//       <div
//         style={{
//           display: 'flex',
//           width: '200%', 
//           height: '100%',
//           transition: 'transform 0.5s ease',
//           transform: hovered2 ? 'translateX(-50%)' : 'translateX(0)',
//         }}
//       >
//         {/* Image Card */}
//         <div style={{ width: '50%', height: '100%', position: 'relative' }}>
//           <Image
//             src="/Images/vth4.jpg"
//             alt="vth1"
//             layout="fill"
//             objectFit="cover"
//             style={{ borderRadius: '10px' }}
//           />
//         </div>

//         {/* Content Card */}
//         <div
//           style={{
//             width: '50%',
//             height: '100%',
//             backgroundColor: 'white',
//             padding: '20px',
//             boxSizing: 'border-box',
//                 background:'#000',
//               color:'#fff',
//             fontFamily:'Lato , sans-serif',
//           }}
//         >
          
//           <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Vehicle-to-Home</h2>
//           <p style={{ fontSize: '14px', marginBottom: '10px' }}>
//             Power your home with the energy stored in your EV. Whether you're storing energy from
//             your solar panels or the grid, you'll save big during peak hours.
//           </p>
//           <h3 style={{ fontSize: '14px', marginBottom: '5px' }}>
//             No need to purchase expensive battery storage
//           </h3>
//           <h3 style={{ fontSize: '14px' }}>Avoid peak energy costs</h3>
//         </div>
//       </div>
//     </div>
    
//         <div
//           onMouseEnter={() => setHovered1(true)}
//           onMouseLeave={() => setHovered1(false)}
//           style={{
//             width: '302px',
//             height: '392px',
//             overflow: 'hidden',
//             position: 'relative',
//             borderRadius: '10px',
//             border: '1px solid #ccc',
//             cursor:'pointer',
//         marginLeft:'100px',    
//           }}
//         >
//           <div
//             style={{
//               display: 'flex',
//               width: '200%', 
//               height: '100%',
//               transition: 'transform 0.5s ease',
//               transform: hovered1 ? 'translateX(-50%)' : 'translateX(0)',
//             }}
//           >
//             {/* Image Card */}
//             <div style={{ width: '50%', height: '100%', position: 'relative' }}>
//               <Image
//                 src="/Images/vth2.jpg"
//                 alt="vth1"
//                 layout="fill"
//                 objectFit="cover"
//                 style={{ borderRadius: '10px' }}
//               />
//             </div>
    
//             {/* Content Card */}
//             <div
//               style={{
//                 width: '50%',
//                 height: '100%',
//                 backgroundColor: 'white',
//                 padding: '20px',
//                 boxSizing: 'border-box',
//                     background:'#000',
//                   color:'#fff',
//                 fontFamily:'Lato , sans-serif',    
//               }}
//             >
              
//               <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Vehicle-to-Home</h2>
//               <p style={{ fontSize: '14px', marginBottom: '10px' }}>
//                 Power your home with the energy stored in your EV. Whether you're storing energy from
//                 your solar panels or the grid, you'll save big during peak hours.
//               </p>
//               <h3 style={{ fontSize: '14px', marginBottom: '5px' }}>
//                 No need to purchase expensive battery storage
//               </h3>
//               <h3 style={{ fontSize: '14px' }}>Avoid peak energy costs</h3>
//             </div>
//           </div>

//         </div>
//       </div>
//               <div className="container7_RES" ref={containerRef7}>
//           <div className="row13_RES">
//             <div className="col23_RES">
//               <h5 ref={(el) => (elementsRef7.current[0] = el)}>Software</h5>
//               <h3 ref={(el) => (elementsRef7.current[1] = el)}>Seamless Charging, One App</h3>
//               <p ref={(el) => (elementsRef7.current[2] = el)}>Easily schedule charging sessions, track energy consumption, and activate advanced energy management—all through a single intuitive app. </p>
//             </div>
//             <div className="col24_RES">
//               <h5 ref={(el) => (elementsRef7.current[3] = el)}>Home EV Charging</h5>
//               <h3 ref={(el) => (elementsRef7.current[4] = el)}>Explore VNT’s all-in-one residential charger solution.</h3>
//             </div>
//           </div>
//         </div>
// </div>
//         </>
//     )
// }


