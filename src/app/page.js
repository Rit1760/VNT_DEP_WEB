'use client';

import "../Styles/Home.css";
import { useEffect, useRef , useState} from "react";
import CountUpCard from "@/Components/countUpCard";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmog , faBolt ,  faGlobe ,faHandshake ,faMarsDouble    } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import Head from "next/head";
import ScrollVideo from "@/Components/ScrollVideo";
 import LanguageSelector from "@/Components/LanguageSelector";
 import { useLanguage } from "@/context/LanguageContext";


export default function Home() {
      const { t } = useLanguage();
          const [isVisiblepop, setIsVisiblepop] = useState(false);

      const toggleVisibilitypop = () => {
        setIsVisiblepop(!isVisiblepop);
      };

  const scrollRef = useRef(null);
  const locoScroll = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (locoScroll.current) locoScroll.current.destroy();
    };
  }, []);

  return (
<>
 <LanguageSelector />
<Head>                
  <title>VNT | Empowering India with Smart Energy, Solar & EV Solutions</title>
  <meta
    name="description"
    content="Welcome to VNT – India’s trusted provider of innovative solar energy, EV charging, energy management, and fire & safety solutions. Powering sustainable progress across industries and homes."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="VNT | Smart Energy, Solar & EV Solutions in India" />
  <meta property="og:description" content="VNT delivers cutting-edge solar, EV charging, EMS, and safety solutions for homes, businesses, and industries—enabling a smarter, greener future." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vnt.in/" />
  <meta property="og:site_name" content="VNT" />
  <meta
    name="keywords"
    content="VNT, energy solutions India, solar energy company, EV charging solutions, EMS India, energy management, fire and safety systems, smart infrastructure, renewable energy provider"
  />
</Head>

<div className="main1_Home" >

{/* <div className="cont1_nav" >
  <div className="row1_Nav">
     <Link href="/AC_WALLBOX" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-residential">
      <h4>{t.navitem1}</h4>
    </div>
    </Link>
    <Link href="/DC_FAST" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-public">
      <h4>{t.navitem2}</h4>
    </div>
     </Link>
    <Link href="/CMS" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-cms">
      <h4>{t.navitem3}</h4>
    </div>
     </Link>
  </div>
</div> */}

                <div className="cont1_nav" >
          <div className="row1_Nav">
            <Link href="/" style={{ whiteSpace: "nowrap", textDecoration: "None" }}>
              <div className="nav-item nav-residential">
                        <Image
          src="/Images/Residential.png"
          alt="Residential"
          fill
          sizes="20vw"
          style={{ objectFit: "contain" }}
        />
                <h4>Home</h4>
              </div>
            </Link>
            <Link href="/DC_FAST" style={{ whiteSpace: "nowrap", textDecoration: "None", cursor: "pointer" }}>
              <div className="nav-item nav-public">
                        <Image
          src="/Images/public-c.png"
          alt="Public"
          fill
          sizes="20vw"
          style={{ objectFit: "contain" }}
        />
                <h4>Public</h4>
              </div>
            </Link>
            <Link href="/CMS" style={{ whiteSpace: "nowrap", textDecoration: "None" }}>
              <div className="nav-item nav-cms">
                        <Image
          src="/Images/sidenav.png"
          alt="CMS"
          fill
          sizes="20vw"
          style={{ objectFit: "contain" }}
        />
                <h4>CMS/APP</h4>
              </div>
            </Link>
          </div>
        </div>

{/* end nav for ev */}
  <div className="container1_Home" >
<video autoPlay loop muted src="/Videos/vnt-home3.mp4" />
  </div>
  <div className="container8_Home" >
    <div className="row13_Home">
      <div className="col17_Home"onMouseOver={toggleVisibilitypop}  >
        <h4>{t.heading}</h4>
        <h2>{t.subheading1}</h2>
      </div>
    </div>
    <div className="row14_Home" data-scroll data-scroll-speed="2">
      <div className="col18_Home">
        <h3><FontAwesomeIcon icon={faSmog}  /> <CountUpCard end={548976} /> </h3>
        <h2>{t.sec1subH}</h2>
      </div>
      <div className="col19_Home">
        <h3> <FontAwesomeIcon icon={faBolt}  />  <CountUpCard end={94} /> </h3>
        <h2>{t.sec1subH2}</h2>
      </div>
      <div className="col20_Home">
        <h3> <FontAwesomeIcon icon={faGlobe}  />  <CountUpCard end={190} /> </h3>
        <h2>{t.sec1subH3}</h2>
      </div>
    </div>
    <div className="row15_Home">
      <div className="col21_Home">
        <h3> <FontAwesomeIcon icon={faHandshake}/>  <CountUpCard end={80} /> </h3>
        <h2>{t.sec1subH4}</h2>
      </div>
      <div className="col22_Home">
        <h3> <FontAwesomeIcon icon={faMarsDouble} />  <CountUpCard end={200} /> </h3>
        <h2>{t.sec1subH5}</h2>
      </div>
    </div>
  </div>
      <ScrollVideo
        videoSrc="/videos/vnt-ani-home.mp4"
      />
  <div className="container2_Home">
    <div className="row2_Home">
      <div className="col1_Home"  >
    <h2
      style={{
        width: "70%",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: "'Lato', sans-serif",
        fontSize: "50px",
        fontWeight: 400,
        lineHeight: "1.4em",
        letterSpacing: "1px",
        color:"#303236"
      }} 
    >{t.col1homeh22}
      {/* {renderWords()} */}
    </h2>
      </div>
    </div>
  </div>

 {/* <div className="container3_Home">
      <div className="row3_Home">
        <div className="row3_Home_1 bg-image1" >
            <Image 
    src="/Images/ResedentialEVCharger.png"
    alt="EV Charger"
    fill
    className="bgImage"
  />
       <h2 >{t.row3_Home_1h2}</h2>
<p >{t.row3_Home_1p}</p>
        </div>
        <div className="row3_Home_2">
          <div className="bg-image2" >
         <h2 >{t.row3_Home_2h2}</h2>
<p>{t.row3_Home_2p}</p>

          </div>
          <div className="bg-image3">
         <h2 >CMS / App</h2>
<p >{t.bgimage3p}</p>

          </div>
        </div>
      </div>
    </div> */}
<div className="container3_Home">
  <div className="row3_Home">

    {/* LEFT IMAGE SECTION */}
    <div className="row3_Home_1 imageWrapper">
      <Image 
        src="/Images/ResedentialEVCharger.png"
        alt="EV Charger"
        fill
        className="bgImage"
      />

      <h2>{t.row3_Home_1h2}</h2>
      <p>{t.row3_Home_1p}</p>
    </div>

    {/* RIGHT SIDE SECTION */}
    <div className="row3_Home_2">

      <div className="imageWrapperSmall">
        <Image 
          src="/Images/DC-Main.png"
          alt="EV DC"
          fill
          className="bgImage"
        />

        <h2>{t.row3_Home_2h2}</h2>
        <p>{t.row3_Home_2p}</p>
      </div>

      <div className="imageWrapperSmall">
        <Image 
          src="/Images/CMS_Home (3).png"
          alt="CMS"
          fill
          className="bgImage"
        />

        <h2>CMS / App</h2>
        <p>{t.bgimage3p}</p>
      </div>

    </div>
  </div>
</div>
    
{/* section four end  */}
<div className="container4_Home">
  <div className="row4_Home">
    <div className="col3_Home">
      <h2>{t.cont4col3}</h2>
    </div>
  </div>
</div>
<div className="container5_Home">
  <div className="row5_Home">
    <div className="col4_Home"></div>
    <div className="col5_Home"></div>
  </div>
  <div className="row6_Home">
    <div className="col6_Home"></div>
    <div className="col7_Home"></div>
  </div>
  <div className="row7_Home">
    <div className="col8_Home"></div>
    <div className="col9_Home"></div>
  </div>
  <div className="row9_Home">
    <div className="col10_Home"></div>
    <div className="col11_Home"></div>
  </div>
</div>
<div className="container6_Home">
  <Image 
    src="/Images/decades.png"
    alt="decades"
    fill
    priority={false}
    sizes="100vw"
  />
</div>
<div className="container7_Home">
  <div className="row11_Home">
    <div className="col12_Home">
      <h3>{t.cont7col12}</h3>
      <h2>{t.cont7col12}</h2>
    </div>
  </div>
  <div className="row12_Home">
    <div className="col13_Home"></div>
    <div className="col14_Home"></div>
    <div className="col15_Home"></div>
    <div className="col16_Home"></div>
  </div>
</div>
{/* <div className="container9_Home">
<video autoPlay loop muted src="/Videos/vnt-home2.MP4"/>
</div> */}
<div className="container10_Home">
  <div className="row16_Home">
    <div className="col23_Home">
      <h3>{t.cont10col23}</h3>
      <h2>{t.cont10col231}</h2>
    </div>
  </div>
</div>
<div className="container11_Home">
  <div className="row17_Home">
    <div className="col24_Home">
         <Image src="/Images/Cguide.png" width={410} height={296} alt="Cguide" />
      <h3>{t.cont11col241}</h3>
  <p>
 {t.cont11col242}
</p>
    </div>
    <div className="col25_Home">
          <Image src="/Images/Cjournal.png" width={410} height={296} alt="Cjournal" />
      <h3>{t.col25homeh3}</h3>
      <p>
 {t.col25homep}
</p>
    </div>
    <div className="col26_Home">
      <Image src="/Images/Cnewsroom.png" width={410} height={296} alt="Cnewsroom" />
      <h3>{t.col26homeh3}</h3>
      <p>
 {t.col26homep}</p>
    </div>
  </div>
</div>
      <div className="container30_Home" >
        <div className="row23_Home">
          <h2>{t.row23homeh21}</h2>
        </div>
        <div className="row24_Home">
          <div className="col36_Home">
            <Image src="/Images/ev_Home11.jpg" height={300} width={600} alt="Home11" />
            <h4>{t.col36homeh4}</h4>
            <h2>{t.col36homeh2}</h2>
            <p>{t.col36homep}</p>
          </div>
          <div className="col37_Home">
            <Image src="/Images/ev_Home22.jpg" height={300} width={600} alt="Home22" />
            <h4>{t.col37homeh4}</h4>
            <h2>{t.col37homeh2}</h2>
            <p>{t.col37homep}</p>
          </div>
        </div>
        <div className="row25_Home">
          <div className="col38_Home">
            <Link href="https://vnt.in/contact-us/">{t.col38homea}</Link>
          </div>
        </div>
      </div>
</div>
</>
  );
}