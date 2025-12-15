
 'use client';
import "../../Styles/CMS.css"
import Image from "next/image" 
import Link from "next/link"
 import LanguageSelector from "@/Components/LanguageSelector";
 import { useLanguage } from "@/context/LanguageContext";

export default function CMS(){
  const { t } = useLanguage();


    return(  
        <>
         <LanguageSelector />
        <div className="main1_CMS">

{/* <div className="cont1_nav" >
  <div className="row1_Nav">
     <Link href="/" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-residential">
      <h4>{t.navitemh4}</h4>
    </div>
    </Link>
    <Link href="/DC_FAST" style={{whiteSpace:"nowrap" , textDecoration:"None",cursor:"pointer"}}>
    <div className="nav-item nav-public">
      <h4>{t.navpublic}</h4>
    </div> 
     </Link>
    <Link href="/AC_WALLBOX" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-cms">
      <h4>{t.navcms}</h4>
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
          style={{ objectFit: "cover" }}
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
          style={{ objectFit: "cover" }}
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
          style={{ objectFit: "cover" }}
        />
                <h4>CMS/APP</h4>
              </div>
            </Link>
          </div>
        </div>


            <div className="container1_CMS">
                <div className="row1_CMS">
                    <div className="col1_CMS">
                        <Image src="/Images/eventio.png" width={400} height={140} alt="eventio"/>
<h2> {t.col1cmsh2}</h2>
<h3>{t.col1cmsh3}</h3>
                    </div>
                    <div className="col2_CMS">
<Image src={"/Images/Laptop.png"} width={800} height={600} alt="Laptop"/>
                    </div>
                </div>
            </div>
            <div className="container2_CMS">
                <div className="col3_CMS">
                    <h2>{t.col3cmsh2}</h2>
                    <p>{t.col3cmsp}</p>
                </div>
            </div>
            <div className="container3_CMS">
                <div className="row2_CMS">
                    <div className="col4_CMS">
                <Image src="/Images/cmsimg6.png" width={280} height={200} alt="cmsimg6"/>
<ul>
    <li>{t.col4li1}</li>
    <li> {t.col4li2}</li>
</ul>
      
                    </div>
                    <div className="col5_CMS">
                <Image src="/Images/cmsimg5.png" width={280} height={200} alt="cmsimg5"/>
<ul>
    <li>{t.col5li1}</li>
    <li>{t.col5li2}</li>
</ul>
                    </div>
                </div>
                <div className="row3_CMS">
                    <div className="col6_CMS">
                <Image src="/Images/cmsimg3.png" width={280} height={200} alt="cmsimg3"/>
                        <ul>
    <li>{t.col6li1}</li>
    <li>{t.col6li2}</li>
</ul>
                    </div>
                    <div className="col7_CMS">
                <Image src="/Images/cmsimg4.png" width={280} height={200} alt="cmsimg4"/>
                        <ul>
    <li>{t.col7li1}</li>
    <li>{t.col7li2}</li>
</ul>
                    </div>
                </div>
                <div className="row4_CMS">
                    <div className="col8_CMS">
                <Image src="/Images/cmsimg2.png" width={280} height={200} alt="cmsimg2"/>
                        <ul>
    <li>{t.col8li1}</li>
    <li>{t.col8li2}</li>
</ul>
                    </div>
                    <div className="col9_CMS">
                <Image src="/Images/cmsimg1.png" width={280} height={200} alt="cmsimg1"/>
                        <ul>
    <li>{t.col9li1}</li>
    <li>{t.col9li2}</li>
</ul>
                    </div>
                </div>
            </div>
            <div className="container4_CMS">
                <div className="row5_CMS">
                    <div className="col10_CMS">
                        <h2>{t.col10h2}</h2>
                    </div>
                    <div className="col11_CMS">
                        <Image src="/Images/app.png" width={300} height={100} alt="app"/><br/>
                        <Image src="/Images/app2.png" width={300} height={100} alt="app"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



