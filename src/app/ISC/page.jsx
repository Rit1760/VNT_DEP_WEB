'use client'


import "../../Styles/ISC.css"
import { useState } from "react"

export default function ISC(){
   const[isc1,setisc1]=useState(false);
   const cliisc1 = () => {
    setisc1(!isc1)
    setisc2(false)
    setisc3(false)
    setisc4(false)
   }
   

   const[isc2,setisc2]=useState(false);
   const cliisc2 = () => {
    setisc2(!isc2)
    setisc1(false)
    setisc3(false)
    setisc4(false)
   }

   const[isc3,setisc3]=useState(false);
   const cliisc3 =() => {
    setisc3(!isc3)
    setisc1(false)
    setisc2(false)
    setisc4(false)
   }

   const[isc4,setisc4]=useState(false);
   const cliisc4 =() => {
    setisc4(!isc4)
    setisc1(false)
    setisc2(false)
    setisc3(false)
   }


    return(
        <>
        <div className="main1_ISC">
            <div className="container1_ISC">
                <div className="col1_ISC">
                    <h3>International Standards Compliance</h3>
                </div>
            </div>

            <div className="container2_ISC">
                <div className="col2_ISC">
                    <h3>Built on Global Standards. Trusted Worldwide.</h3>
                    <h4>VNT EMS/DMS solutions fully comply with leading international protocols and power system standards to ensure interoperability, safety, and long-term reliability.</h4>
                    <p>At VNT, our EMS/DMS platform is developed in accordance with globally recognized standards such as IEC 61850, IEC 61970/61968 (CIM Model), DNP3, Modbus, and IEEE standards.
This ensures seamless integration with third-party systems, future scalability, and compliance with utility and regulatory requirements. Our solutions are designed for utilities that demand high reliability, data security, and real-time operational efficiency in line with modern energy grid expectations.
Whether you're managing a local distribution grid or a national energy system, VNT’s standards-compliant platform ensures compatibility, interoperability, and confidence — now and into the future.</p>
                </div>
            </div>
            
            <div className="container3_ISC">
                <div className="row1_ISC">
                    <div className="col3_ISC">
                        <h3>Core Features & Performance Metrics</h3>
                    </div>
                    <div className="col4_ISC">
                        <h4 onClick={cliisc1} style={{cursor:"pointer"}}>VNT Achieves IEC 61850 Level A Certification from KEMA DNV-GL<span> {isc1 ? "-": "+"} </span> </h4>
                      {isc1 &&(
                          <p>VNT’s EMS/DMS has been awarded IEC 61850 Level A Certification by KEMA DNV-GL, confirming its global standard compliance and seamless interoperability for smart grid environments.</p>
                      )}
                      
                        <h4 onClick={cliisc2} style={{cursor:"pointer"}}>VNT Achieves IEC 60870-5-101 Level A Master/Slave Certification from KEMA DNV-GL<span>{isc2 ? "-" : "+ "} </span>  </h4>
                       {isc2 && (
                           <p>VNT is certified by KEMA DNV-GL for IEC 60870-5-101 Level A (Master/Slave), ensuring secure, standards-compliant SCADA communication across utility networks.</p>
                       )}
                       
                        <h4 onClick={cliisc3} style={{cursor:"pointer"}}>VNT Achieves IEC 60870-5-104 Level A Master/Slave Certification from KEMA DNV-GL<span> {isc3 ? "-" : "+"} </span> </h4>
                        {isc3 && (
                            <p>VNT’s EMS/DMS platform is KEMA DNV-GL certified for IEC 60870-5-104 Level A (Master/Slave), ensuring secure, IP-based SCADA communication compliant with global utility standards.</p>
                        )}
                       
                        <h4 onClick={cliisc4} style={{cursor:"pointer"}}>ISO 9001:2015 Certified Quality Management System <span> {isc4 ? "-" : "+"} </span> </h4>
                     {isc4 && (
                         <p>VNT is ISO 9001:2015 certified, ensuring internationally recognized quality management practices across all products, processes, and customer interactions.</p>
                     )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

