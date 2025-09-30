'use client'

import "../../Styles/SolarProduct.css"
import Image from "next/image"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'




export default function SolarProduct(){
    const[set1t , togset1t] = useState(false);
    const[set2t , togset2t] = useState(false);
    const[set3t , togset3t] = useState(false);
    const[set4t , togset4t] = useState(false);

    const cliset1 = () =>{
        togset1t(!set1t)
    }
        const cliset2 = () =>{
        togset2t(!set2t)
    }
            const cliset3 = () =>{
                
        togset3t(!set3t)
    }
                const cliset4 = () =>{
        togset4t(!set4t)
    }
    return(
        <>
        <div className="main1_SolarProduct">
            <div className="container1_SolarProduct">
                <div className="row1_SolarProduct">
                    <div className="col1_SolarProduct">
                        <h4>Solar Products</h4>
                        <h3>Powering Progress with Sustainable Solar Products</h3>
                    </div>
                </div>
            </div>

            <div className="container2_SolarProduct">
                <div className="row2_SolarProduct">
                    <div className="col2_SolarProduct">
                        <h3>String Combiner Box</h3>
                        <h4>Optimized for Seamless Solar Power Distribution</h4>
                        <h5 onClick={cliset1} style={{cursor:"pointer"}}>Read More {set1t ? "-" :"+"} </h5>
                    </div>
                    <div className="col3_SolarProduct">
                        <Image src="/Images/scb.png" width={390} height={390} alt="scb" />
                    </div>
                </div>


  </div>
{set1t &&(
            <div className="cont2_SolarProduct_toggle">
                <div className="row2_SolarProduct_toggle">
                    <div className="col1_SolarProduct_toggle">
                        <Image src="/Images/scb2.jpg" width={390} height={390} alt="scb2" />
                    </div>
                    <div className="col2_SolarProduct_toggle">
                        <h3>String Combiner Box</h3>
                        <p>Our Array Junction Boxes with integrated Surge Protection Devices (SPDs) safeguard your solar plant from voltage spikes. Designed for utility-scale and rooftop installations, they combine 8–24 PV strings into one DC output, ensuring safe, efficient power flow to the inverter.</p>
                   <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Robust housing made of Polycarbonate and FRP.</li>
                   <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}}  /> Compliance standards per national & international Standards</li>
                   <li><FontAwesomeIcon icon={faCheck}  width={50} height={50}  style={{color:"#ff6600"}} /> IP 67, 68 rated Enclosure protection</li>
                   <li><FontAwesomeIcon icon={faCheck}  width={50} height={50}  style={{color:"#ff6600"}} /> Available in different ranges 8, 12, 16, 24 strings per business requirements.</li>
                    </div>
                </div>
            </div>
)}




          
            <div className="container3_SolarProduct">
                <div className="row3_SolarProduct">
                    <div className="col4_SolarProduct">
                        <Image src="/Images/smb.png" width={390} height={390} alt="smb" />
                    </div>
                    <div className="col5_SolarProduct">
                        <h3>String Monitoring Box</h3>
                        <h4>Get complete visibility and control with precision string-level monitoring.</h4>
                        <h5 onClick={cliset2} style={{cursor:"pointer"}} >Read more {set2t ? "-" :"+"}</h5>
                    </div>
                </div>
            </div>


{set2t &&(

        <div className="cont3_SolarProduct_toggle">
            <div className="row3_SolarProduct_toggle">
                <div className="col3_SolarProduct_toggle">
                        <Image src="/Images/scb2.jpg" width={390} height={390} alt="scb2" />
                </div>
                
                <div className="col4_SolarProduct_toggle">
                    <h3>String Monitoring Box</h3>
                    <p>Our advanced String Monitoring Boxes (SMBs) combine multiple PV strings and provide real-time monitoring of electrical parameters, fuse status, SPD health, and more. Built in a world-class facility, they offer high reliability, long life, and optimal performance in harsh environments — all at a competitive price.</p>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50} style={{color:"#ff6600"}}  /> Fully Customizable up to 24 PV string inputs & 1500 VDC</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Built-in touch sale fuse, fuse holders and, DC isolator</li>
                <li><FontAwesomeIcon icon={faCheck}  width={50} height={50}  style={{color:"#ff6600"}} /> Integrated Surge protection devices</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Measurement accuracy of ±0.1%</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> 100% factory tested in compliance with ISO 9001:2015, IEC 61439-1&-2 standards</li>
                </div>
            </div>
        </div>

)}


            <div className="container4_SolarProduct">
                <div className="row4_SolarProduct">
                    <div className="col6_SolarProduct">
                  <h3>Solar AC Distribution Panel</h3>
                  <h4>Efficient Power Distribution for Reliable Solar Operations</h4>
                  <h5 onClick={cliset3} style={{cursor:"pointer"}} >Read more {set3t ? "-" :"+"}</h5>
                    </div>
                    <div className="col7_SolarProduct">
                        <Image src="/Images/sdp.png" width={390} height={390} alt="sdp" />
                    </div>
                </div>
            </div>

{set3t &&(


        <div className="cont4_SolarProduct_toggle">
            <div className="row4_SolarProduct_toggle">
                <div className="col6_SolarProduct_toggle">
                        <Image src="/Images/sdp2.jpg" width={390} height={390} alt="sdp2" />
                </div>
                <div className="col7_SolarProduct_toggle">
                    <h3>Solar AC Distribution Panel</h3>
                    <p>VNT offers a comprehensive range of AC Distribution Boards (ACDB) and AC Combiner Boxes (ACCB) for systems from 1 kW to 1000 kW — including both single-phase and three-phase setups. We also specialize in 800V ACCBs for utility-scale projects, enabling efficient AC output combination from string inverters to LT panels.</p>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50} style={{color:"#ff6600"}} /> In compliance with IEC 60947/UL standards</li>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Fully customizable for rooftop & utility-scale market</li>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Available in FRP/PC/Metal enclosures</li>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Integrated with Fuses, Isolators, MCCBs, SPDs</li>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Suitable and compatible with all major string inverter manufacturers.</li>
                </div>
            </div>
        </div>

    
)}


            <div className="container5_SolarProduct">
                <div className="row5_SolarProduct">
                    <div className="col8_SolarProduct">
                        <Image src="/Images/smp.png" width={390} height={390} alt="smp" />
                    </div>
                    <div className="col9_SolarProduct">
                    <h3>Solar LT Metering Panel</h3>
                    <h4>Accurate Energy Measurement for Optimized Solar Management</h4>
                    <h5 onClick={cliset4} style={{cursor:"pointer"}}>Read more {set4t ? "-" :"+"} </h5>
                    </div>
                </div>
            </div>


{set4t &&(

        <div className="cont5_SolarProduct_toggle">
            <div className="row5_SolarProduct_toggle">
                <div className="col8_SolarProduct_toggle">
                        <Image src="/Images/smp2.jpg" width={390} height={390} alt="smp2" />
                </div>
                <div className="col9_SolarProduct_toggle">
                    <h3>Solar LT Metering Panel</h3>
                    <p>Designed for both indoor and outdoor use, our customizable LT Panels feature AC Surge Protection Devices, disconnectors, and MCBs. Built for efficiency and safety, they support cost-effective solar power distribution across renewable energy applications.</p>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Upto 800 VAC</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Compact double door arrangement with sealing provision</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Easy mounting with Single/ Four / Wall mounting facilities</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Designed as per IS/IEC safety standards (IEC62262 & IEC 60529)</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Equipped with Shunt Based String Monitoring Device up to 25 A current rating for each channel.</li>
                </div>
            </div>
        </div>
        
    
)}

            <div className="container6_SolarProduct">
                    <div className="col10_SolarProduct">
                        <h2>For inquiries, technical assistance, or further information, please contact us</h2>
                        <a href="#">Talk to an expert</a>
                    </div>
                </div>
        </div>
        </>
    )
}




// 'use client'

// import Image from "next/image"
// import "../../Styles/SolarProduct.css"
// import DownArrow from "@/Components/DownArrow"
// import Head from "next/head"

// export default function SolarProduct(){
//     return(
//         <>

//              <Head>     
// <head>     
//   <title>Solar Products | VNT - Trusted Solar Solutions Provider</title>
  
//   <meta
//     name="description"
//     content="Discover VNT's range of high-efficiency solar products including solar panels, inverters, and complete energy systems designed for residential, commercial, and industrial use across India."
//   />

//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <meta name="robots" content="index, follow" />

//   <meta property="og:title" content="VNT | Solar Solutions Specialist" />
//   <meta property="og:description" content="VNT is a trusted provider of solar solutions, offering high-efficiency solar panels, inverters, and complete solar energy systems for residential, commercial, and industrial needs." />
//   <meta property="og:type" content="website" />
//   <meta property="og:url" content="https://vnt.in/solutions/SolarProduct/" />
//   <meta property="og:site_name" content="VNT" />

//   <meta
//     name="keywords"
//     content="VNT, solar solution, solar panels, solar inverters, solar energy systems, renewable energy India, residential solar, commercial solar, industrial solar, sustainable energy"
//   />
// </head>
//       </Head>



//         <div className="main1_SolarProduct">
//             <div className="scrollContainer_SolarProduct">
//                                     <DownArrow />
                
//                 <div className="snapRow_SolarProduct">
//                     <div className="col1_SolarProduct">

//                         <h3>String Combiner Box</h3>
//                         <p>PV systems are particularly finicky to power fluctuations, which poses a challenge for solar installers. String Combiner Box rescues solar equipment against such surges</p>
//                     </div>
//                     <div className="col2_SolarProduct">
//                         <Image src="/Images/scb.png" width={290} height={290} alt="scb" />
//                     </div> 
//                 </div>

//                 <div className="snapRow_SolarProduct">
//                     <div className="col3_SolarProduct">
//                         <h3>String Monitoring Box</h3>
//                         <p>VNT’s string monitoring box enables you to monitor system performance while maintaining exceptional system safety customized as per business needs</p>
//                     </div>
//                     <div className="col4_SolarProduct">
//                         <Image src="/Images/smb.png" width={290} height={290} alt="smb" />
//                     </div>
//                 </div>
//                 <div className="snapRow_SolarProduct">
//                     <div className="col5_SolarProduct">
//                         <h3>Solar AC Distribution Panel</h3>
//                         <p>Designed to provide great system performance as well as enhanced protection by isolating the inverter from the mains when necessary.</p>
//                     </div>
//                     <div className="col6_SolarProduct">
//                         <Image src="/Images/sdp.png" width={290} height={290} alt="sdp" />
//                     </div>
//                 </div>
//                 <div className="snapRow_SolarProduct">
//                     <div className="col7_SolarProduct">
//                         <h3>Solar LT Metering Panel</h3>
//                         <p>Fulfilling major industrial power purposes, solar LT metering panel serves as the best solution for effortless monitoring, sealing provision, and space-friendly metering</p>
//                     </div>
//                     <div className="col8_SolarProduct">
//                         <Image src="/Images/smp.png" width={290} height={290} alt="smp" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }