import Image from "next/image"
import "../Styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons"

export default function Footer(){
    return(
        <>
        <div className="main1_Footer">
            <div className="container1_Footer">
                <div className="row1_Footer">
                    <div className="col1_Footer">
                        {/* <Image src="/Images/VNT-logo.png" width={120} height={100} alt="VNT-LOGO"/> */}
                        <Image src="/Images/iventio.png" width={290} height={90} alt="VNT-LOGO"/>
                        <h3>Powering Progress with VNT</h3>
                        <FontAwesomeIcon icon={faLinkedin}  /><FontAwesomeIcon icon={faX}  />
                    </div> 
                    <div className="col2_Footer">
                        <h4>About us</h4>
                        <h4>Blogs</h4>
                    </div>
                    <div className="col3_Footer">
                        <h4>Contact us</h4>
                        <h4>our presence</h4>
                    </div>
                </div>
                <div className="row2_Footer">
                    <div className="col4_Footer">
                        <p>VNT © 2025. All rights reserved</p>
                    </div>
                    <div className="col5_Footer">
                        <p>Privacy policy</p>
                    </div>
                    <div className="col6_Footer">
                      <p>Term & condition</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}