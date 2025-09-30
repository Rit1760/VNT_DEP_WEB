// import Link from "next/link"
// import "../Styles/EVHOME.css"

// export default function EVHOME(){
//     return(
//         <>
//         <div className="main1_EVHOME">
//             <div className="container1_EVHOME">
//                 <div className="col1_EVHOME">
//   <Link href="#">EV HOME</Link>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }
import Link from "next/link";
import "../Styles/EVHOME.css";

export default function EVHOME() {
  return (
    <div className="fixed-bottom-button">
      <Link href="/">
        <button className="cta-button">EV HOME</button>
      </Link>
    </div>
  );
}