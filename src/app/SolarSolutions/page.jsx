import "../../Styles/SolarSolutions.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faChartLine , faBullseye , faSlidersH  } from '@fortawesome/free-solid-svg-icons'
export default function SolarSolutions(){
    return(
        <>
        <div className="main1_SolarSolutions">
            <div className="container1_SolarSolutions">
                    <div className="col1_SolarSolutions">
                        <h3>Solar Solutions</h3>
                    </div>
                </div>
                <div className="container2_SolarSolution">
                    <div className="col2_SolarSolution">
                        <h2>Driving Net-Zero Success Through Innovative Technology</h2>
                        <p>At VNT, we leverage cutting-edge technologies to empower organizations in minimizing their carbon footprint, optimizing energy consumption, and successfully achieving net-zero objectives. Our intelligent solutions seamlessly integrate sustainability with operational excellence, driving a cleaner and more efficient future.</p>
                    </div>
                </div>
                <div className="container3_SolarSolution">
                    <div className="row1_SolarSolution">
                        <div className="col3_SolarSolution">
<FontAwesomeIcon icon={faBolt} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto', }} />
                            <h3>Maximizing Solar Efficiency</h3>
                        </div>
                        <div className="col4_SolarSolution">
<FontAwesomeIcon icon={faChartLine} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto', }} />
                            <h3>Optimizing Power Distribution</h3>
                        </div>
                    </div>
                    <div className="row2_SolarSolution">
                        <div className="col5_SolarSolution">
<FontAwesomeIcon icon={faSlidersH } style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto', }} />
                            <h3>Reliable & Safe Systems</h3>
                        </div>
                        <div className="col6_SolarSolution">
<FontAwesomeIcon icon={faBullseye  } style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto', }} />
                            <h3>Powering a Greener Tomorrow</h3>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

