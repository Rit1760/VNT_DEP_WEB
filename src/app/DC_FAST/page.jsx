'use client';

import { useEffect, useRef , useState} from 'react';

import "../../Styles/DC_FAST.css"
import Image from "next/image"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Head from 'next/head';
// import EVHOME from '@/Components/EVHome';


gsap.registerPlugin(ScrollTrigger);

export default function DC_FAST(){
  const [hovered, setHovered] = useState(false)

  const [hovered1, setHovered1] = useState(false)
  const [hovered2, setHovered2] = useState(false)
  const [hovered3, setHovered3] = useState(false)



  const col1DcFast = useRef(null);
  const elementscol1DcFast = useRef([]);
    const col2DcFast = useRef(null);
  const elementscol2DcFast = useRef([]);
      const col4DcFast = useRef(null);

  const elementscol4DcFast = useRef([]);

      const cont5DcFast = useRef(null);
  const elementscol5DcFast = useRef([]);

        const cont9DcFast = useRef(null);
  const elementscol9DcFast = useRef([]);


        const cont7DcFast = useRef(null);
  const elementscol7DcFast = useRef([]);


    
        const contcardDcFast = useRef(null);
  const elementscolcardDcFast = useRef([]);



    const [activeIndex1, setActiveIndex1] = useState(null);

  const handleClick1 = (index) => {
    setActiveIndex1((prev) => (prev === index ? null : index));
  };






  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: col1DcFast.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    });

    gsap.set(elementscol1DcFast.current, { y: 50, opacity: 0});

    tl.to(elementscol1DcFast.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, 
      ease: 'power2.out',
    });
  }, { scope: col1DcFast });




  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: col2DcFast.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    });

    gsap.set(elementscol2DcFast.current, { y: 50, opacity: 0});

    tl.to(elementscol2DcFast.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, 
      ease: 'power2.out',
    });
  }, { scope: col2DcFast });




  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: col4DcFast.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    });

    gsap.set(elementscol4DcFast.current, { y: 50, opacity: 0});

    tl.to(elementscol4DcFast.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, 
      ease: 'power2.out',
    });
  }, { scope: col4DcFast });


  
    useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cont5DcFast.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    });

    gsap.set(elementscol5DcFast.current, { y: 50, opacity: 0});

    tl.to(elementscol5DcFast.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, 
      ease: 'power2.out',
    });
  }, { scope: cont5DcFast });



      useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cont9DcFast.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    });

    gsap.set(elementscol9DcFast.current, { y: 50, opacity: 0});

    tl.to(elementscol9DcFast.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, 
      ease: 'power2.out',
    });
  }, { scope: cont9DcFast });



        useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cont7DcFast.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    });

    gsap.set(elementscol7DcFast.current, { y: 50, opacity: 0});

    tl.to(elementscol7DcFast.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, 
      ease: 'power2.out',
    });
  }, { scope: cont7DcFast });



          useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contcardDcFast.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    });

    gsap.set(elementscolcardDcFast.current, { y: 50, opacity: 0});

    tl.to(elementscolcardDcFast.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, 
      ease: 'power2.out',
    });
  }, { scope: contcardDcFast });

 const [lang, setLang] = useState('en');

