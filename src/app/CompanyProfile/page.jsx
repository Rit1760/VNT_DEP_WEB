'use client'


import "../../Styles/CompanyProfile.css"
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faPersonShelter, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Head from "next/head";


export default function CompanyProfile(){

      useEffect(() => {
    if (typeof window !== "undefined") {
      const $ = require("jquery");
      require("slick-carousel");

      const $slider = $(".row7_CompanyProfile");

      if ($slider.length > 0 && !$slider.hasClass("slick-initialized")) {
        $slider.slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 3000,
          cssEase: "linear",
          arrows: false,
          dots: false,
          pauseOnHover: false,
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
            { breakpoint: 300, settings: "unslick" },
          ],
        });
      }
    }
  }, []);
    return(
        <>

<Head>                
  <title>Company Profile | VNT - Leading Solar & Energy Solutions Provider</title>

  <meta
    name="description"
    content="Learn about VNT, a trusted leader in solar energy and sustainable solutions across India. Discover our mission, vision, history, and commitment to innovation and excellence."
  />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="VNT | Company Profile & About Us" />
  <meta property="og:description" content="VNT is a premier solar and energy solutions company dedicated to delivering innovative, reliable, and sustainable energy products and services across India." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vnt.in/about/CompanyProfile/" />
  <meta property="og:site_name" content="VNT" />

  <meta
    name="keywords"
    content="VNT company profile, about VNT, solar energy company India, sustainable energy solutions, renewable energy provider, solar technology experts, VNT mission and vision"
  />
</Head>


        <div className="main1_CompanyProfile">
            <div className="container1_CompanyProfile">
                <div className="row1_CompanyProfile">
                    <div className="col1_CompanyProfile">
                        <h2>Pioneering Solutions for a Net-Zero Tomorrow</h2>
                    </div>
                    <div className="col2_CompanyProfile">
                        <p>We are committed to shaping a net-zero future through impactful milestones and innovative solutions. Our power management systems have fortified over 250,000 telecom sites, ensuring their resilience against climatic challenges like lightning. Through our solar solutions, we contribute to over 40GW+ of global solar power capacity, advancing the shift toward clean energy.
Our efforts extend to building a nationwide EV charger network, accelerating India’s journey toward sustainable mobility. Complementing these initiatives is VNT Cleanwatts, our energy management system provider, which empowers businesses to monitor, optimize, and reduce energy consumption for a more sustainable and efficient future.
At the core of our approach is a commitment to sustainability that goes beyond energy savings—enabling industries to align with net-zero goals while fostering innovation, resilience, and environmental stewardship.</p>
                    </div>
                </div>
            </div>
            <div className="container2_CompanyProfile">
                <div className="row2_CompanyProfile">
                    <div className="col3_CompanyProfile">
                        <h3>Our Values</h3>
                        <p>VNT is a future-focused company dedicated to innovation, sustainability, and excellence. By combining advanced technology with environmentally conscious practices, we deliver solutions that empower our customers and contribute to a greener tomorrow. Our commitment to continuous improvement and impactful partnerships ensures that we create lasting value while driving mutual growth and building a sustainable future together.</p>
                    </div>
                    <div className="col3_Companyprofile_copy">
                      <ul>
  <li><FontAwesomeIcon icon={faLightbulb} style={{color:'#013b37',width:'40px',height:'40px', marginRight: '10px', verticalAlign: 'middle'}}/> Driving innovation through sustainable and future-ready technologies.</li>
  <li><FontAwesomeIcon icon={faSeedling} style={{color:'#013b37',width:'40px',height:'40px', marginRight: '10px', verticalAlign: 'middle'}}/> Delivering smart, eco-conscious solutions that empower our clients.</li>
  <li><FontAwesomeIcon icon={faHandshake} style={{color:'#013b37',width:'40px',height:'40px', marginRight: '10px', verticalAlign: 'middle'}}/>Building lasting partnerships for mutual growth and a greener tomorrow.</li>
</ul>
                    </div>
                </div>
            <div className="container2_CompanyProfile_copy">
                <div className="row3_CompanyProfile">
                    <div className="col4_CompanyProfile">
                      <FontAwesomeIcon icon={faPersonShelter} style={{color:'#ff6600',width:'70px',height:'70px', marginLeft:'30px'}} />
                        <h4>Willingness To Serve</h4>
                        <p>Safety is our utmost priority. We do not compromise in our commitment to the safety of our employees and customers.</p>
                    </div>
                    <div className="col5_CompanyProfile">
                      <FontAwesomeIcon icon={faEarthAmericas} style={{color:'#ff6600',width:'70px',height:'70px', marginLeft:'30px'}}  />
                        <h4>Customer Centric</h4>
                        <p>We constantly provide unparalleled solutions & deliver excellent products every time. Quality is non-negotiable.</p>
                    </div>
                    <div className="col6_CompanyProfile">
                      <FontAwesomeIcon icon={faLightbulb} style={{color:'#ff6600',width:'70px',height:'70px', marginLeft:'30px'}}  />
                        <h4>Mutual Growth</h4>
                        <p>Leading by example - designing our products keeping in view their scope and expandability for the future.</p>
                    </div>
                </div>
                <div className="row4_CompanyProfile">
                    <div className="col7_CompanyProfile">
                      <FontAwesomeIcon icon={faBrain} style={{color:'#ff6600',width:'70px',height:'70px', marginLeft:'30px'}}  />
                        <h4>Knowledge Enhancement</h4>
                        <p>We put our customers first; we believe in making positive changes to the lives of our customers. For us, the customer is king.</p>
                    </div>
                    <div className="col8_CompanyProfile">
                      <FontAwesomeIcon icon={faStar} style={{color:'#ff6600',width:'70px',height:'70px', marginLeft:'30px'}}  />
                        <h4>Respect and Integrity</h4>
                        <p>We deliver exactly what we promise and showcase. Our services and solutions are efficient and well researched.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="container3_CompanyProfile">
                <div className="row5_CompanyProfile">
                    <div className="col9_CompanyProfile">
                        <h3>Why We Are Here</h3>
                        <p>VNT is at the forefront of the global clean energy transition, enabling businesses and governments to achieve their sustainability goals. Led by a team of passionate experts, we are dedicated to delivering superior renewable energy solutions with the highest quality standards, transparency, and integrity. Our simple philosophy is to use our knowledge and talent to create products that not only promote sustainability but also contribute to a better global community. We combine engineering expertise with a commitment to timely, cost-efficient project execution, ensuring that our solutions empower partners to thrive in a sustainable future.</p>
                    </div>
                </div>
            </div>
            <div className="container4_CompanyProfile">
                <div className="row6_CompanyProfile">
                    <div className="col10_CompanyProfile">
                        <h3>Our Certifications</h3>
                    </div>





        <div className="row7_CompanyProfile">

          <div className="col10_CompanyProfile">
            <Image src="/images/slide1.png" width={200} height={170} alt="slide2" />
          </div>
          <div className="col11_CompanyProfile">
            <Image src="/images/slide2.png" width={200} height={200} alt="slide2" />
          </div>
          <div className="col12_CompanyProfile">
            <Image src="/images/slide3.png" width={200} height={160} alt="slide3" />
          </div>
          <div className="col13_CompanyProfile">
            <Image src="/images/slide4.png" width={200} height={160} alt="slide4" />
          </div>
          <div className="col14_CompanyProfile">
            <Image src="/images/slide5.png" width={200} height={250} alt="slide5" />
          </div>
        </div>




                </div>
            </div>
        </div>
        </>
    )
}