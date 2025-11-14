'use client'

import "../../Styles/AC_WALLBOX.css"
import {  useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Head from "next/head";
import { useEffect } from "react";



gsap.registerPlugin(ScrollTrigger);



import Link from "next/link";
// import EVHOME from "@/Components/EVHome";
export default function AC_WALLBOX(){
// const [set , togset] = useState(false)
// const [set1 , togset1] = useState(false)
// const [set2 , togset2] = useState(false)
// const [set3 , togset3] = useState(false)
// const [set4 , togset4] = useState(false)
// const [set5 , togset5] = useState(false)

  const [hovered1, setHovered1] = useState(false)
  const [hovered2, setHovered2] = useState(false)

 const containerRef = useRef(null);
 const containerRef1 = useRef(null);
  const elementsRef = useRef([]);
  const elementsRef1 = useRef([]);
 const containerRef7 = useRef(null);
  const elementsRef7 = useRef([]);



  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };





  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    });



    gsap.set(elementsRef.current, { y: 50, opacity: 0});


    tl.to(elementsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, 
      ease: 'power2.out',
    });

  }, { scope: containerRef });




    useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef1.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    });


    gsap.set(elementsRef1.current, { y: 50, opacity: 0 });

    tl.to(elementsRef1.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, 
      ease: 'power2.out',
    });
  }, { scope: containerRef1 });


  
    useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef7.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    });

    gsap.set(elementsRef7.current, { y: 50, opacity: 0 });

    tl.to(elementsRef7.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, 
      ease: 'power2.out',
    });
  }, { scope: containerRef7 });


// const languageNames = {
//   en: 'En',
//   hi: 'Hi',
//   ar: 'العربية',
//   es: 'Es',
//   'pt-BR': 'Português (BR)',
//   de: 'Deutsch',  
// };

//  const [lang, setLang] = useState('en');


// const setCli = () => {
//   togset(!set);
//   togset1(false);
//   togset2(false);
//   togset3(false);
//   togset4(false);
//   togset5(false);
// }

// const setCli1 = () => {
//   togset1(!set);
//   togset(false);
//   togset2(false);
//   togset3(false);
//   togset4(false);
//   togset5(false);
// }

// const setCli2 = () => {
//   togset2(!set);
//   togset1(false);
//   togset(false);
//   togset3(false);
//   togset4(false);
//   togset5(false);
// }

// const setCli3 = () => {
//   togset3(!set);
//   togset1(false);
//   togset2(false);
//   togset(false);
//   togset4(false);
//   togset5(false);
// }

// const setCli4 = () => {
//   togset4(!set);
//   togset1(false);
//   togset2(false);
//   togset3(false);
//   togset(false);
//   togset5(false);
// }
const languageNames = {
  en: 'En',
  hi: 'Hi',
  ar: 'العربية',
  es: 'Es',
  'pt-BR': 'Português (BR)',
  de: 'Deutsch',
  ms: 'malay'  ,
  th: 'Thai' ,
};


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



const [lang, setLang] = useState('en');

