import "../../Styles/CMS.css"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import EVHOME from "@/Components/EVHome"
export default function CMS(){
    return(
        <>

<Head>                
  <title>Charging Management System | VNT - Advanced EV Charging Solutions</title>

  <meta
    name="description"
    content="Discover VNT's Charging Management System (CMS) offering smart, scalable, and efficient electric vehicle charging solutions for residential, commercial, and industrial sectors across India."
  />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="VNT | Expert Charging Management System Solutions" />
  <meta property="og:description" content="VNT provides innovative Charging Management Systems that optimize electric vehicle charging, enhance user experience, and support sustainable mobility." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vnt.in/solutions/CMS/" />
  <meta property="og:site_name" content="VNT" />

  <meta
    name="keywords"
    content="VNT, charging management system, CMS solutions, EV charging management, electric vehicle infrastructure, smart charging system, scalable EV chargers, sustainable transportation India"
  />
</Head>


        <div className="main1_CMS">
<EVHOME />
{/* <div className="cont1_nav">
  <div className="row1_Nav">
     <Link href="/AC_WALLBOX" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-residential">
      <h4>Residential</h4>
    </div>
    </Link>
    <Link href="/DC_FAST" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-public">
      <h4>Public</h4>
    </div>
     </Link>

    <Link href="/CMS" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-cms">
      <h4>CMS/APP</h4>
    </div>
     </Link>

  </div>
</div> */}


            <div className="container1_CMS">
            </div>
            <div className="container2_CMS">
                <div className="row2_CMS">
                    <div className="col1_CMS">
                        <h2>VNT charging management system</h2>
                        <p>Always-ready accessibility for users. Easy management and control for network operators. One upgraded Pulsar charger designed especially for shared spaces.</p>
                    </div>                    
                </div>
            </div>
            <div className="container3_CMS">
                <div className="row3_CMS">
                    <div className="col2_CMS">
                        <h3>Why VNT?</h3>
                        <h4>Reliable</h4>
                        <p>Enhanced robustness for high uptime, without interruption.</p>
                    </div>
                    <div className="col3_CMS">
<Image src="/Images/CMS2.jpg" width={700} height={600} alt="cms2"/>
                    </div>
                </div>
            </div>
            <div className="container4_CMS">
                <div className="row4_CMS">
                    <div className="col4_CMS">
                        <h3>Energy Management</h3>
                        <h5>Dynamic Load Management</h5>
                        <p>Automatically distribute your building's available power between up to 50 connected AC chargers on a single circuit.<br/> You can add more chargers anytime.<br/> No expensive infrastructure upgrades. No peak overload.</p>
                    </div>
                    <div className="col5_CMS">
                        <Image src="/Images/cms3.png" width={900} height={800} alt="cms3" />
                    </div>
                </div>
            </div>
            <div className="container5_cms">
                
            </div>

            <div className="container6_CMS">
                <div className="col6_CMS">
                    <h3>Business EV Charging</h3>
                    <h5>See how Pulsar Pro is part of a complete solution in shared spaces.</h5>
                    <button type="submit">Find Out More</button>
                </div>
            </div>
                        <div className="container7_CMS">
                            <div className="row5_CMS">
                <div className="col7_CMS">
                    <h5>Installers and Operators</h5>
                    <h2>What's in it for you?</h2>
                    <h3>Faster Installation</h3>
                    <p>Backplate design makes it easier to install</p>
                    <h3>Remote Management</h3>
                    <p>OCPP compatibility for charger management, payments, and more.</p>
                    <h3>Improved Service & Maintenance</h3>
                    <p>New Eiffel Pro Pedestal available with dual cable management</p>
                    <h3>Cost Optimization</h3>
                    <p>Upgrade to Dynamic Power Sharing to distribute the available energy dynamically between up to 50 chargers, resulting in more efficiency and lower costs.</p>
                </div>
                <div className="col8_CMS">
                    <Image src="/Images/CMS5.jpg" width={700} height={700} alt="cms5"/>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}





