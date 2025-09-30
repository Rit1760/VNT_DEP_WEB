'use client'

import "../../Styles/EMS.css"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
export default function EMS(){
const[ems1,setems1]=useState(false);
const EMScli1 = () =>{
    setems1(!ems1)
    setems2(false)
    setems3(false)
    setems4(false)
    setems5(false)
    setems6(false)
    setems7(false)
    setems8(false)
    setems9(false)
    setems10(false)
    setems11(false)
}


const[ems2,setems2]=useState(false)
const EMScli2 = () => {
    setems2(!ems2)
    setems1(false)
    setems3(false)
    setems4(false)
    setems5(false)
    setems6(false)
    setems7(false)
    setems8(false)
        setems9(false)
    setems10(false)
    setems11(false)
}


const[ems3,setems3]=useState(false)
const EMScli3 = () => {
    setems3(!ems3)
    setems2(false)
    setems1(false)
    setems4(false)
    setems5(false)
    setems6(false)
    setems7(false)
    setems8(false)
        setems9(false)
    setems10(false)
    setems11(false)
}


const[ems4,setems4]=useState(false)
const EMScli4 = () => {
    setems4(!ems4)
        setems2(false)
    setems3(false)
    setems1(false)
    setems5(false)
    setems6(false)
    setems7(false)
    setems8(false)
        setems9(false)
    setems10(false)
    setems11(false)
}

const[ems5,setems5]=useState(false)
const EMScli5 = () => {
    setems5(!ems5)
        setems2(false)
    setems3(false)
    setems4(false)
    setems1(false)
    setems6(false)
    setems7(false)
    setems8(false)
        setems9(false)
    setems10(false)
    setems11(false)
}

const[ems6,setems6]=useState(false)
const EMScli6 = () => {
    setems6(!ems6)
        setems2(false)
    setems3(false)
    setems4(false)
    setems5(false)
    setems1(false)
    setems7(false)
    setems8(false)
        setems9(false)
    setems10(false)
    setems11(false)
}

const[ems7,setems7]=useState(false)
const EMScli7 = () => {
    setems7(!ems7)
        setems2(false)
    setems3(false)
    setems4(false)
    setems5(false)
    setems6(false)
    setems1(false)
    setems8(false)
        setems9(false)
    setems10(false)
    setems11(false)
}

const[ems8,setems8]=useState(false)
const EMScli8 = () => {
    setems8(!ems8)
        setems2(false)
    setems3(false)
    setems4(false)
    setems5(false)
    setems6(false)
    setems7(false)
    setems1(false)
    setems9(false)
    setems10(false)
    setems11(false)
}


const[ems9,setems9]=useState(false)
const EMScli9 = () => {
    setems9(!ems9)
        setems2(false)
    setems3(false)
    setems4(false)
    setems5(false)
    setems6(false)
    setems7(false)
    setems1(false)
    setems10(false)
    setems11(false)
}


const[ems10,setems10]=useState(false)
const EMScli10 = () => {
    setems10(!ems10)
        setems2(false)
    setems3(false)
    setems4(false)
    setems5(false)
    setems6(false)
    setems7(false)
    setems1(false)
    setems9(false)
    setems11(false)
}


const[ems11,setems11]=useState(false)
const EMScli11 = () => {
    setems11(!ems11)
    setems2(false)
    setems3(false)
    setems4(false)
    setems5(false)
    setems6(false)
    setems7(false)
    setems1(false)
    setems9(false)
    setems10(false)
}


    return(
        <>
        <div className="main1_EMS">
            <div className="container1_EMS">
                    <div className="col1_EMS">
                        <h3>EMS</h3>
                    </div>
            </div>
            <div className="container2_EMS">
                <div className="col2_EMS">
             <h2>Why Choose VNT's EMS/DMS Solution?</h2>
             <h3>Powering Smarter Grids with Reliable, Real-Time Energy Management Technology</h3>
             <p>At VNT, we deliver cutting-edge EMS/DMS software designed to streamline power grid operations and enhance decision-making. Our solution integrates seamlessly with SCADA systems, giving operators real-time insights, advanced analytics, and control tools to manage energy flow efficiently. Whether you're optimizing for reliability, safety, or cost, VNT’s technology ensures your grid is always performing at its best.</p>
                </div>
            </div>
            <div className="container3_EMS">
        <div className="row1_EMS">
            <div className="col3_EMS">
                <h4><FontAwesomeIcon icon={faCheck} style={{ width: '20px', height: '20px', color:"#ff6600"}} />  Maximum Power Output</h4>
            </div>
            <div className="col4_EMS">
                <h4><FontAwesomeIcon icon={faCheck} style={{ width: '20px', height: '20px', color:"#ff6600"}} />  System Response Time</h4>
            </div>
            <div className="col5_EMS">
                <h4><FontAwesomeIcon icon={faCheck} style={{ width: '20px', height: '20px', color:"#ff6600"}} />  Operational Uptime</h4>
            </div>
        </div>
            </div>





                        <div className="container4_EMS">
                    <div className="row2_EMS">
                        <div className="col6_EMS">
                            <h3>Key System Capabilities</h3>
                        </div>
                        <div className="col7_EMS">
                            <h4 onClick={EMScli1} style={{cursor:"pointer"}}>Advanced State Estimation (SE) for Real-Time Grid Monitoring <span> {ems1 ? "-":"+"} </span> </h4>
                            {ems1 &&(
                                <p>Ensures real-time visibility of grid status by correcting measurement errors and estimating unknown values — enabling safer, smarter energy system operation.</p>
                            )}
                               <h4 onClick={EMScli2} style={{cursor:"pointer"}}>Load-Flow Calculation for Accurate Power System Analysis <span> {ems2 ? "-":"+"} </span> </h4>
                           {ems2 &&(
                            
                            <p>Analyze voltage, power flow, and grid loading conditions to ensure balanced, reliable, and optimized power distribution across the network.</p>
                           )}
                            
                            <h4 onClick={EMScli3} style={{cursor:"pointer"}}>Contingency Analysis for Predictive Grid Stability <span>  {ems3 ? "-" : "+"}</span> </h4>
                           {ems3 &&(
                               <p>Simulate "what-if" scenarios to predict grid behavior under faults or outages — enabling proactive planning and improved system resilience.</p>
                           )}
                            
                            <h4 onClick={EMScli4} style={{cursor:"pointer"}}>Short Circuit Calculation for Fault Detection and System Protection <span>  {ems4 ? "-": "+"}</span> </h4>
                            {ems4 &&(
                                <p>Analyze fault currents and determine protection settings to prevent equipment damage and enable fast fault isolation during short circuit events.</p>
                            )}
                          
                            <h4 onClick={EMScli5} style={{cursor:"pointer"}}>Optimal Power Flow Calculation for Economic and Secure Grid Operation <span>  {ems5 ? "-" : "+"}</span> </h4>
                            {ems5 &&(
                                <p >Optimize power generation and flow to reduce costs and maintain system security — ensuring efficient and economical grid performance under varying load conditions.</p>
                            )}
                       
                            <h4 onClick={EMScli6} style={{cursor:"pointer"}}>Optimal Capacitor Placement for Voltage Stability and Loss Reduction <span>  {ems6 ? "-" : "+"}</span> </h4>
                            {ems6 &&(
                                <p>Strategically places capacitors to improve voltage levels, minimize energy losses, and enhance overall system efficiency across the distribution network.</p>
                            )}
                          
                            <h4 onClick={EMScli7} style={{cursor:"pointer"}}>Tie Open Point Optimization for Balanced and Efficient Grid Reconfiguration <span>  {ems7 ? "-" : "+"}</span> </h4>
                           {ems7 &&(
                               <p>Optimizes tie switch positions to balance load, reduce losses, and support efficient network reconfiguration during normal and emergency grid conditions.</p>
                           )}
                            
                            <h4 onClick={EMScli8} style={{cursor:"pointer"}}>Volt/Var Optimization for Enhanced Voltage Control and Energy Efficiency <span>  {ems8 ? "-" : "+"}</span> </h4>
                           {ems8 &&(
                               <p>Automatically optimizes voltage and reactive power flow to reduce losses, maintain voltage limits, and enhance overall grid efficiency and power quality.</p>
                           )}
                           <h4  onClick={EMScli9} style={{cursor:"pointer"}}>Restoration Calculation for Fast and Reliable Power Recovery <span>  {ems9 ? "-" : "+"}</span> </h4>
                           {ems9 &&(
                           <p>Calculates optimal switching strategies to restore power quickly and safely after outages — reducing downtime and improving grid resilience.</p>
                           )}
                           <h4 onClick={EMScli10} style={{cursor:"pointer"}}>Automatic Feeder Management for Seamless Load Restoration and Control <span>  {ems10 ? "-" : "+"}</span> </h4>
                           {ems10 &&(
                           <p>Automates feeder fault detection, isolation, and restoration — enabling faster response, reducing manual intervention, and improving service reliability across the distribution network.</p>
                        )}
                           <h4 onClick={EMScli11} style={{cursor:"pointer"}}>FLIR: Fault Location, Isolation, and Restoration for Self-Healing Grids <span>   {ems11 ? "-" : "+"}</span> </h4>
                           {ems11 &&(
                           <p>Automatically detects, isolates, and restores faults in the distribution grid — enabling self-healing, faster recovery, and improved service continuity.</p>
                        )}
                        
                           </div>
                    </div>
                </div>





        </div>
        </>
    )
}


