'use client'

import "../../Styles/EVproduct.css"
import Image from "next/image"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'




export default function SolarProduct(){
    const[set1ev , togset1ev ] = useState(false);
    const[set2ev  , togset2ev ] = useState(false);
    const[set3ev  , togset3ev ] = useState(false);
    const[set4ev  , togset4ev ] = useState(false);
    const[set5ev  , togset5ev ] = useState(false);
    const[set6ev  , togset6ev ] = useState(false);

    const cliset1ev  = () =>{
        togset1ev (!set1ev )
    }
        const cliset2ev  = () =>{
        togset2ev (!set2ev )
    }
            const cliset3ev  = () =>{
                
        togset3ev (!set3ev )
    }
                const cliset4ev  = () =>{
        togset4ev (!set4ev )
    }
                    const cliset5ev  = () =>{
        togset5ev (!set5ev )
    }
                    const cliset6ev  = () =>{
        togset6ev (!set6ev )
    }
    return(
        <>
        <div className="main1_EVproduct">
            <div className="container1_EVproduct">
                <div className="row1_EVproduct">
                    <div className="col1_EVproduct">
                        <h4>EV Products</h4>
                        <h3>Driving Innovation with Clean and Sustainable EV Solutions</h3>
                    </div>
                </div>
            </div>

            <div className="container2_EVproduct">
                <div className="row2_EVproduct">
                    <div className="col2_EVproduct">
                        <h3>DC Fast Charger 60kW-360kW</h3>
                       <h4>Efficient and Reliable DC Fast Chargers: 60kW to 360kW Range</h4>
                        <h5 onClick={cliset1ev } style={{cursor:"pointer"}}>Read More {set1ev  ? "-" :"+"} </h5>
                    </div>
                    <div className="col3_EVproduct">
                        <Image src="/Images/dcfast.png" width={390} height={390} alt="scb" />
                    </div>
                </div>


  </div>
{set1ev  &&(
            <div className="cont2_EVproduct_toggle">
                <div className="row2_EVproduct_toggle">
                    <div className="col1_EVproduct_toggle">
                        <Image src="/Images/scb2.png" width={390} height={390} alt="scb2" />
                    </div>
                    <div className="col2_EVproduct_toggle">
                        <h3>DC Fast Charger 60kW-360kW</h3>
                        <p>Revolutionize your EV charging experience with our advanced DC Fast Chargers ranging from 60kW to 360kW. Engineered for rapid, efficient, and reliable charging, these chargers are perfect for commercial use, highway stations, and fleet operations.</p>
                   <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />High power output ranging from 60kW to 360kW for rapid EV charging</li>
                   <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}}  />Compatible with multiple EV brands and models using CCS and CHAdeMO connectors</li>
                   <li><FontAwesomeIcon icon={faCheck}  width={50} height={50}  style={{color:"#ff6600"}} /> Advanced safety protections including over-voltage, over-current, and temperature monitoring</li>
                   <li><FontAwesomeIcon icon={faCheck}  width={50} height={50}  style={{color:"#ff6600"}} />User-friendly touchscreen interface for easy operation and real-time status updates</li>
                    </div>
                </div>
            </div>
)}




          
            <div className="container3_EVproduct">
                <div className="row3_EVproduct">
                    <div className="col4_EVproduct">
                        <Image src="/Images/acwallbox.png" width={390} height={390} alt="acwallbox" />
                    </div>
                    <div className="col5_EVproduct">
                        <h3>AC Wallbox Charger 22kw</h3>
                       <h4>Compact and Efficient AC Wallbox Chargers - 22kW</h4>
                        <h5 onClick={cliset2ev } style={{cursor:"pointer"}} >Read more {set2ev  ? "-" :"+"}</h5>
                    </div>
                </div>
            </div>


{set2ev  &&(

        <div className="cont3_EVproduct_toggle">
            <div className="row3_EVproduct_toggle">
                <div className="col3_EVproduct_toggle">
                        <Image src="/Images/scb2.png" width={390} height={390} alt="scb2" />
                </div>
                
                <div className="col4_EVproduct_toggle">
                    <h3>String Monitoring Box</h3>
                    <p>Our String Monitoring Box is an essential component for efficient solar power system management. It provides real-time monitoring and protection for each string of solar panels, ensuring optimal performance and safety.</p>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50} style={{color:"#ff6600"}}  /> Continuously monitors voltage, current, and temperature of each solar string</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Quickly detects and isolates faults like short circuits, open circuits, or shading issues</li>
                <li><FontAwesomeIcon icon={faCheck}  width={50} height={50}  style={{color:"#ff6600"}} />Enhances overall system reliability and prolongs the lifespan of solar panels</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Easy integration with solar inverters and monitoring software for centralized control</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Compact, durable design with IP65 rating for outdoor installation</li>
                </div>
            </div>
        </div>

)}


            <div className="container4_EVproduct">
                <div className="row4_EVproduct">
                    <div className="col6_EVproduct">
                  <h3>DC WALL BOX CHARGER  30kW/40kW</h3>
                  <h4>Efficient DC Wall Box Chargers with 30kW and 40kW Output</h4>
                  <h5 onClick={cliset3ev } style={{cursor:"pointer"}} >Read more {set3ev  ? "-" :"+"}</h5>
                    </div>
                    <div className="col7_EVproduct">
                        <Image src="/Images/dcwallbox.png" width={390} height={390} alt="dcwallbox" />
                    </div>
                </div>
            </div>

{set3ev  &&(


        <div className="cont4_EVproduct_toggle">
            <div className="row4_EVproduct_toggle">
                <div className="col6_EVproduct_toggle">
                        <Image src="/Images/sdp2.jpg" width={390} height={390} alt="sdp2" />
                </div>
                <div className="col7_EVproduct_toggle">
                    <h3>DC WALL BOX CHARGER 30kW/40kW</h3>
                    <p>Our DC Wall Box Charger (30kW/40kW) is designed for fast, reliable electric vehicle charging in commercial and residential spaces. Engineered with advanced safety features and user-friendly design, it delivers efficient charging while ensuring maximum protection for your EV.</p>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50} style={{color:"#ff6600"}} />High-power DC fast charging at 30kW or 40kW for quick turnaround</li>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Compact wall-mounted design suitable for garages, parking lots, and workplaces</li>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Robust construction with weatherproof and vandal-resistant housing</li>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Intelligent communication protocols supporting OCPP and other industry standards</li>
                    <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Multiple safety protections: overcurrent, overvoltage, short circuit, and temperature monitoring</li>
                </div>
            </div>
        </div>

    
)}


            <div className="container5_EVproduct">
                <div className="row5_EVproduct">
                    <div className="col8_EVproduct">
                        <Image src="/Images/acwallbox2.png" width={390} height={390} alt="smp" />
                    </div>
                    <div className="col9_EVproduct">
                    <h3>AC Wallbox EV Charger - 7.4kW</h3>
                    <h4>Reliable 7.4kW AC Wallbox EV Charger for Convenient Charging</h4>
                    <h5 onClick={cliset4ev } style={{cursor:"pointer"}}>Read more {set4ev  ? "-" :"+"} </h5>
                    </div>
                </div>
            </div>