const translations = {
  en: {
    col66resi: 'AC Wall Box Type-II 7.4kW',
    co66resip:`The AC Wall Box Type-II 7.4kW is the perfect home-charging solution for EV owners, offering overnight charging in 6–8 hours. Compact, efficient, and reliable, it integrates seamlessly into residential setups while ensuring full compliance with international safety standards.`,
    col66resih3:'Key Features:',
    col66resili1:'Ideal for daily home charging of electric cars.',
    col66resili2:'OCPP support for smart monitoring and control.',
    col66resili3:'Integrated protection against over-voltage, over-current, and short circuits.',
    col66resili4:'Sleek wall-mount design with easy installation.',
    col1resi1:"WallBox 7.4 KW AC Type-II",
    col1resi2:"Wallbox 11kW AC Type-II",
    col1resi3:"Wallbox 22kW AC Type-II",
    col1resi4:"Portable 3.3kW AC Type-II",
    col1resi5:"Portable 7.4kW AC Type-II",
    col8resih2:"AC Wall Box Type-II 11kW",
    col8resip:`Delivering more power and faster turnaround, the AC Wall Box Type-II 11kW is designed for residential and semi-commercial environments. With built-in OCPP compatibility, it offers intelligent management while keeping safety as the top priority.`,
    col8resih3:'Key Features:',
    col8resili1:"Faster charging for EVs with higher onboard AC capacity.",
    col8resili2:"Smart connectivity for remote monitoring and user access control.",
    col8resili3:"Robust build quality with advanced electrical safety features.",
    col8resili4:"Perfect for apartments, office parking, and private garages.",
    col10resih2:"AC Wall Box Type-II 22kW",
    col10resip:"The AC Wall Box Type-II 22kW is tailored for premium and high-end electric vehicles, ensuring rapid AC charging where speed matters. With enhanced efficiency and OCPP support, it is well-suited for villas, residential societies, and commercial parking lots.",
    col10resiph3:"Key Features:",
    col10resili1:"High-capacity charging for luxury EVs and fleet applications.",
    col10resili2:"Designed for both private and semi-public environments.",
    col10resili3:"Multilevel protection for maximum safety.",
    col10resili4:"Scalable charging infrastructure for future-ready EV owners.",
    col12resih2:"AC Portable Charger 3.3kW",
    col12resip:"Compact and versatile, the AC Portable Charger 3.3kW provides reliable charging anywhere. Lightweight and easy to carry, it is designed for home use or as a portable charging backup kept inside the vehicle.",
    col12resih3:"Key Features:",
    col12resili1:"Current control for safe and efficient charging.",
    col12resili2:"Perfect for EV owners who want a travel-friendly charger.",
    col12resili3:"Compatible with high-end vehicles requiring flexible charging.",
    col12resili4:"Built-in safety protections for worry-free operation.",
    col14rtesih2:"AC Portable Charger 7.4kW",
    col14rtesip:"The AC Portable Charger 7.4kW brings faster portable charging in a compact package, ideal for EV owners on the go. With current control features and built-in safety mechanisms, it offers both convenience and peace of mind.",
    col14rtesih3:"Key Features:",
    col14rtesili1:"Higher power output for quicker portable charging.",
    col14rtesili2:"Easy to carry and store in vehicles for on-demand use.",
    col14rtesili3:"Suitable for both home use and emergency charging needs.",
    col14rtesili4:"Intelligent safety features for voltage and current protection.",
    col18resh3:"Best for",
    col18resh4:"Residential Properties",
    col18reshh2:" Apartment Complexes",
    col20resh4:"For Home",
    col20resh2:"Reliable. Efficient. Designed for Your Home.",
    col20resp1:" When it comes to your home, you deserve solutions that work as hard as you do. Our products are built to deliver consistent performance, maximize energy efficiency, and blend seamlessly into your space. Whether you're upgrading or starting fresh, every detail is crafted with your comfort, convenience, and peace of mind in mind. Because reliability isn’t a feature — it’s a promise.",
  col21resh3:"Why VNT charger?",
  col21resh5:"Rapid Charging",
  col21resp:"Because smart charging should be simple, safe, and built to last. The VNT Charger combines cutting-edge technology with user-friendly design to deliver fast, reliable power whenever you need it. Engineered for efficiency and durability, it adapts seamlessly to your lifestyle—whether you're at home, at work, or on the go. With intelligent features that protect your devices and optimize charging speed, VNT gives you more than just power — it gives you peace of mind.",
  },

  hi:{
    col66resi: 'एसी वॉल बॉक्स टाइप- II 7.4 किलोवाट',
    col66resip:`एसी वॉल बॉक्स टाइप- II 7.4 किलोवाट ईवी मालिकों के लिए परफेक्ट होम-चार्जिंग सोल्यूशन है, जो 6-8 घंटे में ओवरनाइट चार्जिंग प्रदान करता है। कॉम्पैक्ट, कुशल और विश्वसनीय, यह आवासीय सेटअप में सहजता से एकीकृत होता है जबकि अंतरराष्ट्रीय सुरक्षा मानकों के साथ पूर्ण अनुपालन सुनिश्चित करता है।`,
    col66resih3:'मुख्य विशेषताएं:',
    col66resili1:'इलेक्ट्रिक कारों के दैनिक होम चार्जिंग के लिए आदर्श।',
    col66resili2:'स्मार्ट मॉनिटरिंग और नियंत्रण के लिए OCPP समर्थन।',
    col66resili3:'ओवर-वोल्टेज, ओवर-करंट, और शॉर्ट सर्किट के खिलाफ एकीकृत सुरक्षा।',
    col66resili4:'आसान स्थापना के साथ चिकना वॉल-माउंट डिज़ाइन।',
    col1resi1:"वॉलबॉक्स 7.4 KW AC टाइप-II",
    col1resi2:"वॉलबॉक्स 11kW AC टाइप-II",
    col1resi3:"वॉलबॉक्स 22kW AC टाइप-II",
    col1resi4:"पोर्टेबल 3.3kW AC टाइप-II",
    col1resi5:"पोर्टेबल 7.4kW AC टाइप-II",
    col8resih2:"AC वॉल बॉक्स टाइप-II 11kW",
    col8resip:`अधिक शक्ति और तेज़ टर्नअराउंड प्रदान करते हुए, AC वॉल बॉक्स टाइप-II 11kW आवासीय और अर्ध-व्यावसायिक वातावरण के लिए डिज़ाइन किया गया है। अंतर्निर्मित OCPP संगतता के साथ, यह बुद्धिमान प्रबंधन प्रदान करता है जबकि सुरक्षा को सर्वोच्च प्राथमिकता बनाए रखता है।`,
col8resih3:"मुख्य विशेषताएं:",
    col8resili1:"उच्च ऑनबोर्ड AC क्षमता के साथ ईवी के लिए तेज़ चार्जिंग।",
    col8resili2:"स्मार्ट कनेक्टिविटी के साथ रिमोट मॉनिटरिंग और उपयोगकर्ता एक्सेस नियंत्रण।",
    col8resili3:"मजबूत निर्माण गुणवत्ता के साथ उन्नत विद्युत सुरक्षा सुविधाएँ।",
    col8resili4:"अपार्टमेंट्स, ऑफिस पार्किंग और निजी गैराज के लिए आदर्श।",
    col10resih2:"AC वॉल बॉक्स टाइप-II 22kW",
    col10resip:"AC वॉल बॉक्स टाइप-II 22kW प्रीमियम और हाई-एंड इलेक्ट्रिक वाहनों के लिए डिज़ाइन किया गया है, जो तेज़ AC चार्जिंग सुनिश्चित करता है जहां गति महत्वपूर्ण है। बढ़ी हुई दक्षता और OCPP समर्थन के साथ, यह विला, residential सोसायटी और कमर्शियल पार्किंग लॉट्स के लिए उपयुक्त है।",
    col10resih3:"मुख्य विशेषताएं:",
    col10resili1:"लक्ज़री ईवी और फ़्लीट उपयोग के लिए उच्च क्षमता वाली चार्जिंग।",
    col10resili2:"निजी और अर्ध-जन सार्वजनिक दोनों वातावरण के लिए डिज़ाइन किया गया।",
    col10resili3:"अधिकतम सुरक्षा के लिए बहु-स्तरीय सुरक्षा।",
    col10resili4:"भविष्य के लिए तैयार ईवी मालिकों के लिए स्केलेबल चार्जिंग इंफ्रास्ट्रक्चर।",
        col12resih2:"AC पोर्टेबल चार्जर 3.3kW",
    col12resip:"कॉम्पैक्ट और बहुमुखी, AC पोर्टेबल चार्जर 3.3kW कहीं भी विश्वसनीय चार्जिंग प्रदान करता है। हल्का और आसानी से ले जाने योग्य, यह घरेलू उपयोग या वाहन के अंदर रखा जाने वाला पोर्टेबल चार्जिंग बैकअप के लिए डिज़ाइन किया गया है।",
    col12resih3:"मुख्य विशेषताएं:",
    col12resili1:"सुरक्षित और कुशल चार्जिंग के लिए करंट नियंत्रण।",
    col12resili2:"उन ईवी मालिकों के लिए आदर्श जो यात्रा के अनुकूल चार्जर चाहते हैं।",
    col12resili3:"उच्च-स्तरीय वाहनों के लिए उपयुक्त, जिन्हें लचीली चार्जिंग की आवश्यकता होती है।",
    col12resili4:"बिना चिंता के संचालन के लिए इन-बिल्ट सुरक्षा सुविधाएँ।",
        col14rtesih2:"AC पोर्टेबल चार्जर 7.4kW",
    col14rtesip:"AC पोर्टेबल चार्जर 7.4kW कॉम्पैक्ट पैकेज में तेज़ पोर्टेबल चार्जिंग प्रदान करता है, जो चलते-फिरते ईवी मालिकों के लिए आदर्श है। करंट नियंत्रण सुविधाओं और इन-बिल्ट सुरक्षा तंत्रों के साथ, यह सुविधा और मानसिक शांति दोनों प्रदान करता है।",
    col14rtesih3:"मुख्य विशेषताएं:",
    col14rtesili1:"तेज़ पोर्टेबल चार्जिंग के लिए उच्च पावर आउटपुट।",
    col14rtesili2:"मांग के अनुसार उपयोग के लिए वाहन में ले जाने और स्टोर करने में आसान।",
    col14rtesili3:"घरेलू उपयोग और आपातकालीन चार्जिंग दोनों के लिए उपयुक्त।",
    col14rtesili4:"वोल्टेज और करंट सुरक्षा के लिए बुद्धिमान सुरक्षा सुविधाएँ।",
       col18resh3:"सर्वश्रेष्ठ",
    col18reshh4:"आवासीय संपत्तियाँ",
    col18reshh2:"अपार्टमेंट कॉम्प्लेक्स",
    col20resh4:"घरेलू उपयोग के लिए",
    col20resh2:"विश्वसनीय। कुशल। आपके घर के लिए डिज़ाइन किया गया।",
    col20resp1:"जब बात आपके घर की आती है, तो आपको ऐसे समाधान मिलना चाहिए जो उतनी ही मेहनत करें जितनी आप करते हैं। हमारे उत्पाद लगातार प्रदर्शन देने, ऊर्जा दक्षता को अधिकतम करने, और आपके स्थान में सहज रूप से फिट होने के लिए बनाए गए हैं। चाहे आप अपग्रेड कर रहे हों या नया शुरुआत कर रहे हों, हर विवरण आपके आराम, सुविधा और मानसिक शांति को ध्यान में रखकर तैयार किया गया है। क्योंकि विश्वसनीयता केवल एक सुविधा नहीं है — यह एक वादा है।",
   col21resh3:"VNT चार्जर क्यों?",
  col21resh5:"तेज़ चार्जिंग",
  col21resp:"क्योंकि स्मार्ट चार्जिंग को सरल, सुरक्षित और लंबे समय तक टिकाऊ होना चाहिए। VNT चार्जर अत्याधुनिक तकनीक को उपयोगकर्ता के अनुकूल डिज़ाइन के साथ जोड़ता है, ताकि जब भी आपको जरूरत हो, तेज़ और विश्वसनीय पावर प्रदान कर सके। दक्षता और मजबूती के लिए डिज़ाइन किया गया, यह आपके जीवनशैली के अनुसार सहज रूप से अनुकूलित हो जाता है—चाहे आप घर पर हों, काम पर हों या यात्रा पर। बुद्धिमान सुविधाओं के साथ जो आपके उपकरणों की सुरक्षा करती हैं और चार्जिंग स्पीड को अनुकूलित करती हैं, VNT आपको केवल पावर ही नहीं देता—बल्कि मानसिक शांति भी प्रदान करता है।",
  },
  ar: {
col66resi:"صندوق الحائط AC النوع-II 7.4 كيلوواط",
col66resip:`صندوق الحائط AC النوع-II 7.4 كيلوواط هو الحل المثالي للشحن المنزلي لمالكي المركبات الكهربائية، حيث يوفر شحنًا طوال الليل في 6-8 ساعات. صغير الحجم، فعال وموثوق، يندمج بسلاسة في الإعدادات السكنية مع ضمان الامتثال الكامل للمعايير الدولية للسلامة.`,
 col66resih3:'الميزات الرئيسية:',
 col66resili1:'مثالي للشحن المنزلي اليومي للسيارات الكهربائية.',
 col66resili2:'دعم OCPP للمراقبة الذكية والتحكم.',
 col66resili2:'حماية مدمجة ضد زيادة الجهد، زيادة التيار، والدوائر القصيرة.',
 col66resili3:'تصميم أنيق للتثبيت على الحائط مع سهولة التركيب.',
 col66resili4:'تصميم أنيق للتثبيت على الحائط مع سهولة التركيب.',
 col1resi1:"صندوق الحائط 7.4 كيلوواط AC النوع-II",
 col1resi2:"صندوق الحائط 11 كيلوواط AC النوع-II",
 col1resi3:"صندوق الحائط 22 كيلوواط AC النوع-II",
 col1resi4:"شاحن محمول 3.3 كيلوواط AC النوع-II",
 col1resi5:"شاحن محمول 7.4 كيلوواط AC النوع-II",
 col8resih2:"صندوق الحائط AC النوع-II 11 كيلوواط",
 col10resip:`يقدم صندوق الحائط AC النوع-II 11 كيلوواط طاقة أكبر ودوران أسرع، وهو مصمم للبيئات السكنية وشبه التجارية. مع توافق OCPP المدمج، فإنه يوفر إدارة ذكية مع الحفاظ على السلامة كأولوية قصوى.`,
col10resih3:'الميزات الرئيسية:',
col10resili1:"شحن أسرع للمركبات الكهربائية ذات السعة العالية على متن AC.",
col10resili2:"الاتصال الذكي للمراقبة عن بُعد والتحكم في وصول المستخدم.",
col10resili3:"جودة بناء قوية مع ميزات أمان كهربائية متقدمة.",
col10resili4:"مثالي للشقق، مواقف السيارات المكتبية، والمرائب الخاصة.",
col12resih2:"صندوق الحائط AC النوع-II 22 كيلوواط",
col12resip:"صندوق الحائط AC النوع-II 22 كيلوواط مصمم للمركبات الكهربائية الفاخرة وعالية الجودة، مما يضمن شحن AC سريع حيث تكون السرعة مهمة. مع كفاءة محسنة ودعم OCPP، فهو مناسب للفلل، المجتمعات السكنية، ومواقف السيارات التجارية.",
col12resih3:'الميزات الرئيسية:',
col12resili1:"شحن عالي السعة للمركبات الكهربائية الفاخرة وتطبيقات الأسطول.",
col12resili2:"مصمم لكل من البيئات الخاصة وشبه العامة.",
col12resili3:"حماية متعددة المستويات لأقصى درجات الأمان.",
col12resili4:"بنية تحتية للشحن قابلة للتوسع لأصحاب المركبات الكهربائية المستعدين للمستقبل.",
col14rtesih2:"شاحن محمول AC 3.3 كيلوواط",
col14rtesip:"شاحن محمول AC 3.3 كيلوواط صغير الحجم ومتعدد الاستخدامات، يوفر شحنًا موثوقًا في أي مكان. خفيف الوزن وسهل الحمل، وهو مصمم للاستخدام المنزلي أو كنسخة احتياطية للشحن المحمول تُحتفظ داخل المركبة.",
col14rtesih3:'الميزات الرئيسية:',
col14rtesili1:"التحكم في التيار للشحن الآمن والفعال.",
col14rtesili2:"مثالي لأصحاب المركبات الكهربائية الذين يرغبون في شاحن مناسب للسفر.",
col14rtesili3:"متوافق مع المركبات الفاخرة التي تتطلب شحنًا مرنًا.",
col14rtesili4:"ميزات أمان مدمجة لتشغيل خالٍ من القلق.",
col18resh3:'الأفضل لـ',
col18reshh4:'العقارات السكنية',
col18reshh2:'مجمعات الشقق',
col20resh4:'للمنزل',
col20resh2:'موثوق. فعال. مصمم لمنزلك.',
col20resp1:'عندما يتعلق الأمر بمنزلك، تستحق حلولاً تعمل بجد مثلك. تم بناء منتجاتنا لتقديم أداء مستمر، وتعظيم كفاءة الطاقة، والاندماج بسلاسة في مساحتك. سواء كنت تقوم بالترقية أو تبدأ من جديد، يتم تصميم كل تفصيل مع وضع راحتك وراحتك وراحة بالك في الاعتبار. لأن الموثوقية ليست ميزة - إنها وعد.',
col21resh3:'لماذا شاحن VNT؟',
col21resh5:'الشحن السريع',
col21resp:'لأن الشحن الذكي يجب أن يكون بسيطًا وآمنًا ومصممًا ليصمد. يجمع شاحن VNT بين التكنولوجيا المتقدمة والتصميم سهل الاستخدام لتوفير طاقة سريعة وموثوقة كلما احتجت إليها. مصمم للكفاءة والمتانة، يتكيف بسلاسة مع نمط حياتك - سواء كنت في المنزل أو في العمل أو أثناء التنقل. مع ميزات ذكية تحمي أجهزتك وتحسن سرعة الشحن، يمنحك VNT أكثر من مجرد طاقة - يمنحك راحة البال.',
},
  es: {
col66resi: 'Caja de pared AC Tipo-II 7.4kW',
col66resip:`La Caja de pared AC Tipo-II 7.4kW es la solución perfecta de carga en casa para propietarios de vehículos eléctricos, ofreciendo carga nocturna en 6-8 horas. Compacta, eficiente y confiable, se integra perfectamente en configuraciones residenciales mientras garantiza el cumplimiento total de las normas internacionales de seguridad.`,
 col66resih3:'Características clave:',
 col66resili1:'Ideal para la carga diaria en casa de automóviles eléctricos.',
 col66resili2:'Soporte OCPP para monitoreo y control inteligente.',
 col66resili2:'Protección integrada contra sobretensión, sobrecorriente y cortocircuitos.',
 col66resili3:'Diseño elegante de montaje en pared con fácil instalación.',
 col66resili4:'Diseño elegante de montaje en pared con fácil instalación.',
 col1resi1:"WallBox 7.4 KW AC Tipo-II",
 col1resi2:"Wallbox 11kW AC Tipo-II",
 col1resi3:"Wallbox 22kW AC Tipo-II",
 col1resi4:"Portátil 3.3kW AC Tipo-II",
 col1resi5:"Portátil 7.4kW AC Tipo-II",
 col8resih2:"Caja de pared AC Tipo-II 11kW",
 col10resip:`Ofreciendo más potencia y una rotación más rápida, la Caja de pared AC Tipo-II 11kW está diseñada para entornos residenciales y semi-comerciales. Con compatibilidad OCPP incorporada, ofrece una gestión inteligente mientras mantiene la seguridad como máxima prioridad.`,
col10resih3:'Características clave:',
col10resili1:"Carga más rápida para vehículos eléctricos con mayor capacidad AC a bordo.",
col10resili2:"Conectividad inteligente para monitoreo remoto y control de acceso de usuarios.",
col10resili3:"Calidad de construcción robusta con características avanzadas de seguridad eléctrica.",
col10resili4:"Perfecto para apartamentos, estacionamientos de oficinas y garajes privados.",
col12resih2:"Caja de pared AC Tipo-II 22kW",
col12resip:"La Caja de pared AC Tipo-II 22kW está diseñada para vehículos eléctricos premium y de alta gama, asegurando una carga AC rápida donde la velocidad importa. Con mayor eficiencia y soporte OCPP, es adecuada para villas, sociedades residenciales y estacionamientos comerciales.",
col12resih3:'Características clave:',
col12resili1:"Carga de alta capacidad para vehículos eléctricos de lujo y aplicaciones de flotas.",
col12resili2:"Diseñado para entornos privados y semi-públicos.",
col12resili3:"Protección multinivel para máxima seguridad.",
col12resili4:"Infraestructura de carga escalable para propietarios de vehículos eléctricos preparados para el futuro.",
col14rtesih2:"Cargador portátil AC 3.3kW",
col14rtesip:"Compacto y versátil, el Cargador portátil AC 3.3kW proporciona una carga confiable en cualquier lugar. Ligero y fácil de transportar, está diseñado para uso doméstico o como respaldo de carga portátil que se guarda dentro del vehículo.",
col14rtesih3:'Características clave:',
col14rtesili1:"Control de corriente para una carga segura y eficiente.",
col14rtesili2:"Perfecto para propietarios de vehículos eléctricos que desean un cargador amigable para viajar.",
col14rtesili3:"Compatible con vehículos de alta gama que requieren carga flexible.",
col14rtesili4:"Protecciones de seguridad integradas para una operación sin preocupaciones.",
col18resh3:'Mejor para',
col18reshh4:'Propiedades residenciales',
col20resh4:'Para el hogar',
col20resh2:'Confiable. Eficiente. Diseñado para tu hogar.',
col20resp1:'Cuando se trata de tu hogar, mereces soluciones que trabajen tan duro como tú. Nuestros productos están diseñados para ofrecer un rendimiento constante, maximizar la eficiencia energética e integrarse perfectamente en tu espacio. Ya sea que estés actualizando o comenzando desde cero, cada detalle está elaborado pensando en tu comodidad, conveniencia y tranquilidad. Porque la confiabilidad no es una característica, es una promesa.',
col21resh3:'¿Por qué el cargador VNT?',
col21resh5:'Carga rápida',
col21resp:'Porque la carga inteligente debe ser simple, segura y duradera. El cargador VNT combina tecnología de punta con un diseño fácil de usar para ofrecer energía rápida y confiable cuando la necesitas. Diseñado para la eficiencia y la durabilidad, se adapta perfectamente a tu estilo de vida, ya sea que estés en casa, en el trabajo o en movimiento. Con características inteligentes que protegen tus dispositivos y optimizan la velocidad de carga, VNT te ofrece más que solo energía, te ofrece tranquilidad.',
},
  'pt-BR': {
col66resi: 'Caixa de Parede AC Tipo-II 7.4kW',
col66resip:`A Caixa de Parede AC Tipo-II 7.4kW é a solução perfeita de carregamento doméstico para proprietários de veículos elétricos, oferecendo carregamento durante a noite em 6-8 horas. Compacta, eficiente e confiável, integra-se perfeitamente em configurações residenciais, garantindo total conformidade com os padrões internacionais de segurança.`,
  col66resih3:'Principais características:',
  col66resili1:'Ideal para carregamento doméstico diário de carros elétricos.',
  col66resili2:'Suporte OCPP para monitoramento e controle inteligentes.',
  col66resili2:'Proteção integrada contra sobretensão, sobrecorrente e curtos-circuitos.',
  col66resili3:'Design elegante de montagem na parede com fácil instalação.',
  col66resili4:'Design elegante de montagem na parede com fácil instalação.',
  col1resi1:"WallBox 7.4 KW AC Tipo-II",
  col1resi2:"Wallbox 11kW AC Tipo-II",
  col1resi3:"Wallbox 22kW AC Tipo-II",
  col1resi4:"Portátil 3.3kW AC Tipo-II",
  col1resi5:"Portátil 7.4kW AC Tipo-II",
  col8resih2:"Caixa de Parede AC Tipo-II 11kW",
  col8resip:`Oferecendo mais potência e uma rotação mais rápida, a Caixa de Parede AC Tipo-II 11kW é projetada para ambientes residenciais e semi-comerciais. Com compatibilidade OCPP incorporada, oferece gerenciamento inteligente enquanto mantém a segurança como prioridade máxima.`,
  col8resih3:'Principais características:',
  col8resili1:"Carregamento mais rápido para veículos elétricos com maior capacidade AC a bordo.",
  col8resili2:"Conectividade inteligente para monitoramento remoto e controle de acesso do usuário.",
  col8resili3:"Qualidade de construção robusta com recursos avançados de segurança elétrica.",
  col8resili4:"Perfeito para apartamentos, estacionamentos de escritórios e garagens privadas.",
  col10resih2:"Caixa de Parede AC Tipo-II 22kW",
  col10resip:"A Caixa de Parede AC Tipo-II 22kW é projetada para veículos elétricos premium e de alta gama, garantindo carregamento AC rápido onde a velocidade importa. Com maior eficiência e suporte OCPP, é adequada para vilas, sociedades residenciais e estacionamentos comerciais.",
  col10resih3:"Principais características:",
  col10resili1:"Carregamento de alta capacidade para veículos elétricos de luxo e aplicações de frota.",
  col10resili2:"Projetado para ambientes privados e semi-públicos.",
  col10resili3:"Proteção multinível para máxima segurança.",
  col10resili4:"Infraestrutura de carregamento escalável para proprietários de veículos elétricos preparados para o futuro.",
  col12resih2:"Carregador Portátil AC 3.3kW",
  col12resip:"Compacto e versátil, o Carregador Portátil AC 3.3kW fornece carregamento confiável em qualquer lugar. Leve e fácil de transportar, é projetado para uso doméstico ou como backup de carregamento portátil mantido dentro do veículo.",
  col12resih3:"Principais características:",
  col12resili1:"Controle de corrente para carregamento seguro e eficiente.",
  col12resili2:"Perfeito para proprietários de veículos elétricos que desejam um carregador amigável para viagens.",
  col12resili3:"Compatível com veículos de alta gama que exigem carregamento flexível.",
  col12resili4:"Proteções de segurança integradas para operação sem preocupações.",
  col14rtesih2:"Carregador Portátil AC 7.4kW",
  col14rtesip:"O Carregador Portátil AC 7.4kW oferece carregamento portátil mais rápido em um pacote compacto, ideal para proprietários de veículos elétricos em movimento. Com recursos de controle de corrente e mecanismos de segurança integrados, oferece conveniência e tranquilidade.",
  col14rtesih3:"Principais características:",
  col14rtesili1:"Maior potência de saída para carregamento portátil mais rápido.",
  col14rtesili2:"Fácil de transportar e armazenar em veículos para uso sob demanda.",
  col14rtesili3:"Adequado para uso doméstico e necessidades de carregamento de emergência.",
  col14rtesili4:"Recursos de segurança inteligentes para proteção contra tensão e corrente.",
  col18resh3:"Melhor para",
  col18reshh4:"Propriedades residenciais",
  col18reshh2:"Complexos de apartamentos",
  col20resh4:"Para casa",
  col20resh2:"Confiável. Eficiente. Projetado para sua casa.",
  col20resp1:"Quando se trata da sua casa, você merece soluções que funcionem tão duro quanto você. Nossos produtos são construídos para oferecer desempenho consistente, maximizar a eficiência energética e se integrar perfeitamente ao seu espaço. Seja você está atualizando ou começando do zero, cada detalhe é elaborado com seu conforto, conveniência e tranquilidade em mente. Porque confiabilidade não é um recurso - é uma promessa.",
  col21resh3:"Por que o carregador VNT?",
  col21resh5:"Carregamento rápido",
  col21resp:"Porque o carregamento inteligente deve ser simples, seguro e duradouro. O carregador VNT combina tecnologia de ponta com design fácil de usar para fornecer energia rápida e confiável sempre que você precisar. Projetado para eficiência e durabilidade, ele se adapta perfeitamente ao seu estilo de vida - esteja você em casa, no trabalho ou em movimento. Com recursos inteligentes que protegem seus dispositivos e otimizam a velocidade de carregamento, o VNT oferece mais do que apenas energia - oferece tranquilidade.",

},
  de: {
col66resi: 'AC-Wandbox Typ-II 7,4 kW',
col66resip:`Die AC-Wandbox Typ-II 7,4 kW ist die perfekte Heimladelösung für Elektrofahrzeugbesitzer und bietet eine Übernachtladung in 6-8 Stunden. Kompakt, effizient und zuverlässig fügt sie sich nahtlos in Wohnumgebungen ein und gewährleistet gleichzeitig die vollständige Einhaltung internationaler Sicherheitsstandards.`,
  col66resih3:'Hauptmerkmale:',
  col66resili1:'Ideal für das tägliche Laden von Elektroautos zu Hause.',
  col66resili2:'OCPP-Unterstützung für intelligentes Monitoring und Steuerung.',
  col66resili3:'Integrierter Schutz gegen Überspannung, Überstrom und Kurzschlüsse.',
  col66resili4:'Elegantes Wandmontage-Design mit einfacher Installation.',
  col1resi1:"WallBox 7.4 KW AC Typ-II",
  col1resi2:"Wallbox 11kW AC Typ-II",
  col1resi3:"Wallbox 22kW AC Typ-II",
  col1resi4:"Tragbar 3.3kW AC Typ-II",
  col1resi5:"Tragbar 7.4kW AC Typ-II",
  col8resih2:"AC-Wandbox Typ-II 11kW",
  col8resip:`Die AC-Wandbox Typ-II 11kW bietet mehr Leistung und schnellere Ladezeiten und ist für Wohn- und halbgewerbliche Umgebungen konzipiert. Mit integrierter OCPP-Kompatibilität bietet sie intelligentes Management bei gleichzeitiger Priorisierung der Sicherheit.`,
  col8resih3:'Hauptmerkmale:',
  col8resili1:"Schnelleres Laden für Elektrofahrzeuge mit höherer AC-Bordkapazität.",
  col8resili2:"Intelligente Konnektivität für Fernüberwachung und Benutzerzugangskontrolle.",
  col8resili3:"Robuste Bauqualität mit fortschrittlichen elektrischen Sicherheitsfunktionen.",
  col8resili4:"Perfekt für Wohnungen, Büroparkplätze und private Garagen.",
  col10resih2:"AC-Wandbox Typ-II 22kW",
  col10resip:"Die AC-Wandbox Typ-II 22kW ist für Premium- und High-End-Elektrofahrzeuge konzipiert und gewährleistet schnelles AC-Laden, wo Geschwindigkeit wichtig ist. Mit verbesserter Effizienz und OCPP-Unterstützung eignet sie sich für Villen, Wohnanlagen und kommerzielle Parkplätze.",
  col10resih3:'Hauptmerkmale:',
  col10resili1:"Hochkapazitätsladen für Luxus-Elektrofahrzeuge und Flottenanwendungen.",
  col10resili2:"Für private und halböffentliche Umgebungen konzipiert.",
  col10resili3:"Mehrstufiger Schutz für maximale Sicherheit.",
  col10resili4:"Skalierbare Ladeinfrastruktur für zukunftssichere Elektrofahrzeugbesitzer.",
  col12resih2:"Tragbares AC-Ladegerät 3.3kW",
  col12resip:"Kompakt und vielseitig bietet das tragbare AC-Ladegerät 3.3kW zuverlässiges Laden überall. Leicht und einfach zu transportieren, ist es für den Heimgebrauch oder als tragbare Lade-Backup-Lösung im Fahrzeug konzipiert.",
  col12resih3:'Hauptmerkmale:',
  col12resili1:"Stromregelung für sicheres und effizientes Laden.",
  col12resili2:'Ideal für Elektrofahrzeugbesitzer, die ein reisetaugliches Ladegerät wünschen.',
  col12resili3:"Kompatibel mit hochwertigen Fahrzeugen, die flexibles Laden erfordern.",
  col12resili4:"Eingebaute Sicherheitsfunktionen für sorgenfreien Betrieb.",
  col14rtesih2:"Tragbares AC-Ladegerät 7.4kW",
  col14rtesip:"Das tragbare AC-Ladegerät 7.4kW bietet schnelleres portables Laden in einem kompakten Paket, ideal für Elektrofahrzeugbesitzer unterwegs. Mit Stromregelungsfunktionen und integrierten Sicherheitsmechanismen bietet es sowohl Komfort als auch Sicherheit.",
  col14rtesih3:'Hauptmerkmale:',
  col14rtesili1:"Höhere Leistung für schnelleres portables Laden.",
  col14rtesili2:"Einfach zu transportieren und in Fahrzeugen für den bedarfsorientierten Einsatz zu verstauen.",
  col14rtesili3:"Geeignet für den Heimgebrauch und Notladebedürfnisse.",
  col14rtesili4:"Intelligente Sicherheitsfunktionen zum Schutz vor Spannung und Strom.",
  col18resh3:'Am besten für',
  col18reshh4:'Wohnimmobilien',
  col18reshh2:'Wohnkomplexe',
  col20resh4:'Für Zuhause',
  col20resh2:'Zuverlässig. Effizient. Für Ihr Zuhause entwickelt.',
  col20resp1:'Wenn es um Ihr Zuhause geht, verdienen Sie Lösungen, die genauso hart arbeiten wie Sie. Unsere Produkte sind darauf ausgelegt, eine konstante Leistung zu bieten, die Energieeffizienz zu maximieren und sich nahtlos in Ihren Raum zu integrieren. Egal, ob Sie aufrüsten oder neu anfangen, jedes Detail wird mit Blick auf Ihren Komfort, Ihre Bequemlichkeit und Ihre Ruhe gestaltet. Denn Zuverlässigkeit ist kein Feature – es ist ein Versprechen.',
  col21resh3:'Warum VNT-Ladegerät?',
  col21resh5:'Schnelles Laden',
  col21resp:'Weil intelligentes Laden einfach, sicher und langlebig sein sollte. Das VNT-Ladegerät kombiniert Spitzentechnologie mit benutzerfreundlichem Design, um jederzeit schnelle und zuverlässige Energie zu liefern. Entwickelt für Effizienz und Langlebigkeit, passt es sich nahtlos Ihrem Lebensstil an – egal, ob Sie zu Hause, bei der Arbeit oder unterwegs sind. Mit intelligenten Funktionen, die Ihre Geräte schützen und die Ladegeschwindigkeit optimieren, bietet Ihnen VNT mehr als nur Energie – es bietet Ihnen Ruhe.',

  
},
  ms: {
col66resi: 'AC Wall Box Type-II 7.4kW',
col66resip:`AC Wall Box Type-II 7.4kW adalah penyelesaian pengecasan rumah yang sempurna untuk pemilik EV, menawarkan pengecasan semalaman dalam 6-8 jam. Kompak, cekap, dan boleh dipercayai, ia menyatu dengan lancar ke dalam tetapan kediaman sambil memastikan pematuhan penuh dengan piawaian keselamatan antarabangsa.`,
  col66resih3:'Ciri-ciri Utama:',
  col66resili1:'Sesuai untuk pengecasan rumah harian kereta elektrik.',
  col66resili2:'Sokongan OCPP untuk pemantauan dan kawalan pintar.',
  col66resili2:'Perlindungan terbina terhadap voltan lebih, arus lebih, dan litar pintas.',
  col66resili3:'Reka bentuk pemasangan dinding yang bergaya dengan pemasangan yang mudah.',
  col66resili4:'Reka bentuk pemasangan dinding yang bergaya dengan pemasangan yang mudah.',
  col1resi1:"WallBox 7.4 KW AC Type-II",
  col1resi2:"Wallbox 11kW AC Type-II",
  col1resi3:"Wallbox 22kW AC Type-II",
  col1resi4:"Boleh Alih 3.3kW AC Type-II",
  col1resi5:"Boleh Alih 7.4kW AC Type-II",
  col8resih2:"AC Wall Box Type-II 11kW",
  col8resip:`Menawarkan kuasa yang lebih tinggi dan pusingan yang lebih pantas, AC Wall Box Type-II 11kW direka untuk persekitaran kediaman dan separa komersial. Dengan keserasian OCPP terbina, ia menyediakan pengurusan pintar sambil mengekalkan keselamatan sebagai keutamaan utama.`,
  col8resih3:'Ciri-ciri Utama:',
  col8resili1:"Pengecasan lebih pantas untuk kenderaan elektrik dengan kapasiti AC di atas kapal yang lebih tinggi.",
  col8resili2:"Sambungan pintar untuk pemantauan jauh dan kawalan akses pengguna.",
  col8resili3:"Kualiti binaan yang kukuh dengan ciri keselamatan elektrik yang canggih.",
  col8resili4:"Sesuai untuk pangsapuri, tempat letak kereta pejabat, dan garaj persendirian.",
  col10resih2:"AC Wall Box Type-II 22kW",
  col10resip:"AC Wall Box Type-II 22kW direka untuk kenderaan elektrik premium dan berprestasi tinggi, memastikan pengecasan AC yang pantas di mana kelajuan adalah penting. Dengan kecekapan yang dipertingkatkan dan sokongan OCPP, ia sesuai untuk vila, masyarakat kediaman, dan tempat letak kereta komersial.",
  col10resih3:'Ciri-ciri Utama:',
  col10resili1:"Pengecasan kapasiti tinggi untuk kenderaan elektrik mewah dan aplikasi armada.",
  col10resili2:"Direka untuk persekitaran persendirian dan separa awam.",
  col10resili3:"Perlindungan berbilang peringkat untuk keselamatan maksimum.",
  col10resili4:"Infrastruktur pengecasan yang boleh diskala untuk pemilik kenderaan elektrik yang bersedia untuk masa depan.",
  col12resih2:"Pengecas Boleh Alih AC 3.3kW",
  col12resip:"Kompak dan serba boleh, Pengecas Boleh Alih AC 3.3kW menyediakan pengecasan yang boleh dipercayai di mana sahaja. Ringan dan mudah dibawa, ia direka untuk kegunaan rumah atau sebagai sandaran pengecasan mudah alih yang disimpan di dalam kenderaan.",
  col12resih3:'Ciri-ciri Utama:',
  col12resili1:"Kawalan arus untuk pengecasan yang selamat dan cekap.",
  col12resili2:'Sesuai untuk pemilik kenderaan elektrik yang mahukan pengecas mesra perjalanan.',
  col12resili3:"Serasi dengan kenderaan berprestasi tinggi yang memerlukan pengecasan fleksibel.",
  col12resili4:"Ciri keselamatan terbina untuk operasi tanpa kerisauan.",
  col14rtesih2:"Pengecas Boleh Alih AC 7.4kW",
  col14rtesip:"Pengecas Boleh Alih AC 7.4kW menawarkan pengecasan mudah alih yang lebih pantas dalam pakej yang kompak, sesuai untuk pemilik kenderaan elektrik yang sentiasa bergerak. Dengan ciri kawalan arus dan mekanisme keselamatan terbina, ia menyediakan kemudahan dan ketenangan fikiran.",
  col14rtesih3:'Ciri-ciri Utama:',
  col14rtesili1:"Keluaran kuasa yang lebih tinggi untuk pengecasan mudah alih yang lebih pantas.",
  col14rtesili2:"Mudah dibawa dan disimpan dalam kenderaan untuk kegunaan atas permintaan.",
  col14rtesili3:"Sesuai untuk kegunaan rumah dan keperluan pengecasan kecemasan.",
  col14rtesili4:"Ciri keselamatan pintar untuk perlindungan terhadap voltan dan arus.",
  col18resh3:'Terbaik untuk',
  col18reshh4:'Hartanah Kediaman',
  col18reshh2:'Kompleks Pangsapuri',
  col20resh4:'Untuk Rumah',
  col20resh2:'Boleh dipercayai. Cekap. Direka untuk rumah anda.',
  col20resp1:'Apabila ia melibatkan rumah anda, anda layak mendapat penyelesaian yang bekerja keras seperti anda. Produk kami dibina untuk memberikan prestasi yang konsisten, memaksimumkan kecekapan tenaga, dan menyatu dengan lancar ke dalam ruang anda. Sama ada anda menaik taraf atau bermula dari awal, setiap butiran direka dengan mengambil kira keselesaan, kemudahan, dan ketenangan fikiran anda. Kerana kebolehpercayaan bukanlah ciri - ia adalah janji.',
  col21resh3:'Mengapa Pengecas VNT?',
  col21resh5:'Pengecasan Pantas',
  col21resp:'Kerana pengecasan pintar harus mudah, selamat, dan tahan lama. Pengecas VNT menggabungkan teknologi canggih dengan reka bentuk mesra pengguna untuk menyediakan kuasa yang pantas dan boleh dipercayai bila-bila masa anda memerlukannya. Direka untuk kecekapan dan ketahanan, ia menyesuaikan diri dengan lancar dengan gaya hidup anda - sama ada anda di rumah, di tempat kerja, atau dalam perjalanan. Dengan ciri pintar yang melindungi peranti anda dan mengoptimumkan kelajuan pengecasan, VNT memberikan lebih daripada sekadar kuasa - ia memberikan ketenangan fikiran.',

},
  th: {
col66resi: 'AC Wall Box Type-II 7.4kW',
col66resip:`AC Wall Box Type-II 7.4kW เป็นโซลูชันการชาร์จที่บ้านที่สมบูรณ์แบบสำหรับเจ้าของ EV โดยมีการชาร์จข้ามคืนใน 6-8 ชั่วโมง ขนาดกะทัดรัด มีประสิทธิภาพ และเชื่อถือได้ ซึ่งผสานเข้ากับการตั้งค่าที่อยู่อาศัยได้อย่างลงตัว พร้อมรับประกันการปฏิบัติตามมาตรฐานความปลอดภัยระหว่างประเทศอย่างเต็มที่`,
  col66resih3:'คุณสมบัติหลัก:',
  col66resili1:'เหมาะสำหรับการชาร์จรถยนต์ไฟฟ้าที่บ้านทุกวัน',
  col66resili2:'รองรับ OCPP สำหรับการตรวจสอบและควบคุมอัจฉริยะ',
  col66resili2:'การป้องกันในตัวสำหรับแรงดันไฟฟ้าเกิน กระแสเกิน และไฟฟ้าลัดวงจร',
  col66resili3:'การออกแบบติดผนังที่มีสไตล์พร้อมการติดตั้งที่ง่าย',
  col66resili4:'การออกแบบติดผนังที่มีสไตล์พร้อมการติดตั้งที่ง่าย',
  col1resi1:"WallBox 7.4 KW AC Type-II",
  col1resi2:"Wallbox 11kW AC Type-II",
  col1resi3:"Wallbox 22kW AC Type-II",
  col1resi4:"แบบพกพา 3.3kW AC Type-II",
  col1resi5:"แบบพกพา 7.4kW AC Type-II",
  col8resih2:"AC Wall Box Type-II 11kW",
  col8resip:`AC Wall Box Type-II 11kW ที่ให้พลังงานมากขึ้นและการหมุนที่เร็วขึ้น ได้รับการออกแบบมาสำหรับสภาพแวดล้อมที่อยู่อาศัยและกึ่งพาณิชย์ ด้วยความเข้ากันได้ของ OCPP ในตัว จึงมอบการจัดการอัจฉริยะในขณะที่ให้ความปลอดภัยเป็นสิ่งสำคัญสูงสุด`,
  col8resih3:'คุณสมบัติหลัก:',
  col8resili1:"การชาร์จที่เร็วขึ้นสำหรับรถยนต์ไฟฟ้าที่มีความจุ AC บนเรือสูงขึ้น",
  col8resili2:"การเชื่อมต่ออัจฉริยะสำหรับการตรวจสอบระยะไกลและการควบคุมการเข้าถึงของผู้ใช้",
  col8resili3:"คุณภาพการก่อสร้างที่แข็งแกร่งพร้อมคุณสมบัติความปลอดภัยทางไฟฟ้าขั้นสูง",
  col8resili4:"เหมาะสำหรับอพาร์ตเมนต์ ที่จอดรถสำนักงาน และโรงรถส่วนตัว",
  col10resih2:"AC Wall Box Type-II 22kW",
  col10resip:"AC Wall Box Type-II 22kW ได้รับการออกแบบมาสำหรับรถยนต์ไฟฟ้าระดับพรีเมียมและระดับไฮเอนด์ โดยรับประกันการชาร์จ AC ที่รวดเร็วในสถานที่ที่ความเร็วมีความสำคัญ ด้วยประสิทธิภาพที่เพิ่มขึ้นและการรองรับ OCPP จึงเหมาะสำหรับวิลล่า ชุมชนที่อยู่อาศัย และที่จอดรถเชิงพาณิชย์",
  col10resih3:'คุณสมบัติหลัก:',
  col10resili1:"การชาร์จความจุสูงสำหรับรถยนต์ไฟฟ้าหรูหราและแอปพลิเคชันยานพาหนะ",
  col10resili2:"ออกแบบมาสำหรับสภาพแวดล้อมส่วนตัวและกึ่งสาธารณะ",
  col10resili3:"การป้องกันหลายระดับเพื่อความปลอดภัยสูงสุด",
  col10resili4:"โครงสร้างพื้นฐานการชาร์จที่ปรับขนาดได้สำหรับเจ้าของรถยนต์ไฟฟ้าที่พร้อมสำหรับอนาคต",
  col12resih2:"เครื่องชาร์จแบบพกพา AC 3.3kW",
  col12resip:"กะทัดรัดและหลากหลาย เครื่องชาร์จแบบพกพา AC 3.3kW ให้การชาร์จที่เชื่อถือได้ทุกที่ น้ำหนักเบาและพกพาสะดวก ออกแบบมาสำหรับใช้ในบ้านหรือเป็นเครื่องชาร์จสำรองแบบพกพาที่เก็บไว้ในรถ",
  col12resih3:'คุณสมบัติหลัก:',
  col12resili1:"การควบคุมกระแสไฟฟ้าสำหรับการชาร์จที่ปลอดภัยและมีประสิทธิภาพ",
  col12resili2:'เหมาะสำหรับเจ้าของรถยนต์ไฟฟ้าที่ต้องการเครื่องชาร์จที่เป็นมิตรกับการเดินทาง',
  col12resili3:"เข้ากันได้กับรถยนต์ระดับไฮเอนด์ที่ต้องการการชาร์จที่ยืดหยุ่น",
  col12resili4:"คุณสมบัติด้านความปลอดภัยในตัวสำหรับการใช้งานที่ปราศจากความกังวล",
  col14rtesih2:"เครื่องชาร์จแบบพกพา AC 7.4kW",
  col14rtesip:"เครื่องชาร์จแบบพกพา AC 7.4kW มอบการชาร์จแบบพกพาที่รวดเร็วขึ้นในแพ็คเกจขนาดกะทัดรัด เหมาะสำหรับเจ้าของรถยนต์ไฟฟ้าที่เดินทางบ่อย ด้วยคุณสมบัติการควบคุมกระแสไฟฟ้าและกลไกความปลอดภัยในตัว จึงมอบความสะดวกสบายและความอุ่นใจ",
  col14rtesih3:'คุณสมบัติหลัก:',
  col14rtesili1:"เอาต์พุตพลังงานที่สูงขึ้นสำหรับการชาร์จแบบพกพาที่รวดเร็วขึ้น",
  col14rtesili2:"พกพาง่ายและจัดเก็บในรถเพื่อใช้งานตามความต้องการ",
  col14rtesili3:"เหมาะสำหรับใช้ในบ้านและความต้องการชาร์จฉุกเฉิน",
  col14rtesili4:"คุณสมบัติด้านความปลอดภัยอัจฉริยะเพื่อป้องกันแรงดันไฟฟ้าและกระแสไฟฟ้า",
  col18resh3:'เหมาะสำหรับ',
  col18reshh4:'อสังหาริมทรัพย์ที่อยู่อาศัย',
  col18reshh2:'คอนโดมิเนียม',
  col20resh4:'สำหรับที่บ้าน',
  col20resh2:'เชื่อถือได้ มีประสิทธิภาพ ออกแบบมาสำหรับบ้านของคุณ',
  col20resp1:'เมื่อพูดถึงบ้านของคุณ คุณสมควรได้รับโซลูชันที่ทำงานหนักพอๆ กับคุณ ผลิตภัณฑ์ของเราได้รับการสร้างขึ้นเพื่อมอบประสิทธิภาพที่สม่ำเสมอ เพิ่มประสิทธิภาพการใช้พลังงานสูงสุด และผสานเข้ากับพื้นที่ของคุณได้อย่างลงตัว ไม่ว่าคุณจะอัปเกรดหรือเริ่มต้นใหม่ รายละเอียดทุกอย่างได้รับการออกแบบโดยคำนึงถึงความสะดวกสบาย ความสะดวกสบาย และความสงบใจของคุณ เพราะความน่าเชื่อถือไม่ใช่คุณสมบัติ แต่เป็นคำมั่นสัญญา',
  col21resh3:'ทำไมต้อง VNT Charger?',
  col21resh5:'การชาร์จที่รวดเร็ว',
  col21resp:'เพราะการชาร์จอัจฉริยะต้องเรียบง่าย ปลอดภัย และทนทาน VNT Charger ผสมผสานเทคโนโลยีล้ำสมัยเข้ากับการออกแบบที่ใช้งานง่ายเพื่อมอบพลังงานที่รวดเร็วและเชื่อถือได้เมื่อใดก็ตามที่คุณต้องการ ออกแบบมาเพื่อประสิทธิภาพและความทนทาน มันปรับตัวเข้ากับไลฟ์สไตล์ของคุณได้อย่างลงตัว ไม่ว่าคุณจะอยู่ที่บ้าน ที่ทำงาน หรือระหว่างเดินทาง ด้วยคุณสมบัติอัจฉริยะที่ปกป้องอุปกรณ์ของคุณและเพิ่มประสิทธิภาพความเร็วในการชาร์จ VNT มอบมากกว่าแค่พลังงาน - มอบความสงบใจให้กับคุณ',
  

},
}
const t = translations[lang];




    return(
        <>


<Head>                
  <title>AC Wallbox | VNT - Reliable AC EV Charging Solutions</title>

  <meta
    name="description"
    content="Explore VNT's AC Wallbox solutions, offering safe, efficient, and user-friendly AC electric vehicle chargers for residential and commercial use across India."
  />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="VNT | AC Wallbox EV Chargers" />
  <meta property="og:description" content="VNT provides advanced AC Wallbox chargers designed for easy installation and reliable EV charging at homes and workplaces." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vnt.in/solutions/AC_WALLBOX/" />
  <meta property="og:site_name" content="VNT" />

  <meta
    name="keywords"
    content="VNT, AC Wallbox, EV charger India, AC electric vehicle charging, home EV charger, workplace EV charging, reliable AC charger, electric vehicle infrastructure"
  />
</Head>





  {/* <div
  style={{
    padding: '11px 20px',
    fontFamily: lang === 'ar' ? "'Cairo', sans-serif" : 'Arial, sans-serif',
  }}
  dir={lang === 'ar' ? 'rtl' : 'ltr'}
  lang={lang}
>
  <button onClick={toggleLanguage}>
    {t.button} 
  </button>
</div>
 */}



        <div className="main1_AC_WALLBOX">



{/* <EVHOME /> */}


<div className="cont1_nav" >
  <div className="row1_Nav">
     <Link href="/" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-residential">
      <h4>Home</h4>
    </div>
    </Link>
    <Link href="/DC_FAST" style={{whiteSpace:"nowrap" , textDecoration:"None",cursor:"pointer"}}>
    <div className="nav-item nav-public">
      <h4>Public</h4>
    </div>
     </Link>
    <Link href="/CMS" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-cms">
      <h4>CMS/APP</h4>
    </div>
     </Link>


  </div>


</div>






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
      </div> */}
    </div>
  </div>






            <div className="container1_AC_WALLBOX">
                <div className="row1_AC_WALLBOX">
                </div>
            </div>
            {/* section two  */}
            <div className="container2_RESIDENCE">
              <div className="row2_RESIDENCE">
                <div className="col1_RESIDENCE" onClick={() => handleClick(1)}   >
                  <h2  className={
                  activeIndex === 1 ? "activeH2" : "inactiveH2"
                }>
{t.col1resi1}</h2>
                </div>
                <div className="col2_RESIDENCE" onClick={() => handleClick(2)}  >
                  <h2 className={
                  activeIndex === 2 ? "activeH2" : "inactiveH2"
                }>
{t.col1resi2}</h2>
                </div>
                <div className="col3_RESIDENCE" onClick={() => handleClick(3)}  >
                  <h2 className={
                  activeIndex === 3 ? "activeH2" : "inactiveH2"
                }>
{t.col1resi3}</h2>
                </div>
                <div className="col4_RESIDENCE" onClick={() => handleClick(4)}  >
                  <h2 className={
                  activeIndex === 4 ? "activeH2" : "inactiveH2"
                }>
{t.col1resi4}</h2>
                </div>
                <div className="col5_RESIDENCE" onClick={() => handleClick(5)}  >
                  <h2 className={
                  activeIndex === 5 ? "activeH2" : "inactiveH2"
                }>
{t.col1resi5}</h2>
                </div>
                {/* <div className="col6_RESIDENCE" onClick={setCli5}>
                  <h2>AC001 3.3kW</h2>
                </div> */}
              </div>



                        {activeIndex === 1 && (
                <div className="row3_RESIDENCE">
<div className="col66_RESIDENCE">
  <h2>{t.col66resi}</h2>
  <p>{t.col66resip}</p>
  <h3>{t.col66resih3}</h3>
<ul>
  <li>{t.col66resili1}</li>
  <li>{t.col66resili2}</li>
  <li>{t.col66resili3}</li>
  <li>{t.col66resili4}</li>
</ul>
</div>
<div className="col7_RESIDENCE">
  <Image src="/Images/AC22kW.png" width={700} height={470} alt="AC22kW" />
</div>
              </div>
              )} 



                 {activeIndex === 2 && (
                            <div className="row4_RESIDENCE">
                <div className="col8_RESIDENCE">

                    <h2>{t.col8resih2}</h2>
  <p>{t.col8resip}</p>
               <h3>{t.col8resih3}</h3>
<ul>
<li>{t.col8resili1}</li>
<li>{t.col8resili2}</li>
<li>{t.col8resili3}</li>
<li>{t.col8resili4}</li>
</ul>
                </div>
<div className="col9_RESIDENCE">
  <Image src="/Images/AC11kWw.png" width={600} height={580} alt="AC11kWw" />
</div>
              </div>
                )}




                          {activeIndex === 3 && (
                            <div className="row5_RESIDENCE" >
                <div className="col10_RESIDENCE">
                    <h2>{t.col10resih2}</h2>
  <p>{t.col10resip}</p>
                <h3>{t.col10resih3}</h3>
   <ul>
    <li>{t.col10resili1}</li>
    <li>{t.col10resili2}</li>
    <li>{t.col10resili3}</li>
    <li>{t.col10resili4}</li>
   </ul>
                </div>
<div className="col11_RESIDENCE">
  <Image src="/Images/AC-KW2.png" width={550} height={500} alt="AC-KW" />
</div>
              </div>
               )}



                        {activeIndex === 4 && (
                            <div className="row6_RESIDENCE" >
                <div className="col12_RESIDENCE">
                    <h2>{t.col12resih2}</h2>
                    <p>{t.col12resip}</p>
               <h3>{t.col12resih3}</h3>
<ul>
  <li>{t.col12resili1}</li>
  <li>{t.col12resili2}</li>
  <li>{t.col12resili3}</li>
  <li>{t.col12resili4}</li>
</ul>
                </div>
<div className="col13_RESIDENCE">
  <Image src="/Images/POrtable3.3kW.png" width={600} height={480} alt="POrtable3.3kW" />
</div>

              </div>
                )}



                {activeIndex === 5 && (
                            <div className="row7_RESIDENCE" >
                <div className="col14_RESIDENCE">
                    <h2>{t.col14rtesih2}</h2>
  <p>{t.col14rtesip}</p>
              <h3>{t.col14rtesih3}</h3>
<ul>
  <li>{t.col14rtesili1}</li>
  <li>{t.col14rtesili2}</li>
  <li>{t.col14rtesili3}</li>
  <li>{t.col14rtesili4}</li>
</ul>
                </div>
<div className="col15_RESIDENCE">
  <Image src="/Images/Portable7.4kW.png" width={700} height={480} alt="Portable7.4kW" />
</div>

              </div>
                )}



            </div>

            {/* section two  end*/}

      <div className="container3_RES">
        <div className="row9_RESIDENCE">
        <div className="col17_RES">
          <Image src="/Images/tilt1.png" width={450} height={350} alt="residence-cont3" />
        </div>
        <div className="col18_RES">
          <h3>{t.col18resh3}</h3>
          <h4><FontAwesomeIcon icon={faHouse} /> {t.col18reshh4}</h4>
          <h2><FontAwesomeIcon icon={faBuilding} /> {t.col18reshh2}</h2>
        </div>
        </div>
      </div>

      <div className="container4_RES">
        <div className="row10_RES">
          <div className="col19_RES">
            <Image src="/Images/AC-port22.png" width={600} height={600} alt="AC-port22" />
          </div>


              <div className="col20_RES" ref={containerRef}>
      <h4 ref={(el) => (elementsRef.current[0] = el)}>
        <FontAwesomeIcon icon={faHouse} /> {t.col20resh4}
      </h4>
      {/* <h3 ref={(el) => (elementsRef.current[1] = el)}>Pulsar Plus</h3> */}
      <h2 ref={(el) => (elementsRef.current[2] = el)}>
       {t.col20resh2}
      </h2>
      <p ref={(el) => (elementsRef.current[3] = el)}>
       {t.col20resp1}
      </p>
      {/* <h5 ref={(el) => (elementsRef.current[4] = el)}>Starting from</h5> */}
    </div>
        </div>
      </div>
      
      <div className="container5_RES">
        <div className="row11_RES">
          <div className="col21_RES"  ref={containerRef1}>
            <h3 ref={(el) => (elementsRef1.current[0] = el)}>{t.col21resh3}</h3>
            <h5 ref={(el) => (elementsRef1.current[1] = el)}><FontAwesomeIcon icon={faClockRotateLeft} style={{color:"#ff6600"}} />{t.col21resh5}</h5>
            <p ref={(el) => (elementsRef1.current[2] = el)}>{t.col21resp}</p>
          </div>
          <div className="col22_RES">
            <Image src="/Images/AC-port33.png"  width={600} height={600} alt="AC-port33" />
          </div>
        </div>
      </div>
      <div className="container6_RES">
        <div className="row12_RES">


        </div>
        </div>
      </div>
      
      <div className="container8_RES">
        <div className="row14_RES">
 <div
      onMouseEnter={() => setHovered2(true)}
      onMouseLeave={() => setHovered2(false)}
      style={{
        width: '302px',
        height: '392px',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '10px',
        border: '1px solid #ccc',
        cursor:'pointer',
        marginLeft:'401px',

      }}
    >

      <div
        style={{
          display: 'flex',
          width: '200%', 
          height: '100%',
          transition: 'transform 0.5s ease',
          transform: hovered2 ? 'translateX(-50%)' : 'translateX(0)',
        }}
      >

        {/* Image Card */}
        <div style={{ width: '50%', height: '100%', position: 'relative' }}>
          <Image
            src="/Images/vth4.png"
            alt="vth1"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: '10px' }}
          />
        </div>

        {/* Content Card */}
        <div
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            padding: '20px',
            boxSizing: 'border-box',
                background:'#000',
              color:'#fff',
            fontFamily:'Lato , sans-serif',
          }}
        >
          
          <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Vehicle-to-Home</h2>
          <p style={{ fontSize: '14px', marginBottom: '10px' }}>
            Power your home with the energy stored in your EV. Whether you're storing energy from
            your solar panels or the grid, you'll save big during peak hours.
          </p>
          <h3 style={{ fontSize: '14px', marginBottom: '5px' }}>
            No need to purchase expensive battery storage
          </h3>
          <h3 style={{ fontSize: '14px' }}>Avoid peak energy costs</h3>
        </div>
      </div>
    </div>
    
        <div
          onMouseEnter={() => setHovered1(true)}
          onMouseLeave={() => setHovered1(false)}
          style={{
            width: '302px',
            height: '392px',
            overflow: 'hidden',
            position: 'relative',
            borderRadius: '10px',
            border: '1px solid #ccc',
            cursor:'pointer',
        marginLeft:'100px',    
          }}
        >

          <div
            style={{
              display: 'flex',
              width: '200%', 
              height: '100%',
              transition: 'transform 0.5s ease',
              transform: hovered1 ? 'translateX(-50%)' : 'translateX(0)',
            }}
          >

            {/* Image Card */}
            <div style={{ width: '50%', height: '100%', position: 'relative' }}>
              <Image
                src="/Images/vth2.png"
                alt="vth1"
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: '10px' }}
              />
            </div>
    
            {/* Content Card */}
            <div
              style={{
                width: '50%',
                height: '100%',
                backgroundColor: 'white',
                padding: '20px',
                boxSizing: 'border-box',
                    background:'#000',
                  color:'#fff',
                fontFamily:'Lato , sans-serif',    
              }}
            >
              
              <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Vehicle-to-Home</h2>
              <p style={{ fontSize: '14px', marginBottom: '10px' }}>
                Power your home with the energy stored in your EV. Whether you're storing energy from
                your solar panels or the grid, you'll save big during peak hours.
              </p>
              <h3 style={{ fontSize: '14px', marginBottom: '5px' }}>
                No need to purchase expensive battery storage
              </h3>
              <h3 style={{ fontSize: '14px' }}>Avoid peak energy costs</h3>
            </div>
          </div>
        </div>
      </div>


              <div className="container7_RES" ref={containerRef7}>
          <div className="row13_RES">
            <div className="col23_RES">
              <h5 ref={(el) => (elementsRef7.current[0] = el)}>Software</h5>
              <h3 ref={(el) => (elementsRef7.current[1] = el)}>Seamless Charging, One App</h3>
              <p ref={(el) => (elementsRef7.current[2] = el)}>Easily schedule charging sessions, track energy consumption, and activate advanced energy management—all through a single intuitive app. </p>
            </div>
            <div className="col24_RES">
              <h5 ref={(el) => (elementsRef7.current[3] = el)}>Home EV Charging</h5>
              <h3 ref={(el) => (elementsRef7.current[4] = el)}>Explore VNT’s all-in-one residential charger solution.</h3>
            </div>
          </div>
        </div>

</div>
        </>
    )
}





