import "../../Styles/OurProcess.css"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck } from '@fortawesome/free-solid-svg-icons'
export default function OurProcess(){
    return(
        <>
        <div className="main1_OurProcess">
            <div className="container1_OurProcess">

                <div className="col1_OurProcess">
                    <h3>Our Process</h3>
                </div>

            </div>
<div className="container2_OurProcess">
    <div className="col2_OurProcess">
<Image src="/Images/ourprocess.png" width={1000} height={450} alt="ourprocess" />
    </div>

</div>
<div className="container3_Ourprocess">
    <div className="row1_OurProcess">
    <div className="col3_OurProcess">
        <h3>Define - Understanding Your Energy Needs</h3>
        <p>We start by defining your unique energy requirements to create tailored, efficient solutions. Understanding your energy needs is the first step toward optimizing consumption and reducing costs.</p>
   <ul>
    <li><FontAwesomeIcon icon={faCheck} style={{ width: '20px', height: '20px' }} /> Analyze energy consumption patterns</li>
    <li><FontAwesomeIcon icon={faCheck} style={{ width: '20px', height: '20px' }} /> Identify sustainbility goals</li>
   </ul>
    </div>
</div>
<div className="row2_OurProcess">
    <div className="col4_OurProcess">
        <h3>Designed - craft tailored solutions</h3>
        <p>We design and craft customized energy solutions that perfectly fit your specific needs, ensuring maximum efficiency and sustainability.</p>
      <ul>
    <li><FontAwesomeIcon icon={faCheck} style={{ width: '20px', height: '20px' }} /> Developed customized EMS strategies</li>
    <li><FontAwesomeIcon icon={faCheck} style={{ width: '20px', height: '20px' }} /> Integrate smart technologies</li>
   </ul>
    </div>
</div>
<div className="row3_OurProcess">
    <div className="col5_OurProcess">
        <h3>Envision - visualize a sustainable future</h3>
        <p>We help you envision a sustainable future by integrating innovative energy strategies that drive efficiency and environmental responsibility.</p>
      <ul>
    <li><FontAwesomeIcon icon={faCheck} style={{ width: '20px', height: '20px' }} /> Explore innovative energy solutions</li>
    <li><FontAwesomeIcon icon={faCheck} style={{ width: '20px', height: '20px' }} /> set clear net-zero targets</li>
   </ul>
    </div>
</div>
<div className="row4_OurProcess">
    <div className="col6_OurProcess">
        <h3>Implement - Deliver & maintain innovative systems</h3>
        <p>We implement and maintain cutting-edge energy systems, ensuring reliable performance and continuous innovation for lasting sustainability.</p>
       <ul>
    <li><FontAwesomeIcon icon={faCheck} style={{ width: '20px', height: '20px' }} /> Deploy solutions with precision</li>
    <li><FontAwesomeIcon icon={faCheck} style={{ width: '20px', height: '20px' }} /> Provide continuous monitoring and optimization</li>
   </ul>
    </div>
</div>
</div>
        </div>
        </>

    )
}


// import Image from "next/image"
// import "../../Styles/OurProcess.css"
// import Head from "next/head"

// export default function OurProcess(){
//     return(
//         <>


// <Head>                
//   <title>Our Process | VNT - From Planning to Execution with Precision</title>

//   <meta
//     name="description"
//     content="Explore VNT’s step-by-step project execution process — from consultation and planning to installation, commissioning, and after-sales support. Designed to deliver reliable and efficient energy solutions across India."
//   />

//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <meta name="robots" content="index, follow" />

//   <meta property="og:title" content="VNT | Our Process - How We Deliver Energy Solutions" />
//   <meta property="og:description" content="Learn how VNT ensures quality and efficiency through its structured process — from requirement analysis and design to implementation and support." />
//   <meta property="og:type" content="website" />
//   <meta property="og:url" content="https://vnt.in/about/OurProcess/" />
//   <meta property="og:site_name" content="VNT" />

//   <meta
//     name="keywords"
//     content="VNT process, how VNT works, energy solution process, solar installation steps, project execution India, consultation to commissioning, energy services workflow"
//   />
// </Head>


//         <div className="main1_OurProcess">
//             <div className="container1_OurProcess">
//                 <div className="row1_OurProcess">
//                 <h2>Our Process</h2>
//                     <div className="col1_OurProcess">
//                     <Image src="/Images/ourprocess.png" width={1200} height={550} alt="ourprocess" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }