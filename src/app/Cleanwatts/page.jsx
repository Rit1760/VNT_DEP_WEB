'use client'

import "../../Styles/Cleanwatts.css"
import Link from "next/link"
import Head from "next/head";

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Cleanwatts(){

     const containerRefcont2 = useRef(null);
  const elementsRefcont2 = useRef([]);
    const containerRefcont3 = useRef(null);
  const elementsRefcont3 = useRef([]);

     const containerRefrow1 = useRef(null);
  const elementsRefrow1 = useRef([]);


  

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRefcont2.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    });

    gsap.set(elementsRefcont2.current, { y: 50, opacity: 0});

    tl.to(elementsRefcont2.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, 
      ease: 'power2.out',
    });
  }, { scope: containerRefcont2 });





    useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRefcont3.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    });

    gsap.set(elementsRefcont3.current, { y: 50, opacity: 0});

    tl.to(elementsRefcont3.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, 
      ease: 'power2.out',
    });
  }, { scope: elementsRefcont3 });





      useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRefrow1.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    });

    gsap.set(elementsRefrow1.current, { y: 50, opacity: 0});

    tl.to(elementsRefrow1.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, 
      ease: 'power2.out',
    });
  }, { scope: elementsRefrow1 });


    return(
        
        <>


<Head>                
  <title>Cleanwatts | VNT - Smart Clean Energy Solutions in India</title>

  <meta
    name="description"
    content="Discover Cleanwatts by VNT, offering innovative clean energy and energy efficiency solutions to promote sustainable and eco-friendly power management across residential, commercial, and industrial sectors in India."
  />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="VNT | Cleanwatts - Clean Energy & Efficiency Solutions" />
  <meta property="og:description" content="Cleanwatts by VNT delivers cutting-edge clean energy technologies and energy management services to optimize power usage and reduce carbon footprint." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vnt.in/solutions/Cleanwatts/" />
  <meta property="og:site_name" content="VNT" />

  <meta
    name="keywords"
    content="Cleanwatts, VNT clean energy, energy efficiency solutions, sustainable power management, eco-friendly energy India, clean energy technologies, renewable energy solutions"
  />
</Head>


        <div className="main1_Cleanwatts">
            <div className="container1_Cleanwatts">
<h2>VNT CleanWatts</h2>
<h4>Powering Net Zero with Smarter Energy Solutions.</h4>
            </div>
            <div className="container2_Cleanwatts"  ref={containerRefcont2}>
                <h2  ref={(el) => (elementsRefcont2.current[0] = el)}>Efficient. Sustainable. Future-Ready.</h2>
                <p ref={(el) => (elementsRefcont2.current[1] = el)}>We are an energy management company dedicated to empowering a sustainable future. Through advanced products and tailored services, we help customers achieve their net-zero goals. Focused on innovation and efficiency, we build smarter energy systems that support a greener, connected, and resilient world.
</p>

            </div>
            <div className="container3_Cleanwatts" ref={containerRefcont3}>
                <h4 ref={(el) => (elementsRefcont3.current[0] = el)}>By industry</h4>
                <h2 ref={(el) => (elementsRefcont3.current[1] = el)}>No matter the industry, Wallbox can make charging work for you.</h2>
                <div className="row1_Cleanwatts" ref={containerRefrow1}>
                    <Link href="./OurProcess">
                    <div className="col1_Cleanwatts" ref={(el) => (elementsRefrow1.current[0] = el)}>
                        <h3> Our Process</h3>
                    </div>
                    </Link>
                    <Link href="./OurScope"> 
                    <div className="col2_Cleanwatts" ref={(el) => (elementsRefrow1.current[1] = el)}>
                        <h3>Our Scope </h3>
                    </div>
                    </Link> 
                    <Link href="./Scada">
                    <div className="col3_Cleanwatts" ref={(el) => (elementsRefrow1.current[2] = el)}>
                        <h3> VNT SCADA+®  </h3>
                    </div>
                    </Link>
                    <Link href="./EMS">
                    <div className="col4_Cleanwatts" ref={(el) => (elementsRefrow1.current[3] = el)}>
                        <h3> EMS  </h3>
                    </div>
                    </Link>
                    <Link href="./ISC">
                    <div className="col5_Cleanwatts" ref={(el) => (elementsRefrow1.current[4] = el)}>
                        <h3>International Standards Compliance </h3>
                    </div>
                    </Link>
                </div>
            </div>
        </div>

        </>

    )
}