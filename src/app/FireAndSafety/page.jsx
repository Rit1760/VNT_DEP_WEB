



import "../../Styles/FireAndSafety.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheckCircle, faRecycle, faSeedling, faSyncAlt  } from '@fortawesome/free-solid-svg-icons'

export default function FireAndSafety(){
    return(
        <>
        <div className="main1_FireSafetySolution">
            <div className="container1_FireSafetySolution">
                <div className="col1_FireSafetySolution">
                    <h3>Fire And Safety</h3>
                </div>
            </div>
            <div className="container2_FireSafetySolution">
                <div className="col2_FireSafetySolution">
                    <h3>
  Eco-Friendly Fire Safety Solutions for Modern{' '} <span style={{ background: 'linear-gradient(to right, #ff6600, #ff9900)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
    Environments
  </span>
</h3>
                    <p>Safety and sustainability go hand in hand. Our eco-friendly fire safety solutions protect lives and assets while reducing environmental impact. With advanced detection, suppression, and control systems, we ensure compliance without compromising your green goals.</p>
                </div>

            </div>
            <div className="container3_FireSafetySolution">
                <div className="row1_FireSafetySolution">
                    <div className="col3_FireSafetySolution">
<FontAwesomeIcon icon={faSeedling} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto', }} />
<h3>Smart Protection, Greener Solutions</h3>
                    </div>
                    <div className="col4_FireSafetySolution">
<FontAwesomeIcon icon={faCheckCircle} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto', }} />
<h3>Eco-Friendly, ETA-Certified Fire Suppression</h3>
                    </div>
                </div>
                <div className="row2_FireSafetySolution">
                    <div className="col5_FireSafetySolution">
<FontAwesomeIcon icon={faSyncAlt} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto', }} />
                        <h3>Effortless Renewable Energy Integration</h3>
                    </div>
                    <div className="col6_FireSafetySolution">
<FontAwesomeIcon icon={faRecycle} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto', }} />
                        <h3>Empowering a Net-Zero Tomorrow</h3>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}




