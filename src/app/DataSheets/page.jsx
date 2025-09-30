    'use client';

    import React from 'react';
import "../../Styles/DataSheets.css"


export default function DataSheets(){
      const handleClick = () => {
        confirm('Button clicked! access to DOWNLOAD VNT Brochure');
      };
    return(

        <>
        <div className="main1_DataSheets">
            <div className="container1_DataSheets">
                <div className="row1_DataSheets">
                    <div className="col1_DataSheets">
<a href="./Images/VNTBrochure1.pdf" onClick={handleClick}>DOWNLOAD VNT Brochure 1</a>
                    </div>
                    <div className="col2_DataSheets">
<a href="./Images/VNTBrochure2.pdf" onClick={handleClick} >DOWNLOAD VNT Brochure 2</a>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}