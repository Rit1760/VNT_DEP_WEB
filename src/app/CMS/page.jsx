"use client"

import "../../Styles/CMS.css"
import Image from "next/image" 
import Link from "next/link"
import { useEffect } from "react";
import { useState } from "react";


export default function CMS(){



 const [lang, setLang] = useState('en');

const translations = {
  en: {
navitemh4:"Home",
navpublic:"Public",
navcms:"Residential",
col1cmsh2:"VNT EV Charging Management Software & Mobile App",
col1cmsh3:"Control without boundaries",
col3cmsh2:"What is Charger Management Software (CMS)?",
col3cmsp:"Charger Management Software (CMS) is the digital platform that monitors, controls, and manages EV charging stations. It acts as the backbone of any EV charging network, connecting chargers, users, and operators to ensure smooth and efficient operations. Think of CMS as the “brain” of the EV charging ecosystem — it makes chargers smarter, more efficient, and user-friendly.",
 col4li1:"Tracks charger status (online/offline, in use, idle, fault).",
  col4li2:"Allows remote start/stop, diagnostics, and troubleshooting.",
  col5li1:"Enables authentication driver (RFID  cards, mobile apps, QR codes).",
  col5li2:"Defines who can use a charger and when.",
  col6li1:"Distributes power smartly between multiple chargers.",
  col6li2:"Reduces grid stress and optimizes electricity usage.",
  col7li1:"Supports multiple payment modes (UPI, cards, subscriptions).",
  col7li2:"Generates invoices and transaction records.",
  col8li1:"Provides real-time and historical data (sessions, kWh delivered, revenue).",
  col8li2:"Helps operators make data-driven decisions on utilization and expansion.",
  col9li1:"Ensures interoperability with different charger brands and networks.",
  col9li2:"Makes the system future proof and scalable.",
  col10h2:"Download the eVNTio app now",
},
  hi:{
navitemh4:"घर के लिए",
navpublic:"सार्वजनिक",
navcms:"आवासीय",
col1cmsh2:"VNT ईवी चार्जिंग प्रबंधन सॉफ़्टवेयर और मोबाइल ऐप",
col1cmsh3:"बिना सीमाओं के नियंत्रण",
col3cmsh2:"चार्जर मैनेजमेंट सॉफ़्टवेयर (CMS) क्या है?",
col3cmsp:"चार्जर मैनेजमेंट सॉफ़्टवेयर (CMS) एक डिजिटल प्लेटफ़ॉर्म है जो ईवी चार्जिंग स्टेशनों की निगरानी, नियंत्रण और प्रबंधन करता है। यह किसी भी ईवी चार्जिंग नेटवर्क की रीढ़ की हड्डी के रूप में कार्य करता है, चार्जर्स, उपयोगकर्ताओं और ऑपरेटरों को जोड़ता है ताकि संचालन सुचारू और कुशल रहे। CMS को ईवी चार्जिंग इकोसिस्टम का “मस्तिष्क” समझें — यह चार्जर्स को अधिक स्मार्ट, कुशल और उपयोगकर्ता-अनुकूल बनाता है।",
   col4li1:"चार्जर की स्थिति का ट्रैक करता है (ऑनलाइन/ऑफलाइन, उपयोग में, निष्क्रिय, त्रुटि)।",
  col4li2:"रिमोट स्टार्ट/स्टॉप, डायग्नोस्टिक्स और ट्रबलशूटिंग की सुविधा प्रदान करता है।",
    col5li1:"प्रमाणीकरण सक्षम करता है जैसे कि ड्राइवर (RFID कार्ड, मोबाइल ऐप, QR कोड)।",
  col5li2:"निर्धारित करता है कि कौन चार्जर का उपयोग कर सकता है और कब कर सकता है।",
  col6li1:"एकाधिक चार्जर्स के बीच पावर को स्मार्ट तरीके से वितरित करता है।",
  col6li2:"ग्रिड पर दबाव कम करता है और बिजली के उपयोग को अनुकूलित करता है।",
  col7li1:"एकाधिक भुगतान विकल्पों का समर्थन करता है (UPI, कार्ड, सब्सक्रिप्शन)।",
  col7li2:"इनवॉइस और लेन-देन रिकॉर्ड तैयार करता है।",
    col8li1:"रीयल-टाइम और ऐतिहासिक डेटा प्रदान करता है (सत्र, प्रदान की गई kWh, राजस्व)।",
  col8li2:"ऑपरेटरों को उपयोग और विस्तार पर डेटा-आधारित निर्णय लेने में मदद करता है।",
    col9li1:"विभिन्न चार्जर ब्रांड और नेटवर्क के साथ इंटरऑपरेबिलिटी सुनिश्चित करता है।",
  col9li2:"सिस्टम को भविष्य के लिए तैयार और स्केलेबल बनाता है।",
  col10h2:"अब eVNTio ऐप डाउनलोड करें",

},
ar:{
navitemh4:"للمنزل",
navpublic:"عام",
navcms:"سكني",
col1cmsh2:"برنامج إدارة شحن المركبات الكهربائية VNT وتطبيق الهاتف المحمول",
col1cmsh3:"التحكم بلا حدود",
col3cmsh2:"ما هو برنامج إدارة الشواحن (CMS)؟",
col3cmsp:"برنامج إدارة الشواحن (CMS) هو منصة رقمية تقوم بمراقبة، التحكم وإدارة محطات شحن المركبات الكهربائية (EV). تعمل كعمود فقري لأي شبكة شحن EV، حيث تربط بين الشواحن والمستخدمين والمشغلين لضمان سير العمليات بسلاسة وكفاءة. يمكن اعتبار CMS عقل نظام شحن EV — فهو يجعل الشواحن أكثر ذكاءً، كفاءة وسهولة في الاستخدام.",
col4li1:"يتتبع حالة الشاحن (متصل/غير متصل، قيد الاستخدام، غير نشط، به خطأ).",
col4li2:"يوفر ميزة التشغيل/الإيقاف عن بُعد، والتشخيص، واستكشاف الأخطاء وإصلاحها.",
col5li1:"يُمكّن المصادقة مثل السائقين (بطاقات RFID، تطبيقات الهاتف المحمول، رموز QR).",
col5li2:"يحدد من يمكنه استخدام الشاحن ومتى يمكنه ذلك.",
col6li1:"يوزع الطاقة بشكل ذكي بين عدة شواحن.",
col6li2:"يقلل الضغط على الشبكة ويُحسّن استخدام الكهرباء.",
col7li1:"يدعم خيارات دفع متعددة (UPI، بطاقات، اشتراكات).",
col7li2:"ينشئ الفواتير وسجلات المعاملات.",
col8li1:"يقدّم بيانات لحظية وتاريخية (الجلسات، كمية الطاقة الموفرة بالكيلوواط ساعة، الإيرادات).",
col8li2:"يساعد المشغلين على اتخاذ قرارات مستندة إلى البيانات بشأن الاستخدام والتوسعة.",
col9li1:"يضمن التوافقية مع علامات تجارية وشبكات شواحن مختلفة.",
col9li2:"يجعل النظام جاهزًا للمستقبل وقابل للتوسع.",
col10h2:"قم الآن بتنزيل تطبيق eVNTio",
},
es:{
navitemh4:"Para el hogar",
navpublic:"Público",
navcms:"Residencial",
col1cmsh2:"Software de gestión de carga de vehículos eléctricos (EV) VNT y aplicación móvil",
col1cmsh3:"Control sin límites",
col3cmsh2:"¿Qué es el software de gestión de cargadores (CMS)?",
col3cmsp:"El software de gestión de cargadores (CMS) es una plataforma digital que supervisa, controla y administra las estaciones de carga de vehículos eléctricos (EV). Actúa como la columna vertebral de cualquier red de carga EV, conectando cargadores, usuarios y operadores para garantizar un funcionamiento fluido y eficiente. Se puede considerar al CMS como el “cerebro” del ecosistema de carga EV: hace que los cargadores sean más inteligentes, eficientes y fáciles de usar.",
col4li1:"Realiza un seguimiento del estado del cargador (en línea/fuera de línea, en uso, inactivo, con falla).",
col4li2:"Proporciona funciones de inicio/parada remota, diagnóstico y solución de problemas.",
col5li1:"Habilita la autenticación para conductores (tarjetas RFID, aplicaciones móviles, códigos QR).",
col5li2:"Determina quién puede usar el cargador y cuándo.",
col6li1:"Distribuye la energía de manera inteligente entre múltiples cargadores.",
col6li2:"Reduce la carga en la red y optimiza el uso de electricidad.",
col7li1:"Admite múltiples métodos de pago (UPI, tarjetas, suscripciones).",
col7li2:"Genera facturas y registros de transacciones.",
col8li1:"Proporciona datos en tiempo real e históricos (sesiones, kWh suministrados, ingresos).",
col8li2:"Ayuda a los operadores a tomar decisiones basadas en datos sobre el uso y la expansión",
col9li1:"Garantiza la interoperabilidad con diferentes marcas de cargadores y redes.",
col9li2:"Hace que el sistema esté preparado para el futuro y sea escalable.",
col10h2:"Descarga la aplicación eVNTio ahora",
},
'pt-BR':{
navitemh4:"Para casa",
navpublic:"Público",
navcms:"Residencial",
col1cmsh2:"Software e aplicativo móvel de gerenciamento de carregamento de veículos elétricos (EV) da VNT",
col1cmsh3:"Controle sem limites",
col3cmsh2:"O que é o software de gerenciamento de carregadores (CMS)?",
col3cmsp:"O software de gerenciamento de carregadores (CMS) é uma plataforma digital que monitora, controla e administra as estações de carregamento de veículos elétricos (EV). Ele atua como a espinha dorsal de qualquer rede de carregamento EV, conectando carregadores, usuários e operadores para garantir um funcionamento suave e eficiente. O CMS pode ser considerado o “cérebro” do ecossistema de carregamento de EV — tornando os carregadores mais inteligentes, eficientes e fáceis de usar.",
col4li1:"Acompanha o status do carregador (online/offline, em uso, inativo, com falha).",
col4li2:"Fornece funções de inicialização/parada remota, diagnóstico e solução de problemas.",
col5li1:"Habilita a autenticação para motoristas (cartões RFID, aplicativos móveis, códigos QR).",
col5li2:"Determina quem pode usar o carregador e quando.",
col6li1:"Distribui a energia de forma inteligente entre múltiplos carregadores.",
col6li2:"Reduz a carga na rede e otimiza o uso de eletricidade.",
col7li1:"Suporta múltiplos métodos de pagamento (UPI, cartões, assinaturas).",
col7li2:"Gera faturas e registros de transações.",
col8li1:"Fornece dados em tempo real e históricos (sessões, kWh fornecidos, receita).",
col8li2:"Ajuda os operadores a tomar decisões baseadas em dados sobre o uso e a expansão.",
col9li1:"Garante a interoperabilidade com diferentes marcas de carregadores e redes.",
col9li2:"Torna o sistema preparado para o futuro e escalável.",
col10h2:"Baixe o aplicativo eVNTio agora",
},
de: { 
navitemh4:"Für zu Hause",
navpublic:"Öffentlich",
navcms:"Wohngebiet",
col1cmsh2:"VNT Elektrofahrzeug (EV) Ladeverwaltungssoftware und mobile App",
col1cmsh3:"Kontrolle ohne Grenzen",
col3cmsh2:"Was ist die Ladeverwaltungssoftware (CMS)?",
col3cmsp:"Die Ladeverwaltungssoftware (CMS) ist eine digitale Plattform, die Ladestationen für Elektrofahrzeuge (EV) überwacht, steuert und verwaltet. Sie fungiert als Rückgrat jedes EV-Ladenetzwerks, indem sie Ladegeräte, Benutzer und Betreiber verbindet, um einen reibungslosen und effizienten Betrieb zu gewährleisten. Das CMS kann als das „Gehirn“ des EV-Lade-Ökosystems betrachtet werden — es macht die Ladegeräte intelligenter, effizienter und benutzerfreundlicher.",
col4li1:"Verfolgt den Status des Ladegeräts (online/offline, in Benutzung, inaktiv, mit Fehler).",
col4li2:"Bietet Funktionen zum Fernstart/-stopp, zur Diagnose und zur Fehlerbehebung.",
col5li1:"Ermöglicht die Authentifizierung von Fahrern (RFID-Karten, mobile Apps, QR-Codes).",
col5li2:"Legt fest, wer das Ladegerät nutzen kann und wann",
col6li1:"Verteilt die Energie intelligent auf mehrere Ladegeräte",
col6li2:"Reduziert die Netzbelastung und optimiert die Stromnutzung.",
col7li1:"Unterstützt mehrere Zahlungsmethoden (UPI, Karten, Abonnements).",
col7li2:"Erstellt Rechnungen und Transaktionsaufzeichnungen.",
col8li1:"Stellt Echtzeit- und historische Daten bereit (Sitzungen, gelieferte kWh, Einnahmen).",
col8li2:"Hilft Betreibern, datengestützte Entscheidungen über Nutzung und Erweiterung zu treffen.",
col9li1:"Gewährleistet die Interoperabilität mit verschiedenen Ladegeräte-Marken und Netzwerken.",
col9li2:"Macht das System zukunftssicher und skalierbar.",
col10h2:"Lade jetzt die eVNTio-App herunter",
},
ms:{
navitemh4:"Untuk rumah",
navpublic:"Awam",
navcms:"Kawasan perumahan",
col1cmsh2:"Perisian dan Aplikasi Mudah Alih Pengurusan Pengecas Kenderaan Elektrik (EV) VNT",
col1cmsh3:"Kontrolle ohne Grenzen",
col3cmsh2:"Apakah Perisian Pengurusan Pengecas (CMS)?",
col3cmsp:"Perisian Pengurusan Pengecas (CMS) ialah platform digital yang memantau, mengawal dan mengurus stesen pengecasan kenderaan elektrik (EV). Ia berfungsi sebagai tulang belakang bagi mana-mana rangkaian pengecasan EV, dengan menghubungkan pengecas, pengguna dan pengendali untuk memastikan operasi berjalan lancar dan cekap. CMS boleh dianggap sebagai “otak” ekosistem pengecasan EV — ia menjadikan pengecas lebih pintar, cekap dan mesra pengguna.",
col4li1:"Menjejak status pengecas (dalam talian/luar talian, sedang digunakan, tidak aktif, terdapat ralat).",
col4li2:"Menyediakan fungsi untuk mula/berhenti dari jauh, diagnostik dan penyelesaian masalah.",
col5li1:"Membolehkan pengesahan pemandu (kad RFID, aplikasi mudah alih, kod QR).",
col5li2:"Menentukan siapa yang boleh menggunakan pengecas dan bila.",
col6li1:"Mengagihkan tenaga dengan bijak antara beberapa pengecas.",
col6li2:"Mengurangkan beban pada rangkaian dan mengoptimumkan penggunaan elektrik.",
col7li1:"Menyokong pelbagai kaedah pembayaran (UPI, kad, langganan).",
col7li2:"Menjana invois dan rekod transaksi.",
col8li1:"Menyediakan data masa nyata dan sejarah (sesi, kWh yang dibekalkan, pendapatan).",
col8li2:"Membantu pengendali membuat keputusan berasaskan data mengenai penggunaan dan pengembangan.",
col9li1:"Menjamin keserasian dengan jenama pengecas dan rangkaian yang berbeza.",
col9li2:"Menjadikan sistem bersedia untuk masa depan dan boleh diskalakan.",
col10h2:"Muat turun aplikasi eVNTio sekarang",
},
th:{
    navitemh4:"สำหรับบ้าน",
navpublic:"สาธารณะ",
navcms:"พื้นที่ที่อยู่อาศัย",
col1cmsh2:"ซอฟต์แวร์และแอปมือถือการจัดการการชาร์จรถยนต์ไฟฟ้า (EV) VNT",
col1cmsh3:"การควบคุมไร้ขอบเขต",
col3cmsh2:"ซอฟต์แวร์การจัดการเครื่องชาร์จ (CMS) คืออะไร?",
col3cmsp:"ซอฟต์แวร์การจัดการเครื่องชาร์จ (CMS) เป็นแพลตฟอร์มดิจิทัลที่ตรวจสอบ ควบคุม และจัดการสถานีชาร์จรถยนต์ไฟฟ้า (EV) ทำหน้าที่เป็นกระดูกสันหลังของเครือข่ายการชาร์จ EV โดยเชื่อมต่อเครื่องชาร์จ ผู้ใช้ และผู้ปฏิบัติงานเพื่อให้การดำเนินงานราบรื่นและมีประสิทธิภาพ CMS สามารถถือเป็น “สมอง” ของระบบนิเวศการชาร์จ EV — ทำให้เครื่องชาร์จฉลาดขึ้น มีประสิทธิภาพมากขึ้น และใช้งานง่ายขึ้น",
col4li1:"ติดตามสถานะเครื่องชาร์จ (ออนไลน์/ออฟไลน์, กำลังใช้งาน, ไม่ใช้งาน, มีข้อผิดพลาด)",
col4li2:"มีฟังก์ชันสำหรับเริ่ม/หยุดจากระยะไกล การวินิจฉัย และการแก้ไขปัญหา",
col5li1:"อนุญาตให้มีการยืนยันตัวตนของผู้ขับขี่ (บัตร RFID, แอปมือถือ, รหัส QR)",
col5li2:"กำหนดว่าใครสามารถใช้เครื่องชาร์จและเมื่อใด",
col6li1:"กระจายพลังงานอย่างชาญฉลาดระหว่างเครื่องชาร์จหลายเครื่อง",
col6li2:"ลดภาระบนเครือข่ายและเพิ่มประสิทธิภาพการใช้ไฟฟ้า",
col7li1:"รองรับหลายวิธีการชำระเงิน (UPI, บัตร, การสมัครสมาชิก)",
col7li2:"สร้างใบแจ้งหนี้และบันทึกธุรกรรม",
col8li1:"จัดเตรียมข้อมูลแบบเรียลไทม์และข้อมูลย้อนหลัง (เซสชัน, kWh ที่จ่าย, รายได้)",
col8li2:"ช่วยผู้ปฏิบัติงานตัดสินใจโดยอิงจากข้อมูลเกี่ยวกับการใช้งานและการขยายระบบ",
col9li1:"รับประกันความสามารถในการทำงานร่วมกันกับแบรนด์และเครือข่ายเครื่องชาร์จที่แตกต่างกัน",
col9li2:"ทำให้ระบบพร้อมสำหรับอนาคตและสามารถปรับขยายได้",
col10h2:"ดาวน์โหลดแอป eVNTio ตอนนี้",
},


}
const toggleLanguage = () => {
  if (lang === 'en') setLang('hi');
  else if (lang === 'hi') setLang('ar');
  else if (lang === 'ar') setLang('es');
  else if (lang === 'es') setLang('pt-BR');  
  else if (lang === 'pt-BR') setLang('de');  
  else if (lang === 'de') setLang('ms');  
  else if (lang === 'ms') setLang('th');  
  else setLang('en');
};


  const t = translations[lang];
  
  const [bgColor, setBgColor] = useState("white");


  const riti = (e) => {
    setBgColor(e.target.value);
  };



  useEffect(() => {
    document.body.style.backgroundColor = bgColor;

    

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);

    return(
        <>
        <div className="main1_CMS">



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
      <div className="col2NAV2_1">
<select id="color" onChange={riti}>
  <option value="#FAFAFA"> ⚪</option>     
  <option value="#B0AFAF"> ⚙️</option>      
</select>
      </div>
    </div>
  </div>




<div className="cont1_nav" >
  <div className="row1_Nav">
     <Link href="/" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-residential">
      <h4>{t.navitemh4}</h4>
    </div>
    </Link>
    <Link href="/DC_FAST" style={{whiteSpace:"nowrap" , textDecoration:"None",cursor:"pointer"}}>
    <div className="nav-item nav-public">
      <h4>{t.navpublic}</h4>
    </div>
     </Link>
    <Link href="/AC_WALLBOX" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-cms">
      <h4>{t.navcms}</h4>
    </div>
     </Link>
  </div>

</div>
            <div className="container1_CMS">
                <div className="row1_CMS">
                    <div className="col1_CMS">
                        <Image src="/Images/eventio.png" width={400} height={140} alt="eventio"/>
<h2> {t.col1cmsh2}</h2>
<h3>{t.col1cmsh3}</h3>
                    </div>
                    <div className="col2_CMS">
<Image src={"/Images/Laptop.png"} width={800} height={600} alt="Laptop"/>
                    </div>
                </div>
            </div>
            <div className="container2_CMS">
                <div className="col3_CMS">
                    <h2>{t.col3cmsh2}</h2>
                    <p>{t.col3cmsp}</p>
                </div>
            </div>
            <div className="container3_CMS">
                <div className="row2_CMS">
                    <div className="col4_CMS">
                <Image src="/Images/cmsimg6.png" width={280} height={200} alt="cmsimg6"/>
<ul>
    <li>{t.col4li1}</li>
    <li> {t.col4li2}</li>
</ul>
      
                    </div>
                    <div className="col5_CMS">
                <Image src="/Images/cmsimg5.png" width={280} height={200} alt="cmsimg5"/>
<ul>
    <li>{t.col5li1}</li>
    <li>{t.col5li2}</li>
</ul>
                    </div>
                </div>
                <div className="row3_CMS">
                    <div className="col6_CMS">
                <Image src="/Images/cmsimg3.png" width={280} height={200} alt="cmsimg3"/>
                        <ul>
    <li>{t.col6li1}</li>
    <li>{t.col6li2}</li>
</ul>
                    </div>
                    <div className="col7_CMS">
                <Image src="/Images/cmsimg4.png" width={280} height={200} alt="cmsimg4"/>
                        <ul>
    <li>{t.col7li1}</li>
    <li>{t.col7li2}</li>
</ul>
                    </div>
                </div>
                <div className="row4_CMS">
                    <div className="col8_CMS">
                <Image src="/Images/cmsimg2.png" width={280} height={200} alt="cmsimg2"/>
                        <ul>
    <li>{t.col8li1}</li>
    <li>{t.col8li2}</li>
</ul>
                    </div>
                    <div className="col9_CMS">
                <Image src="/Images/cmsimg1.png" width={280} height={200} alt="cmsimg1"/>
                        <ul>
    <li>{t.col9li1}</li>
    <li>{t.col9li2}</li>
</ul>
                    </div>
                </div>
            </div>
            <div className="container4_CMS">
                <div className="row5_CMS">
                    <div className="col10_CMS">
                        <h2>{t.col10h2}</h2>
                    </div>
                    <div className="col11_CMS">
                        <Image src="/Images/app.png" width={300} height={100} alt="app"/><br/>
                        <Image src="/Images/app2.png" width={300} height={100} alt="app"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



