'use client'

import "../../Styles/FireAndSafetyProduct.css"
import Image from "next/image"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
export default function FireAndSafetyProduct(){
    const[fire1 , setfire1] = useState(false)
    const[fire2 , setfire2] = useState(false)
    const[fire3 , setfire3] = useState(false)


    const clifire1 = () =>{
        setfire1(!fire1)
    }
    const clifire2 = () => {
        setfire2(!fire2)
    }
    const clifire3 = () =>{
        setfire3(!fire3)

    }
    return(
        <>
        <div className="main1_FireAndSafetyProduct">


        <div className="container_FireAndSafetyProduct">
            <div className="row_FireAndSafetyProduct">
                <div className="col_FireAndSafetyProduct">
                    <h3>Fire & Safety</h3>
                    <h4>Protecting What Matters Most – Fire & Safety You Can Trust</h4>
                </div>
            </div>
        </div>



            <div className="container1_FireAndSafetyProduct">
                <div className="row1_FireAndSafetyProduct">
                    <div className="col1_FireAndSafetyProduct">
                     <h3>Stat-X Fire Suppression System</h3>
                     <h4>Advanced Aerosol-Based Fire Protection for Critical Environments</h4>
                     <h5 onClick={clifire1} style={{cursor:"pointer"}}>Read more {fire1 ? "+" : "-"} </h5>
                    </div>
                    <div className="col2_FireAndSafetyProduct">

                            <Image src="/Images/fire1.png" width={390} height={390} alt="fire1" />
                    </div>
                </div>
            </div>




{fire1 &&(


        <div className="cont1_fire_toggle">
            <div className="row1_fire_toggle">
                <div className="col1_fire_toggle">
                            <Image src="/Images/statX.jpg" width={390} height={390} alt="statX" />
                </div>
                <div className="col2_fire_toggle">
                    <h3>Stat-X Fire Suppression System</h3>
                    <p>Our compact fire alarm system and advanced Stat-X Aerosol Fire Suppression solution offer reliable, low-maintenance fire protection—without the high installation costs and space requirements of traditional systems. Stat-X technology cuts special hazard fire protection costs by up to 35%, making it one of the most efficient and trusted fire suppression systems available today.</p>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Exceptional ability to suppress heat</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Non-Toxic & Naturally buoyant</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Shelf life of more than 10 years</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Leaves no residue</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />No venting or ceiling tile clips for discharge forces, distribution piping, manifold, or nozzles</li>
                    </div>
            </div>
        </div>


)}


            <div className="container2_FireAndSafetyProduct">
                <div className="row2_FireAndSafetyProduct">
                    <div className="col3_FireAndSafetyProduct">
                            <Image src="/Images/fire2.png" width={390} height={390} alt="fire2" />
                    </div>
                    <div className="col4_FireAndSafetyProduct">
                      <h3>Fire Detection Systems</h3>
                      <h4>Early Warning Solutions for Reliable Fire Safety in Critical Areas</h4>
                     <h5 onClick={clifire2} style={{cursor:"pointer"}}>Read more {fire2 ? "+" : "-"} </h5>
                    </div>
                </div>
            </div>



{fire2 &&(



        <div className="cont2_fire_toggle">
            <div className="row2_fire_toggle">
                <div className="col3_fire_toggle">
                            <Image src="/Images/firedet.jpg" width={390} height={390} alt="FireDet" />
                </div>
                <div className="col4_fire_toggle">
                    <h3>Fire Detection System</h3>
                    <p>Unlike traditional conventional fire alarm systems that only indicate the zone of fire, our advanced Addressable Fire Alarm System from VNT precisely identifies the exact device and location activated during a fire event—enabling faster response and targeted suppression.

Integrated with smart control relay modules, our system communicates seamlessly with fire suppression, electrical, access control, emergency lighting, and other safety systems. This intelligent coordination ensures rapid fire detection and efficient hazard control, offering enhanced protection for high-risk environments.</p>
                </div>
            </div>
        </div>


)}

            <div className="container3_FireAndSafetyProduct">
                <div className="row3_FireAndSafetyProduct">
                    <div className="col5_FireAndSafetyProduct">
                        <h3>SEM-SAFE® High-Pressure Water Mist Fire Fighting System</h3>
                     <h4>Efficient and Eco-Friendly Fire Protection Using High-Pressure Water Mist Technology</h4>
                     <h5 onClick={clifire3} style={{cursor:"pointer"}}>Read more {fire3 ? "+" : "-"} </h5>
                    </div>
                    <div className="col6_FireAndSafetyProduct">
                            <Image src="/Images/fire3.png" width={390} height={390} alt="fire3" />
                    </div>
                </div>
            </div>


{fire3 && (


        <div className="cont3_fire_toggle">
            <div className="row3_fire_toggle">
                <div className="col5_fire_toggle">
                            <Image src="/Images/sem.jpg" width={390} height={390} alt="sem" />
                </div>
                <div className="col6_fire_toggle">
                    <h3>SEM-SAFE® High-Pressure Water Mist Fire Fighting System</h3>
                    <p>SEM-SAFE® Water Mist Fire Fighting offers a unique and highly efficient fire suppression method. Using high-pressure pumps, water is atomized into an ultra-fine mist through specially designed nozzles—ensuring rapid cooling and fire control.

One SEM-SAFE® pump unit can support multiple applications, making the system scalable, space-saving, and cost-effective. With a single, easily serviceable unit, expanding or maintaining your fire protection system becomes simpler and more affordable</p>
               <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Quick fire fighting</li>
               <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Less damage</li>
               <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Reduced downtime</li>
               <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />No need for extra installations</li>
                </div>
            </div>
        </div>


)}

            <div className="container4_FireAndSafetyProduct">
                    <div className="col7_FireAndSafetyProduct">
                        <h2>For inquiries, technical assistance, or further information, please contact us</h2>
                        <a href="#">Talk to an expert</a>
                    </div>
                </div>

        </div>
        </>

    )
}