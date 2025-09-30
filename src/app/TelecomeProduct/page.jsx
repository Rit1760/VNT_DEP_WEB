'use client'

import Image from "next/image"
import "../../Styles/TelecomeProduct.css"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
export default function TelecomeProduct(){
    const [tel1,setTel1] = useState(false)
    const [tel2,setTel2] = useState(false)
    const [tel3,setTel3] = useState(false)
    const [tel4,setTel4] = useState(false)
    const [tel5,setTel5] = useState(false)
    const [tel6,setTel6] = useState(false)
    const [tel7,setTel7] = useState(false)
    const [tel8,setTel8] = useState(false)
    const [tel9,setTel9] = useState(false)

    const cliTelel = () =>{
        setTel1(!tel1)
    }
      const cliTele2 = () =>{
        setTel2(!tel2)
    }
  const cliTele3 = () =>{
        setTel3(!tel3)
    }
      const cliTele4 = () =>{
        setTel4(!tel4)
    }
      const cliTele5 = () =>{
        setTel5(!tel5)
    }
      const cliTele6 = () =>{
        setTel6(!tel6)
    }

      const cliTele7 = () =>{
        setTel7(!tel7)
    }
      const cliTele8 = () =>{
        setTel8(!tel8)
    }
      const cliTele9 = () =>{
        setTel9(!tel9)
    }
    return(

        <>
        
        <div className="main1_TelecomeProduct">
            <div className="container1_TelecomeProduct">
                <div className="row1_TelecomeProduct">
                    <div className="col1_TelecomeProduct">
                        <h4>Telecome Product</h4>
                        <h3>Powering Progress with Sustainable Telecome Products</h3>
                    </div>
                </div>
            </div>
            <div className="container2_TelecomeProduct">
                <div className="row2_TelecomeProduct">
                    <div className="col2_TelecomeProduct">
                    <h3>Super High Efficiency SMPS</h3>
                    <h4>Reliable Power Conversion with Maximum Energy Efficiency</h4>
                    <h5 onClick={cliTelel} style={{cursor:"pointer"}}>Read more {tel1 ? "+":"-"} </h5>
                    </div>
                    <div className="col3_TelecomeProduct">
                        <Image src="/Images/tp1.png" width={390} height={390} alt="SMPS" />
                    </div>
                </div>
            </div>





{tel1 &&(

        <div className="cont1_TelecomeProduct_toggle">
            <div className="row1_TelecomeProduct_toggle">
                <div className="col1_TelecomeProduct_toggle">
                        <Image src="/Images/tp1.png" width={390} height={390} alt="SMPS" />
                </div>
                <div className="col2_TelecomeProduct_toggle">
                    <h3>Super High Efficiency SMPS</h3>
                    <p>Our advanced Switch Mode Power Supply (SMPS) units efficiently convert AC to DC, offering superior performance, energy savings, and flexible customization. Ideal for telecom, industrial, and solar applications, they deliver reliable, cost-effective power solutions.</p>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />A wide range of products including AC-AC and AC-DC power systems</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Both modular and stand-alone solutions like an outdoor SMPS cabinet</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Hot-swappable along with a highly intelligent controller module</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Provides ease of logistics management and longer system-level MTBF</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Designed for both indoor and outdoor telecom applications</li>
                </div>
            </div>
        </div>

)}

            <div className="container3_TelecomeProduct">
                <div className="row3_TelecomeProduct">
                    <div className="col4_TelecomeProduct">
                          <Image src="/Images/tp2.png" width={390} height={390} alt="SMPS" />
                    </div>
                    <div className="col5_TelecomeProduct">
<h3>Small Cell Solution</h3>
<h4>Boosting Network Coverage and Capacity in High-Density Areas</h4>
                    <h5 onClick={cliTele2} style={{cursor:"pointer"}}>Read more {tel2 ? "+":"-"}</h5>
                    </div>
                </div>
            </div>

{tel2&&(


        <div className="cont2_TelecomeProduct_toggle">
            <div className="row2_TelecomeProduct_toggle">
                <div className="col3_TelecomeProduct_toggle">
                          <Image src="/Images/scs.jpg" width={390} height={390} alt="SCS" />
                </div>
                <div className="col4_TelecomeProduct_toggle">
                    <h3>Small Cell Solution</h3>
                    <p>Our Small Cell power systems ensure seamless connectivity and reliable energy delivery for small cell sites. Designed for compact deployments, they support both core power equipment and ancillary devices, making them ideal for expanding network coverage efficiently.</p>
                  <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />A wide range of products including AC-AC and AC-DC power systems</li>
                  <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Both modular and stand-alone solutions like an outdoor SMPS cabinet</li>
                  <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Hot-swappable along with a highly intelligent controller module</li>
                  <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Provides ease of logistics management and longer system-level MTBF</li>
                  <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Designed for both indoor and outdoor telecom applications</li>
                </div>
            </div>
        </div>


)}

            <div className="container4_TelecomeProduct">
                <div className="row4_TelecomeProduct">
                    <div className="col6_TelecomeProduct">
                       <h3>AMF Panels (ATS)</h3>
                       <h4>Automatic Power Switching for Uninterrupted Energy Supply</h4>
                    <h5 onClick={cliTele3} style={{cursor:"pointer"}}>Read more {tel3 ? "+" : "-"} </h5>
                    </div>
                    <div className="col7_TelecomeProduct">
                          <Image src="/Images/tp3.png" width={390} height={390} alt="ATS" />
                    </div>
                </div>
            </div>


{tel3 &&(

        <div className="cont3_TelecomeProduct_toggle">
            <div className="row3_TelecomeProduct_toggle">
                <div className="col8_TelecomeProduct_toggle">
                          <Image src="/Images/amf2.jpg" width={390} height={390} alt="AMF" />
                </div>
                <div className="col9_TelecomeProduct_toggle">
                    <h3>AMF Panels (ATS)</h3>
                    <p>Our AMF panels ensure uninterrupted power by automatically switching to a backup generator during mains failure. Equipped with RS485/RS232 communication, they enable remote monitoring and efficient load transfer for critical infrastructure.</p>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Complete Automation between Mains, Site Battery & DG Set (Suitable for all DG sets)</li>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Comes with an inbuilt phase selector and compact battery charger that optimizes the usage of Mains Power</li>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Integrated with Contactor less relay-based Phase Selector, DG & Mains switching arrangement</li>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Available with Ground / Pole / Wall Mounting Options</li>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />GSM/GPRS-based Remote monitoring option available for DC Energy Meter, Type 1+2 SPD</li>
                </div>
            </div>
        </div>
)}

            <div className="container5_TelecomeProduct">
                <div className="row5_TelecomeProduct">
                    <div className="col8_TelecomeProduct">
                          <Image src="/Images/tp4.png" width={390} height={390} alt="ATS" />
                    </div>
                    <div className="col9_Telecomeproduct">
                       <h3>High-Efficiency Rectifiers</h3>
                        <h4>Reliable DC Power Conversion with Maximum Energy Efficiency</h4>
                    <h5 onClick={cliTele4} style={{cursor:"pointer"}}>Read more {tel4 ? "+" : "-"}</h5>
                    </div>
                </div>
            </div>

{tel4 &&(

        <div className="cont4_TelecomeProduct_toggle">
            <div className="row4_TelecomeProduct_toggle">
                <div className="col10_TelecomeProduct_toggle">
                        <Image src="/Images/tp4.png" width={390} height={390} alt="ATS" />
                </div>
                <div className="col11_TelecomeProduct_toggle">
                    <h3>High-Efficiency Rectifiers</h3>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Highly efficient, modular, and digitally controlled for flexible usage, lower operating costs, and reliability</li>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Wide Temperature Range that eases applications in harsh climatic conditions</li>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />High Power Density, lower interference, and excellent susceptibility</li>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Front-to-back Airflow to enable unobstructed scalability of shelves</li>
                </div>
            </div>
        </div>

)}


            <div className="container6_TelecomeProduct">
                <div className="row6_TelecomeProduct">
                    <div className="col10_TelecomeProduct">
                 <h3>MPPT</h3>
                 <h4>The rack-based solution to fulfill power requirements with compatibility, conversion efficiency, and reliability</h4>
                    <h5 onClick={cliTele5} style={{cursor:"pointer"}}>Read more {tel5 ? "+" : "-"} </h5>
                    </div>
                    <div className="col11_TelecomeProduct">
                          <Image src="/Images/tp5.png" width={390} height={390} alt="HER" />
                    </div>
                </div>
            </div>



{tel5 &&(


        <div className="cont5_TelecomeProduct_toggle">
            <div className="row5_TelecomeProduct_toggle">
                <div className="col12_TelecomeProduct_toggle">
                        <Image src="/Images/im2.jpg" width={390} height={390} alt="IM" />
                </div>
                <div className="col13_TelecomeProduct_toggle">
                    <h3>MPPT</h3>
                    <p>MPPT solar charger is an advanced power conversion module using BOOST + LLC half-bridge topology to achieve efficient maximum power point tracking, better EMC, and improved solar energy conversion.</p>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />High Efficiency of more than 99%</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Has one fan front‐to‐back airflow with latest thermal solution</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Excellent capacity of working in parallel, positive and, negative ground application</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Input transient protection & galvanic isolation design</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Design life more than 10 years</li>
                </div>
            </div>
        </div>


)}


            <div className="container7_TelecomeProduct">
                <div className="row7_TelecoemProduct">
                    <div className="col12_TelecomeProduct">
                          <Image src="/Images/tp6.png" width={390} height={390} alt="IM" />
                    </div>
                    <div className="col13_TelecomeProduct">
                             <h3>Inverter Module</h3>
               <h4>Efficient DC to AC Conversion for Reliable Power Delivery</h4> 
                    <h5 onClick={cliTele6} style={{cursor:"pointer"}}>Read more {tel6 ? "+" : "-"} </h5>
                    </div>
                </div>
            </div>


{tel6 &&(
    
        <div className="cont6_TelecomeProduct_toggle">
            <div className="row6_TelecomeProduct_toggle">
                <div className="col14_TelecomeProduct_toggle">
                          <Image src="/Images/tp6.png" width={390} height={390} alt="IM" />
                </div>
                <div className="col15_TelecomeProduct_toggle">
                    <h3>MPPT</h3>
                    <p>Our MPPT charger utilizes advanced BOOST + LLC resonance topology for maximum power point tracking and superior energy conversion. Designed for optimal performance and electromagnetic compatibility, it's ideal for efficient solar charging in diverse applications.</p>
               <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />High Efficiency of more than 99%</li>
               <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Has one fan front‐to‐back airflow with latest thermal solution</li>
               <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Excellent capacity of working in parallel, positive and, negative ground application</li>
               <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Input transient protection & galvanic isolation design</li>
               <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Design life more than 10 years</li>
                </div>
            </div>
        </div>
)}


            <div className="container8_TelecomeProduct">
                <div className="row8_TelecomeProduct">
                    <div className="col14_TelecomeProduct">
                   <h3>Smart Panel with AMF – Retrofit</h3>
                   <h4>Upgrading Legacy Systems with Intelligent Auto Power Switching</h4>
                    <h5 onClick={cliTele7} style={{cursor:"pointer"}}>Read more {tel7 ? "+" : "-"} </h5>
                    </div>
                    <div className="col15_TelecomeProduct">
                          <Image src="/Images/tp7.png" width={390} height={390} alt="SP-AMF" />
                    </div>
                </div>
                </div>

{tel7 &&(


            <div className="cont7_TelecomeProduct_toggle">
                <div className="row7_TelecomeProduct_toggle">
                    <div className="col16_TelecomeProduct_toggle">
                          <Image src="/Images/sp2.jpg" width={390} height={390} alt="SP" />
                    </div>
                    <div className="col17_TelecomeProduct_toggle">
                        <h3>Smart Panel with AMF – Retrofit​</h3>
                        <p>Our AMF controller leverages cutting-edge technology to deliver high reliability and comprehensive control features for seamless power transfer and generator automation.</p>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Complete Automation between Mains, Site Battery & DG Set (Suitable for all DG sets)</li>
                    <li> <FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Comes with an inbuilt phase selector and compact battery charger that optimizes the usage of Mains Power</li>
                   <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Integrated with Contactor less relay-based Phase Selector, DG & Mains switching arrangement</li>
                   <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Available with Ground / Pole / Wall Mounting Options</li>
                   <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />GSM/GPRS-based Remote monitoring option available for DC Energy Meter, Type 1+2 SPD</li>
                    </div>
                </div>
            </div>

)}


                <div className="container9_TelecomeProduct">
                    <div className="row9_TelecomeProduct">
                        <div className="col16_TelecomeProduct">
                          <Image src="/Images/tp8.png" width={390} height={390} alt="SC" />
                        </div>
                        <div className="col17_TelecomeProduct">
                        <h3>Smart Controller</h3>
                        <h4>Advanced Control and Monitoring for Smarter Energy Management</h4>
                    <h5 onClick={cliTele8} style={{cursor:"pointer"}}>Read more {tel8 ? "+" : "-"}  </h5>
                        </div>
                    </div>
                </div>


{tel8 && (


            <div className="cont8_TelecomeProduct_toggle">
                <div className="row8_TelecomeProduct_toggle">
                    <div className="col18_Telecomeproduct_toggle">
                          <Image src="/Images/sc2.jpg" width={390} height={390} alt="SC2" />
                    </div>
                    <div className="col19_TelecomeProduct_toggle">
                        <h3>Smart Controller</h3>
                        <p>Our Smart Controller acts as the nerve center of the power system, offering complete monitoring and control via an intuitive LED display and front-panel keys. Designed for efficiency, it enables seamless operation of the entire plant from a single interface.</p>
                    </div>
                </div>
            </div>


)}


                <div className="container10_TelecomeProduct">
                    <div className="row10_TelecomeProduct">
                        <div className="col18_TelecomeProduct">
                            <h3>SNMP Gateway</h3>
                           <h4>Reliable Network Monitoring and Seamless Device Integration</h4>
                    <h5 onClick={cliTele9} style={{cursor:"pointer"}}>Read more {tel9 ? "+" : "-"} </h5>
                        </div>
                        <div className="col19_TelecomeProduct">
                          <Image src="/Images/tp9.png" width={390} height={390} alt="SNMP" />
                        </div>
                    </div>
                </div>


{tel9 &&(

        <div className="cont9_TelecomeProduct_toggle">
            <div className="row9_TelecomeProduct_toggle">
                <div className="col20_TelecomeProduct_toggle">
                          <Image src="/Images/snmp.png" width={390} height={390} alt="snmp" />
                </div>
                <div className="col21_TelecomeProduct_toggle">
                    <h3>SNMP Gateway</h3>
                    <p>The SNMP Gateway is a smart controller-based device designed to monitor digital inputs from existing Small Cell and OLT sites. It efficiently generates SNMP traps and transmits signals to the Central NOC, enabling real-time monitoring and streamlined network management.</p>
                </div>
            </div>
        </div>

)}
            <div className="container11_TelecomeProduct">
                    <div className="col20_TelecomeProduct">
                        <h2>For inquiries, technical assistance, or further information, please contact us</h2>
                        <a href="#">Talk to an expert</a>
                    </div>
                </div>

        </div>
        </>
    )
}



// import Image from "next/image"
// import "../../Styles/TelecomeProduct.css"
// import Head from "next/head"

// export default function TelecomeProduct(){
//     return(
//         <>

//              <Head>     
//         <title>Telecome Product</title>
//         <meta
//           name="description"
//           content="Learn more about VNT – India&apos;s trusted provider of Telecome Product"
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="robots" content="index, follow" />


// <meta property="og:title" content="VNT | Telecom Product Specialist" />
// <meta property="og:description" content="VNT is a leading telecom solutions provider, specializing in high-performance network equipment, connectivity products, and reliable telecom infrastructure services." />

//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://vnt.in/Solutions/TelecomeProduct/" />
//         <meta property="og:site_name" content="VNT" />

// <meta
//   name="keywords"
//   content="VNT, telecom products India, network equipment supplier, voltage network termination, telecom solutions, connectivity products, telecom infrastructure, signal boosters, fiber optic equipment, telecom hardware"
// />
//       </Head>


//         <div className="main1_TelecomeProduct">
//             <div className="scrollContainer1_TP">
//                 <div className="snapRow1TP">

//                     <div className="col1_TelecomeProduct">
//                         <h3>Super High Efficiency SMPS</h3>
//                         <p>Highly operational, reliable, and flexible range of SMPS systems to meet the specific needs of your telecom projects</p>
//                     </div>
//                     <div className="col2_TelecomeProduct">
//                         <Image src="/Images/tp1.png" width={300} height={300} alt="Super High Efficiency SMPS" />
//                     </div>
//                 </div>
//                 <div className="snapRow1TP">
//                     <div className="col3_TelecomeProduct">

