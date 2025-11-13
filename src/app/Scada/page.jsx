'use client'


import "../../Styles/Scada.css"
import { useState } from "react"

export default function Scada(){
const[sca1,setsca1]=useState(false);
const scacli1 = () =>{
    setsca1(!sca1)
    setsca2(false)
    setsca3(false)
    setsca4(false)
    setsca5(false)
    setsca6(false)
    setsca7(false)
    setsca8(false)
}

const[sca2,setsca2]=useState(false)
const scacli2 = () => {
    setsca2(!sca2)
        setsca1(false)
    setsca3(false)
    setsca4(false)
    setsca5(false)
    setsca6(false)
    setsca7(false)
    setsca8(false)
}

const[sca3,setsca3]=useState(false)
const scacli3 = () => {
    setsca3(!sca3)
        setsca2(false)
    setsca1(false)
    setsca4(false)
    setsca5(false)
    setsca6(false)
    setsca7(false)
    setsca8(false)
}


const[sca4,setsca4]=useState(false)
const scacli4 = () => {
    setsca4(!sca4)
        setsca2(false)
    setsca3(false)
    setsca1(false)
    setsca5(false)
    setsca6(false)
    setsca7(false)
    setsca8(false)
}

const[sca5,setsca5]=useState(false)
const scacli5 = () => {
    setsca5(!sca5)
        setsca2(false)
    setsca3(false)
    setsca4(false)
    setsca1(false)
    setsca6(false)
    setsca7(false)
    setsca8(false)
}

const[sca6,setsca6]=useState(false)
const scacli6 = () => {
    setsca6(!sca6)
        setsca2(false)
    setsca3(false)
    setsca4(false)
    setsca5(false)
    setsca1(false)
    setsca7(false)
    setsca8(false)
}

const[sca7,setsca7]=useState(false)
const scacli7 = () => {
    setsca7(!sca7)
        setsca2(false)
    setsca3(false)
    setsca4(false)
    setsca5(false)
    setsca6(false)
    setsca1(false)
    setsca8(false)
}

const[sca8,setsca8]=useState(false)
const scacli8 = () => {
    setsca8(!sca8)
        setsca2(false)
    setsca3(false)
    setsca4(false)
    setsca5(false)
    setsca6(false)
    setsca7(false)
    setsca1(false)
}



    return(
        <>
        <div className="main1_Scada">
            <div className="container1_Scada">
                    <div className="col1_Scada">
                <h3>VNT SCADA+®</h3>
                    </div>
                </div>
                <div className="container2_Scada">
                    <div className="col2_Scada">
                        <h4>VNT SCADA+® – Power Monitoring & Control SCADA System</h4>
                        <p>VNT SCADA+® is a next-generation SCADA solution for real-time power system monitoring, control, and management. Built on a reliable client-server architecture, it ensures smooth operation for dispatch and control centers. With flexible configuration, broad device compatibility, and full scalability, VNT SCADA+® delivers seamless integration and future-ready performance for grid, substation, and energy distribution systems.</p>
                    </div>
                </div>
                <div className="container3_Scada">
                    <div className="row3_Scada">
                        <div className="col3_Scada">
                            <h3>Key Functions & Feature Highlights of VNT SCADA+®</h3>
                        </div>
                        <div className="col4_Scada">
                            <h4 onClick={scacli1} style={{cursor:"pointer"}}>Client-Server Architecture {sca1 ? "-":"+"} </h4>
                            {sca1 &&(
                                <p>VNT SCADA+® is built on a scalable Client-Server architecture that ensures secure, real-time data communication and centralized system control. This model allows multiple users to monitor and manage operations efficiently across distributed sites.</p>
                            )}
                               <h4 onClick={scacli2} style={{cursor:"pointer"}}>Real-Time Data Acquisition {sca2 ? "-":"+"} </h4>
                           {sca2 &&(
                            
                            <p>VNT SCADA+® offers high-speed real-time data acquisition from field devices, enabling instant monitoring, control, and analysis. This ensures accurate decision-making and rapid response to system events or faults.</p>
                           )}
                            
                            <h4 onClick={scacli3} style={{cursor:"pointer"}}>Intelligent Alarm Management {sca3 ? "-" : "+"} </h4>
                           {sca3 &&(
                               <p>VNT SCADA+® includes intelligent alarm management that prioritizes and filters alerts, helping operators quickly identify critical issues and reduce false alarms for faster, more effective responses.</p>
                           )}
                            
                            <h4 onClick={scacli4} style={{cursor:"pointer"}}>Customizable Dashboards {sca4 ? "-": "+"} </h4>
                            {sca4 &&(
                                <p>VNT SCADA+® features fully customizable dashboards that provide intuitive visualizations of system performance and operational data. Users can tailor layouts, widgets, and data views to match their specific monitoring and control needs.</p>
                            )}
                          
                            <h4 onClick={scacli5} style={{cursor:"pointer"}}>Multi-Protocol Support {sca5 ? "-" : "+"} </h4>
                            {sca5 &&(
                                <p >VNT SCADA+® supports multiple industry-standard communication protocols such as IEC 60870-5-104, Modbus, DNP3, and OPC, ensuring seamless integration with diverse field devices and systems. This flexibility enhances interoperability and future scalability.</p>
                            )}
                            
                            <h4 onClick={scacli6} style={{cursor:"pointer"}}>Advanced Cybersecurity Features {sca6 ? "-" : "+"} </h4>
                            {sca6 &&(
                                <p>VNT SCADA+® is equipped with advanced cybersecurity features including user authentication, role-based access control, encrypted communication, and event logging. These measures ensure system integrity, data protection, and compliance with modern security standards.</p>
                            )}
                          
                            <h4 onClick={scacli7} style={{cursor:"pointer"}}>Remote Access & Monitoring {sca7 ? "-" : "+"} </h4>
                           {sca7 &&(
                               <p>VNT SCADA+® enables secure remote access and monitoring through web and mobile interfaces, allowing operators to supervise and control systems anytime, anywhere. This improves operational efficiency and supports timely decision-making.</p>
                           )}
                            
                            <h4 onClick={scacli8} style={{cursor:"pointer"}}>Redundancy & Failover Support {sca8 ? "-" : "+"} </h4>
                           {sca8 &&(
                               <p>VNT SCADA+® offers built-in redundancy and failover support to ensure continuous system operation during hardware failures or network disruptions. This enhances system reliability, uptime, and resilience in critical environments.</p>
                           )}
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}