{set4ev  &&(

        <div className="cont5_EVproduct_toggle">
            <div className="row5_EVproduct_toggle">
                <div className="col8_EVproduct_toggle">
                        <Image src="/Images/smp2.jpg" width={390} height={390} alt="smp2" />
                </div>
                <div className="col9_EVproduct_toggle">
                    <h3>AC Wallbox EV Charger - 7.4kW</h3>
                    <p>The AC Wallbox EV Charger – 7.4kW is an ideal home and small commercial charging solution, designed for efficiency, safety, and ease of use. Its compact form factor and reliable performance make it perfect for everyday EV charging needs.</p>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> 7.4kW power output, ideal for overnight home charging</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Compact wall-mounted design, space-saving aur aesthetically pleasing</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Easy to use interface with LED status indicators</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} /> Compatible with most electric vehicles supporting Type 2 connector</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Weather-resistant casing (IP54/IP65 rating) for indoor & outdoor use</li>
                </div>
            </div>
        </div>
        
    
)}







            <div className="container7_EVproduct">
                <div className="row7_EVproduct">
                    <div className="col11_EVproduct">
                  <h3>Bharat ACOO1 EV Charger - 3.3kW</h3>
                  <h4>Single Output Bharat Standard AC Charger</h4>
                  <h5 onClick={cliset5ev } style={{cursor:"pointer"}} >Read more {set3ev  ? "-" :"+"}</h5>
                    </div>
                    <div className="col12_EVproduct">
                        <Image src="/Images/dcwallbox.png" width={390} height={390} alt="dcwallbox" />
                    </div>
                </div>
            </div>




{set5ev  &&(

        <div className="cont5_EVproduct_toggle">
            <div className="row5_EVproduct_toggle">
                <div className="col8_EVproduct_toggle">
                        <Image src="/Images/smp2.png" width={390} height={390} alt="smp2" />
                </div>
                <div className="col9_EVproduct_toggle">
                  
                  <h3>Bharat ACOO1 EV Charger - 3.3kW</h3>
                   <p>The Bharat AC001 EV Charger is a government-standard single-phase AC charging solution, ideal for slow charging electric vehicles in residential, commercial, or institutional setups. Built to comply with Bharat EV specifications, it supports secure, efficient, and reliable charging for a wide range of electric vehicles.</p>
                
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Supports up to 3.3kW AC charging (single output)</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Compliant with Bharat AC001 charging standard</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Designed for 230V ±10%, 15A input supply</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Wall-mounted or pedestal installation options</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />RFID authentication for controlled access</li>
                </div>
            </div>
        </div>
        
    
)}





            <div className="container8_EVproduct">
                <div className="row8_EVproduct">
                    <div className="col13_EVproduct">
                        <Image src="/Images/acwallbox2.png" width={390} height={390} alt="acwallbox2" />
                    </div>
                    <div className="col14_EVproduct">
                    <h3>BHARAT AC001 EV Charger 3.3kW*3</h3>
                    <h4>Triple Output Bharat Standard AC Charger</h4>
                    <h5 onClick={cliset6ev } style={{cursor:"pointer"}}>Read more {set4ev  ? "-" :"+"} </h5>
                    </div>
                </div>
            </div>


{set6ev  &&(

        <div className="cont5_EVproduct_toggle">
            <div className="row5_EVproduct_toggle">
                <div className="col8_EVproduct_toggle">
                        <Image src="/Images/smp2.png" width={390} height={390} alt="smp2" />
                </div>
                <div className="col9_EVproduct_toggle">
                    <h3>BHARAT AC001 EV Charger 3.3kW*3</h3>
                 <p>The Bharat AC001 3.3kW × 3 EV Charger is a public/commercial-grade AC charging solution designed to support simultaneous charging of three electric vehicles. Developed as per Government of India’s Bharat EV standards, it is ideal for fleet operators, commercial parking, residential societies, and institutional setups.</p>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Provides three independent 3.3kW outputs for simultaneous EV charging</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Complies with Bharat AC001 specifications</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Input: Three-phase 415V AC, 50Hz</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />Built-in energy metering and billing support</li>
                <li><FontAwesomeIcon icon={faCheck} width={50} height={50}  style={{color:"#ff6600"}} />IP54 rated weatherproof enclosure</li>
                </div>
            </div>
        </div>
        
    
)}


            <div className="container6_EVproduct">
                    <div className="col10_EVproduct">
                        <h2>For inquiries, technical assistance, or further information, please contact us</h2>
                        <a href="#">Talk to an expert</a>
                    </div>
                </div>
        </div>
        </>
    )
}