const translations = {
  en: {
    col4dch2:"Smart Energy Control",
    col4dch3:"Not just energy management — VNT is a complete EV energy ecosystem.",
    col5dcp:"Maximize the performance of your VNT charging system with seamless power metering and intelligent energy optimization features built right in.",
col2dch3:"Why DC fast charger",
col2dcp:"Because time matters. A DC fast charger delivers rapid, high-powered charging directly to your electric vehicle's battery—cutting wait times from hours to minutes. Ideal for drivers on the go, businesses, and public charging networks, DC fast chargers make EV ownership more practical and convenient. With advanced safety features and smart charging capabilities, they’re built to meet today’s demands and tomorrow’s expectations. If you want speed, efficiency, and reliability, DC fast charging is the future—now.",
  col1dch4:"Meet the Future of Fast Charging — DC FAST CHARGER.",
col1dch2:"Fast, intelligent, and ready for the road ahead — DC FAST CHARGER delivers next-gen EV charging in a sleek, powerful package. Designed for everyday drivers and EV enthusiasts alike, it combines effortless use with advanced performance. Simple to operate. Built to impress.",
col19dch2:"Smart Public Charging",
col19dch4:"See how DC-FAST is part of a complete solution at home.",
col66pubh2:"Inventio 30kW Wall Box",
col66pubp:"Compact yet powerful, the Inventio 30kW Wall Box is designed for small EVs and passenger cars, delivering reliable charging performance in a space-saving design. Ideal for residential complexes, office parking, and small commercial setups, this wall-mounted charger offers both CCS and GB/T compatibility for maximum flexibility.",
col66pubh3:"Key Features:",
col66publi1:"Perfect for cars and light EVs with daily charging needs.",
col66publi2:"Compact design for wall or pedestal installation.",
col66publi3:"Smart monitoring with OCPP support for remote management.",
col66publi4:"Cost-effective solution for private and semi-public applications.",

col8pubh2:"Inventio 60kW Fast Charger",
col8pubp:"The Inventio 60kW Fast Charger is built for EV cars, ride-hailing fleets, and charging hubs that require speed and efficiency. Available in single or dual gun configurations with CCS & GB/T options, it provides the right balance of power and scalability.",
col8pubh3:"Key Features:",
col8publi1:"Dual-port intelligent power sharing for multi-vehicle charging.",
col8publi2:"Rugged design for public charging stations and highway corridors.",
col8publi3:"Supports fleet operations with reliable uptime and smart diagnostics.",
col8publi4:"Remote monitoring and smart reporting for fleet managers.",

col10pubh2:"Inventio 120kW ChargeXpress",
col10pubp:"Delivering rapid charging for passenger EVs, fleets, and mid-sized vehicles such as ambulances and mini-buses, the Inventio 120kW ChargeXpress ensures high uptime and reliability. Available in single and dual gun options with CCS & GB/T support.",
col10pubh3:"Key Features:",
col10publi1:"Optimized for fleet depots, emergency vehicles, and logistics hubs.",
col10publi2:"Faster turnaround for mid-size EVs, improving operational efficiency.",
col10publi3:"Intelligent load management and modular design for scalability.",
col10publi4:"Remote monitoring and smart reporting for fleet managers.",


col12pubh2:"Inventio 180kW RapidCharge",
col12pubp:"Built for electric buses and trucks, the Inventio 180kW RapidCharge delivers high-capacity energy transfer to keep large vehicles moving. With dual gun support in CCS & GB/T, it is ideal for bus depots, logistics hubs, and highway charging stations.",
col12pubh3:"Key Features:",
col12publi1:"High power output to reduce downtime for heavy EVs.",
col12publi2:"Dual gun capability for parallel or sequential charging.",
col12publi3:"Heavy-duty construction for 24/7 public infrastructure use.",
col12publi4:"Advanced safety features including surge protection and emergency stop.",

col14pubh2:"Inventio 240kW HyperCharge",
col14pubp:"The Inventio 240kW HyperCharge is engineered for electric buses, trucks, and commercial fleets that demand ultra-fast charging. With dual gun output and CCS/GB/T compatibility, it ensures quick turnaround in intensive operations.",
col14pubh3:"Key Features:",
col14publi1:"Rapid charging for high-capacity fleets and public transport.",
col14publi2:"Scalable infrastructure ready for future fleet expansion.",
col14publi3:"Advanced cooling and power-sharing technology for efficiency.",
col14publi4:"High-resolution touchscreen with user-friendly interface.",


col1pubcopyh2:"Inventio 320kW TurboCharge",
col1pubcopyp:"Purpose-built for EV trucks, construction equipment, and mining machinery, the Inventio 320kW TurboCharge provides the muscle needed for heavy-duty EV operations. Its dual gun configuration and CCS/GB/T support make it a powerhouse in industrial environments.",
col1pubcopyh3:"Key Features:",
col1pubcopyli1:"Ultra-high charging power for industrial and off-road EVs.",
col1pubcopyli2:"Ruggedized design for mining and construction applications.",
col1pubcopyli3:"Intelligent thermal management for continuous high-load performance.",
col1pubcopyli4:"Seamless integration with energy management systems.",

col3publiccopyh2:"Inventio 400kW UltraCharge",
col3publiccopyp:"Designed for large mining trucks and heavy-duty equipment, the Inventio 400kW UltraCharge incorporates liquid cooling technology to deliver safe and stable high-power charging. With dual CCS & GB/T outputs, it ensures peak efficiency under extreme conditions.",
col3publiccopyh3:"Key Features:",
col3publiccopyli1:"Liquid-cooled guns for safe ultra-fast energy transfer.",
col3publiccopyli2:"Engineered for demanding mining and industrial sites.",
col3publiccopyli3:"24/7 reliability with predictive maintenance features.",
col3publiccopyli4:"Supports ultra-high voltage platforms for next-gen EVs.",


col55publiccopyh2:"Inventio 640kW Thunder Charge",
col55publiccopyp:"A true game-changer for large mining EVs and ultra-heavy machinery, the Inventio 640kW ThunderCharge sets new standards in high-power charging. Equipped with dual liquid-cooled connectors, it delivers unmatched performance for mission-critical operations.",
col55publiccopyh3:"Key Features:",
col55publiccopyli1:"Lightning-fast charging for the largest EV fleets.",
col55publiccopyli2:"Industrial-grade design with maximum durability.",
col55publiccopyli3:"Advanced liquid cooling ensures stable operation at extreme loads",
col55publiccopyli4:"Intelligent load distribution and grid-friendly charging.",

col77publiccopyh2:"Inventio 1MW MegaCharge",
col77publiccopyp:"The Inventio 1MW MegaCharge is the ultimate solution for ultra-large mining trucks and heavy industrial EVs, built to handle the future of electric mobility at a megawatt scale. With dual liquid-cooled outputs in CCS & GB/T, it ensures record-breaking charging speeds.",
col77publiccopyh3:"Key Features:",
col77publiccopyli1:"1MW power delivery for the heaviest EV applications.",
col77publiccopyli2:"State-of-the-art liquid cooling for stable ultra-fast charging.",
col77publiccopyli3:"Robust industrial-grade construction for mining environments.",
col77publiccopyli4:"Future-ready platform compatible with evolving megawatt charging standards (MCS-ready).",
},
 hi:{
col4dch2:"स्मार्ट ऊर्जा नियंत्रण",
col4dch3:"सिर्फ ऊर्जा प्रबंधन नहीं — VNT एक पूर्ण ईवी ऊर्जा इकोसिस्टम है।",
col5dcp:"अपने VNT चार्जिंग सिस्टम का प्रदर्शन अधिकतम करें, जिसमें सहज पावर मीटरिंग और बुद्धिमान ऊर्जा अनुकूलन सुविधाएँ अंतर्निर्मित हैं।",
col2dch3:"डीसी फास्ट चार्जर क्यों?",
col2dcp:"क्योंकि समय महत्वपूर्ण है। एक डीसी फास्ट चार्जर आपके इलेक्ट्रिक वाहन की बैटरी को सीधे तेज़ और उच्च-शक्ति वाला चार्जिंग प्रदान करता है—जिससे प्रतीक्षा समय घंटों से मिनटों में बदल जाता है। चलते-फिरते ड्राइवरों, व्यवसायों और सार्वजनिक चार्जिंग नेटवर्क के लिए आदर्श, डीसी फास्ट चार्ज",
col1dch4:"मिलिए तेज़ चार्जिंग के भविष्य से — डीसी फास्ट चार्जर।",
col1dch2:"तेज़, स्मार्ट और भविष्य के लिए तैयार — डीसी फास्ट चार्जर एक स्टाइलिश और शक्तिशाली पैकेज में अगली पीढ़ी का ईवी चार्जिंग प्रदान करता है। यह रोज़मर्रा के ड्राइवरों और ईवी उत्साही दोनों के लिए डिज़ाइन किया गया है, जो सरल उपयोग को उन्नत प्रदर्शन के साथ जोड़ता है। संचालन में सरल। प्रभावशाली बनाने के लिए निर्मित।",
col19dch2:"स्मार्ट सार्वजनिक चार्जिंग",
col19dch4:"देखें कि DC-FAST कैसे घर पर एक पूर्ण समाधान का हिस्सा है।",
col66pubh2:"Inventio 30kW दीवार पर लगने वाला चार्जर",
col66pubp:"कॉम्पैक्ट लेकिन शक्तिशाली, Inventio 30kW वॉल बॉक्स छोटे ईवी और पैसेंजर कारों के लिए डिज़ाइन किया गया है, जो कम जगह में भरोसेमंद चार्जिंग प्रदर्शन प्रदान करता है। रेजिडेंशियल कॉम्प्लेक्स, ऑफिस पार्किंग और छोटे कमर्शियल सेटअप्स के लिए आदर्श, यह वॉल-माउंटेड चार्जर अधिकतम लचीलापन के लिए CCS और GB/T दोनों कम्पैटिबिलिटी प्रदान करता है।",
col66pubh3:"मुख्य विशेषताएँ:",
col66publi1:"दैनिक चार्जिंग जरूरतों वाले कारों और हल्के ईवी के लिए उपयुक्त।",
col66publi2:"दीवार या स्टैंड (पेडेस्टल) पर लगाने के लिए कॉम्पैक्ट डिज़ाइन।",
col66publi3:"रिमोट मैनेजमेंट के लिए OCPP सपोर्ट के साथ स्मार्ट मॉनिटरिंग।",
col66publi4:"निजी और अर्ध-सार्वजनिक उपयोगों के लिए किफायती समाधान।",

col8pubh2:"Inventio 60kW फास्ट चार्जर",
col8pubp:"Inventio 60kW फास्ट चार्जर इलेक्ट्रिक वाहनों (EV), राइड-हेलिंग फ्लीट्स और चार्जिंग हब्स के लिए डिज़ाइन किया गया है, जिन्हें तेज़ी और दक्षता की आवश्यकता होती है। यह सिंगल या डुअल गन कॉन्फ़िगरेशन में उपलब्ध है और CCS और GB/T विकल्पों के साथ सही शक्ति और स्केलेबिलिटी का संतुलन प्रदान करता है।",
col8pubh3:"मुख्य विशेषताएँ:",
col8publi1:"मल्टी-व्हीकल चार्जिंग के लिए डुअल-पोर्ट इंटेलिजेंट पावर शेयरिंग।",
col8publi2:"पब्लिक चार्जिंग स्टेशनों और हाईवे कॉरिडोर के लिए मजबूत डिज़ाइन।",
col8publi3:"विश्वसनीय अपटाइम और स्मार्ट डायग्नॉस्टिक्स के साथ फ्लीट संचालन का समर्थन करता है।",
col8publi4:"फ्लीट मैनेजर्स के लिए रिमोट मॉनिटरिंग और स्मार्ट रिपोर्टिंग।",

col10pubh2:"Inventio 120kW चार्जएक्सप्रेस",
col10pubp:"Inventio 120kW चार्जएक्सप्रेस पैसेंजर ईवी, फ्लीट्स और एम्बुलेंस व मिनी-बस जैसी मिड-साइज वाहनों के लिए तेज़ चार्जिंग प्रदान करता है, और उच्च अपटाइम तथा विश्वसनीयता सुनिश्चित करता है। यह सिंगल और डुअल गन विकल्पों में उपलब्ध है और CCS और GB/T सपोर्ट के साथ आता है।",
col10pubh3:"मुख्य विशेषताएँ:",
col10publi1:"फ्लीट डिपो, आपातकालीन वाहन और लॉजिस्टिक्स हब के लिए अनुकूलित।",
col10publi2:"मिड-साइज ईवी के लिए तेज़ चार्जिंग, जिससे संचालन दक्षता में सुधार होता है।",
col10publi3:"इंटेलिजेंट लोड मैनेजमेंट और स्केलेबिलिटी के लिए मॉड्यूलर डिज़ाइन।",
col10publi4:"फ्लीट मैनेजर्स के लिए रिमोट मॉनिटरिंग और स्मार्ट रिपोर्टिंग।",

col14pubh2:"Inventio 240kW हाइपरचार्ज",
col14pubp:"Inventio 240kW हाइपरचार्ज इलेक्ट्रिक बस, ट्रक और कमर्शियल फ्लीट्स के लिए डिज़ाइन किया गया है, जिन्हें अल्ट्रा-फास्ट चार्जिंग की आवश्यकता होती है। यह डुअल गन आउटपुट और CCS/GB/T कम्पैटिबिलिटी के साथ आता है, जिससे इंटेंसिव ऑपरेशन्स में तेज़ टर्नअराउंड सुनिश्चित होता है।",
col14pubh3:"मुख्य विशेषताएँ:",
col14publi1:"उच्च क्षमता वाली फ्लीट्स और सार्वजनिक परिवहन के लिए तेज़ चार्जिंग।",
col14publi2:"भविष्य में फ्लीट विस्तार के लिए स्केलेबल इंफ्रास्ट्रक्चर तैयार।",
col14publi3:"दक्षता के लिए उन्नत कूलिंग और पावर-शेयरिंग तकनीक।",
col14publi4:"उच्च-रिज़ॉल्यूशन टचस्क्रीन के साथ यूज़र-फ्रेंडली इंटरफेस।",

col1pubcopyh2:"Inventio 320kW टर्बोचार्ज",
col1pubcopyp:"Inventio 320kW टर्बोचार्ज इलेक्ट्रिक ट्रक, निर्माण उपकरण और माइनिंग मशीनरी के लिए विशेष रूप से डिज़ाइन किया गया है, जो हैवी-ड्यूटी ईवी ऑपरेशन्स के लिए आवश्यक शक्ति प्रदान करता है। इसका डुअल गन कॉन्फ़िगरेशन और CCS/GB/T सपोर्ट इसे औद्योगिक वातावरण में एक पावरहाउस बनाता है।",
col1pubcopyh3:"मुख्य विशेषताएँ:",
col1pubcopyli1:"औद्योगिक और ऑफ-रोड ईवी के लिए अल्ट्रा-हाई चार्जिंग पावर।",
col1pubcopyli2:"माइनिंग और निर्माण कार्यों के लिए मजबूत डिज़ाइन।",
col1pubcopyli3:"लगातार उच्च-लोड प्रदर्शन के लिए इंटेलिजेंट थर्मल मैनेजमेंट।",
col1pubcopyli4:"एनर्जी मैनेजमेंट सिस्टम के साथ सहज इंटीग्रेशन।",


col3publiccopyh2:"Inventio 400kW अल्ट्राचार्ज",
col3publiccopyp:"Inventio 400kW अल्ट्राचार्ज बड़े माइनिंग ट्रक और हैवी-ड्यूटी उपकरणों के लिए डिज़ाइन किया गया है। यह लिक्विड कूलिंग तकनीक को अपनाता है ताकि सुरक्षित और स्थिर उच्च-शक्ति चार्जिंग प्रदान की जा सके। डुअल CCS और GB/T आउटपुट के साथ, यह चरम परिस्थितियों में उच्चतम दक्षता सुनिश्चित करता है।",
col3publiccopyh3:"मुख्य विशेषताएँ:",
col3publiccopyli1:"सुरक्षित अल्ट्रा‑फास्ट ऊर्जा हस्तांतरण के लिए लिक्विड-कूल्ड गन्स।",
col3publiccopyli2:"मांगलिक माइनिंग और औद्योगिक साइटों के लिए डिज़ाइन किया गया।",
col3publiccopyli3:"पूर्वानुमानित मेंटेनेंस फीचर्स के साथ 24/7 विश्वसनीयता।",
col3publiccopyli4:"नेक्स्ट-जन ईवी के लिए अल्ट्रा-हाई वोल्टेज प्लेटफॉर्म का समर्थन करता है।",


col55publiccopyh2:"Inventio 640kW थंडरचार्ज",
col55publiccopyp:"बड़े माइनिंग ईवी और अल्ट्रा-हैवी मशीनरी के लिए एक वास्तविक गेम-चेंजर, Inventio 640kW थंडरचार्ज हाई-पावर चार्जिंग में नए मानक स्थापित करता है। यह डुअल लिक्विड-कूल्ड कनेक्टर्स से लैस है, जो मिशन-क्रिटिकल ऑपरेशन्स के लिए बेजोड़ प्रदर्शन प्रदान करता है।",
col55publiccopyh3:"मुख्य विशेषताएँ:",
col55publiccopyli1:"सबसे बड़े ईवी फ्लीट्स के लिए तेज़तर्रार चार्जिंग।",
col55publiccopyli2:"औद्योगिक-ग्रेड डिज़ाइन के साथ उच्चतम टिकाऊपन।",
col55publiccopyli3:"उन्नत लिक्विड कूलिंग चरम लोड पर स्थिर संचालन सुनिश्चित करती है।",
col55publiccopyli4:"इंटेलिजेंट लोड वितरण और ग्रिड-फ्रेंडली चार्जिंग।",

col77publiccopyh2:"Inventio 1MW मेगाचार्ज",
col77publiccopyp:"Inventio 1MW मेगाचार्ज अल्ट्रा-बड़े माइनिंग ट्रक और हैवी इंडस्ट्रियल ईवी के लिए अंतिम समाधान है, जो मेगावाट स्तर पर इलेक्ट्रिक मोबिलिटी के भविष्य को संभालने के लिए बनाया गया है। यह डुअल लिक्विड-कूल्ड आउटपुट के साथ CCS और GB/T समर्थन प्रदान करता है, जिससे रिकॉर्ड तोड़ चार्जिंग स्पीड सुनिश्चित होती है।",
col77publiccopyh3:"मुख्य विशेषताएँ:",
col77publiccopyli1:"सबसे भारी ईवी एप्लिकेशन के लिए 1MW पावर डिलीवरी।",
col77publiccopyli2:"उन्नत लिक्विड कूलिंग के साथ स्थिर अल्ट्रा-फास्ट चार्जिंग।",
col77publiccopyli3:"माइनिंग पर्यावरण के लिए मजबूत औद्योगिक-ग्रेड निर्माण।",
col77publiccopyli4:"भविष्य के लिए तैयार प्लेटफॉर्म, जो विकसित हो रहे मेगावाट चार्जिंग स्टैंडर्ड्स के साथ संगत है (MCS-रेडी)।",
 },
 ar:{
col4dch2:"التحكم الذكي في الطاقة",
col4dch3:"ليس مجرد إدارة للطاقة — VNT هو نظام بيئي كامل لطاقة السيارات الكهربائية.",
col5dcp:"قم بتحقيق أقصى أداء لنظام شحن VNT الخاص بك، مع ميزات قياس الطاقة السلسة وتحسين الطاقة الذكي المدمجة.",
col2dch3:"لماذا شاحن سريع DC؟",
col2dcp:"لأن الوقت ثمين. يقوم شاحن DC السريع بشحن بطارية سيارتك الكهربائية مباشرةً بسرعة وطاقة عالية — مما يحوّل وقت الانتظار من ساعات إلى دقائق. مثالي للسائقين المتنقلين، والشركات، وشبكات الشحن العامة، شاحن DC السريع…",
col1dch4:"تعرّف على مستقبل الشحن السريع — شاحن DC السريع.",
col1dch2:"سريع، ذكي، ومستعد للمستقبل — يوفر شاحن DC السريع الجيل القادم من شحن السيارات الكهربائية في حزمة أنيقة وقوية. تم تصميمه لكل من السائقين اليوميين وعشاق السيارات الكهربائية، حيث يجمع بين سهولة الاستخدام والأداء المتقدم. سهل التشغيل. مصمم ليترك انطباعاً قوياً.",
col19dch2:"الشحن العام الذكي",
col19dch4:"اكتشف كيف يُعد DC-FAST جزءًا من حل متكامل في المنزل.",
col66pubh2:"شاحن Inventio بقدرة 30 كيلوواط مُثبت على الحائط",
col66pubp:`مضغوط ولكنه قوي، تم تصميم **Inventio Wall Box بقدرة 30 كيلوواط** للمركبات الكهربائية الصغيرة والسيارات الركاب، حيث يوفر أداء شحن موثوقًا بتصميم موفر للمساحة.
يُعد مثاليًا **للمجمعات السكنية، ومواقف مكاتب العمل، والمنشآت التجارية الصغيرة**، ويوفر هذا الشاحن المثبت على الحائط توافقًا مع كلٍ من **CCS وGB/T** لتحقيق أقصى قدر من المرونة.`,
col66pubh3:"الميزات الرئيسية:",
col66publi1:"مثالي للسيارات والمركبات الكهربائية الخفيفة التي تحتاج للشحن اليومي.",
col66publi2:"تصميم مضغوط للتركيب على الحائط أو على قاعدة (بيدستال).",
col66publi3:"مراقبة ذكية مع دعم OCPP للإدارة عن بُعد.",
col66publi4:"حل اقتصادي للاستخدامات الخاصة ونصف العامة",

col8pubh2:"شاحن سريع Inventio بقدرة 60 كيلوواط",
col8pubp:"تم تصميم **شاحن Inventio السريع بقدرة 60 كيلوواط** للسيارات الكهربائية (EV) وأسطول خدمات النقل التشاركي ومحطات الشحن التي تتطلب السرعة والكفاءة. وهو متوفر بتكوين **مسدس واحد أو مزدوج** ويقدّم التوازن المثالي بين القوة وقابلية التوسع مع خيارات **CCS وGB/T**.",
col8pubh3:"**الميزات الرئيسية:**",
col8publi1:"مشاركة طاقة ذكية عبر منفذين لشحن عدة مركبات.",
col8publi2:"تصميم قوي لمحطات الشحن العامة والممرات السريعة.",
col8publi3:"يدعم تشغيل الأساطيل مع وقت تشغيل موثوق وتشخيص ذكي.",
col8publi4:"المراقبة عن بُعد والتقارير الذكية لمديري الأساطيل.",

col10pubh2:"Inventio 120kW تشارج إكسبرس",
col10pubp:"يقدّم **Inventio 120kW تشارج إكسبرس** شحنًا سريعًا لمركبات الركاب الكهربائية (EVs)، والأساطيل، والمركبات متوسطة الحجم مثل سيارات الإسعاف والميني باص، ويضمن وقت تشغيل عالي وموثوقية. وهو متوفر بخيارات **مسدس واحد أو مزدوج** ويدعم **CCS وGB/T**.",
col10pubh3:"الميزات الرئيسية:",
col10publi1:"مصمّم لمراكز الأساطيل والمركبات الطارئة ومراكز اللوجستيات.",
col10publi2:"شحن أسرع لمركبات EV متوسطة الحجم، مما يحسّن كفاءة التشغيل.",
col10publi3:"إدارة ذكية للحمل وتصميم معياري من أجل قابلية التوسع.",
col10publi4:"المراقبة عن بُعد والتقارير الذكية لمديري الأساطيل.",

col14pubh2:"Inventio 240kW هايبر تشارج",
col14pubp:"تم تصميم **Inventio 240kW هايبر تشارج** للحافلات الكهربائية والشاحنات والأساطيل التجارية التي تتطلب شحنًا فائق السرعة. ويأتي مع **مخرج مزدوج** وتوافق **CCS/GB/T** لضمان استجابة سريعة في العمليات المكثفة.",
col14pubh3:"الميزات الرئيسية:",
col14publi1:"شحن سريع للأساطيل عالية السعة ووسائل النقل العام.",
col14publi2:"بنية تحتية قابلة للتوسع جاهزة لتوسيع الأساطيل في المستقبل.",
col14publi3:"تقنية تبريد ومشاركة طاقة متقدمة من أجل الكفاءة.",
col14publi4:"واجهة مستخدم سهلة مع شاشة لمس عالية الدقة.",

col1pubcopyh2:"Inventio 320kW توربو تشارج",
col1pubcopyp:"تم تصميم **Inventio 320kW توربو تشارج** خصيصًا للشاحنات الكهربائية ومعدات البناء وآلات التعدين، ويوفر القوة اللازمة لعمليات EV الثقيلة. يوفّر تكوين **مسدسين مزدوجين** ودعم **CCS/GB/T** ليكون قوة مهيمنة في البيئات الصناعية.",
col1pubcopyh3:"الميزات الرئيسية",
col1pubcopyli1:"قدرة شحن فائقة الارتفاع للمركبات الكهربائية الصناعية وخارج الطريق.",
col1pubcopyli2:"تصميم قوي لأعمال التعدين والبناء.",
col1pubcopyli3:"إدارة حرارية ذكية لأداء عالي التحمل بشكل مستمر",
col1pubcopyli4:"تكامل سلس مع نظام إدارة الطاقة",

col3publiccopyh2:"Inventio شحن فائق بقوة 400 كيلوواط",
col3publiccopyp:"تم تصميم Inventio شحن فائق بقوة 400 كيلوواط للشاحنات الكبيرة الخاصة بالتعدين والمعدات الثقيلة. يعتمد تقنية التبريد بالسائل لتوفير شحن عالي الطاقة بشكل آمن ومستقر. مع مخرجي CCS وGB/T المزدوجين، يضمن أعلى كفاءة في الظروف القاسية.",
col3publiccopyh3:"لميزات الرئيسية:",
col3publiccopyli1:"مسدسات مبردة بالسائل لنقل الطاقة الآمن فائق السرعة",
col3publiccopyli2:"مصمم لمواقع التعدين الصناعية والمواقع المغناطيسية",
col3publiccopyli3:"موثوقية على مدار الساعة مع ميزات الصيانة التنبؤية",
col3publiccopyli4:"يدعم منصة الجهد العالي للغاية للمركبات الكهربائية من الجيل القادم",


col55publiccopyh2:"Inventio شحن Thunder بقوة 640 كيلوواط",
col55publiccopyp:`يُعد Inventio ThunderCharge بقوة 640 كيلوواط تغييرًا حقيقيًا لقواعد اللعبة للمركبات الكهربائية الكبيرة الخاصة بالتعدين والآليات الثقيلة للغاية، حيث يضع معايير جديدة في الشحن عالي الطاقة. وهو مزود بوصلات مزدوجة مبردة بالسائل، مما يوفر أداءً لا مثيل له للعمليات الحيوية.**`,
col55publiccopyh3:"لميزات الرئيسية:",
col55publiccopyli1:"شحن سريع للغاية لأكبر أساطيل المركبات الكهربائية",
col55publiccopyli2:"أعلى درجات المتانة مع تصميم صناعي المستوى",
col55publiccopyli3:"يضمن التبريد السائل المتقدم التشغيل المستقر تحت الأحمال القصوى.",
col55publiccopyli4:"توزيع ذكي للأحمال وشحن متوافق مع الشبكة الكهربائية",

col77publiccopyh2:"Inventio شحن Mega بقوة 1 ميغاواط",
col77publiccopyp:"عد Inventio MegaCharge بقوة 1 ميغاواط الحل النهائي للشاحنات التعدينية الكبيرة والمركبات الكهربائية الصناعية الثقيلة، حيث تم تصميمه للتعامل مع مستقبل التنقل الكهربائي على مستوى الميغاواط. يوفر دعمًا لمخرجات مزدوجة مبردة بالسائل من نوع CCS وGB/T، مما يضمن سرعات شحن قياسية.",
col77publiccopyh3:"لميزات الرئيسية:",
col77publiccopyli1:"توصيل طاقة بقوة 1 ميغاواط لأثقل تطبيقات المركبات الكهربائية",
col77publiccopyli2:"شحن فائق السرعة ومستقر مع التبريد السائل المتقدم",
col77publiccopyli3:"بناء صناعي قوي من الدرجة العالية لبيئة التعدين",
col77publiccopyli4:"منصة جاهزة للمستقبل ومتوافقة مع معايير الشحن الميغاواط المتطورة (جاهزة لـ MCS)",
 },
 es:{
col4dch2:"control inteligente de energía",
col4dch3:"No solo gestión energética — VNT es un ecosistema completo de energía para vehículos eléctricos.",
col5dcp:"Maximice el rendimiento de su sistema de carga VNT, con medición de energía intuitiva y funciones integradas de optimización inteligente de energía.",
col2dch3:"¿Por qué un cargador rápido de CC?",
col2dcp:"Porque el tiempo es valioso. Un cargador rápido de CC proporciona carga directa y de alta potencia a la batería de su vehículo eléctrico, reduciendo el tiempo de espera de horas a minutos. Ideal para conductores en movimiento, empresas y redes públicas de carga, el cargador rápido de CC…",
col1dch4:"Conozca el futuro de la carga rápida: el cargador rápido de CC.",
col1dch2:"Rápido, inteligente y preparado para el futuro — el cargador rápido de CC ofrece la próxima generación de carga para vehículos eléctricos en un paquete elegante y potente. Diseñado tanto para conductores cotidianos como para entusiastas de los vehículos eléctricos, combina facilidad de uso con rendimiento avanzado. Fácil de operar. Creado para impresionar.",
col19dch2:"Carga pública inteligente",
col19dch4:"Vea cómo DC-FAST forma parte de una solución completa para el hogar.",
col66pubh2:"Cargador de pared Inventio de 30 kW",
col66pubp:"Compacto pero potente, el Wallbox Inventio de 30 kW está diseñado para vehículos eléctricos pequeños y autos de pasajeros, ofreciendo un rendimiento de carga confiable en espacios reducidos. Ideal para complejos residenciales, estacionamientos de oficinas y configuraciones comerciales pequeñas, este cargador montado en pared ofrece compatibilidad con CCS y GB/T para máxima flexibilidad.",
col66pubh3:"Características principales",
col66publi1:"Adecuado para coches y vehículos eléctricos ligeros con necesidades de carga diaria.",
col66publi2:"Diseño compacto para instalación en pared o pedestal",
col66publi3:"Monitoreo inteligente con soporte OCPP para gestión remota.",
col66publi4:"Solución económica para usos privados y semipúblicos.",
col8pubh2:"Cargador rápido Inventio de 60 kW",
col8pubp:"El cargador rápido Inventio de 60 kW está diseñado para vehículos eléctricos (EV), flotas de transporte compartido y centros de carga que requieren velocidad y eficiencia. Está disponible en configuraciones de una o dos pistolas y ofrece un equilibrio perfecto entre potencia y escalabilidad con opciones de conectores CCS y GB/T.",
col8pubh3:"Características principales",
col8publi1:"Distribución inteligente de energía con doble puerto para carga de múltiples vehículos.",
col8publi2:"Diseño robusto para estaciones de carga públicas y corredores de autopistas.",
col8publi3:"Soporta operaciones de flotas con alta disponibilidad y diagnósticos inteligentes.",
col8publi4:"Monitoreo remoto y generación de informes inteligentes para gestores de flotas.",
col10pubh2:"Inventio ChargeExpress de 120 kW",
col10pubp:"El Inventio ChargeExpress de 120 kW proporciona carga rápida para vehículos eléctricos de pasajeros, flotas, ambulancias y vehículos medianos como minibuses, garantizando alta disponibilidad y fiabilidad. Está disponible en configuraciones de una o dos pistolas y es compatible con conectores CCS y GB/T.",
col10pubh3:"Características principales:",
col10publi1:"Optimizado para depósitos de flotas, vehículos de emergencia y centros logísticos.",
col10publi2:"Carga rápida para vehículos eléctricos medianos que mejora la eficiencia operativa.",
col10publi3:"Diseño modular para gestión inteligente de carga y escalabilidad.",
col10publi4:"Monitoreo remoto y generación de informes inteligentes para gestores de flotas.",
col14pubh2:"Inventio Hypercharge de 240 kW",
col14pubp:"El Inventio Hypercharge de 240 kW está diseñado para autobuses eléctricos, camiones y flotas comerciales que requieren carga ultrarrápida. Viene con salida de doble pistola y compatibilidad con CCS/GB/T, lo que garantiza una rotación rápida en operaciones intensivas.",
col14pubh3:"Características principales:",
col14publi1:"Carga rápida para flotas de alta capacidad y transporte público.",
col14publi2:"Infraestructura escalable preparada para la expansión futura de flotas.",
col14publi3:"Tecnología avanzada de refrigeración y distribución de energía para una mayor eficiencia.",
col14publi4:"Interfaz fácil de usar con pantalla táctil de alta resolución.",
col1pubcopyh2:"Inventio Turbocharge de 320 kW",
col1pubcopyp:"El Inventio Turbocharge de 320 kW está especialmente diseñado para camiones eléctricos, equipos de construcción y maquinaria minera, proporcionando la potencia necesaria para operaciones de vehículos eléctricos de alta exigencia. Su configuración de doble pistola y compatibilidad con CCS/GB/T lo convierten en una potencia confiable en entornos industriales.",
col1pubcopyh3:"Características principales:",
col1pubcopyli1:"Potencia de carga ultraalta para vehículos eléctricos industriales y todoterreno.",
col1pubcopyli2:"Diseño robusto para operaciones mineras y de construcción",
col1pubcopyli3:"Gestión térmica inteligente para un rendimiento continuo bajo cargas elevadas.",
col1pubcopyli4:"Integración fluida con sistemas de gestión energética.",
col3publiccopyh2:"Inventio Ultracarga de 400 kW",
col3publiccopyp:"El Inventio Ultracarga de 400 kW está diseñado para grandes camiones mineros y equipos de alta exigencia. Adopta tecnología de refrigeración líquida para proporcionar una carga de alta potencia segura y estable. Con salida dual CCS y GB/T, garantiza la máxima eficiencia incluso en condiciones extremas.",
col3publiccopyh3:"Características principales:",
col3publiccopyli1:"Pistolas refrigeradas por líquido para una transferencia de energía ultrarrápida y segura.",
col3publiccopyli2:"Diseñado para sitios mineros y industriales de alta demanda.",
col3publiccopyli3:"Fiabilidad 24/7 con funciones de mantenimiento predictivo.",
col3publiccopyli4:"Compatible con plataformas de ultraalto voltaje para vehículos eléctricos de próxima generación.",
col55publiccopyh2:"Inventio 640kW CargaTrueno",
col55publiccopyp:"Un verdadero cambio de juego para los grandes vehículos eléctricos de minería y la maquinaria ultra pesada, el Inventio 640kW CargaTrueno establece nuevos estándares en la carga de alta potencia. Está equipado con dos conectores con refrigeración líquida, que ofrecen un rendimiento incomparable para operaciones críticas y de misión.",
col55publiccopyh3:"Características principales:",
col55publiccopyli1:"Carga ultrarrápida para las flotas de vehículos eléctricos más grandes.",
col55publiccopyli2:"Máxima durabilidad con diseño de grado industrial.",
col55publiccopyli3:"La avanzada refrigeración líquida garantiza un funcionamiento estable bajo cargas extremas.",
col55publiccopyli4:"Distribución inteligente de carga y carga compatible con la red",
col77publiccopyh2:"Inventio 1MW MegaCharge",
col77publiccopyp:"Inventio 1MW MegaCharge es la solución definitiva para camiones mineros ultragrandes y vehículos eléctricos industriales pesados, diseñada para manejar el futuro de la movilidad eléctrica a escala de megavatios. Con salidas duales refrigeradas por líquido compatibles con CCS y GB/T, garantiza velocidades de carga récord.",
col77publiccopyh3:"Características principales:",
col77publiccopyli1:"Entrega de 1MW de potencia para las aplicaciones EV más pesadas.",
col77publiccopyli2:"Carga ultrarrápida estable con refrigeración líquida avanzada.",
col77publiccopyli3:"Construcción robusta de grado industrial para entornos mineros.",
col77publiccopyli4:"Plataforma preparada para el futuro, compatible con los estándares de carga en megavatios en evolución (MCS-ready).",
 },
 'pt-BR':{
col4dch2:"Controle Inteligente de Energia",
col4dch3:"Não é apenas gerenciamento de energia — a VNT é um ecossistema completo de energia para veículos elétricos.",
col5dcp:"Maximize o desempenho do seu sistema de carregamento VNT, com medição de energia intuitiva e recursos inteligentes de otimização de energia integrados.",
col2dch3:"Por que um carregador rápido DC?",
col2dcp:"Porque o tempo é valioso. Um carregador rápido DC fornece carregamento direto, rápido e de alta potência para a bateria do seu veículo elétrico — transformando o tempo de espera de horas em minutos. Ideal para motoristas em movimento, empresas e redes públicas de carregamento, o carregador rápido DC…",
col1dch4:"Conheça o futuro do carregamento rápido — Carregador Rápido DC.",
col1dch2:"Rápido, inteligente e pronto para o futuro — o Carregador Rápido DC oferece a próxima geração de carregamento de veículos elétricos em um pacote elegante e poderoso. Projetado tanto para motoristas do dia a dia quanto para entusiastas de veículos elétricos, combina facilidade de uso com desempenho avançado. Operação simples. Construído para impressionar.",
col19dch2:"Carregamento Público Inteligente",
col19dch4:"Veja como o DC-FAST faz parte de uma solução completa em casa.",
col66pubh2:"Carregador de parede Inventio 30kW",
col66pubp:"Compacto, mas poderoso, o Inventio 30kW Wall Box é projetado para pequenos EVs e carros de passageiros, oferecendo desempenho de carregamento confiável em um design que economiza espaço. Ideal para complexos residenciais, estacionamento de escritórios e pequenas instalações comerciais, este carregador de parede oferece compatibilidade tanto com CCS quanto com GB/T para máxima flexibilidade.",
col66pubh3:"Principais características:",
col66publi1:"Perfeito para carros e EVs leves com necessidades diárias de carregamento.",
col66publi2:"Design compacto para instalação na parede ou em pedestal.",
col66publi3:"Monitoramento inteligente com suporte OCPP para gerenciamento remoto",
col66publi4:"Solução econômica para aplicações privadas e semipúblicas.",

col8pubh2:"Carregador rápido Inventio de 60kW",
col8pubp:"O carregador rápido Inventio de 60kW foi projetado para veículos elétricos (EV), frotas de transporte por aplicativo e centros de carregamento que exigem velocidade e eficiência. Está disponível em configurações de pistola única ou dupla e oferece o equilíbrio ideal entre potência e escalabilidade com opções CCS e GB/T.",
col8pubh3:"Principais características:",
col8publi1:"Compartilhamento inteligente de energia com porta dupla para carregamento de múltiplos veículos.",
col8publi2:"Design robusto para estações de carregamento públicas e corredores rodoviários.",
col8publi3:"Suporta operações de frota com tempo de atividade confiável e diagnósticos inteligentes.",
col8publi4:"Monitoramento remoto e relatórios inteligentes para gestores de frotas.",

col10pubh2:"Inventio ChargeExpress de 120kW",
col10pubp:"O Inventio ChargeExpress de 120kW oferece carregamento rápido para veículos elétricos de passageiros, frotas, ambulâncias e microônibus de médio porte, garantindo alta disponibilidade e confiabilidade. Está disponível nas opções de pistola única e dupla, com suporte para CCS e GB/T.",
col10pubh3:"Principais características:",
col10publi1:"Otimizado para depósitos de frotas, veículos de emergência e centros logísticos.",
col10publi2:"Carregamento rápido para veículos elétricos de médio porte, melhorando a eficiência operacional.",
col10publi3:"Design modular para gerenciamento inteligente de carga e escalabilidade.",
col10publi4:"Monitoramento remoto e relatórios inteligentes para gestores de frotas.",

col14pubh2:"Inventio HyperCharge de 240kW",
col14pubp:"O Inventio HyperCharge de 240kW foi projetado para ônibus elétricos, caminhões e frotas comerciais que exigem carregamento ultrarrápido. Ele oferece saída dupla e compatibilidade com CCS/GB/T, garantindo uma rápida rotatividade em operações intensivas.",
col14pubh3:"Principais características:",
col14publi1:"Carregamento rápido para frotas de alta capacidade e transporte público.",
col14publi2:"Infraestrutura escalável preparada para expansão futura da frota.",
col14publi3:"Tecnologia avançada de resfriamento e compartilhamento de energia para maior eficiência.",
col14publi4:"Interface amigável ao usuário com tela sensível ao toque de alta resolução.",

col1pubcopyh2:"Inventio TurboCharge de 320kW",
col1pubcopyp:"O Inventio TurboCharge de 320kW foi especialmente projetado para caminhões elétricos, equipamentos de construção e máquinas de mineração, fornecendo a potência necessária para operações de veículos elétricos pesados. Sua configuração de pistola dupla e compatibilidade com CCS/GB/T o tornam uma potência em ambientes industriais.",
col1pubcopyh3:"Principais características:",
col1pubcopyli1:"Potência de carregamento ultrarrápida para veículos elétricos industriais e off-road.",
col1pubcopyli2:"Design robusto para operações de mineração e construção.",
col1pubcopyli3:"Gerenciamento térmico inteligente para desempenho contínuo sob alta carga.",
col1pubcopyli4:"Integração perfeita com sistemas de gerenciamento de energia.",

col3publiccopyh2:"Inventio UltraCharge de 400kW",
col3publiccopyp:"O Inventio UltraCharge de 400kW foi projetado para grandes caminhões de mineração e equipamentos pesados. Ele adota tecnologia de resfriamento líquido para fornecer carregamento de alta potência com segurança e estabilidade. Com saída dupla CCS e GB/T, garante máxima eficiência em condições extremas.",
col3publiccopyh3:"Principais características:",
col3publiccopyli1:"Pistolas resfriadas a líquido para transferência de energia ultrarrápida e segura.",
col3publiccopyli2:"Projetado para locais de mineração e industriais exigentes.",
col3publiccopyli3:"Confiabilidade 24/7 com recursos de manutenção preditiva.",
col3publiccopyli4:"Suporte para plataforma de ultra-alta voltagem para veículos elétricos de próxima geração.",


col55publiccopyh2:"Inventio ThunderCharge de 640kW",
col55publiccopyp:"Um verdadeiro divisor de águas para grandes veículos elétricos de mineração e máquinas ultrapesadas, o Inventio ThunderCharge de 640kW estabelece novos padrões em carregamento de alta potência. Equipado com conectores duplos resfriados a líquido, oferece desempenho incomparável para operações críticas.",
col55publiccopyh3:"Principais características:",
col55publiccopyli1:"Carregamento ultrarrápido para as maiores frotas de veículos elétricos.",
col55publiccopyli2:"Durabilidade máxima com design de nível industrial.",
col55publiccopyli3:"O resfriamento líquido avançado garante operação estável sob cargas extremas.",
col55publiccopyli4:"Distribuição inteligente de carga e carregamento compatível com a rede elétrica.",

col77publiccopyh2:"Inventio MegaCharge de 1MW",
col77publiccopyp:"O Inventio MegaCharge de 1MW é a solução definitiva para caminhões de mineração ultragrandes e veículos elétricos industriais pesados, projetado para atender ao futuro da mobilidade elétrica em nível de megawatts. Com saída dupla resfriada a líquido e suporte para CCS e GB/T, garante velocidades de carregamento recordes.",
col77publiccopyh3:"Principais características:",
col77publiccopyli1:"Entrega de 1MW de potência para as aplicações de veículos elétricos mais pesadas.",
col77publiccopyli2:"Carregamento ultrarrápido e estável com resfriamento líquido avançado.",
col77publiccopyli3:"Construção robusta de nível industrial para ambientes de mineração.",
col77publiccopyli4:"Plataforma preparada para o futuro, compatível com os padrões emergentes de carregamento em megawatts (pronta para MCS).",
 },
 de: {
col4dch2:"Intelligente Energieverwaltung",
col4dch3:"Nicht nur Energiemanagement — VNT ist ein komplettes Energie-Ökosystem für Elektrofahrzeuge.",
col5dcp:"Maximieren Sie die Leistung Ihres VNT-Ladesystems mit intuitiver Energiemessung und integrierten intelligenten Energieoptimierungsfunktionen.",
col2dch3:"Warum ein DC-Schnellladegerät?",
col2dcp:"Weil Zeit wertvoll ist. Ein DC-Schnellladegerät liefert direktes, schnelles und leistungsstarkes Laden der Batterie Ihres Elektrofahrzeugs — und verwandelt Wartezeiten von Stunden in Minuten. Ideal für mobile Fahrer, Unternehmen und öffentliche Ladeinfrastrukturen, das DC-Schnellladegerät…",
col1dch4:"Erleben Sie die Zukunft des Schnellladens — DC-Schnellladegerät.",
col1dch2:"Schnell, intelligent und zukunftsbereit — das DC-Schnellladegerät bietet die nächste Generation des Ladens von Elektrofahrzeugen in einem eleganten und leistungsstarken Paket. Entwickelt sowohl für den täglichen Fahrer als auch für Elektrofahrzeug-Enthusiasten, verbindet es einfache Bedienung mit hoher Leistung. Einfache Handhabung. Entwickelt, um zu beeindrucken.",
col19dch2:"Intelligentes öffentliches Laden",
col19dch4:"Sehen Sie, wie DC-FAST Teil einer kompletten Lösung zu Hause ist.",
col66pubh2:"Inventio 30kW Wandladegerät",
col66pubp:"Kompakt, aber leistungsstark: Die Inventio 30kW Wall Box ist für kleine Elektrofahrzeuge (EVs) und Personenkraftwagen konzipiert und bietet zuverlässige Ladeleistung in einem platzsparenden Design. Ideal für Wohnanlagen, Büroparkplätze und kleine gewerbliche Einrichtungen, bietet dieses wandmontierte Ladegerät sowohl CCS- als auch GB/T-Kompatibilität für maximale Flexibilität.",
col66pubh3:"Hauptmerkmale:",
col66publi1:"Perfekt für Autos und leichte Elektrofahrzeuge mit täglichem Ladebedarf.",
col66publi2:"Kompaktes Design zur Wand- oder Sockelmontage.",
col66publi3:"Intelligentes Monitoring mit OCPP-Unterstützung für Fernverwaltung.",
col66publi4:"Kostengünstige Lösung für private und halböffentliche Anwendungen.",

col8pubh2:"Inventio-Schnellladegerät mit 60 kW",
col8pubp:"Das Schnellladegerät Inventio mit 60 kW wurde für Elektrofahrzeuge (EV), App-basierte Transportflotten und Ladezentren entwickelt, die Geschwindigkeit und Effizienz erfordern. Es ist in Konfigurationen mit einem oder zwei Ladeanschlüssen erhältlich und bietet die ideale Balance zwischen Leistung und Skalierbarkeit mit CCS- und GB/T-Optionen.",
col8pubh3:"Hauptmerkmale:",
col8publi1:"Intelligente Energieverteilung mit Doppelanschluss für das Laden mehrerer Fahrzeuge.",
col8publi2:"Robustes Design für öffentliche Ladestationen und Autobahnkorridore.",
col8publi3:"Unterstützt Flottenbetrieb mit zuverlässiger Betriebszeit und intelligenter Diagnostik.",
col8publi4:"Fernüberwachung und intelligente Berichte für Flottenmanager.",

col10pubh2:"Inventio ChargeExpress mit 120 kW",
col10pubp:"Der Inventio ChargeExpress mit 120 kW bietet Schnellladung für Elektro-Pkw, Flottenfahrzeuge, Krankenwagen und mittelgroße Kleinbusse und gewährleistet hohe Verfügbarkeit und Zuverlässigkeit. Er ist mit Einzel- oder Doppelanschluss erhältlich und unterstützt CCS- und GB/T-Standards.",
col10pubh3:"Hauptmerkmale:",
col10publi1:"Optimiert für Flottendepots, Einsatzfahrzeuge und Logistikzentren.",
col10publi2:"Schnellladung für mittelgroße Elektrofahrzeuge zur Verbesserung der Betriebseffizienz.",
col10publi3:"Modulares Design für intelligentes Lademanagement und Skalierbarkeit.",
col10publi4:"Fernüberwachung und intelligente Berichterstattung für Flottenmanager.",

col14pubh2:"Inventio HyperCharge mit 240 kW",
col14pubp:"Der Inventio HyperCharge mit 240 kW wurde für Elektrobusse, Lastwagen und gewerbliche Flotten entwickelt, die ultraschnelles Laden erfordern. Er bietet einen Doppelanschluss und Kompatibilität mit CCS/GB/T, wodurch eine schnelle Fahrzeugwechselrate bei intensiven Betriebsabläufen gewährleistet wird.",
col14pubh3:"Hauptmerkmale:",
col14publi1:"Schnellladung für Hochkapazitätsflotten und öffentlichen Nahverkehr.",
col14publi2:"Skalierbare Infrastruktur, bereit für die zukünftige Erweiterung der Flotte.",
col14publi3:"Fortschrittliche Kühltechnologie und Energieverteilung für höhere Effizienz.",
col14publi4:"Benutzerfreundliche Oberfläche mit hochauflösendem Touchscreen.",

col1pubcopyh2:"Inventio TurboCharge mit 320 kW",
col1pubcopyp:"Der Inventio TurboCharge mit 320 kW wurde speziell für Elektro-Lkw, Baumaschinen und Bergbaugeräte entwickelt und liefert die nötige Leistung für den Betrieb schwerer Elektrofahrzeuge. Seine Doppelanschluss-Konfiguration und die Kompatibilität mit CCS/GB/T machen ihn zu einer leistungsstarken Lösung für industrielle Umgebungen.",
col1pubcopyh3:"Hauptmerkmale",
col1pubcopyli1:"Ultraschnelle Ladeleistung für industrielle und geländegängige Elektrofahrzeuge.",
col1pubcopyli2:"Robustes Design für Bergbau- und Bauarbeiten.",
col1pubcopyli3:"Intelligentes Wärmemanagement für kontinuierliche Leistung unter hoher Last.",
col1pubcopyli4:"Nahtlose Integration mit Energiemanagementsystemen.",


col3publiccopyh2:"Inventio UltraCharge mit 400 kW",
col3publiccopyp:"Der Inventio UltraCharge mit 400 kW wurde für große Bergbau-Lkw und schwere Maschinen entwickelt. Er nutzt Flüssigkeitskühltechnologie, um sicheres und stabiles Hochleistungsladen zu gewährleisten. Mit doppeltem Ausgang (CCS und GB/T) bietet er maximale Effizienz unter extremen Bedingungen.",
col3publiccopyh3:"Hauptmerkmale",
col3publiccopyli1:"Flüssigkeitsgekühlte Ladeanschlüsse für ultraschnelle und sichere Energieübertragung.",
col3publiccopyli2:"Entwickelt für anspruchsvolle Bergbau- und Industrieumgebungen.",
col3publiccopyli3:"Rund-um-die-Uhr-Zuverlässigkeit mit Funktionen für vorausschauende Wartung.",
col3publiccopyli4:"Unterstützung für Ultra-Hochvolt-Plattformen für Elektrofahrzeuge der nächsten Generation.",


col55publiccopyh2:"Inventio ThunderCharge mit 640 kW",
col55publiccopyp:"Ein echter Meilenstein für große elektrische Bergbaufahrzeuge und ultraschwere Maschinen: Der Inventio ThunderCharge mit 640 kW setzt neue Maßstäbe im Hochleistungsladen. Ausgestattet mit doppelt flüssigkeitsgekühlten Steckverbindern bietet er unvergleichliche Leistung für kritische Einsätze.",
col55publiccopyh3:"Hauptmerkmale",
col55publiccopyli1:"Ultraschnelles Laden für die größten Elektrofahrzeugflotten.",
col55publiccopyli2:"Maximale Haltbarkeit durch industrietaugliches Design.",
col55publiccopyli3:"Fortschrittliche Flüssigkeitskühlung gewährleistet einen stabilen Betrieb unter extremen Lastbedingungen.",
col55publiccopyli4:"Intelligente Lastverteilung und netzkompatibles Laden.",

col77publiccopyh2:"Inventio MegaCharge mit 1 MW",
col77publiccopyp:"Der Inventio MegaCharge mit 1 MW ist die ultimative Lösung für ultra-große Bergbau-Lkw und schwere industrielle Elektrofahrzeuge. Er wurde entwickelt, um den Anforderungen der Megawatt-Mobilität der Zukunft gerecht zu werden. Mit doppelt flüssigkeitsgekühltem Ausgang und Unterstützung für CCS und GB/T garantiert er rekordverdächtige Ladegeschwindigkeiten.",
col77publiccopyh3:"Hauptmerkmale",
col77publiccopyli1:"Bereitstellung von 1 MW Leistung für die anspruchsvollsten Anwendungen mit schweren Elektrofahrzeugen.",
col77publiccopyli2:"Ultraschnelles und stabiles Laden mit fortschrittlicher Flüssigkeitskühlung.",
col77publiccopyli3:"Robuste Konstruktion in Industriequalität für den Einsatz in Bergbauumgebungen.",
col77publiccopyli4:"Zukunftssichere Plattform, kompatibel mit den aufkommenden Megawatt-Ladestandards (MCS-ready).",
 },
 ms:{
col4dch2:"Pengurusan Tenaga Pintar",
col4dch3:"Bukan sekadar pengurusan tenaga — VNT adalah ekosistem tenaga lengkap untuk kenderaan elektrik.",
col5dcp:"Maksimumkan prestasi sistem pengecas VNT anda dengan pengukuran tenaga intuitif dan ciri pengoptimuman tenaga pintar yang bersepadu.",
col2dch3:"Mengapa pengecas pantas DC?",
col2dcp:"Kerana masa berharga. Pengecas pantas DC menyediakan pengecasan terus, pantas dan berkuasa tinggi untuk bateri kenderaan elektrik anda — menukar masa menunggu dari jam ke minit. Sesuai untuk pemandu bergerak, perniagaan dan rangkaian pengecasan awam, pengecas pantas DC…",
col1dch4:"Temui masa depan pengecasan pantas — Pengecas Pantas DC.",
col1dch2:"Pantas, pintar dan bersedia untuk masa depan — Pengecas Pantas DC menawarkan generasi seterusnya pengecasan kenderaan elektrik dalam satu pakej yang bergaya dan berkuasa. Direka untuk pemandu harian mahupun peminat kenderaan elektrik, ia menggabungkan kemudahan penggunaan dengan prestasi tinggi. Operasi mudah. Dibina untuk mengagumkan.",
col19dch2:"Pengecasan Awam Pintar",
col19dch4:"Lihat bagaimana DC-FAST menjadi sebahagian daripada penyelesaian lengkap di rumah.",
col66pubh2:"Pengecas Dinding Inventio 30kW",
col66pubp:"Kompak, tetapi berkuasa: Inventio 30kW Wall Box direka untuk kenderaan elektrik (EV) kecil dan kereta penumpang, menawarkan prestasi pengecasan yang boleh dipercayai dalam reka bentuk yang menjimatkan ruang. Sesuai untuk kompleks kediaman, tempat letak kereta pejabat dan kemudahan komersial kecil, pengecas dinding ini menawarkan keserasian CCS dan GB/T untuk fleksibiliti maksimum.",
col66pubh3:"Ciri-ciri utama:",
col66publi1:"Sesuai untuk kereta dan EV ringan dengan keperluan pengecasan harian.",
col66publi2:"Reka bentuk kompak untuk pemasangan di dinding atau podium.",
col66publi3:"Pemantauan pintar dengan sokongan OCPP untuk pengurusan jarak jauh.",
col66publi4:"Penyelesaian kos efektif untuk kegunaan peribadi dan separa awam.",

col8pubh2:"Pengecas pantas Inventio dengan 60 kW",
col8pubp:"Pengecas pantas Inventio 60kW direka untuk kenderaan elektrik (EV), armada pengangkutan aplikasi dan pusat pengecasan yang memerlukan kelajuan dan kecekapan. Ia tersedia dalam konfigurasi satu atau dua pistol dan menawarkan keseimbangan ideal antara kuasa dan kebolehskalaan dengan pilihan CCS dan GB/T.",
col8pubh3:"Ciri-ciri utama",
col8publi1:"Pengagihan tenaga pintar dengan sambungan berganda untuk mengecas berbilang kenderaan.",
col8publi2:"Reka bentuk kukuh untuk stesen pengecasan awam dan koridor lebuh raya.",
col8publi3:"Menyokong operasi armada dengan masa operasi yang boleh dipercayai dan diagnostik pintar.",
col8publi4:"Pemantauan jauh dan laporan pintar untuk pengurus armada.",

col10pubh2:"Inventio ChargeExpress dengan 120 kW",
col10pubp:"Inventio ChargeExpress dengan 120 kW menawarkan pengecasan pantas untuk kereta elektrik, kenderaan armada, ambulans dan van sederhana. Ia memastikan ketersediaan tinggi dan kebolehpercayaan. Ia tersedia dengan sambungan tunggal atau berganda dan menyokong piawaian CCS dan GB/T.",
col10pubh3:"Ciri-ciri utama",
col10publi1:"Dioptimumkan untuk depoh armada, kenderaan operasi dan pusat logistik.",
col10publi2:"Pengecasan pantas untuk kenderaan elektrik bersaiz sederhana bagi meningkatkan kecekapan operasi.",
col10publi3:"Reka bentuk modular untuk pengurusan pengecasan pintar dan kebolehskalaan.",
col10publi4:"Pemantauan jauh dan pelaporan pintar untuk pengurus armada.",

col14pubh2:"Inventio HyperCharge dengan 240 kW",
col14pubp:"Inventio HyperCharge dengan 240 kW direka untuk bas elektrik, lori dan armada komersial yang memerlukan pengecasan ultra pantas. Ia menawarkan sambungan berganda dan keserasian dengan CCS/GB/T, memastikan kadar pertukaran kenderaan yang pantas dalam operasi intensif.",
col14pubh3:"Ciri-ciri utama",
col14publi1:"Pengecasan pantas untuk armada berkapasiti tinggi dan pengangkutan awam.",
col14publi2:"Infrastruktur yang boleh diskala, sedia untuk pengembangan armada pada masa hadapan.",
col14publi3:"Teknologi penyejukan dan pengagihan tenaga yang maju untuk kecekapan yang lebih tinggi.",
col14publi4:"Antara muka mesra pengguna dengan skrin sentuh beresolusi tinggi.",


col1pubcopyh2:"Inventio TurboCharge dengan 320 kW",
col1pubcopyp:"Inventio TurboCharge dengan 320 kW direka khas untuk lori elektrik, jentera pembinaan dan peralatan perlombongan, serta membekalkan kuasa yang diperlukan untuk operasi kenderaan elektrik berat. Konfigurasi sambungan berganda dan keserasian dengan CCS/GB/T menjadikannya penyelesaian berkuasa untuk persekitaran industri.",
col1pubcopyh3:"Ciri-ciri utama",
col1pubcopyli1:"Prestasi pengecasan ultra pantas untuk kenderaan elektrik industri dan lasak.",
col1pubcopyli2:"Reka bentuk yang kukuh untuk kerja perlombongan dan pembinaan.",
col1pubcopyli3:"Pengurusan haba pintar untuk prestasi berterusan di bawah beban tinggi.",
col1pubcopyli4:"Penyepaduan lancar dengan sistem pengurusan tenaga.",


col3publiccopyh2:"Inventio UltraCharge dengan 400 kW",
col3publiccopyp:"Inventio UltraCharge dengan 400 kW direka untuk lori perlombongan besar dan jentera berat. Ia menggunakan teknologi penyejukan cecair untuk memastikan pengecasan berprestasi tinggi yang selamat dan stabil. Dengan output berganda (CCS dan GB/T), ia menawarkan kecekapan maksimum dalam keadaan ekstrem.",
col3publiccopyh3:"Ciri-ciri utama",
col3publiccopyli1:"Penyambung pengecasan yang disejukkan dengan cecair untuk pemindahan tenaga yang ultra pantas dan selamat.",
col3publiccopyli2:"Direka untuk persekitaran perlombongan dan industri yang mencabar.",
col3publiccopyli3:"Kebolehpercayaan sepanjang masa dengan fungsi penyelenggaraan ramalan.",
col3publiccopyli4:"Sokongan untuk platform voltan ultra tinggi bagi kenderaan elektrik generasi akan datang.",

col55publiccopyh2:"Inventio ThunderCharge dengan 640 kW",
col55publiccopyp:"Satu pencapaian sebenar untuk kenderaan perlombongan elektrik bersaiz besar dan jentera ultra berat: Inventio ThunderCharge dengan 640 kW menetapkan penanda aras baharu dalam pengecasan berprestasi tinggi. Dilengkapi dengan penyambung berganda yang disejukkan dengan cecair, ia menawarkan prestasi tiada tandingan untuk operasi kritikal.",
col55publiccopyh3:"Ciri-ciri utama",
col55publiccopyli1:"Pengecasan ultra pantas untuk armada kenderaan elektrik terbesar.",
col55publiccopyli2:"Ketahanan maksimum melalui reka bentuk yang sesuai untuk industri.",
col55publiccopyli3:"Penyejukan cecair yang maju memastikan operasi yang stabil di bawah keadaan beban yang ekstrem.",
col55publiccopyli4:"Pengagihan beban pintar dan pengecasan yang serasi dengan rangkaian.",

col77publiccopyh2:"Inventio MegaCharge dengan 1 MW",
col77publiccopyp:"Inventio MegaCharge dengan 1 MW ialah penyelesaian terbaik untuk lori perlombongan ultra besar dan kenderaan elektrik industri berat. Ia direka untuk memenuhi keperluan mobiliti megawatt masa depan. Dengan output berganda yang disejukkan dengan cecair dan sokongan untuk CCS serta GB/T, ia menjamin kelajuan pengecasan yang luar biasa.",
col77publiccopyh3:"Ciri-ciri utama",
col77publiccopyli1:"Penyediaan kuasa 1 MW untuk aplikasi paling mencabar dengan kenderaan elektrik berat.",
col77publiccopyli2:"Pengecasan ultra pantas dan stabil dengan penyejukan cecair yang maju.",
col77publiccopyli3:"Reka bentuk kukuh bertaraf industri untuk digunakan dalam persekitaran perlombongan.",
col77publiccopyli4:"Platform tahan masa depan, serasi dengan piawaian pengecasan megawatt yang sedang muncul (sedia MCS).",
 },
 th:{
col4dch2:"การจัดการพลังงานอัจฉริยะ",
col4dch3:"ไม่ใช่แค่การจัดการพลังงาน — VNT คือระบบนิเวศพลังงานครบวงจรสำหรับรถยนต์ไฟฟ้า",
col5dcp:"เพิ่มประสิทธิภาพของระบบชาร์จ VNT ของคุณด้วยการวัดพลังงานอย่างชาญฉลาดและฟีเจอร์การปรับแต่งพลังงานอัจฉริยะที่รวมอยู่ภายใน",
col2dch3:"ทำไมต้องใช้เครื่องชาร์จ DC แบบเร็ว?",
col2dcp:"เพราะเวลามีค่า เครื่องชาร์จ DC แบบเร็วจะชาร์จแบตเตอรี่รถยนต์ไฟฟ้าของคุณโดยตรงอย่างรวดเร็วและมีพลังสูง — เปลี่ยนเวลารอจากหลายชั่วโมงให้เหลือเพียงไม่กี่นาที เหมาะอย่างยิ่งสำหรับผู้ขับขี่เคลื่อนที่ ธุรกิจ และโครงข่ายชาร์จสาธารณะ เครื่องชาร์จ DC แบบเร็ว…",
col1dch4:"พบกับอนาคตของการชาร์จเร็ว — เครื่องชาร์จ DC แบบเร็ว",
col1dch2:"เร็ว ฉลาด และพร้อมสำหรับอนาคต — เครื่องชาร์จ DC แบบเร็ว นำเสนอการชาร์จรถยนต์ไฟฟ้ารุ่นถัดไปในแพ็กเกจที่ทันสมัยและทรงพลัง ออกแบบมาสำหรับทั้งผู้ขับขี่ประจำวันและผู้ที่ชื่นชอบรถยนต์ไฟฟ้า ผสมผสานความง่ายในการใช้งานกับประสิทธิภาพสูง การใช้งานง่าย สร้างมาเพื่อสร้างความประทับใจ",
col19dch2:"การชาร์จสาธารณะอัจฉริยะ",
col19dch4:"ดูว่า DC-FAST เป็นส่วนหนึ่งของโซลูชันครบวงจรที่บ้านอย่างไร",
col66pubh2:"เครื่องชาร์จติดผนัง Inventio 30kW",
col66pubp:"กะทัดรัดแต่ทรงพลัง: Inventio 30kW Wall Box ออกแบบมาสำหรับรถยนต์ไฟฟ้า (EV) ขนาดเล็กและรถยนต์โดยสาร ให้ประสิทธิภาพการชาร์จที่เชื่อถือได้ในดีไซน์ที่ประหยัดพื้นที่ เหมาะสำหรับคอมเพล็กซ์ที่อยู่อาศัย ที่จอดรถสำนักงาน และสถานประกอบการขนาดเล็ก เครื่องชาร์จติดผนังนี้รองรับความเข้ากันได้ทั้ง CCS และ GB/T เพื่อความยืดหยุ่นสูงสุด",
col66pubh3:"คุณสมบัติหลัก:",
col66publi1:"เหมาะสำหรับรถยนต์และรถ EV ขนาดเล็กที่มีความต้องการชาร์จรายวัน",
col66publi2:"ดีไซน์กะทัดรัดสำหรับติดตั้งบนผนังหรือฐานตั้ง (โพเดียม)",
col66publi3:"การตรวจสอบอัจฉริยะพร้อมการสนับสนุน OCPP สำหรับการจัดการระยะไกล",
col66publi4:"โซลูชันที่คุ้มค่าสำหรับการใช้งานส่วนตัวและกึ่งสาธารณะ",


col8pubh2:"เครื่องชาร์จเร็ว Inventio กำลังไฟ 60 กิโลวัตต์",
col8pubp:"เครื่องชาร์จเร็ว Inventio ขนาด 60 กิโลวัตต์ ได้รับการออกแบบสำหรับรถยนต์ไฟฟ้า (EV), กลุ่มยานพาหนะขนส่งเพื่อการใช้งาน และศูนย์ชาร์จที่ต้องการความเร็วและประสิทธิภาพ โดยมีให้เลือกทั้งแบบหัวชาร์จเดี่ยวหรือคู่ และมอบสมดุลที่ลงตัวระหว่างพลังงานและความสามารถในการปรับขนาด พร้อมรองรับมาตรฐาน CCS และ GB/T.",
col8pubh3:"คุณสมบัติหลัก",
col8publi1:"การกระจายพลังงานอย่างชาญฉลาดด้วยการเชื่อมต่อหลายจุดสำหรับการชาร์จยานพาหนะหลายคันพร้อมกัน",
col8publi2:"การออกแบบที่แข็งแรงทนทานสำหรับสถานีชาร์จสาธารณะและทางหลวงสายหลัก",
col8publi3:"รองรับการดำเนินงานของกลุ่มยานพาหนะด้วยเวลาทำงานที่เชื่อถือได้และระบบวิเคราะห์อัจฉริยะ",
col8publi4:"การตรวจสอบระยะไกลและรายงานอัจฉริยะสำหรับผู้จัดการกลุ่มยานพาหนะ",

col10pubh2:"Inventio ChargeExpress กำลังไฟ 120 กิโลวัตต์",
col10pubp:"Inventio ChargeExpress กำลังไฟ 120 กิโลวัตต์ มอบการชาร์จที่รวดเร็วสำหรับรถยนต์ไฟฟ้า, ยานพาหนะกลุ่ม, รถพยาบาล และรถตู้ขนาดกลาง โดยรับประกันความพร้อมใช้งานสูงและความน่าเชื่อถือ มีให้เลือกทั้งแบบหัวชาร์จเดี่ยวหรือคู่ และรองรับมาตรฐาน CCS และ GB/T.",
col10pubh3:"คุณสมบัติหลัก",
col10publi1:"ปรับให้เหมาะสมสำหรับศูนย์ยานพาหนะ กลุ่มยานพาหนะปฏิบัติการ และศูนย์โลจิสติกส์",
col10publi2:"การชาร์จเร็วสำหรับรถยนต์ไฟฟ้าขนาดกลางเพื่อเพิ่มประสิทธิภาพในการดำเนินงาน",
col10publi3:"การออกแบบแบบแยกส่วนสำหรับการจัดการการชาร์จอย่างชาญฉลาดและความสามารถในการปรับขนาด",
col10publi4:"การตรวจสอบระยะไกลและการรายงานอัจฉริยะสำหรับผู้จัดการกลุ่มยานพาหนะ",

col14pubh2:"Inventio HyperCharge กำลังไฟ 240 กิโลวัตต์",
col14pubp:"Inventio HyperCharge กำลังไฟ 240 กิโลวัตต์ ได้รับการออกแบบสำหรับรถโดยสารไฟฟ้า, รถบรรทุก และกลุ่มยานพาหนะเชิงพาณิชย์ที่ต้องการการชาร์จแบบอัลตร้าเร็ว โดยมีการเชื่อมต่อหลายจุดและรองรับมาตรฐาน CCS/GB/T เพื่อให้มั่นใจถึงอัตราการเปลี่ยนถ่ายยานพาหนะที่รวดเร็วในสภาพการใช้งานที่เข้มข้น",
col14pubh3:"คุณสมบัติหลัก",
col14publi1:"การชาร์จเร็วสำหรับกลุ่มยานพาหนะขนาดใหญ่และระบบขนส่งสาธารณะ",
col14publi2:"โครงสร้างพื้นฐานที่สามารถปรับขนาดได้ พร้อมสำหรับการขยายกลุ่มยานพาหนะในอนาคต",
col14publi3:"เทคโนโลยีการระบายความร้อนและการกระจายพลังงานขั้นสูงเพื่อประสิทธิภาพที่สูงขึ้น",
col14publi4:"อินเทอร์เฟซที่ใช้งานง่ายพร้อมหน้าจอสัมผัสความละเอียดสูง",


col1pubcopyh2:"Inventio TurboCharge กำลังไฟ 320 กิโลวัตต์",
col1pubcopyp:"Inventio TurboCharge กำลังไฟ 320 กิโลวัตต์ ได้รับการออกแบบเป็นพิเศษสำหรับรถบรรทุกไฟฟ้า, เครื่องจักรก่อสร้าง และอุปกรณ์เหมืองแร่ โดยให้พลังงานที่จำเป็นสำหรับการใช้งานของยานพาหนะไฟฟ้าขนาดใหญ่ การเชื่อมต่อหลายจุดและความเข้ากันได้กับมาตรฐาน CCS/GB/T ทำให้เป็นโซลูชันที่ทรงพลังสำหรับสภาพแวดล้อมอุตสาหกรรม",
col1pubcopyh3:"คุณสมบัติหลัก",
col1pubcopyli1:"ประสิทธิภาพการชาร์จแบบอัลตร้าเร็วสำหรับยานพาหนะไฟฟ้าในภาคอุตสาหกรรมและงานหนัก",
col1pubcopyli2:"การออกแบบที่แข็งแรงทนทานสำหรับงานเหมืองแร่และงานก่อสร้าง",
col1pubcopyli3:"การจัดการความร้อนอย่างชาญฉลาดเพื่อประสิทธิภาพที่ต่อเนื่องภายใต้ภาระงานสูง",
col1pubcopyli4:"การผสานรวมอย่างราบรื่นกับระบบการจัดการพลังงาน",


col3publiccopyh2:"Inventio UltraCharge กำลังไฟ 400 กิโลวัตต์",
col3publiccopyp:"Inventio UltraCharge กำลังไฟ 400 กิโลวัตต์ ได้รับการออกแบบสำหรับรถบรรทุกเหมืองขนาดใหญ่และเครื่องจักรหนัก โดยใช้เทคโนโลยีการระบายความร้อนด้วยของเหลวเพื่อให้มั่นใจว่าการชาร์จมีประสิทธิภาพสูง ปลอดภัย และเสถียร ด้วยการรองรับการเชื่อมต่อแบบคู่ (CCS และ GB/T) จึงมอบประสิทธิภาพสูงสุดในสภาพแวดล้อมที่รุนแรง",
col3publiccopyh3:"คุณสมบัติหลัก",
col3publiccopyli1:"ขั้วต่อการชาร์จที่มีระบบระบายความร้อนด้วยของเหลวเพื่อการส่งผ่านพลังงานที่รวดเร็วและปลอดภัยเป็นพิเศษ",
col3publiccopyli2:"ออกแบบมาเพื่อสภาพแวดล้อมเหมืองแร่และอุตสาหกรรมที่ท้าทาย",
col3publiccopyli3:"ความน่าเชื่อถืออย่างต่อเนื่องด้วยฟังก์ชันการบำรุงรักษาแบบคาดการณ์ล่วงหน้า",
col3publiccopyli4:"รองรับแพลตฟอร์มแรงดันไฟฟ้าอัลตร้าไฮสำหรับยานพาหนะไฟฟ้ารุ่นใหม่ในอนาคต",

col55publiccopyh2:"Inventio ThunderCharge กำลังไฟ 640 กิโลวัตต์",
col55publiccopyp:"ความสำเร็จที่แท้จริงสำหรับยานพาหนะไฟฟ้าขนาดใหญ่ในงานเหมืองและเครื่องจักรหนักพิเศษ: Inventio ThunderCharge กำลังไฟ 640 กิโลวัตต์ ได้กำหนดมาตรฐานใหม่ในการชาร์จประสิทธิภาพสูง พร้อมขั้วต่อแบบคู่ที่มีระบบระบายความร้อนด้วยของเหลว มอบประสิทธิภาพที่ไร้เทียมทานสำหรับการปฏิบัติงานที่สำคัญ",
col55publiccopyh3:"คุณสมบัติหลัก",
col55publiccopyli1:"การชาร์จแบบอัลตร้าเร็วสำหรับกองยานพาหนะไฟฟ้าขนาดใหญ่ที่สุด",
col55publiccopyli2:"ความทนทานสูงสุดด้วยการออกแบบที่เหมาะสมสำหรับงานอุตสาหกรรม",
col55publiccopyli3:"ระบบระบายความร้อนด้วยของเหลวขั้นสูงช่วยให้การทำงานมีเสถียรภาพภายใต้สภาวะโหลดที่รุนแรง",
col55publiccopyli4:"การกระจายโหลดอย่างชาญฉลาดและการชาร์จที่เข้ากันได้กับเครือข่าย",

col77publiccopyh2:"Inventio MegaCharge กำลังไฟ 1 เมกะวัตต์",
col77publiccopyp:"Inventio MegaCharge กำลังไฟ 1 เมกะวัตต์ คือโซลูชันที่ดีที่สุดสำหรับรถบรรทุกเหมืองขนาดใหญ่มากและยานพาหนะไฟฟ้าอุตสาหกรรมขนาดหนัก ออกแบบมาเพื่อตอบสนองความต้องการด้านการเคลื่อนที่ด้วยพลังงานเมกะวัตต์ในอนาคต ด้วยเอาต์พุตแบบคู่ที่มีระบบระบายความร้อนด้วยของเหลว และรองรับมาตรฐาน CCS และ GB/T จึงรับประกันความเร็วในการชาร์จที่ยอดเยี่ยม",
col77publiccopyh3:"คุณสมบัติหลัก",
col77publiccopyli1:"การจ่ายพลังงาน 1 เมกะวัตต์สำหรับการใช้งานที่ท้าทายที่สุดกับยานพาหนะไฟฟ้าขนาดหนัก",
col77publiccopyli2:"การชาร์จแบบอัลตร้าเร็วและเสถียรด้วยระบบระบายความร้อนด้วยของเหลวขั้นสูง",
col77publiccopyli3:"การออกแบบที่แข็งแกร่งตามมาตรฐานอุตสาหกรรมสำหรับการใช้งานในสภาพแวดล้อมเหมืองแร่",
col77publiccopyli4:"แพลตฟอร์มที่รองรับอนาคต เข้ากันได้กับมาตรฐานการชาร์จระดับเมกะวัตต์ที่กำลังเกิดขึ้น (รองรับ MCS)",
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


<Head>
  <meta
  name="description"
  content="Discover VNT's advanced DC fast chargers, delivering rapid and efficient electric vehicle charging solutions for residential, commercial, and industrial applications across India."
/>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="index, follow" />

<meta property="og:title" content="VNT | Expert DC Fast Charger Solutions" />
<meta property="og:description" content="VNT offers reliable and high-performance DC fast chargers designed for quick EV charging, supporting sustainable transportation and energy efficiency." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://vnt.in/solutions/Public/" />
<meta property="og:site_name" content="VNT" />


<meta
  name="keywords"
  content="VNT, DC fast charger, electric vehicle charging, EV chargers India, fast EV charging solutions, commercial EV chargers, residential EV charging, sustainable transportation, EV infrastructure"
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





      <div className="main1_Public" >

{/* <EVHOME/> */}

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




 <div className="cont1_nav">
  <div className="row1_Nav">
     <Link href="/" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-residential">
      <h4>Home</h4>
    </div>
    </Link>
    <Link href="/AC_WALLBOX" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-public">
      <h4>Residential</h4>
    </div>
     </Link>
    <Link href="/CMS" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-cms">
      <h4>CMS/APP</h4>
    </div>
     </Link>

  </div>
</div> 




        <div className="container1_Public" >
            <div className="row1_Public">

            </div>
        </div>




            {/* section two  */}
            <div className="container2_Public">
              <div className="row2_Public">
                <div className="col1_Public" onClick={() => handleClick1(1)}   >
                  <h2  className={
                  activeIndex1 === 1 ? "activeH2" : "inactiveH2"
                }>
In<span style={{color:"#ff6600"}}>v</span>e<span style={{color:"#ff6600"}}>n</span><span style={{color:"#ff6600"}}>t</span>io 30kW Wall Box</h2>
                </div>
                <div className="col2_Public" onClick={() => handleClick1(2)}   >
                  <h2  className={
                  activeIndex1 === 2 ? "activeH2" : "inactiveH2"
                }>
In<span style={{color:"#ff6600"}}>v</span>e<span style={{color:"#ff6600"}}>n</span><span style={{color:"#ff6600"}}>t</span>io 60kW Fast Charger</h2>
                </div>
                <div className="col3_Public" onClick={() => handleClick1(3)}   >

                  <h2  className={
                  activeIndex1 === 3 ? "activeH2" : "inactiveH2"
                }>
In<span style={{color:"#ff6600"}}>v</span>e<span style={{color:"#ff6600"}}>n</span><span style={{color:"#ff6600"}}>t</span>io 120kW ChargeXpress</h2>
                </div>
                <div className="col4_Public" onClick={() => handleClick1(4)}   >
                  <h2  className={
                  activeIndex1 === 4 ? "activeH2" : "inactiveH2"
                }>
In<span style={{color:"#ff6600"}}>v</span>e<span style={{color:"#ff6600"}}>n</span><span style={{color:"#ff6600"}}>t</span>io 180kW RapidCharge</h2>
                </div>
                <div className="col5_Public" onClick={() => handleClick1(5)}   >
                  <h2  className={
                  activeIndex1 === 5 ? "activeH2" : "inactiveH2"
                }>
 In<span style={{color:"#ff6600"}}>v</span>e<span style={{color:"#ff6600"}}>n</span><span style={{color:"#ff6600"}}>t</span>io 240kW HyperCharge</h2>
                </div>

              </div>

              <div className='row2_Public_copy'>
                <div className='col6_Public_copy' onClick={() => handleClick1(6)}  >
<h2  className={
                  activeIndex1 === 6 ? "activeH2" : "inactiveH2"
                }>
In<span style={{color:"#ff6600"}}>v</span>e<span style={{color:"#ff6600"}}>n</span><span style={{color:"#ff6600"}}>t</span>io 320kW TurboCharge</h2>
                </div>
                <div className='col7_Public_copy' onClick={() => handleClick1(7)}  >
<h2  className={
                  activeIndex1 === 7 ? "activeH2" : "inactiveH2"
                }>
In<span style={{color:"#ff6600"}}>v</span>e<span style={{color:"#ff6600"}}>n</span><span style={{color:"#ff6600"}}>t</span>io 400kW UltraCharge</h2>
                </div>
                <div className='col8_Public_copy' onClick={() => handleClick1(8)}  >
<h2  className={
                  activeIndex1 === 8 ? "activeH2" : "inactiveH2"
                }>
In<span style={{color:"#ff6600"}}>v</span>e<span style={{color:"#ff6600"}}>n</span><span style={{color:"#ff6600"}}>t</span>io 640kW ThunderCharge </h2>
                </div>
                <div className='col9_Public_copy' onClick={() => handleClick1(9)}  >
<h2  className={
                  activeIndex1 === 9 ? "activeH2" : "inactiveH2"
                }>
In<span style={{color:"#ff6600"}}>v</span>e<span style={{color:"#ff6600"}}>n</span><span style={{color:"#ff6600"}}>t</span>io 1MW - MegaCharge</h2>
                </div>
              </div>

                      {activeIndex1 === 1 && (
                <div className="row3_Public">
<div className="col66_Public">
  <h2>{t.col66pubh2}</h2>
  <p>{t.col66pubp}</p>
<h3>{t.col66pubh3}</h3>
<ul>
  <li>{t.col66publi1}</li>
  <li>{t.col66publi2}</li>
  <li>{t.col66publi3}</li>
  <li>{t.col66publi4}</li>
</ul>
</div>
<div className="col7_Public">
  <Image src="/Images/Inventio30kW.png" width={700} height={570} alt="AC11KW" />
</div>
              </div>
              )} 



                        {activeIndex1 === 2 && (
                            <div className="row4_Public">
                <div className="col8_Public">
                    <h2>{t.col8pubh2}</h2>
  <p>{t.col8pubp}</p>
   <h3>{t.col8pubh3}</h3>  
<ul>
  <li>{t.col8publi1}</li>
  <li>{t.col8publi2}</li>
  <li>{t.col8publi3}</li>
  <li>{t.col8publi4}</li>
  </ul>    
                </div>
<div className="col9_Public">
  <Image src="/Images/Inventio60kW.png" width={700} height={500} alt="AC-TYPE2" />
</div>

              </div>
                )}




                          {activeIndex1 === 3 && (
                            <div className="row5_Public" >
                <div className="col10_Public">
                    <h2>{t.col10pubh2}</h2>
  <p>{t.col10pubp}</p>
                <h3>{t.col10pubh3}</h3>
<ul>
  <li>{t.col10publi1}</li>
  <li>{t.col10publi2}</li>
  <li>{t.col10publi3}</li>
  <li>{t.col10publi4}</li>
</ul>
                </div>
<div className="col11_Public">
  <Image src="/Images/Inventio120kW.png" width={600} height={500} alt="Inventio120kW" />
</div>
              </div>
               )}


                         {activeIndex1 === 4 && (
                            <div className="row6_Public" >
                <div className="col12_Public">
                    <h2>{t.col12pubh2}</h2>
  <p>{t.col12pubp}</p>
       <h3>{t.col12pubh3}</h3>      
<ul>
  <li>{t.col12publi1}</li>
  <li>{t.col12publi2}</li>
  <li>{t.col12publi3}</li>
  <li>{t.col12publi4}</li>
</ul>
                </div>
<div className="col13_Public">
  <Image src="/Images/Inventio180kW.png" width={600} height={450} alt="Inventio180kW" />
</div>
              </div>
                )}




                          {activeIndex1 === 5 && (
                            <div className="row7_Public" >
                <div className="col14_Public">
                    <h2>{t.col14pubh2}</h2>
  <p>{t.col14pubp}</p>
               <h3>{t.col14pubh3}</h3>
<ul>
  <li>{t.col14publi1}</li>
  <li>{t.col14publi2}</li>
  <li>{t.col14publi3}</li>
  <li>{t.col14publi4}</li>
</ul>
                </div>
<div className="col15_Public">
  <Image src="/Images/Inventio240kW.png" width={700} height={500} alt="Inventio240kW" />
</div>
              </div>
                )}








            </div>

            {/* section two  end*/}


            {/* section two copy start  */}




                    {activeIndex1 === 6 && (
            <div className="row1_Public_copy" >
                <div className="col1_Public_copy">
                    <h2>{t.col1pubcopyh2}</h2>
  <p>{t.col1pubcopyp}</p>
               <h3>{t.col1pubcopyh3}</h3>
<ul>
  <li>{t.col1pubcopyli1}</li>
  <li>{t.col1pubcopyli2}</li>
  <li>{t.col1pubcopyli3}</li>
  <li>{t.col1pubcopyli4}</li>
</ul>
                </div>
<div className="col2_Public_copy">
  <Image src="/Images/Inventio320kW.png" width={700} height={500} alt="Inventio320kW" />
</div>
              </div>
                            )}





                   {activeIndex1 === 7 && (

           
           
           <div className="row22_Public_copy" >
                <div className="col3_Public_copy">
                    <h2>{t.col3publiccopyh2}</h2>
  <p>{t.col3publiccopyp}</p>
               <h3>{t.col3publiccopyh3}</h3>
<ul>
  <li>{t.col3publiccopyli1}</li>
  <li>{t.col3publiccopyli2}</li>
  <li>{t.col3publiccopyli3}</li>
  <li>{t.col3publiccopyli4}</li>
</ul>
                </div>
<div className="col4_Public_copy">
  <Image src="/Images/Inventio400k.png" width={700} height={500} alt="Inventio400k" />
</div>
              </div>
                                         
                                         )}



                        {activeIndex1 === 8 && (
                <div className="row3_Public_copy" >
                <div className="col55_Public_copy">
                    <h2>{t.col55publiccopyh2}</h2>
  <p>{t.col55publiccopyp}</p>
               <h3>{t.col55publiccopyh3}</h3>
<ul>
  <li>{t.col55publiccopyli1}</li>
  <li>{t.col55publiccopyli2}</li>
  <li>{t.col55publiccopyli3}</li>
  <li>{t.col55publiccopyli4}</li>
</ul>
                </div>
<div className="col66_Public_copy">
  <Image src="/Images/Inventio640kW.png" width={680} height={480} alt="Inventio640kW" />
</div>
              </div>
                                          )}





                   {activeIndex1 === 9 && (
           <div className="row4_Public_copy">
                <div className="col77_Public_copy">
                    <h2>{t.col77publiccopyh2}</h2>
  <p>{t.col77publiccopyp}</p>
               <h3>{t.col77publiccopyh3}</h3>
 <ul>
  <li>{t.col77publiccopyli1}</li>
  <li>{t.col77publiccopyli2}</li>
  <li>{t.col77publiccopyli3}</li>
  <li>{t.col77publiccopyli4}</li>
 </ul>
                </div>
<div className="col88_Public_copy">
  <Image src="/Images/Inventio1MW.png" width={700} height={500} alt="Inventio1MW" />
</div>
              </div>
                                          )}




            {/* section two copy end  */}



        <div className="container233_Public" >
            <div className="row233_Public">
                <div className="col133_Public" ref={col1DcFast}>
                    <h4 ref={(el) => (elementscol1DcFast.current[0] = el)}>{t.col1dch4}</h4>
                    <h2  ref={(el) => (elementscol1DcFast.current[1] = el)}>{t.col1dch2}</h2>
                </div>
            </div>
        </div>

        <div className="container3_Public">
            <div className="row3_Public">
                <div className="col2_row3_Public" ref={col2DcFast}>
                    <h3 ref={(el) => (elementscol2DcFast.current[0] = el)}>{t.col2dch3}</h3>
                    {/* <h2 ref={(el) => (elementscol2DcFast.current[1] = el)}><FontAwesomeIcon icon={faTruckFast} style={{ width: '70px', height: '70px', color:"#ff6600",marginLeft:'20px',paddingRight:'20px' }}/><span style={{borderBottom:"4px solid #ff6600",paddingBottom:"10px"}}>{t.col2dch2} </span></h2> */}
                    <p  ref={(el) => (elementscol2DcFast.current[2] = el)}>{t.col2dcp}</p>
                </div>
                <div className="col3_Public_row3_Public">
<Image src="/Images/DC-6.png" width={620} height={480} alt="DC-6" />
                </div>
            </div>
        </div>
        <div className="container4_Public" ref={col4DcFast}>
            <div className="row4_Public">
                <div className="col4_row4_Public_Public" >
                    <h2 ref={(el) => (elementscol4DcFast.current[0] = el)}>{t.col4dch2}</h2>
                    <h3 ref={(el) => (elementscol4DcFast.current[1] = el)}>{t.col4dch3}</h3>
                </div>
                <div className="col5_Public_row4_public">
                    <p ref={(el) => (elementscol4DcFast.current[2] = el)}>{t.col5dcp}</p>
                </div>
            </div>
        </div>
        {/* <div className="container5_Public"  ref={cont5DcFast}>
            <div className="row5_Public">
                <div className="col6_Public">
                    <h2 ref={(el) => (elementscol5DcFast.current[0] = el)}>{t.col6dch2}</h2>
                    <p ref={(el) => (elementscol5DcFast.current[1] = el)}>{t.col6dcp1}</p>
                <h4 ref={(el) => (elementscol5DcFast.current[2] = el)}>{t.col6dch4}</h4>
                <p ref={(el) => (elementscol5DcFast.current[3] = el)}>{t.col6dcp2}</p>
                <h4 ref={(el) => (elementscol5DcFast.current[4] = el)}>{t.col6dch42}</h4>
                <p ref={(el) => (elementscol5DcFast.current[5] = el)}>{t.col6dcp3}</p>
                <h4 ref={(el) => (elementscol5DcFast.current[6] = el)}>{t.col6dch43}</h4>
                <p ref={(el) => (elementscol5DcFast.current[7] = el)}>{t.col6dcp4}</p>
                </div>
                <div className="col7_Public_row5_Public">
                    <Image src="/Images/elec.png" width={790} height={550} alt="elec"/>
                </div>
            </div>
        </div> */}
        {/* <div className='container6_Public'>
          <div className='row6_Public'>
            <div className='col8_Public'>
<Image src="/Images/DC_FAST_3.jpg" width={700} height={450} alt='DC_FAST_3' />
            </div>
            <div className='col9_Public' ref={cont9DcFast}>
              <h4 ref={(el) => (elementscol9DcFast.current[0] = el)}>{t.col9dch4}</h4>
              <h2 ref={(el) => (elementscol9DcFast.current[1] = el)}>{t.col9dch2}</h2>
              <p ref={(el) => (elementscol9DcFast.current[2] = el)}>{t.col9dcp}</p>
              <button type='submit'>{t.col9dcbtn}</button>
            </div>
          </div>
        </div> */}
        {/* <div className='container7_Public' ref={cont7DcFast}>
          <div className='row7_Public_container7_Public'>
            <div className='col10_Public_row7_Public'>
              <h3 ref={(el) => (elementscol7DcFast.current[0] = el)}>{t.col10dch3}</h3>
            </div>
          </div>
          <div className='row8_Public'>
            <div className='col11_Public'>
              <h2 ref={(el) => (elementscol7DcFast.current[1] = el)}>{t.col11dch2}</h2>
            </div>
            <div className='col12_Public'>
              <p ref={(el) => (elementscol7DcFast.current[2] = el)}>{t.col12dcp}</p>
            </div>
          </div> */}
          {/* <div className='row9_Public'> */}
          {/* first card  */}
    {/* <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '302px',
        height: '392px',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '10px',
        border: '1px solid #ccc',
        cursor:'pointer',
        marginLeft:'120px',
      }}
    > */}
      {/* <div
        style={{
          display: 'flex',
          width: '200%', 
          height: '100%',
          transition: 'transform 0.5s ease',
          transform: hovered ? 'translateX(-50%)' : 'translateX(0)',
        }}
      > */}
        {/* Image Card */}
        
        {/* <div style={{ width: '50%', height: '100%', position: 'relative'  }}>
          <Image
            src="/Images/vth1.jpg"
            alt="vth1"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: '10px' }}
          />
        </div> */}

        {/* Content Card */}
        {/* <div
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            padding: '20px',
            boxSizing: 'border-box',
              background:'#623e1aff',
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
    </div> */}
    {/* card end  */}




    {/* card 2 start  */}

    {/* <div
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
      }}
    > */}
      {/* <div
        style={{
          display: 'flex',
          width: '200%', 
          height: '100%',
          transition: 'transform 0.5s ease',
          transform: hovered1 ? 'translateX(-50%)' : 'translateX(0)',
        }}
      > */}

        {/* Image Card */}
        {/* <div style={{ width: '50%', height: '100%', position: 'relative' }}>
          <Image
            src="/Images/vth2.jpg"
            alt="vth1"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: '10px' }}
          />
        </div> */}

        {/* Content Card */}
        {/* <div
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            padding: '20px',
            boxSizing: 'border-box',
                background:'#623e1aff',
              color:'#fff',
            fontFamily:'Lato , sans-serif',

          }}
        >
           */}
          {/* <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Vehicle-to-Home</h2>
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
    </div> */}
    {/* card 2 end  */}


{/* card 3  */}


   {/* <div
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

      }}
    > */}

      {/* <div
        style={{
          display: 'flex',
          width: '200%', 
          height: '100%',
          transition: 'transform 0.5s ease',
          transform: hovered2 ? 'translateX(-50%)' : 'translateX(0)',
        }}
      > */}

        {/* Image Card */}
        {/* <div style={{ width: '50%', height: '100%', position: 'relative' }}>
          <Image
            src="/Images/vth4.jpg"
            alt="vth1"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: '10px' }}
          />
        </div> */}

        {/* Content Card */}
        {/* <div
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            padding: '20px',
            boxSizing: 'border-box',
                background:'#623e1aff',
              color:'#fff',
            fontFamily:'Lato , sans-serif',

          }}
      
        >
          <h2 style={{ fontSize: '20px', marginBottom: '10px' }} >Vehicle-to-Home</h2>
          <p style={{ fontSize: '14px', marginBottom: '10px' }} >
            Power your home with the energy stored in your EV. Whether you're storing energy from
            your solar panels or the grid, you'll save big during peak hours.
          </p>
          <h3 style={{ fontSize: '14px', marginBottom: '5px' }} >
            No need to purchase expensive battery storage
          </h3>
          <h3 style={{ fontSize: '14px' }}>Avoid peak energy costs</h3>
        </div>
      </div>
    </div> */}

{/* card 3 end  */}


{/* card 4 start  */}

    {/* <div
      onMouseEnter={() => setHovered3(true)}
      onMouseLeave={() => setHovered3(false)}
      style={{
        width: '302px',
        height: '392px',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '10px',
        border: '1px solid #ccc',
        cursor:'pointer',
      }}
    > */}
      {/* <div
        style={{
          display: 'flex',
          width: '200%', 
          height: '100%',
          transition: 'transform 0.5s ease',
          transform: hovered3 ? 'translateX(-50%)' : 'translateX(0)',
        }}
      > */}
        {/* Image Card */}
        {/* <div style={{ width: '50%', height: '100%', position: 'relative' }}>
          <Image
            src="/Images/vth1.jpg"
            alt="vth1"

            layout="fill"
            objectFit="cover"
            style={{ borderRadius: '10px' }}
          />
        </div> */}

        {/* Content Card */}
        {/* <div
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            padding: '20px',
            boxSizing: 'border-box',
                background:'#623e1aff',
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
    </div> */}
{/* card 4 end  */}

          {/* </div>
        </div> */}
        {/* <div className='container8_Public'    ref={contcardDcFast}>
          <div className='row10_Public'>
            <div className='col17_Public'>
              <h3 ref={(el) => (elementscolcardDcFast.current[0] = el)}>{t.col17dch3}</h3>
              <h2 ref={(el) => (elementscolcardDcFast.current[1] = el)}>{t.col17dch2}</h2>
              <p ref={(el) => (elementscolcardDcFast.current[2] = el)}>{t.col17dcp}</p>
            </div>
            <div className='col18_Public'></div>
          </div>
        </div> */}
        <div className='container9_Public'>

        </div>
        <div className='container10_Public'>
          <div className='row11_Public'>
            <div className='col19_Public'>
              <h2>{t.col19dch2}</h2>
              <h4>{t.col19dch4}</h4>
              <a href="https://vnt.in/Solutions/e-mobility-products/">Find out More</a>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}



