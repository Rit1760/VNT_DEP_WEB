import "../../Styles/Telecome.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobe, faLeaf, faPuzzlePiece, faTools  } from '@fortawesome/free-solid-svg-icons'
export default function Telecome(){
    return(
        <>
    <div className="main1_TelecomeSolution">
        <div className="container1_TelecomeSolution">
            <div className="row1_TelecomeSolution">
                <div className="col1_TelecomeSolution">
                    <h3>Telecom Solutions</h3>
                </div>
            </div>
        </div>

        <div className="container2_TelecomeSolution">
            <div className="col2_TelecomeSolution">
                <h3>Empowering Smart Systems with Advanced Intelligence</h3>
                <p>Advanced technologies enhance system intelligence across solar, energy, EV, and automation networks — enabling real-time monitoring, predictive control, and smarter, more sustainable operations.</p>
            </div>
        </div>
        <div className="container3_TelecomeSolution">
            <div className="row2_TelecomeSolution">
                <div className="col3_TelecomeSolution">
                    <FontAwesomeIcon icon={faLeaf} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto', }} />
                    <h3>Maximizing Energy Efficiency</h3>
                </div>
                <div className="col4_TelecomeSolution">
                     <FontAwesomeIcon icon={faTools} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto', }} />
                    <h3>Streamlining Network Deployment</h3>
                </div>
            </div>
            <div className="row3_TelecomeSolution">
                <div className="col5_TelecomeSolution">
                     <FontAwesomeIcon icon={faPuzzlePiece} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto', }} />
                    <h3>Enhancing System Intelligence</h3>
                </div>
                <div className="col6_TelecomeSolution">
                     <FontAwesomeIcon icon={faGlobe} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto', }} />
                    <h3>Driving Future-Ready Networks</h3>
                </div>
            </div>
        </div>

    </div>
        </>
    )
}



// import "../../Styles/Telecome.css"
// import Image from "next/image"
// import Head from "next/head"

// export default function Telecome(){
//     return(
//         <>

//              <Head>
                
//         <title>Telecome Product</title>
//         <meta
//           name="description"
//           content="Learn more about VNT – India&apos;s trusted provider of Telecome solutions"
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="robots" content="index, follow" />

// <meta property="og:title" content="VNT | Telecom solutions" />
// <meta property="og:description" content="VNT is a leading telecom solutions provider, specializing in high-performance network equipment, connectivity products, and reliable telecom infrastructure services." />

//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://vnt.in/Telecome/" />
//         <meta property="og:site_name" content="VNT" />

// <meta
//   name="keywords"
//   content="VNT, telecom solutins India, network equipment supplier, voltage network termination, telecom solutions, connectivity products, telecom infrastructure, signal boosters, fiber optic equipment, telecom hardware"
// />
//       </Head>


//         <div className="main1_Telecome">
//             <div className="container1_Telecome">
//                 <div className="row1_Telecome">
//                     <div className="col1_Telecome">
//                         <h3>Enhancing System Intelligence</h3>
//                     </div>
//                 </div>
//             </div>
//             <div className="container2_Telecome">
//                 <div className="row2_Telecome">
//                     <div className="col2_Telecome">
//                          <Image src="/Images/telecomsol1.png" width={70} height={70} alt="telecomsol1" />                        
//                         <h3>Maximizing Energy Efficiency</h3>
//                         <p>With our super high-efficiency rectifiers, we significantly reduce power losses, ensuring lower energy costs and more sustainable network operations.</p>
//                     </div>
//                     <div className="col3_Telecome">
//                          <Image src="/Images/telecomesol2.png" width={70} height={70} alt="telecomesol2" />                        
//                         <h3>Streamlining Network Deployment</h3>
//                         <p>Our Telecom Power Solutions simplify the process of telecom site solarization, enabling quick integration of renewable energy for scalable infrastructure growth and reducing reliability on grid power.</p>
//                     </div>
//                     <div className="col4_Telecome">
//                          <Image src="/Images/telecomesol3.png" width={70} height={70} alt="telecomesol3" />                        
//                         <h3>Enhancing System Intelligence</h3>
//                         <p>Advanced monitoring and control tools enable real-time insights, optimizing the management of solar-powered telecom sites and efficient energy use. </p>
//                     </div>
//                 </div>
//                 <div className="row3_Telecome">
//                     <div className="col5_Telecome">
//                          <Image src="/Images/telecomesol4.png" width={70} height={70} alt="telecomesol4" />                        
//                         <h3>Driving Future-Ready Networks</h3>
//                         <p>We empower telecom providers with sustainable, energy-efficient solutions like solarization and high-efficiency rectifiers, helping create resilient systems for tomorrow's connectivity.</p>
//                     </div>
//                     <div className="col6_Telecome">
//                          <Image src="/Images/telecomsol5.png" width={70} height={70} alt="telecomsol5" />                        
//                         <h3>Ensuring Uninterrupted Operations</h3>
//                         <p>Our all-time power solutions, including reliable backup systems powered by lithium-ion batteries, ensure consistent network performance, even during power outages.</p>
//                     </div>
//                 </div>
//                 </div>
//         </div>
//         </>
//     )
// }