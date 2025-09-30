import "../../Styles/CompanyHistory.css"
import Image from "next/image"
import Head from "next/head"
export default function CompanyHistory(){
    return(
        <>

<Head>                
  <title>Company History | VNT - Journey in Solar & Energy Solutions</title>

  <meta
    name="description"
    content="Discover the history of VNT, tracing our growth from inception to becoming a leading solar energy and sustainable solutions provider in India. Learn about our milestones and achievements."
  />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="VNT | Company History & Milestones" />
  <meta property="og:description" content="Explore VNT's journey, key milestones, and accomplishments in delivering innovative solar and energy solutions across India." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vnt.in/about/CompanyHistory/" />
  <meta property="og:site_name" content="VNT" />

  <meta
    name="keywords"
    content="VNT company history, solar energy journey, company milestones, renewable energy achievements, VNT growth story, solar solutions India"
  />
</Head>

        <div className="main1_CompanyHistory">
            <div className="container1_CompanyHistory">
                <div className="row1_CompanyHistory">
                    <div className="col1_CompanyHistory">
                        <h3>
Indian Roots 
Global Mindset</h3>
<p>VNT was incorporated in 2003 with a vision of rendering sophisticated solutions and comprehensive services of the highest caliber to ensure customer satisfaction. We bring decades of expertise to your business through our integrated approach that meets stringent expectations for Energy Conservation, Fire Safety, Lightning & Surge Protection, and Asset Monitoring. In the ever-challenging business sectors such as Telecommunication, Power, Defense, Railways, and others, we constantly seek new and innovative ways to make every operation reliable, flexible, safe, and sustainable. We focus on enhancing business utility and intervention to work for you, anticipating your needs today, and preparing business strategies for tomorrow.</p>
                    </div>
                </div>
            </div>
            <div className="container2_CompanyHistory">
                <div className="row2_CompanyHistory">
                    <div className="col2_CompanyHistory">
                        <h3>Our History</h3>
                    </div>
                    <div className="col3_CompanyHistory">
                        <Image src="/images/c-his.png" width={1200} height={1300} alt="c-his" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}