"use client"

import "../../Styles/OurScope.css"
import { useState } from "react"

export default function OurScope(){

    const[accord1,setaccord1]=useState(false);
    const cliaccord1 = () =>{
        setaccord1(!accord1);
         setaccord2(false);
         setaccord3(false);
         setaccord4(false);
         setaccord5(false);
         setaccord6(false);
    }

    const[accord2 , setaccord2]=useState(false);
    const cliaccord2 = () => {
        setaccord2(!accord2);
        setaccord1(false)
        setaccord3(false)
        setaccord4(false)
        setaccord5(false)
        setaccord6(false)
    }
    const[accord3,setaccord3]=useState(false);
    const cliaccord3 = () => {
        setaccord3(!accord3);
        setaccord1(false)
        setaccord2(false)
        setaccord4(false)
        setaccord5(false)
        setaccord6(false)
    }
    const[accord4 , setaccord4] = useState(false);
    const cliaccord4 = () => {
        setaccord4(!accord4);
        setaccord1(false)
        setaccord2(false)
        setaccord3(false)
        setaccord5(false)
        setaccord6(false)
    }
    const[accord5 , setaccord5] = useState(false);
    const cliaccord5 = () => {
        setaccord5(!accord5);
        setaccord1(false)
        setaccord2(false)
        setaccord3(false)
        setaccord4(false)
        setaccord6(false)
    }
        const[accord6 , setaccord6] = useState(false);
    const cliaccord6 = () => {
        setaccord6(!accord6);

        setaccord1(false)
        setaccord2(false)
        setaccord3(false)
        setaccord4(false)
        setaccord5(false)

    }
    return(
        <>
        
        
        <div className="main1_OurScope">
            <div className="container1_OurScope">
                <div className="col1_OurScope">
                    <h3>Our Scope</h3>
                </div>
            </div>
            <div className="container2_OurScope">
                <div className="col2_OurScope">
                    <h3>VNT Our Scope</h3>
                    <p>VNT CleanWatts specializes in energy management solutions for Power Transmission and Distribution applications. As a trusted system integrator, we provide comprehensive solutions, systems, and products tailored to meet diverse energy needs.</p>
                </div>
            </div>
            <div className="container3_OurScope">
                <div className="col3_OurScope">
                    <h3>Our expertise and qualification extends to the followings:</h3>
                </div>
            </div>
            
            <div className="container4_OurScope">
                <div className="row1_OurScope">
                    <div className="col4_OurScope">
                        <h4  onClick={cliaccord1} style={{cursor:"pointer"}} >Software Research and Development <span style={{marginLeft:"140px" ,padding:"10px 10px",borderRadius:"10px"}}> {accord1 ? "-" : "+"} </span></h4>
                        {accord1 &&(
                            <p>At VNT , we are at the forefront of innovation, delivering cutting-edge software solutions that power our core product lines in Solar Energy, Electric Vehicles (EV), Telecom, and Fire Safety Systems. Our dedicated Software Research and Development (R&D) team works tirelessly to bring intelligence, automation, and reliability to every solution we offer.</p>
                        )}
                    </div>
                    <div className="col5_OurScope">
                        <h4 onClick={cliaccord2} style={{cursor:"pointer"}}>Hardware Design and Development<span style={{marginLeft:"140px",padding:"10px 10px",borderRadius:"10px"}} >{accord2 ? "-" : "+"} </span> </h4>
                        {accord2 && (
                            <p>At VNT , hardware is at the heart of every innovation we bring to the table. Our Hardware Design and Development division is responsible for creating robust, reliable, and high-performance products that serve critical industries such as Solar Energy, Electric Vehicles, Telecom, and Fire Safety Systems. With a focus on precision engineering and cutting-edge technology, we deliver end-to-end hardware solutions—from initial concept design to prototyping, testing, and final production</p>
                        )}
                    </div>
                    <div className="col6_OurScope">
                     <h4 onClick={cliaccord3} style={{cursor:"pointer"}}>Manufacturing & Commissioning Services <span style={{marginLeft:"140px",padding:"10px 10px",borderRadius:"10px"}} > {accord3 ? "-" : "+"} </span> </h4>
                    {accord3 &&(
                        <p>At VNT, we offer comprehensive end-to-end solutions that go beyond design and development. Our scope includes in-house manufacturing, precise system integration, thorough testing, and complete installation & commissioning services, followed by a seamless handing-over process to the client.
We ensure that every product and system delivered is fully functional, field-tested, and ready for deployment — meeting the highest quality and safety standards.</p>
                    )}
                    </div>
                    <div className="col7_OurScope">
                        <h4 onClick={cliaccord4} style={{cursor:"pointer"}} >Maintenance and Upgrades <span style={{marginLeft:"140px",padding:"10px 10px",borderRadius:"10px"}} > {accord4 ? "-": "+"} </span> </h4>
                       {accord4 && (
                           <p>At VNT, our responsibility doesn't end with commissioning — it begins a new phase of ensuring continued performance, safety, and efficiency of the systems we deliver. Through our Maintenance and Upgrade services, we help clients maximize asset lifespan, reduce downtime, and stay updated with evolving technologies.
We offer both preventive and corrective maintenance as well as hardware & software upgrade solutions tailored to critical sectors like Solar, EV, Telecom, and Fire Safety.</p>
                        )}
                    </div>
                    <div className="col8_OurScope">
                        <h4 onClick={cliaccord5} style={{cursor:"pointer"}}>Project management <span style={{marginLeft:"140px",padding:"10px 10px",borderRadius:"10px"}} > {accord5 ? "-":"+"} </span></h4>
                       {accord5 && (
                           <p>At VNT , we don’t just deliver products — we deliver complete, turnkey projects with precision, discipline, and accountability. Our Project Management approach ensures that every assignment — whether in Solar, EV Infrastructure, Telecom, or Fire Safety — is completed on time, within budget, and as per specifications.
From concept to commissioning, we take full ownership of the project lifecycle, ensuring seamless coordination between teams, vendors, and clients.</p>
                        )}
                    </div>
                    <div className="col9_OurScope"> 
                    <h4 onClick={cliaccord6} style={{cursor:"pointer"}}>Consultation <span style={{marginLeft:"140px",padding:"10px 10px",borderRadius:"10px"}} > {accord6 ? "-" : "+"}</span> </h4>
                       {accord6 && (
                           <p>At VNT, we don’t just build systems — we guide, advise, and strategize with our clients to help them make informed technical decisions. Our Consultation Services are designed to support organizations at every stage — from initial concept and feasibility to design, compliance, and implementation.
We bring deep domain expertise in Solar Energy, Electric Vehicles (EV), Telecom Infrastructure, and Fire Safety Systems, enabling businesses to plan effectively and reduce risks.</p>
                        )}
                    </div>
                </div>
            </div>


{/* next section for website  */}

            <div className="container5_Ourscope">
<div className="row2_ourscope">
    
</div>
            </div>

            {/* end section for website  */}
        </div>

        </>
    )
}
