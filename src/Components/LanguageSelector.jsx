// 'use client';

// import { useLanguage } from "@/context/LanguageContext";

// export default function LanguageSelector() {
//   const { lang, setLang } = useLanguage();

//   return (
//     <div className="language_select_box" style={{ padding: "12px 20px" }}>
//       <select value={lang} onChange={(e) => setLang(e.target.value)} id="btnn">
//         <option value="en">English</option>
//         <option value="hi">Hindi</option>
//         <option value="ar">Arabic</option>
//         <option value="es">Spanish</option>
//         <option value="pt-BR">Portuguese</option>
//         <option value="de">German</option>
//         <option value="ms">Malay</option>
//         <option value="th">Thai</option>
//       </select>
//     </div>
//   );
// }

 'use client';

 import { useLanguage } from "@/context/LanguageContext";
import "../Styles/LanguageSelector.css"
 export default function LanguageSelector() {
   const { lang, setLang } = useLanguage();
return(


   <div className="container1NAV2_1" >
    <div className="row1NAV2_1">
      <div className="col1NAV2_1">

<div
  style={{
    padding: '11px 20px',
    fontFamily: lang === 'ar' ? "'Cairo', sans-serif" : 'Arial, sans-serif',
  }}
  dir={lang === 'ar' ? 'rtl' : 'ltr'}
  lang={lang}
>
  <select value={lang} onChange={(e) => setLang(e.target.value)} id="btnn"   >
    <option  value="en">  English</option>
    <option  value="hi"> Hindi</option>
    <option  value="ar"> Arabic</option>
    <option  value="es"> Spanish</option>
    <option  value="pt-BR"> Portuguese (BR)</option>
    <option  value="de"> German</option>
    <option  value="ms">	Malay</option>
    <option  value="th">	Thai</option>

  </select>
</div>


      </div> 
       {/* <div className="col2NAV2_1">
<select id="color" onChange={riti}>
  <option value="#FAFAFA"> ⚪</option>     
  <option value="#B0AFAF"> ⚙️</option>      
</select>
      </div>  */}
     </div>
  </div> 

   );
 }
