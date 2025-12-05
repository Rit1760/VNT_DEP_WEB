//  'use client';

//  import LanguageSelector from "@/components/LanguageSelector";
//  import { useLanguage } from "@/context/LanguageContext";

//  export default function Lang() {
//    const { t } = useLanguage();

//    return (
//      <>
//        <LanguageSelector />
//             <h4>{t.col37homeh4}</h4>
//             <h2>{t.col37homeh2}</h2>
//             <p>{t.col37homep}</p>
//                       <h2>{t.row23homeh21}</h2>
//             <h4>{t.col36homeh4}</h4>
//             <h2>{t.col36homeh2}</h2>
//             <p>{t.col36homep}</p>
//      </>
//    );
//  }


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
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";


gsap.registerPlugin(ScrollTrigger);



import Link from "next/link";
export default function AC_WALLBOX(){
  const { t } = useLanguage();
  const [hovered1, setHovered1] = useState(false)
  const [hovered2, setHovered2] = useState(false)

 const containerRef = useRef(null);
 const containerRef1 = useRef(null);
  const elementsRef = useRef([]);
  const elementsRef1 = useRef([]);
 const containerRef7 = useRef(null);
  const elementsRef7 = useRef([]);



  
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };





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



    return(
        <>
 <LanguageSelector />

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


  {/* <div
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
 */}

        <div className="main1_AC_WALLBOX">

{/* <EVHOME /> */}


<div className="cont1_nav" >
  <div className="row1_Nav">
     <Link href="/" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-residential">
      <h4>Home</h4>
    </div>
    </Link>
    <Link href="/DC_FAST" style={{whiteSpace:"nowrap" , textDecoration:"None",cursor:"pointer"}}>
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


</div>

  {/* <div className="container1NAV2_1" >
    <div className="row1NAV2_1">
      <div className="col1NAV2_1">

<div
  style={{
    padding: '11px 20px',
    fontFamily: lang === 'ar' ? "'Cairo', sans-serif" : 'Arial, sans-serif',
  }}
  dir={lang === 'ar' ? 'rtl' : 'ltr'}
  lang={lang}
>
  <select value={lang} onChange={(e) => setLang(e.target.value)} id="btnn"   >
    <option  value="en">  English</option>
    <option  value="hi"> Hindi</option>
    <option  value="ar"> Arabic</option>
    <option  value="es"> Spanish</option>
    <option  value="pt-BR"> Portuguese (BR)</option>
    <option  value="de"> German</option>
    <option  value="ms">	Malay</option>
    <option  value="th">	Thai</option>

  </select>
</div>

      </div> */}
      {/* <div className="col2NAV2_1">
<select id="color" onChange={riti}>
  <option value="#FAFAFA"> ⚪</option>     
  <option value="#B0AFAF"> ⚙️</option>      
</select>
      </div> */}
    {/* </div>
  </div> */}

            <div className="container1_AC_WALLBOX">
                <div className="row1_AC_WALLBOX">
                </div>
            </div>
            {/* section two  */}
            <div className="container2_RESIDENCE">
              <div className="row2_RESIDENCE">
                <div className="col1_RESIDENCE" onClick={() => handleClick(1)}   >
                  <h2  className={
                  activeIndex === 1 ? "activeH2" : "inactiveH2"
                }>
{t.col1resi1}</h2>
                </div>
                <div className="col2_RESIDENCE" onClick={() => handleClick(2)}  >
                  <h2 className={
                  activeIndex === 2 ? "activeH2" : "inactiveH2"
                }>
{t.col1resi2}</h2>
                </div>
                <div className="col3_RESIDENCE" onClick={() => handleClick(3)}  >
                  <h2 className={
                  activeIndex === 3 ? "activeH2" : "inactiveH2"
                }>
{t.col1resi3}</h2>
                </div>
                <div className="col4_RESIDENCE" onClick={() => handleClick(4)}  >
                  <h2 className={
                  activeIndex === 4 ? "activeH2" : "inactiveH2"
                }>
{t.col1resi4}</h2>
                </div>
                <div className="col5_RESIDENCE" onClick={() => handleClick(5)}  >
                  <h2 className={
                  activeIndex === 5 ? "activeH2" : "inactiveH2"
                }>
{t.col1resi5}</h2>
                </div>
                {/* <div className="col6_RESIDENCE" onClick={setCli5}>
                  <h2>AC001 3.3kW</h2>
                </div> */}
              </div>

                        {activeIndex === 1 && (
                <div className="row3_RESIDENCE">
<div className="col66_RESIDENCE">
  <h2>{t.col66resi}</h2>
  <p>{t.col66resip}</p>
  <h3>{t.col66resih3}</h3>
<ul>
  <li>{t.col66resili1}</li>
  <li>{t.col66resili2}</li>
  <li>{t.col66resili3}</li>
  <li>{t.col66resili4}</li>
</ul>
</div>
<div className="col7_RESIDENCE">
  <Image src="/Images/AC22kW.png" width={700} height={470} alt="AC22kW" />
</div>
              </div>
              )} 



                 {activeIndex === 2 && (
                            <div className="row4_RESIDENCE">
                <div className="col8_RESIDENCE">

                    <h2>{t.col8resih2}</h2>
  <p>{t.col8resip}</p>
               <h3>{t.col8resih3}</h3>
<ul>
<li>{t.col8resili1}</li>
<li>{t.col8resili2}</li>
<li>{t.col8resili3}</li>
<li>{t.col8resili4}</li>
</ul>
                </div>
<div className="col9_RESIDENCE">
  <Image src="/Images/AC11kWw.png" width={600} height={580} alt="AC11kWw" />
</div>
              </div>
                )}




                          {activeIndex === 3 && (
                            <div className="row5_RESIDENCE" >
                <div className="col10_RESIDENCE">
                    <h2>{t.col10resih2}</h2>
  <p>{t.col10resip}</p>
                <h3>{t.col10resih3}</h3>
   <ul>
    <li>{t.col10resili1}</li>
    <li>{t.col10resili2}</li>
    <li>{t.col10resili3}</li>
    <li>{t.col10resili4}</li>
   </ul>
                </div>
<div className="col11_RESIDENCE">
  <Image src="/Images/AC-KW2.png" width={550} height={500} alt="AC-KW" />
</div>
              </div>
               )}


                        {activeIndex === 4 && (
                            <div className="row6_RESIDENCE" >
                <div className="col12_RESIDENCE">
                    <h2>{t.col12resih2}</h2>
                    <p>{t.col12resip}</p>
               <h3>{t.col12resih3}</h3>
<ul>
  <li>{t.col12resili1}</li>
  <li>{t.col12resili2}</li>
  <li>{t.col12resili3}</li>
  <li>{t.col12resili4}</li>
</ul>
                </div>
<div className="col13_RESIDENCE">
  <Image src="/Images/POrtable3.3kW.png" width={600} height={480} alt="POrtable3.3kW" />
</div>

              </div>
                )}
                {activeIndex === 5 && (
                            <div className="row7_RESIDENCE" >
                <div className="col14_RESIDENCE">
                    <h2>{t.col14rtesih2}</h2>
  <p>{t.col14rtesip}</p>
              <h3>{t.col14rtesih3}</h3>
<ul>
  <li>{t.col14rtesili1}</li>
  <li>{t.col14rtesili2}</li>
  <li>{t.col14rtesili3}</li>
  <li>{t.col14rtesili4}</li>
</ul>
                </div>
<div className="col15_RESIDENCE">
  <Image src="/Images/Portable7.4kW.png" width={700} height={480} alt="Portable7.4kW" />
</div>

              </div>
                )}

            </div>

            {/* section two  end*/}

      <div className="container3_RES">
        <div className="row9_RESIDENCE">
        <div className="col17_RES">
          <Image src="/Images/tilt1.png" width={450} height={350} alt="residence-cont3" />
        </div>
        <div className="col18_RES">
          <h3>{t.col18resh3}</h3>
          <h4><FontAwesomeIcon icon={faHouse} /> {t.col18reshh4}</h4>
          <h2><FontAwesomeIcon icon={faBuilding} /> {t.col18reshh2}</h2>
        </div>
        </div>
      </div>

      <div className="container4_RES">
        <div className="row10_RES">
          <div className="col19_RES">
            <Image src="/Images/AC-port22.png" width={600} height={600} alt="AC-port22" />
          </div>


              <div className="col20_RES" ref={containerRef}>
      <h4 ref={(el) => (elementsRef.current[0] = el)}>
        <FontAwesomeIcon icon={faHouse} /> {t.col20resh4}
      </h4>
      {/* <h3 ref={(el) => (elementsRef.current[1] = el)}>Pulsar Plus</h3> */}
      <h2 ref={(el) => (elementsRef.current[2] = el)}>
       {t.col20resh2}
      </h2>
      <p ref={(el) => (elementsRef.current[3] = el)}>
       {t.col20resp1}
      </p>
      {/* <h5 ref={(el) => (elementsRef.current[4] = el)}>Starting from</h5> */}
    </div>
        </div>
      </div>
      
      <div className="container5_RES">
        <div className="row11_RES">
          <div className="col21_RES"  ref={containerRef1}>
            <h3 ref={(el) => (elementsRef1.current[0] = el)}>{t.col21resh3}</h3>
            <h5 ref={(el) => (elementsRef1.current[1] = el)}><FontAwesomeIcon icon={faClockRotateLeft} style={{color:"#ff6600"}} />{t.col21resh5}</h5>
            <p ref={(el) => (elementsRef1.current[2] = el)}>{t.col21resp}</p>
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
            src="/Images/vth4.png"
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
                src="/Images/vth2.png"
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