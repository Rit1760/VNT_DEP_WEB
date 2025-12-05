

 'use client';

 import { useLanguage } from "@/Context/LanguageContext";
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
     </div>
  </div> 

   );
 }
