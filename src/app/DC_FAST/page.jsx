'use client';

import { useRef, useState } from 'react';
import "../../Styles/DC_FAST.css"
import Image from "next/image"
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Head from 'next/head';
import LanguageSelector from "@/Components/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";
gsap.registerPlugin(ScrollTrigger);
export default function DC_FAST() {
  const { t } = useLanguage();
  const containerReff = useRef(null);
  const containerReff1 = useRef(null);
  const containerReff2 = useRef(null);
  const [activeIndex1, setActiveIndex1] = useState(null);
  const handleClick1 = (index) => {
    setActiveIndex1((prev) => (prev === index ? null : index));
  };
  function animateFade(containerReff) {
    useGSAP(() => {
      const elements = containerReff.current.querySelectorAll(".fade-child");
      gsap.set(elements, { y: 50, opacity: 0 });
      gsap.to(elements, {
        scrollTrigger: {
          trigger: containerReff.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, { scope: containerReff });
  }
  animateFade(containerReff);
  animateFade(containerReff1);
  animateFade(containerReff2);
  return (
    <>
      <LanguageSelector />
      <Head>
        <meta
          name="description"
          content="Discover VNT's advanced DC fast chargers, delivering rapid and efficient electric vehicle charging solutions for residential, commercial, and industrial applications across India."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="VNT | Expert DC Fast Charger Solutions" />
        <meta property="og:description" content="VNT offers reliable and high-performance DC fast chargers designed for quick EV charging, supporting sustainable transportation and energy efficiency." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vnt.in/solutions/Public/" />
        <meta property="og:site_name" content="VNT" />
        <meta
          name="keywords"
          content="VNT, DC fast charger, electric vehicle charging, EV chargers India, fast EV charging solutions, commercial EV chargers, residential EV charging, sustainable transportation, EV infrastructure"
        />
      </Head>
      <div className="main1_Public" >
        <div className="cont1_nav">
          <div className="row1_Nav">
            <Link href="/" style={{ whiteSpace: "nowrap", textDecoration: "None" }}>
              <div className="nav-item nav-residential">
                <h4>Home</h4>
              </div>
            </Link>
            <Link href="/AC_WALLBOX" style={{ whiteSpace: "nowrap", textDecoration: "None" }}>
              <div className="nav-item nav-public">
                <h4>Residential</h4>
              </div>
            </Link>
            <Link href="/CMS" style={{ whiteSpace: "nowrap", textDecoration: "None" }}>
              <div className="nav-item nav-cms">
                <h4>CMS/APP</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="container1_Public" >
          <div className="row1_Public">
          </div>
        </div>
        {/* section two  */}
        <div className="container2_Public">
          <div className="row2_Public">
            <div className="col1_Public" onClick={() => handleClick1(1)}   >
              <h2 className={
                activeIndex1 === 1 ? "activeH2" : "inactiveH2"
              }>
                In<span style={{ color: "#ff6600" }}>v</span>e<span style={{ color: "#ff6600" }}>n</span><span style={{ color: "#ff6600" }}>t</span>io 30kW Wall Box</h2>
            </div>
            <div className="col2_Public" onClick={() => handleClick1(2)}   >
              <h2 className={
                activeIndex1 === 2 ? "activeH2" : "inactiveH2"
              }>
                In<span style={{ color: "#ff6600" }}>v</span>e<span style={{ color: "#ff6600" }}>n</span><span style={{ color: "#ff6600" }}>t</span>io 60kW Fast Charger</h2>
            </div>
            <div className="col3_Public" onClick={() => handleClick1(3)}   >

              <h2 className={
                activeIndex1 === 3 ? "activeH2" : "inactiveH2"
              }>
                In<span style={{ color: "#ff6600" }}>v</span>e<span style={{ color: "#ff6600" }}>n</span><span style={{ color: "#ff6600" }}>t</span>io 120kW ChargeXpress</h2>
            </div>
            <div className="col4_Public" onClick={() => handleClick1(4)}   >
              <h2 className={
                activeIndex1 === 4 ? "activeH2" : "inactiveH2"
              }>
                In<span style={{ color: "#ff6600" }}>v</span>e<span style={{ color: "#ff6600" }}>n</span><span style={{ color: "#ff6600" }}>t</span>io 180kW RapidCharge</h2>
            </div>
            <div className="col5_Public" onClick={() => handleClick1(5)}   >
              <h2 className={
                activeIndex1 === 5 ? "activeH2" : "inactiveH2"
              }>
                In<span style={{ color: "#ff6600" }}>v</span>e<span style={{ color: "#ff6600" }}>n</span><span style={{ color: "#ff6600" }}>t</span>io 240kW HyperCharge</h2>
            </div>
          </div>
          <div className='row2_Public_copy'>
            <div className='col6_Public_copy' onClick={() => handleClick1(6)}  >
              <h2 className={
                activeIndex1 === 6 ? "activeH2" : "inactiveH2"
              }>
                In<span style={{ color: "#ff6600" }}>v</span>e<span style={{ color: "#ff6600" }}>n</span><span style={{ color: "#ff6600" }}>t</span>io 320kW TurboCharge</h2>
            </div>
            <div className='col7_Public_copy' onClick={() => handleClick1(7)}  >
              <h2 className={
                activeIndex1 === 7 ? "activeH2" : "inactiveH2"
              }>
                In<span style={{ color: "#ff6600" }}>v</span>e<span style={{ color: "#ff6600" }}>n</span><span style={{ color: "#ff6600" }}>t</span>io 400kW UltraCharge</h2>
            </div>
            <div className='col8_Public_copy' onClick={() => handleClick1(8)}  >
              <h2 className={
                activeIndex1 === 8 ? "activeH2" : "inactiveH2"
              }>
                In<span style={{ color: "#ff6600" }}>v</span>e<span style={{ color: "#ff6600" }}>n</span><span style={{ color: "#ff6600" }}>t</span>io 640kW ThunderCharge </h2>
            </div>
            <div className='col9_Public_copy' onClick={() => handleClick1(9)}  >
              <h2 className={
                activeIndex1 === 9 ? "activeH2" : "inactiveH2"
              }>
                In<span style={{ color: "#ff6600" }}>v</span>e<span style={{ color: "#ff6600" }}>n</span><span style={{ color: "#ff6600" }}>t</span>io 1MW - MegaCharge</h2>
            </div>
          </div>
          {activeIndex1 === 1 && (
            <div className="row3_Public">
              <div className="col66_Public">
                <h2>{t.col66pubh2}</h2>
                <p>{t.col66pubp}</p>
                <h3>{t.col66pubh3}</h3>
                <ul>
                  <li>{t.col66publi1}</li>
                  <li>{t.col66publi2}</li>
                  <li>{t.col66publi3}</li>
                  <li>{t.col66publi4}</li>
                </ul>
              </div>
              <div className="col7_Public">
                <Image src="/Images/Inventio30kW.png" width={700} height={570} alt="AC11KW" />
              </div>
            </div>
          )}
          {activeIndex1 === 2 && (
            <div className="row4_Public">
              <div className="col8_Public">
                <h2>{t.col8pubh2}</h2>
                <p>{t.col8pubp}</p>
                <h3>{t.col8pubh3}</h3>
                <ul>
                  <li>{t.col8publi1}</li>
                  <li>{t.col8publi2}</li>
                  <li>{t.col8publi3}</li>
                  <li>{t.col8publi4}</li>
                </ul>
              </div>
              <div className="col9_Public">
                <Image src="/Images/Inventio60kW.png" width={700} height={500} alt="AC-TYPE2" />
              </div>
            </div>
          )}
          {activeIndex1 === 3 && (
            <div className="row5_Public" >
              <div className="col10_Public">
                <h2>{t.col10pubh2}</h2>
                <p>{t.col10pubp}</p>
                <h3>{t.col10pubh3}</h3>
                <ul>
                  <li>{t.col10publi1}</li>
                  <li>{t.col10publi2}</li>
                  <li>{t.col10publi3}</li>
                  <li>{t.col10publi4}</li>
                </ul>
              </div>
              <div className="col11_Public">
                <Image src="/Images/Inventio120kW.png" width={600} height={500} alt="Inventio120kW" />
              </div>
            </div>
          )}
          {activeIndex1 === 4 && (
            <div className="row6_Public" >
              <div className="col12_Public">
                <h2>{t.col12pubh2}</h2>
                <p>{t.col12pubp}</p>
                <h3>{t.col12pubh3}</h3>
                <ul>
                  <li>{t.col12publi1}</li>
                  <li>{t.col12publi2}</li>
                  <li>{t.col12publi3}</li>
                  <li>{t.col12publi4}</li>
                </ul>
              </div>
              <div className="col13_Public">
                <Image src="/Images/Inventio180kW.png" width={600} height={450} alt="Inventio180kW" />
              </div>
            </div>
          )}
          {activeIndex1 === 5 && (
            <div className="row7_Public" >
              <div className="col14_Public">
                <h2>{t.col14pubh2}</h2>
                <p>{t.col14pubp}</p>
                <h3>{t.col14pubh3}</h3>
                <ul>
                  <li>{t.col14publi1}</li>
                  <li>{t.col14publi2}</li>
                  <li>{t.col14publi3}</li>
                  <li>{t.col14publi4}</li>
                </ul>
              </div>
              <div className="col15_Public">
                <Image src="/Images/Inventio240kW.png" width={700} height={500} alt="Inventio240kW" />
              </div>
            </div>
          )}
        </div>
        {activeIndex1 === 6 && (
          <div className="row1_Public_copy" >
            <div className="col1_Public_copy">
              <h2>{t.col1pubcopyh2}</h2>
              <p>{t.col1pubcopyp}</p>
              <h3>{t.col1pubcopyh3}</h3>
              <ul>
                <li>{t.col1pubcopyli1}</li>
                <li>{t.col1pubcopyli2}</li>
                <li>{t.col1pubcopyli3}</li>
                <li>{t.col1pubcopyli4}</li>
              </ul>
            </div>
            <div className="col2_Public_copy">
              <Image src="/Images/Inventio320kW.png" width={700} height={500} alt="Inventio320kW" />
            </div>
          </div>
        )}
        {activeIndex1 === 7 && (
          <div className="row22_Public_copy" >
            <div className="col3_Public_copy">
              <h2>{t.col3publiccopyh2}</h2>
              <p>{t.col3publiccopyp}</p>
              <h3>{t.col3publiccopyh3}</h3>
              <ul>
                <li>{t.col3publiccopyli1}</li>
                <li>{t.col3publiccopyli2}</li>
                <li>{t.col3publiccopyli3}</li>
                <li>{t.col3publiccopyli4}</li>
              </ul>
            </div>
            <div className="col4_Public_copy">
              <Image src="/Images/Inventio400k.png" width={700} height={500} alt="Inventio400k" />
            </div>
          </div>

        )}
        {activeIndex1 === 8 && (
          <div className="row3_Public_copy" >
            <div className="col55_Public_copy">
              <h2>{t.col55publiccopyh2}</h2>
              <p>{t.col55publiccopyp}</p>
              <h3>{t.col55publiccopyh3}</h3>
              <ul>
                <li>{t.col55publiccopyli1}</li>
                <li>{t.col55publiccopyli2}</li>
                <li>{t.col55publiccopyli3}</li>
                <li>{t.col55publiccopyli4}</li>
              </ul>
            </div>
            <div className="col66_Public_copy">
              <Image src="/Images/Inventio640kW.png" width={680} height={480} alt="Inventio640kW" />
            </div>
          </div>
        )}
        {activeIndex1 === 9 && (
          <div className="row4_Public_copy">
            <div className="col77_Public_copy">
              <h2>{t.col77publiccopyh2}</h2>
              <p>{t.col77publiccopyp}</p>
              <h3>{t.col77publiccopyh3}</h3>
              <ul>
                <li>{t.col77publiccopyli1}</li>
                <li>{t.col77publiccopyli2}</li>
                <li>{t.col77publiccopyli3}</li>
                <li>{t.col77publiccopyli4}</li>
              </ul>
            </div>
            <div className="col88_Public_copy">
              <Image src="/Images/Inventio1MW.png" width={700} height={500} alt="Inventio1MW" />
            </div>
          </div>
        )}
        <div className="container233_Public" >
          <div className="row233_Public">
            <div className="col133_Public" ref={containerReff}>
              <h4 className="fade-child">{t.col1dch4}</h4>
              <h2 className="fade-child">{t.col1dch2}</h2>
            </div>
          </div>
        </div>

        <div className="container3_Public">
          <div className="row3_Public">
            <div className="col2_row3_Public" ref={containerReff1}>
              <h3 className="fade-child">{t.col2dch3}</h3>
              <p className="fade-child">{t.col2dcp}</p>
            </div>
            <div className="col3_Public_row3_Public">
              <Image src="/Images/DC-6.png" width={620} height={480} alt="DC-6" />
            </div>
          </div>
        </div>
        <div className="container4_Public" ref={containerReff2}>
          <div className="row4_Public">
            <div className="col4_row4_Public_Public" >
              <h2 className="fade-child">{t.col4dch2}</h2>
              <h3 className="fade-child">{t.col4dch3}</h3>
            </div>
            <div className="col5_Public_row4_public">
              <p className="fade-child">{t.col5dcp}</p>
            </div>
          </div>
        </div>

        <div className='container9_Public'>

        </div>
        <div className='container10_Public'>
          <div className='row11_Public'>
            <div className='col19_Public'>
              <h2>{t.col19dch2}</h2>
              <h4>{t.col19dch4}</h4>
              <a href="https://vnt.in/Solutions/e-mobility-products/">Find out More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