//                         <h3>Small Cell Solution</h3>
//                         <p>Designed keeping small cell sites and high efficiency in mind, for a seamless network of communication & user experience</p>
//                     </div>
//                     <div className="col4_TelecomeProduct">
//                         <Image src="/Images/tp2.png" width={300} height={300} alt="Small Cell Solution" />
//                     </div>
//                 </div>
//                 <div className="snapRow1TP">
//                     <div className="col5_TelecomeProduct">
//                         <h3>AMF Panels (ATS)</h3>
//                         <p>An automated and compact microcontroller-based system that enables complete power control and optimization</p>
//                     </div>
//                     <div className="col6_TelecomeProduct">
//                         <Image src="/Images/tp3.png" width={300} height={300} alt="AMF Panels (ATS)" />
//                     </div>
//                 </div>
//                 <div className="snapRow1TP">
//                     <div className="col7_TelecomeProduct">
//                         <h3>High-Efficiency Rectifiers</h3>
//                         <p>Modular rectifiers with advanced functionality and steady power adapted to the innovation of telecom power supplies</p>
//                     </div>
//                     <div className="col8_TelecomeProduct">
//                         <Image src="/Images/tp4.png" width={300} height={300} alt="High-Efficiency Rectifiers" />
//                     </div>
//                 </div>
//                 <div className="snapRow1TP">
//                     <div className="col9_TelecomeProduct">
//                         <h3>Inverter Module</h3>
//                         <p>Complete solution to diverse power requirements with compact, scalable, & highly multifunctional design</p>
//                     </div>
//                     <div className="col10_TelecomeProduct">
//                         <Image src="/Images/tp5.png" width={300} height={300} alt="Inverter Module" />
//                     </div>
//                 </div>
//                 <div className="snapRow1TP">
//                     <div className="col11_TelecomeProduct">
//                         <h3>MPPT</h3>
//                         <p>The rack-based solution to fulfill power requirements with compatibility, conversion efficiency, and reliability</p>
//                     </div>
//                     <div className="col12_TelecomeProduct">
//                         <Image src="/Images/tp6.png" width={300} height={300} alt="MPPT" />
//                     </div>
//                 </div>
//                 <div className="snapRow1TP">
//                     <div className="col13_TelecomeProduct">
//                         <h3>Smart Panel with AMF – Retrofit​</h3>
//                         <p>Another microcontroller-based system with smoke detection alerts for the easy usage of mains power</p>
//                     </div>
//                     <div className="col14_TelecomeProduct">
//                         <Image src="/Images/tp7.png" width={300} height={300} alt="Smart Panel with AMF – Retrofit" />
//                     </div>
//                 </div>
//                 <div className="snapRow1TP">
//                     <div className="col15_TelecomeProduct">
//                         <h3>Smart Controller</h3>
//                         <p>Extensive interface to manage, monitor, and thereby control the overall functioning of your power system</p>
//                     </div>
//                     <div className="col16_TelecomeProduct">
//                         <Image src="/Images/tp8.png" width={300} height={300} alt="Smart Controller" />
//                     </div>
//                 </div>
//                 <div className="snapRow1TP">
//                     <div className="col17_TelecomeProduct">
//                         <h3>SNMP Gateway</h3>
//                         <p>Provides user-friendly access to power-related data from existing small cells and OLT sites</p>
//                     </div>
//                     <div className="col18_TelecomeProduct">
//                         <Image src="/Images/tp9.png" width={300} height={300} alt="SNMP Gateway" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }