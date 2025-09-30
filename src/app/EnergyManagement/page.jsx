import "../../Styles/EnergyManagement.css"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faChartLine , faBullseye , faSlidersH  } from '@fortawesome/free-solid-svg-icons'

export default function EnergyManagement(){
    return(
        <>
        <div className="main1_EnergyManagement">
            <div className="container1_EnergyManagement">
                    <div className="col1_EnergyManagement">
                        <h3>Energy Management Solutions</h3>
                </div>
            </div>
            <div className="container2_EnergyManagement">
                <div className="col2_EnergyManagement">
                    <h3>Control Energy, Command Efficiency</h3>
                    <p>Take control of your energy systems with intelligent tools that help you monitor usage, reduce waste, and maximize efficiency — all from a single smart dashboard. VNT empowers you to save energy, cut costs, and build a more sustainable future, one unit at a time.</p>
                </div>
            </div>
            <div className="container4_EnergyManagement">
                <div className="row1_EnenrgyManagement">
                    <div className="col4_EnergyManagement">
                        
<FontAwesomeIcon icon={faBolt} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto', }} />
                        <h3>Substation Automation Solution</h3>
                    </div>
                    <div className="col5_EnergyManagement">
<FontAwesomeIcon icon={faChartLine} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto', }} />
                        <h3>SCADA / Monitoring Solution</h3>
                    </div>
                </div>
                <div className="row2_EnergyManagement">
                    <div className="col6_EnergyManagement">
<FontAwesomeIcon icon={faSlidersH } style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto', }} />
                        <h3>Monitor. Control. Optimize.</h3>
                    </div>
                    <div className="col7_EnergyManagement">
<FontAwesomeIcon icon={faBullseye  } style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto', }} />
                        <h3>Power. Precision. Performance.</h3>
                    </div>
                    
                </div>
            </div>
            <div className="container3_EnergyManagement">
                <div className="col3_EnergyManagement_Headlines">
                    <h2>Seamless Energy Management in the Palm of Your Hand</h2>
                </div>
                <div className="col3_EnergyManagement">
<Image src="/Images/em2.png" width={500} height={400} alt="EnergyManagement" />
                </div>
            </div>
        </div>
        </>
    )
} 



// 'use client'
// import Link from "next/link"
// import "../../Styles/EnergyManagement.css"
// import Head from "next/head"

// import Image from "next/image"
// export default function EnergyManagement(){
//     return(
//         <>

// <Head>                
//   <title>Energy Management Solutions | VNT - Efficient Energy Services in India</title>

//   <meta
//     name="description"
//     content="Discover VNT's comprehensive energy management solutions, including energy audits, monitoring systems, and optimization services for residential, commercial, and industrial clients across India."
//   />

//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <meta name="robots" content="index, follow" />

//   <meta property="og:title" content="VNT | Expert Energy Management Solutions" />
//   <meta property="og:description" content="VNT offers professional energy management services that help businesses optimize energy usage, reduce costs, and improve sustainability through innovative technologies." />
//   <meta property="og:type" content="website" />
//   <meta property="og:url" content="https://vnt.in/solutions/EnergyManagement/" />
//   <meta property="og:site_name" content="VNT" />

//   <meta
//     name="keywords"
//     content="VNT, energy management solutions, energy audits, energy monitoring systems, energy optimization, commercial energy management, industrial energy services, sustainable energy, energy efficiency India"
//   />
// </Head>

//         <div className="main1_EnergyManagement">
//             <div className="container1_EnergyManagement">
//                 <div className="row1_EnergyManagement">
//                     <div className="col1_EnergyManagement">
//                         <h3>Energy Management Solutions</h3>
//                     </div>
//                 </div>
//             </div>
//             <div className="container2_EnergyManagement">
//                 <div className="row2_EnergyManagement">
//                     <div className="col2_EnergyManagement">
//                         <Image src="/Images/en1.png" width={70} height={70} alt="solar1" />
//                         <h4>Substation Automation Solution</h4>
//                         <p>Smart substations with integrated Control & Protection system compatible with multi-vendor and latest international standards.</p>
//                     </div>
//                     <div className="col3_EnergyManagement">
//                         <Image src="/Images/en2.png" width={70} height={70} alt="solar2" />

//                         <h4>SCADA / Monitoring Solution</h4>
//                         <p>Comprehensive and customized solutions for supervisory control, data acquisition and power system management on real-time basis.</p>
//                     </div>
//                     <div className="col4_EnergyManagement">
//                         <Image src="/Images/en3.png" width={70} height={70} alt="solar3" />

//                         <h4>Solar Plant Control & Monitoring Solution</h4>
//                         <p>Smart vendor-independent system designed specifically for PV Power Plant Control (PPC) and Monitoring, ensuring system reliability and stability.</p>
//                     </div>
//                     <div className="col5_EnergyManagement">
//                         <Image src="/Images/en4.png" width={70} height={70} alt="solar4" />

//                         <h4>Wind Plant Control & Monitoring Solution</h4>
//                         <p>Smart vendor-independent system designed specifically for Wind Power Plant Control (PPC) and Monitoring, ensuring system reliability and stability.</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="container3_EnergyManagement">
//                 <div className="row3_EnergyManagement">
//                     <div className="col6_EnergyManagement">
//                         <Link href="#">Explore our products</Link>
//                     </div>
//                     <div className="col7_EnergyManagement">
//                         <Link href="#"> Contact Sales/Support </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }


