'use client';

import "../Styles/IcoHeader.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


export default function IcoHeader(){
     const iconRef1 = useRef(null);
     const iconRef2 = useRef(null);
     const iconRef3 = useRef(null);


       useGSAP(() => {
const tl = gsap.timeline({ repeat: -1 });

tl.to(iconRef1.current, { 
    y: -20, 
    duration: 0.5, 
    ease: "power1.inOut" 
  })
  .to(iconRef2.current, { 
    y: -20, 
    duration: 0.5, 
    ease: "power1.inOut" 
  }, "+=0.2") 
  .to(iconRef3.current, { 
    y: -20, 
    duration: 0.5, 
    ease: "power1.inOut" 
  }, "+=0.2")
  .to([iconRef1.current, iconRef2.current, iconRef3.current], { 
    y: 0, 
    duration: 0.5, 
    ease: "power1.inOut" 
  });
  }, []);
    return(
        <>
        <div className="main1_IcoHeader">
            <div className="container1_IcoHeader">
                <div className="row1_IcoHeader">
                    <div className="col1_IcoHeader">
                      <a href={`https://wa.me/7290003370?text=hi`}>
       <FontAwesomeIcon ref={iconRef1}
          icon={faWhatsapp}
          style={{ color: "green", cursor: "pointer" , fontSize:"30px" , paddingBottom:'10px',width:'40px',height:'40px', }}
        />
</a>
                    </div>
                    <div className="col2_IcoHeader">
                     <a href={`tel:${18005727592}`}>
                   <FontAwesomeIcon ref={iconRef2} icon={faPhone}   style={{ color: "#2391fb", cursor: "pointer", marginRight: "1rem",paddingBottom:'10px' ,width:'30px',height:'30px', }}/>
                    </a>
                    
                    </div>
                    <div className="col3_IcoHeader">
                      <a href="https://www.linkedin.com/company/vrinda-nano-technologies/">
                       <FontAwesomeIcon ref={iconRef3}
          icon={faLinkedinIn} 
          style={{ color: "rgb(42, 156, 255)", cursor: "pointer", marginRight: "1rem" , fontSize:"30px",paddingBottom:'10px' ,width:'40px',height:'40px',}}
        />
        </a>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}