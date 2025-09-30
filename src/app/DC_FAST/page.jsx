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
import EVHOME from '@/Components/EVHome';


gsap.registerPlugin(ScrollTrigger);

export default function DC_FAST(){
  const [hovered, setHovered] = useState(false)

  const [hovered1, setHovered1] = useState(false)
  const [hovered2, setHovered2] = useState(false)
  const [hovered3, setHovered3] = useState(false)


  const [set , togset] = useState(false)
const [set1 , togset1] = useState(false)
const [set2 , togset2] = useState(false)
const [set3 , togset3] = useState(false)
const [set4 , togset4] = useState(false)
// const [set5 , togset5] = useState(false)




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

const languageNames = {
  en: 'En',
  hi: 'Hi',
  ar: 'العربية',
  es: 'Es',
  'pt-BR': 'Português (BR)',
  de: 'Deutsch',  
};





const setCli = () => {
  togset(!set);
  togset1(false);
  togset2(false);
  togset3(false);
  togset4(false);
  // togset5(false);
}
const setCli1 = () => {
  togset1(!set);
  togset(false);
  togset2(false);
  togset3(false);
  togset4(false);
  // togset5(false);
}
const setCli2 = () => {
  togset2(!set);
  togset1(false);
  togset(false);
  togset3(false);
  togset4(false);
  // togset5(false);
}
const setCli3 = () => {
  togset3(!set);
  togset1(false);
  togset2(false);
  togset(false);
  togset4(false);
  // togset5(false);
}
const setCli4 = () => {
  togset4(!set);
  togset1(false);
  togset2(false);
  togset3(false);
  togset(false);
  // togset5(false);
}
// const setCli5 = () => {
//   togset5(!set);
//   togset1(false);
//   togset2(false);
//   togset3(false);
//   togset4(false);
//   togset(false);
// }



    const [lang, setLang] = useState('en');

const translations = {
  en: {
    col1dch4:'Meet the Future of Fast Charging — DC FAST CHARGER.',
    col1dch2:'Fast, intelligent, and ready for the road ahead — DC FAST CHARGER delivers next-gen EV charging in a sleek, powerful package. Designed for everyday drivers and EV enthusiasts alike, it combines effortless use with advanced performance. Simple to operate. Built to impress.',
    button: 'EN',
col2dch3:'Why  DC fast charger',
col2dch2:'High-Speed Power Delivery',
col2dcp:'DC Fast Charger 60kW-360kW',
col4dch2:'Smart Energy Control',
col4dch3:'Not just energy management — VNT is a complete EV energy ecosystem.',
col5dcp:'Maximize the performance of your VNT charging system with seamless power metering and intelligent energy optimization features built right in.',
 col6dch2:'Maximize Your Charging Power',
 col6dch4:'More solar, more savings',
 col6dcp1:'Optimize your solar energy with our innovative Solar Charging 3P Optimization, which intelligently switches your 3-phase DC fast charger to single-phase operation when sufficient solar surplus is available.',
col6dcp2:'Maximize your solar charging during the day, even with limited solar output.',
col6dch42:'Fast charging, on demand',
col6dcp3:'Need full speed? Enjoy full 3-phase charging (up to 22kW) with grid power whenever you need it.',
col6dch43:'Works with your setup',
col6dcp4:'Ideal for 3-phase homes with single or 3-phase solar installations.',
col9dch4:'Certified Performance',
col9dch2:'Trusted Quality, Built to Last',
col9dcp:'Our DC fast charger is engineered to meet the highest safety and performance standards required in the North American market.',
col9dcbtn:'Click here ',
col10dch3:'Smart Energy Optimization',
col11dch2:'More than just charging — a smarter way to manage energy.',
col12dcp:'Packed with industry-leading features, Quasar 2 sets a new benchmark for intelligent home energy management',
col17dch3:'software',
col17dch2:'VNT App',
col17dcp:'Select between three modes: Grid/Solar to Vehicle, Vehicle-to-Home and Vehicle-to-Grid. Set charging and home powering schedules, monitor energy use and enable energy management features.',
col19dch2:'Smart Public Charging',
col19dch4:'See how DC-FAST is part of a complete solution at home.',
col19dca:'Find Out More',
},
  hi: {
     col1dch4:'तेजी से चार्जिंग के भविष्य से मिलें — डीसी फास्ट चार्जर।',
    col1dch2:'तेज़, बुद्धिमान, और आने वाले रास्ते के लिए तैयार — डीसी फास्ट चार्जर एक शानदार और शक्तिशाली पैकेज में अगली पीढ़ी की इलेक्ट्रिक वाहन चार्जिंग प्रदान करता है। यह रोज़ाना ड्राइवरों और ईवी उत्साहियों दोनों के लिए डिज़ाइन किया गया है, जो आसान उपयोग को उन्नत प्रदर्शन के साथ जोड़ता है। सरल संचालन। प्रभावशाली निर्माण।',
       button: 'HI',
col2dch3:'तेज़ चार्जिंग: आपके इलेक्ट्रिक वाहन को जल्दी और प्रभावी तरीके से चार्ज करता है।',
col2dch2:'तेज़ चार्ज करें',
col2dcp:'DC फास्ट चार्जर 60kW-360kW',
col4dch2:'ऊर्जा प्रबंधन।',
col4dch3:'VNT चार्जिंग सिस्टम अब एक ऊर्जा प्रबंधन समाधान है।',
col5dcp:'वालबॉक्स पावर मीटर और हमारे इन-बिल्ट ऊर्जा प्रबंधन फीचर्स के साथ पल्सर परिवार की पूरी क्षमता का लाभ उठाएं।',
 col6dch2:'+200% अधिक इलेक्ट्रिक चार्ज का आनंद लें।',
 col6dch4:'अधिक सौर ऊर्जा, अधिक बचत।',
 col6dcp1:'हमारे नए सोलर चार्जिंग 3P ऑप्टिमाइज़ेशन के साथ अपने सौर सिस्टम का अधिकतम लाभ उठाएं — जब पर्याप्त सौर अधिशेष पाया जाता है, तो यह स्मार्ट तरीके से आपके 3-फेज़ पल्सर को 1-फेज़ में स्विच कर देता है।',
col6dcp2:'दिन के दौरान अपनी सौर चार्जिंग को अधिकतम करें, भले ही सौर उत्पादन सीमित हो।',
col6dch42:'मांग पर तेज़ चार्जिंग।',
col6dcp3:'पूरी गति चाहिए? जब भी जरूरत हो, ग्रिड पावर के साथ पूरी 3-फेज़ चार्जिंग (अधिकतम 22kW) का आनंद लें।',
col6dch43:'आपके सेटअप के साथ काम करता है।',
col6dcp4:'3-फेज़ घरों के लिए आदर्श, जिनमें सिंगल या 3-फेज़ सोलर इंस्टॉलेशन हो।',
col9dch4:'विश्वसनीय गुणवत्ता.',
col9dch2:'UL अनुपालन प्रमाणपत्र।',
col9dcp:'Quasar 2 को नॉर्थ अमेरिकन मार्केट के लिए UL सॉल्यूशंस से अनुपालन प्रमाणपत्र प्राप्त हुआ है।',
col9dcbtn:'यहाँ क्लिक करें।',
col10dch3:'ऊर्जा प्रबंधन।',
col11dch2:'आपका चार्जिंग सिस्टम अब एक ऊर्जा प्रबंधन समाधान है।',
col12dcp:'किसी भी अन्य चार्जर की तुलना में अधिक फीचर्स के साथ, Quasar 2 घर में ऊर्जा उपयोग की परिभाषा बदल देगा।',
col17dch3:'सॉफ़्टवेयर',
col17dch2:'VNT ऐप',
col17dcp:'तीन मोड्स में से चुनें: ग्रिड/सोलर से वाहन तक, वाहन से घर तक, और वाहन से ग्रिड तक। चार्जिंग और घर को बिजली देने का समय निर्धारित करें, ऊर्जा उपयोग की निगरानी करें, और ऊर्जा प्रबंधन की विशेषताएँ सक्षम करें।',
col19dch2:'घर पर इलेक्ट्रिक वाहन चार्जिंग।',
col19dch4:'देखें कि Quasar 2 घर में एक पूर्ण समाधान का हिस्सा कैसे है।',
col19dca:'अधिक जानकारी प्राप्त करें।',



  },
  ar: {
     col1dch4:'التقِ بمستقبل الشحن السريع — شاحن تيار مباشر سريع',
    col1dch2:'سريع، ذكي، ومستعد للطريق القادم — يوفر شاحن التيار المباشر السريع (DC FAST CHARGER) شحن الجيل التالي للمركبات الكهربائية في حزمة أنيقة وقوية. مصمم للسائقين اليوميين وعشاق السيارات الكهربائية على حد سواء، يجمع بين سهولة الاستخدام والأداء المتقدم. سهل التشغيل. مصنوع ليبهر.',
  button: 'AR',
col2dch3:'شحن سريع: يشحن سيارتك الكهربائية بسرعة وكفاءة عالية.',
col2dch2:'اشحن بسرعة',
col2dcp:'شاحن تيار مباشر سريع 60 كيلوواط - 360 كيلوواط',
col4dch2:'إدارة الطاقة।',
col4dch3:'أصبح نظام الشحن VNT الآن حلاً لإدارة الطاقة.',
col5dcp:'افتح الإمكانات الكاملة لعائلة Pulsar باستخدام عداد الطاقة من Wallbox وميزات إدارة الطاقة المدمجة لدينا.',
 col6dch2:'استمتع بشحن كهربائي يزيد بنسبة +200%.',
 col6dch4:'المزيد من الطاقة الشمسية، المزيد من التوفير.',
 col6dcp1:'استفد إلى أقصى حد من نظام الطاقة الشمسية الخاص بك مع تحسين الشحن الشمسي ثلاثي الطور الجديد لدينا – يقوم بتحويل جهاز Pulsar ثلاثي الطور إلى طور واحد بذكاء عندما يتم اكتشاف فائض شمسي كافٍ.',
col6dcp2:'حقق أقصى استفادة من شحن الطاقة الشمسية خلال النهار، حتى مع محدودية إنتاج الطاقة الشمسية.',
col6dch42:'الشحن السريع عند الطلب.',
col6dcp3:'هل تحتاج إلى السرعة الكاملة؟ استمتع بالشحن الثلاثي الطور الكامل (حتى 22 كيلو واط) باستخدام طاقة الشبكة متى ما احتجت إليها.',
col6dch43:'يعمل مع إعدادك',
col6dcp4:'مثالي للمنازل ذات الثلاثة أطوار مع تركيبات شمسية أحادية الطور أو ثلاثية الطور.',
col9dch4:' جودة موثوقة.',
col9dch2:'شهادة الامتثال من UL',
col9dcp:'لقد حصل Quasar 2 على شهادة الامتثال من UL Solutions لسوق أمريكا الشمالية.',
col9dcbtn:'انقر هنا',
col10dch3:'إدارة الطاقة',
col11dch2:'نظام الشحن الخاص بك أصبح الآن حلاً لإدارة الطاقة.',
col12dcp:'بميزات أكثر من أي شاحن آخر، سيُعيد Quasar 2 تعريف استخدام الطاقة في المنزل.',
col17dch3:'البرمجيات',
col17dch2:'تطبيق VNT',
col17dcp:'اختر بين ثلاثة أوضاع: من الشبكة/الطاقة الشمسية إلى السيارة، من السيارة إلى المنزل، ومن السيارة إلى الشبكة. قم بتعيين جداول الشحن وتزويد المنزل بالطاقة، راقب استخدام الطاقة وفعل ميزات إدارة الطاقة.',
col19dch2:'شحن المركبة الكهربائية في المنزل',
col19dch4:'شاهد كيف أن Quasar 2 جزء من حل كامل في المنزل.',
col19dca:'اكتشف المزيد',



  },
  es: {
     col1dch4:'Conoce el futuro de la carga rápida — CARGADOR RÁPIDO DC.',
    col1dch2:'Rápido, inteligente y listo para el camino por delante — el CARGADOR RÁPIDO DC ofrece carga de vehículos eléctricos de próxima generación en un paquete elegante y potente. Diseñado tanto para conductores diarios como para entusiastas de los vehículos eléctricos, combina un uso sencillo con un rendimiento avanzado. Fácil de operar. Diseñado para impresionar.',
button:'ES',
col2dch3:'Carga rápida: carga tu vehículo eléctrico de manera rápida y eficiente.',
col2dch2:'Carga rápido',
col2dcp:'Cargador rápido de corriente continua (DC) 60 kW - 360 kW',
col4dch2:'Gestión de la energía।',
col4dch3:'El sistema de carga VNT ahora es una solución de gestión de la energía.',
col5dcp:'Desbloquea todo el potencial de la familia Pulsar con un medidor de energía Wallbox y nuestras funciones integradas de gestión de energía.',
 col6dch2:'Disfruta de un +200% más de carga eléctrica.',
 col6dch4:'Más energía solar, más ahorros.',
 col6dcp1:'Aprovecha al máximo tu sistema solar con nuestra nueva Optimización de Carga Solar 3P: cambia inteligentemente tu Pulsar de 3 fases a 1 fase cuando se detecta un excedente solar suficiente.',
col6dcp2:'Maximiza la carga solar durante el día, incluso con una producción solar limitada.',
col6dch42:'Carga rápida, bajo demanda.',
col6dcp3:'¿Necesitas velocidad máxima? Disfruta de carga trifásica completa (hasta 22 kW) con energía de la red siempre que la necesites.',
col6dch43:'Funciona con tu configuración.',
col6dcp4:'Ideal para hogares de 3 fases con instalaciones solares monofásicas o trifásicas.',
col9dch4:'Calidad confiable.',
col9dch2:'Certificado de Cumplimiento UL.',
col9dcp:'Quasar 2 ha recibido un certificado de cumplimiento de UL Solutions para el mercado de América del Norte.',
col9dcbtn:'Haz clic aquí.',
col10dch3:'Gestión de la Energía.',
col11dch2:'Tu sistema de carga ahora es una solución de gestión de energía.',
col12dcp:'Con más funciones que cualquier otro cargador, Quasar 2 redefinirá el uso de energía en el hogar.',
col17dch3:'Programa informático',
col17dch2:'Aplicación VNT',
col17dcp:'Seleccione entre tres modos: Red/Solar a Vehículo, Vehículo a Hogar y Vehículo a Red. Configure los horarios de carga y suministro de energía para el hogar, controle el uso de energía y active las funciones de gestión energética.',
col19dch2:'Carga de vehículo eléctrico en casa.',
col19dch4:'Ve cómo Quasar 2 es parte de una solución completa en el hogar.',
col19dca:'Descubre más.',



  },
  'pt-BR': {
     col1dch4:'Conheça o futuro do carregamento rápido — CARREGADOR RÁPIDO DC.',
    col1dch2:'Rápido, inteligente e pronto para a estrada — o CARREGADOR RÁPIDO DC oferece carregamento de veículos elétricos de próxima geração em um pacote elegante e poderoso. Projetado tanto para motoristas do dia a dia quanto para entusiastas de EV, ele combina uso fácil com desempenho avançado. Simples de operar. Feito para impressionar.',
button:'PT',
col2dch3:'Carregamento rápido: carrega seu veículo elétrico de forma rápida e eficiente.',
col2dch2:'Carregue rápido।',
col2dcp:'Carregador rápido DC 60 kW - 360 kW',
col4dch2:'Gestão de Energia।',
col4dch3:'O sistema de carregamento VNT agora é uma solução de gestão de energia.',
col5dcp:'Desbloqueie todo o potencial da família Pulsar com um medidor de energia Wallbox e nossos recursos integrados de gestão de energia.',
 col6dch2:'Desfrute de +200% mais carga elétrica.',
 col6dch4:'Mais energia solar, mais economia.',
 col6dcp1:'Aproveite ao máximo seu sistema solar com nossa nova Otimização de Carregamento Solar 3P — que alterna inteligentemente seu Pulsar trifásico para monofásico quando é detectado um excedente solar suficiente.',
col6dcp2:'Maximize o carregamento solar durante o dia, mesmo com produção solar limitada.',
col6dch42:'Carregamento rápido, sob demanda.',
col6dcp3:'Precisa de velocidade máxima? Aproveite o carregamento trifásico completo (até 22 kW) com energia da rede sempre que precisar.',
col6dch43:'Funciona com a sua configuração.',
col6dcp4:'Ideal para casas trifásicas com instalações solares monofásicas ou trifásicas.',
col9dch4:' Qualidade confiável.',
col9dch2:'Certificado de Conformidade UL.',
col9dcp:'Quasar 2 recebeu um certificado de conformidade da UL Solutions para o mercado da América do Norte.',
col9dcbtn:'Clique aqui.',
col10dch3:'Gestão de Energia.',
col11dch2:'Seu sistema de carregamento agora é uma solução de gestão de energia.',
col12dcp:'Com mais recursos do que qualquer outro carregador, o Quasar 2 vai redefinir o uso de energia em casa.',
col17dch3:'Programa de computador',
col17dch2:'Aplicativo VNT',
col17dcp:'Selecione entre três modos: Rede/Solar para Veículo, Veículo para Casa e Veículo para Rede. Configure os horários de carregamento e fornecimento de energia para a casa, monitore o uso de energia e ative os recursos de gestão de energia.',
col19dch2:'Carregamento de veículo elétrico em casa.',
col19dch4:'Veja como o Quasar 2 faz parte de uma solução completa para o lar.',
col19dca:'Saiba mais.',



},
   de: {
     col1dch4:'Lernen Sie die Zukunft des Schnellladens kennen — DC-SCHNELLLADEGERÄT.',
    col1dch2:'Schnell, intelligent und bereit für die Straße — der DC-SCHNELLLADER bietet Ladeleistung der nächsten Generation für Elektrofahrzeuge in einem schlanken, leistungsstarken Paket. Entwickelt für den täglichen Fahrer und EV-Enthusiasten gleichermaßen, kombiniert er mühelose Bedienung mit fortschrittlicher Leistung. Einfach zu bedienen. Entwickelt, um zu beeindrucken.',
  button:'DE',
col2dch3:'Schnelles Laden: Lädt Ihr Elektrofahrzeug schnell und effizient auf.',
col2dch2:'Schnell aufladen।',
col2dcp:'DC-Schnellladegerät 60 kW - 360 kW',
col4dch2:'Energiemanagement।',
col4dch3:'Das VNT-Ladesystem ist jetzt eine Energiemanagement-Lösung.',
col5dcp:'Entfesseln Sie das volle Potenzial der Pulsar-Familie mit einem Wallbox-Leistungsmesser und unseren integrierten Energiemanagement-Funktionen.',
 col6dch2:'Genießen Sie +200 % mehr elektrische Ladung.',
 col6dch4:'Mehr Solarenergie, mehr Einsparungen.',
 col6dcp1:'Nutzen Sie Ihr Solarsystem optimal mit unserer neuen Solar Charging 3P Optimierung – sie schaltet Ihren 3-Phasen Pulsar intelligent auf 1-Phase um, wenn ein ausreichender Solarüberschuss erkannt wird.',
col6dcp2:'Maximieren Sie Ihre Solarladung tagsüber, auch bei begrenzter Solarleistung.',
col6dch42:'Schnellladung auf Abruf.',
col6dcp3:'Brauchen Sie volle Geschwindigkeit? Genießen Sie volles 3-Phasen-Laden (bis zu 22 kW) mit Netzstrom, wann immer Sie es brauchen.',
col6dch43:'Funktioniert mit Ihrer Einrichtung.',
col6dcp4:'Ideal für 3-Phasen-Häuser mit einphasigen oder dreiphasigen Solaranlagen.',
col9dch4:'Calidad confiable.',
col9dch2:'UL-Konformitätszertifikat.',
col9dcp:'Quasar 2 hat von UL Solutions ein Konformitätszertifikat für den nordamerikanischen Markt erhalten.',
col9dcbtn:'Hier klicken.',
col10dch3:'Energiemanagement',
col11dch2:'Ihr Ladesystem ist jetzt eine Energiemanagementlösung.',
col12dcp:'Mit mehr Funktionen als jeder andere Ladegerät wird Quasar 2 die Energienutzung zu Hause neu definieren.',
col17dch3:'Computerprogramm',
col17dch2:'VNT-App',
col17dcp:'Wählen Sie zwischen drei Modi: Netz/Solar zu Fahrzeug, Fahrzeug zu Haus und Fahrzeug zu Netz. Legen Sie Lade- und Hausstrompläne fest, überwachen Sie den Energieverbrauch und aktivieren Sie Energiemanagement-Funktionen.',
col19dch2:'Heimladung für Elektrofahrzeuge.',
col19dch4:'Sehen Sie, wie Quasar 2 Teil einer kompletten Lösung für zu Hause ist.',
col19dca:'Mehr erfahren.',
   },
}




const toggleLanguage = () => {
  if (lang === 'en') setLang('hi');
  else if (lang === 'hi') setLang('ar');
  else if (lang === 'ar') setLang('es');
  else if (lang === 'es') setLang('pt-BR');  
  else if (lang === 'pt-BR') setLang('de');  
  else setLang('en');
};



  const t = translations[lang];



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

        <div
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





      <div className="main1_Public" >



{/* <div className="cont1_nav">
  <div className="row1_Nav">
     <Link href="/AC_WALLBOX" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-residential">
      <h4>Residential</h4>
    </div>
    </Link>
    <Link href="/DC_FAST" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
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
</div> */}

<EVHOME />

        <div className="container1_Public" >
            <div className="row1_Public">

            </div>
        </div>

            {/* section two  */}
            <div className="container2_Public">
              <div className="row2_Public">
                <div className="col1_Public" onClick={setCli} >
                  <h2>DC fast charger 60 to 360kw-1</h2>
                </div>
                <div className="col2_Public" onClick={setCli1} >
                  <h2>DC fast charger 60 to 360kw-2</h2>
                </div>
                <div className="col3_Public" onClick={setCli2} >

                  <h2>DC fast charger 60 to 360kw-3</h2>
                </div>
                <div className="col4_Public" onClick={setCli3} >
                  <h2>DC fast charger 60 to 360kw-4</h2>
                </div>
                <div className="col5_Public" onClick={setCli4} >
                  <h2>DC fast charger 60 to 360kw-5</h2>
                </div>
                {/* <div className="col6_RESIDENCE" onClick={setCli5}>
                  <h2>DC fast charger 60 to 360kw-6</h2>
                </div> */}
              </div>
              {set && (
                <div className="row3_Public">
<div className="col66_Public">
  <h2>High-Power DC Fast Chargers: 60kW to 360kW for Rapid EV Charging</h2>
  <p>Welcome to the future of electric vehicle (EV) charging with our state-of-the-art DC Fast Chargers, delivering powerful performance from 60kW to 360kW. Designed for speed, efficiency, and reliability, our chargers are perfect for commercial hubs, public charging stations, and fleet operators looking to provide ultra-fast charging solutions.</p>
<h3>Dual-Port Charging</h3>
<p>Charge two vehicles simultaneously with intelligent power splitting for maximum efficiency.</p>
<h3>User-Friendly Interface</h3>
<p> Intuitive touchscreen displays with multi-language support for a seamless charging experience.</p>
</div>
<div className="col7_Public">
  <Image src="/Images/DC-1.png" width={700} height={570} alt="AC11KW" />
</div>
              </div>
              )} 
              {set1 &&  (
                            <div className="row4_Public">
                <div className="col8_Public">
                    <h2>Next-Gen DC Fast Chargers: 60kW to 360kW for Seamless EV Power</h2>
  <p>Experience the ultimate in electric vehicle (EV) charging with our cutting-edge DC Fast Chargers, ranging from 60kW to 360kW. Engineered for speed, scalability, and user convenience, these chargers are the perfect solution for businesses, municipalities, and fleet operators aiming to deliver rapid, reliable charging.</p>
   <h3>Multi-Vehicle Charging</h3>  
   <p>Dual or quad-port options with dynamic power allocation to optimize charging efficiency.</p>  
   <h3>Intuitive Operation</h3>   
   <p> High-resolution displays with user-friendly interfaces, supporting multiple languages for global accessibility.</p>     
                </div>
<div className="col9_Public">
  <Image src="/Images/DC-2.png" width={700} height={580} alt="AC-TYPE2" />
</div>
              </div>
                )}
                {set2 && (
                            <div className="row5_Public" >
                <div className="col10_Public">
                    <h2>Advanced DC Fast Chargers: 60kW to 360kW for High-Speed EV Charging</h2>
  <p>Power up the electric vehicle revolution with our high-performance DC Fast Chargers, delivering 60kW to 360kW of rapid charging capability. Designed for efficiency, durability, and user convenience, these chargers are ideal for businesses, public infrastructure, and fleet operators looking to provide cutting-edge EV charging solutions.</p>
                <h3>Dual Charging Ports</h3>
                <p>Simultaneously charge multiple vehicles with intelligent power distribution for optimal performance.</p>
                <h3>Energy Optimization</h3>
                <p>Advanced algorithms minimize energy consumption, supporting cost savings and sustainability.</p>
                </div>
<div className="col11_Public">
  <Image src="/Images/DC-4.png" width={700} height={580} alt="AC11KW" />
</div>
              </div>
               )}
               {set3 && (
                            <div className="row6_Public" >
                <div className="col12_Public">
                    <h2>Premium DC Fast Chargers: 60kW to 360kW for Next-Level EV Charging</h2>
  <p>Revolutionize electric vehicle (EV) charging with our high-efficiency DC Fast Chargers, offering a powerful range of 60kW to 360kW. Built for speed, reliability, and scalability, these chargers are the perfect solution for commercial spaces, public stations, and fleet operators aiming to deliver top-tier charging experiences.</p>
       <h3>Multi-Port Efficiency</h3>      
       <p> Dual or triple-port options with dynamic power allocation to charge multiple vehicles simultaneously.</p>
       <h3>Intuitive Interface</h3>
       <p>High-definition touchscreens with multi-language support for a user-friendly charging experience.</p>
                </div>
<div className="col13_Public">
  <Image src="/Images/DC-5.png" width={700} height={580} alt="PORTABLE33TYPE2" />
</div>
              </div>
                )}

                {set4 && (
                            <div className="row7_Public" >
                <div className="col14_Public">
                    <h2>Cutting-Edge DC Fast Chargers: 60kW to 360kW for Ultimate EV Performance</h2>
  <p>Transform the electric vehicle (EV) charging experience with our advanced DC Fast Chargers, delivering 60kW to 360kW of high-speed power. Engineered for efficiency, durability, and user satisfaction, these chargers are ideal for commercial properties, public infrastructure, and fleet operations aiming to provide rapid and reliable charging solutions.</p>
               <h3>Multi-Vehicle Charging</h3>
               <p>Dual or quad-port configurations with intelligent power sharing for maximum efficiency.</p>
               <h3>User-Friendly Interface</h3>
               <p>Multilingual, high-resolution touchscreens for intuitive operation and enhanced accessibility.</p>
                </div>
<div className="col15_Public">
  <Image src="/Images/DC-6.png" width={700} height={580} alt="PORTABLE74AC2" />
</div>
              </div>
                )}
                {/* {set5 && (
                <div className="row8_RESIDENCE">
                  <div className="col15_RESIDENCE">
<h2>six 6</h2>
<p>66</p>
                  </div>
                  <div className="col16_RESIDENCE">
  <Image src="/Images/AC00133.png" width={700} height={580} alt="AC00133" />
                  </div>
                </div>
                  )} */}
            </div>

            {/* section two  end*/}



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
                    <h2 ref={(el) => (elementscol2DcFast.current[1] = el)}><FontAwesomeIcon icon={faTruckFast} style={{ width: '70px', height: '70px', color:"#ff6600",marginLeft:'20px',paddingRight:'20px' }}/><span style={{borderBottom:"4px solid #ff6600",paddingBottom:"10px"}}>{t.col2dch2} </span></h2>
                    <p  ref={(el) => (elementscol2DcFast.current[2] = el)}>{t.col2dcp}</p>
                </div>
                <div className="col3_Public_row3_Public">
<Image src="/Images/DC_home2.jpg" width={620} height={480} alt="DC_home" />
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
        <div className="container5_Public"  ref={cont5DcFast}>
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
        </div>
        <div className='container6_Public'>
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
        </div>
        <div className='container7_Public' ref={cont7DcFast}>
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
          </div>
          <div className='row9_Public'>
          {/* first card  */}
    <div
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
    >
      <div
        style={{
          display: 'flex',
          width: '200%', 
          height: '100%',
          transition: 'transform 0.5s ease',
          transform: hovered ? 'translateX(-50%)' : 'translateX(0)',
        }}
      >
        {/* Image Card */}
        
        <div style={{ width: '50%', height: '100%', position: 'relative'  }}>
          <Image
            src="/Images/vth1.jpg"
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
    </div>
    {/* card end  */}




    {/* card 2 start  */}

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
            src="/Images/vth2.jpg"
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
    </div>
    {/* card 2 end  */}


{/* card 3  */}


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
            src="/Images/vth4.jpg"
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
    </div>

{/* card 3 end  */}


{/* card 4 start  */}

    <div
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
    >
      <div
        style={{
          display: 'flex',
          width: '200%', 
          height: '100%',
          transition: 'transform 0.5s ease',
          transform: hovered3 ? 'translateX(-50%)' : 'translateX(0)',
        }}
      >
        {/* Image Card */}
        <div style={{ width: '50%', height: '100%', position: 'relative' }}>
          <Image
            src="/Images/vth1.jpg"
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
    </div>
{/* card 4 end  */}

          </div>
        </div>
        <div className='container8_Public'    ref={contcardDcFast}>
          <div className='row10_Public'>
            <div className='col17_Public'>
              <h3 ref={(el) => (elementscolcardDcFast.current[0] = el)}>{t.col17dch3}</h3>
              <h2 ref={(el) => (elementscolcardDcFast.current[1] = el)}>{t.col17dch2}</h2>
              <p ref={(el) => (elementscolcardDcFast.current[2] = el)}>{t.col17dcp}</p>
            </div>
            <div className='col18_Public'></div>
          </div>
        </div>
        <div className='container9_Public'>

        </div>
        <div className='container10_Public'>
          <div className='row11_Public'>
            <div className='col19_Public'>
              <h2>{t.col19dch2}</h2>
              <h4>{t.col19dch4}</h4>
              <a href="/DataSheets">Find out More</a>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}




// 'use client';

// import { useEffect, useRef , useState} from 'react';

// import "../../Styles/DC_FAST.css"
// import Image from "next/image"
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Head from 'next/head';

// gsap.registerPlugin(ScrollTrigger);

// export default function DC_FAST(){
//   const [hovered, setHovered] = useState(false)
//   const [hovered1, setHovered1] = useState(false)
//   const [hovered2, setHovered2] = useState(false)
//   const [hovered3, setHovered3] = useState(false)


//   const [set , togset] = useState(false)
// const [set1 , togset1] = useState(false)
// const [set2 , togset2] = useState(false)
// const [set3 , togset3] = useState(false)
// const [set4 , togset4] = useState(false)
// const [set5 , togset5] = useState(false)




//   const col1DcFast = useRef(null);
//   const elementscol1DcFast = useRef([]);
//     const col2DcFast = useRef(null);
//   const elementscol2DcFast = useRef([]);
//       const col4DcFast = useRef(null);
//   const elementscol4DcFast = useRef([]);

//       const cont5DcFast = useRef(null);
//   const elementscol5DcFast = useRef([]);

//         const cont9DcFast = useRef(null);
//   const elementscol9DcFast = useRef([]);


//         const cont7DcFast = useRef(null);
//   const elementscol7DcFast = useRef([]);


    
//         const contcardDcFast = useRef(null);
//   const elementscolcardDcFast = useRef([]);







//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: col1DcFast.current,
//         start: 'top 80%',
//         toggleActions: 'play none none none', 
//       },
//     });

//     gsap.set(elementscol1DcFast.current, { y: 50, opacity: 0});

//     tl.to(elementscol1DcFast.current, {
//       y: 0,
//       opacity: 1,
//       duration: 0.8,
//       stagger: 0.2, 
//       ease: 'power2.out',
//     });
//   }, { scope: col1DcFast });




//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: col2DcFast.current,
//         start: 'top 80%',
//         toggleActions: 'play none none none', 
//       },
//     });

//     gsap.set(elementscol2DcFast.current, { y: 50, opacity: 0});

//     tl.to(elementscol2DcFast.current, {
//       y: 0,
//       opacity: 1,
//       duration: 0.8,
//       stagger: 0.2, 
//       ease: 'power2.out',
//     });
//   }, { scope: col2DcFast });




  
//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: col4DcFast.current,
//         start: 'top 80%',
//         toggleActions: 'play none none none', 
//       },
//     });

//     gsap.set(elementscol4DcFast.current, { y: 50, opacity: 0});

//     tl.to(elementscol4DcFast.current, {
//       y: 0,
//       opacity: 1,
//       duration: 0.8,
//       stagger: 0.2, 
//       ease: 'power2.out',
//     });
//   }, { scope: col4DcFast });


  
//     useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: cont5DcFast.current,
//         start: 'top 80%',
//         toggleActions: 'play none none none', 
//       },
//     });

//     gsap.set(elementscol5DcFast.current, { y: 50, opacity: 0});

//     tl.to(elementscol5DcFast.current, {
//       y: 0,
//       opacity: 1,
//       duration: 0.8,
//       stagger: 0.2, 
//       ease: 'power2.out',
//     });
//   }, { scope: cont5DcFast });



//       useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: cont9DcFast.current,
//         start: 'top 80%',
//         toggleActions: 'play none none none', 
//       },
//     });

//     gsap.set(elementscol9DcFast.current, { y: 50, opacity: 0});

//     tl.to(elementscol9DcFast.current, {
//       y: 0,
//       opacity: 1,
//       duration: 0.8,
//       stagger: 0.2, 
//       ease: 'power2.out',
//     });
//   }, { scope: cont9DcFast });



//         useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: cont7DcFast.current,
//         start: 'top 80%',
//         toggleActions: 'play none none none', 
//       },
//     });

//     gsap.set(elementscol7DcFast.current, { y: 50, opacity: 0});

//     tl.to(elementscol7DcFast.current, {
//       y: 0,
//       opacity: 1,
//       duration: 0.8,
//       stagger: 0.2, 
//       ease: 'power2.out',
//     });
//   }, { scope: cont7DcFast });


//           useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: contcardDcFast.current,
//         start: 'top 80%',
//         toggleActions: 'play none none none', 
//       },
//     });

//     gsap.set(elementscolcardDcFast.current, { y: 50, opacity: 0});

//     tl.to(elementscolcardDcFast.current, {
//       y: 0,
//       opacity: 1,
//       duration: 0.8,
//       stagger: 0.2, 
//       ease: 'power2.out',
//     });
//   }, { scope: contcardDcFast });

// const languageNames = {
//   en: 'En',
//   hi: 'Hi',
//   ar: 'العربية',
//   es: 'Es',
//   'pt-BR': 'Português (BR)',
//   de: 'Deutsch',  
// };





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
// const setCli5 = () => {
//   togset5(!set);
//   togset1(false);
//   togset2(false);
//   togset3(false);
//   togset4(false);
//   togset(false);
// }



//     const [lang, setLang] = useState('en');

// const translations = {
//   en: {
//     col1dch4:'Meet the Future of Fast Charging — DC FAST CHARGER.',
//     col1dch2:'Fast, intelligent, and ready for the road ahead — DC FAST CHARGER delivers next-gen EV charging in a sleek, powerful package. Designed for everyday drivers and EV enthusiasts alike, it combines effortless use with advanced performance. Simple to operate. Built to impress.',
//     button: 'EN',
// col2dch3:'Why  DC fast charger',
// col2dch2:'High-Speed Power Delivery',
// col2dcp:'DC Fast Charger 60kW-360kW',
// col4dch2:'Smart Energy Control',
// col4dch3:'Not just energy management — VNT is a complete EV energy ecosystem.',
// col5dcp:'Maximize the performance of your VNT charging system with seamless power metering and intelligent energy optimization features built right in.',
//  col6dch2:'Maximize Your Charging Power',
//  col6dch4:'More solar, more savings',
//  col6dcp1:'Optimize your solar energy with our innovative Solar Charging 3P Optimization, which intelligently switches your 3-phase DC fast charger to single-phase operation when sufficient solar surplus is available.',
// col6dcp2:'Maximize your solar charging during the day, even with limited solar output.',
// col6dch42:'Fast charging, on demand',
// col6dcp3:'Need full speed? Enjoy full 3-phase charging (up to 22kW) with grid power whenever you need it.',
// col6dch43:'Works with your setup',
// col6dcp4:'Ideal for 3-phase homes with single or 3-phase solar installations.',
// col9dch4:'Certified Performance',
// col9dch2:'Trusted Quality, Built to Last',
// col9dcp:'Our DC fast charger is engineered to meet the highest safety and performance standards required in the North American market.',
// col9dcbtn:'Click here ',
// col10dch3:'Smart Energy Optimization',
// col11dch2:'More than just charging — a smarter way to manage energy.',
// col12dcp:'Packed with industry-leading features, Quasar 2 sets a new benchmark for intelligent home energy management',
// col17dch3:'software',
// col17dch2:'VNT App',
// col17dcp:'Select between three modes: Grid/Solar to Vehicle, Vehicle-to-Home and Vehicle-to-Grid. Set charging and home powering schedules, monitor energy use and enable energy management features.',
// col19dch2:'Smart Public Charging',
// col19dch4:'See how DC-FAST is part of a complete solution at home.',
// col19dca:'Find Out More',
// },
//   hi: {
//      col1dch4:'तेजी से चार्जिंग के भविष्य से मिलें — डीसी फास्ट चार्जर।',
//     col1dch2:'तेज़, बुद्धिमान, और आने वाले रास्ते के लिए तैयार — डीसी फास्ट चार्जर एक शानदार और शक्तिशाली पैकेज में अगली पीढ़ी की इलेक्ट्रिक वाहन चार्जिंग प्रदान करता है। यह रोज़ाना ड्राइवरों और ईवी उत्साहियों दोनों के लिए डिज़ाइन किया गया है, जो आसान उपयोग को उन्नत प्रदर्शन के साथ जोड़ता है। सरल संचालन। प्रभावशाली निर्माण।',
//        button: 'HI',
// col2dch3:'तेज़ चार्जिंग: आपके इलेक्ट्रिक वाहन को जल्दी और प्रभावी तरीके से चार्ज करता है।',
// col2dch2:'तेज़ चार्ज करें',
// col2dcp:'DC फास्ट चार्जर 60kW-360kW',
// col4dch2:'ऊर्जा प्रबंधन।',
// col4dch3:'VNT चार्जिंग सिस्टम अब एक ऊर्जा प्रबंधन समाधान है।',
// col5dcp:'वालबॉक्स पावर मीटर और हमारे इन-बिल्ट ऊर्जा प्रबंधन फीचर्स के साथ पल्सर परिवार की पूरी क्षमता का लाभ उठाएं।',
//  col6dch2:'+200% अधिक इलेक्ट्रिक चार्ज का आनंद लें।',
//  col6dch4:'अधिक सौर ऊर्जा, अधिक बचत।',
//  col6dcp1:'हमारे नए सोलर चार्जिंग 3P ऑप्टिमाइज़ेशन के साथ अपने सौर सिस्टम का अधिकतम लाभ उठाएं — जब पर्याप्त सौर अधिशेष पाया जाता है, तो यह स्मार्ट तरीके से आपके 3-फेज़ पल्सर को 1-फेज़ में स्विच कर देता है।',
// col6dcp2:'दिन के दौरान अपनी सौर चार्जिंग को अधिकतम करें, भले ही सौर उत्पादन सीमित हो।',
// col6dch42:'मांग पर तेज़ चार्जिंग।',
// col6dcp3:'पूरी गति चाहिए? जब भी जरूरत हो, ग्रिड पावर के साथ पूरी 3-फेज़ चार्जिंग (अधिकतम 22kW) का आनंद लें।',
// col6dch43:'आपके सेटअप के साथ काम करता है।',
// col6dcp4:'3-फेज़ घरों के लिए आदर्श, जिनमें सिंगल या 3-फेज़ सोलर इंस्टॉलेशन हो।',
// col9dch4:'विश्वसनीय गुणवत्ता.',
// col9dch2:'UL अनुपालन प्रमाणपत्र।',
// col9dcp:'Quasar 2 को नॉर्थ अमेरिकन मार्केट के लिए UL सॉल्यूशंस से अनुपालन प्रमाणपत्र प्राप्त हुआ है।',
// col9dcbtn:'यहाँ क्लिक करें।',
// col10dch3:'ऊर्जा प्रबंधन।',
// col11dch2:'आपका चार्जिंग सिस्टम अब एक ऊर्जा प्रबंधन समाधान है।',
// col12dcp:'किसी भी अन्य चार्जर की तुलना में अधिक फीचर्स के साथ, Quasar 2 घर में ऊर्जा उपयोग की परिभाषा बदल देगा।',
// col17dch3:'सॉफ़्टवेयर',
// col17dch2:'VNT ऐप',
// col17dcp:'तीन मोड्स में से चुनें: ग्रिड/सोलर से वाहन तक, वाहन से घर तक, और वाहन से ग्रिड तक। चार्जिंग और घर को बिजली देने का समय निर्धारित करें, ऊर्जा उपयोग की निगरानी करें, और ऊर्जा प्रबंधन की विशेषताएँ सक्षम करें।',
// col19dch2:'घर पर इलेक्ट्रिक वाहन चार्जिंग।',
// col19dch4:'देखें कि Quasar 2 घर में एक पूर्ण समाधान का हिस्सा कैसे है।',
// col19dca:'अधिक जानकारी प्राप्त करें।',



//   },
//   ar: {
//      col1dch4:'التقِ بمستقبل الشحن السريع — شاحن تيار مباشر سريع',
//     col1dch2:'سريع، ذكي، ومستعد للطريق القادم — يوفر شاحن التيار المباشر السريع (DC FAST CHARGER) شحن الجيل التالي للمركبات الكهربائية في حزمة أنيقة وقوية. مصمم للسائقين اليوميين وعشاق السيارات الكهربائية على حد سواء، يجمع بين سهولة الاستخدام والأداء المتقدم. سهل التشغيل. مصنوع ليبهر.',
//   button: 'AR',
// col2dch3:'شحن سريع: يشحن سيارتك الكهربائية بسرعة وكفاءة عالية.',
// col2dch2:'اشحن بسرعة',
// col2dcp:'شاحن تيار مباشر سريع 60 كيلوواط - 360 كيلوواط',
// col4dch2:'إدارة الطاقة।',
// col4dch3:'أصبح نظام الشحن VNT الآن حلاً لإدارة الطاقة.',
// col5dcp:'افتح الإمكانات الكاملة لعائلة Pulsar باستخدام عداد الطاقة من Wallbox وميزات إدارة الطاقة المدمجة لدينا.',
//  col6dch2:'استمتع بشحن كهربائي يزيد بنسبة +200%.',
//  col6dch4:'المزيد من الطاقة الشمسية، المزيد من التوفير.',
//  col6dcp1:'استفد إلى أقصى حد من نظام الطاقة الشمسية الخاص بك مع تحسين الشحن الشمسي ثلاثي الطور الجديد لدينا – يقوم بتحويل جهاز Pulsar ثلاثي الطور إلى طور واحد بذكاء عندما يتم اكتشاف فائض شمسي كافٍ.',
// col6dcp2:'حقق أقصى استفادة من شحن الطاقة الشمسية خلال النهار، حتى مع محدودية إنتاج الطاقة الشمسية.',
// col6dch42:'الشحن السريع عند الطلب.',
// col6dcp3:'هل تحتاج إلى السرعة الكاملة؟ استمتع بالشحن الثلاثي الطور الكامل (حتى 22 كيلو واط) باستخدام طاقة الشبكة متى ما احتجت إليها.',
// col6dch43:'يعمل مع إعدادك',
// col6dcp4:'مثالي للمنازل ذات الثلاثة أطوار مع تركيبات شمسية أحادية الطور أو ثلاثية الطور.',
// col9dch4:' جودة موثوقة.',
// col9dch2:'شهادة الامتثال من UL',
// col9dcp:'لقد حصل Quasar 2 على شهادة الامتثال من UL Solutions لسوق أمريكا الشمالية.',
// col9dcbtn:'انقر هنا',
// col10dch3:'إدارة الطاقة',
// col11dch2:'نظام الشحن الخاص بك أصبح الآن حلاً لإدارة الطاقة.',
// col12dcp:'بميزات أكثر من أي شاحن آخر، سيُعيد Quasar 2 تعريف استخدام الطاقة في المنزل.',
// col17dch3:'البرمجيات',
// col17dch2:'تطبيق VNT',
// col17dcp:'اختر بين ثلاثة أوضاع: من الشبكة/الطاقة الشمسية إلى السيارة، من السيارة إلى المنزل، ومن السيارة إلى الشبكة. قم بتعيين جداول الشحن وتزويد المنزل بالطاقة، راقب استخدام الطاقة وفعل ميزات إدارة الطاقة.',
// col19dch2:'شحن المركبة الكهربائية في المنزل',
// col19dch4:'شاهد كيف أن Quasar 2 جزء من حل كامل في المنزل.',
// col19dca:'اكتشف المزيد',



//   },
//   es: {
//      col1dch4:'Conoce el futuro de la carga rápida — CARGADOR RÁPIDO DC.',
//     col1dch2:'Rápido, inteligente y listo para el camino por delante — el CARGADOR RÁPIDO DC ofrece carga de vehículos eléctricos de próxima generación en un paquete elegante y potente. Diseñado tanto para conductores diarios como para entusiastas de los vehículos eléctricos, combina un uso sencillo con un rendimiento avanzado. Fácil de operar. Diseñado para impresionar.',
// button:'ES',
// col2dch3:'Carga rápida: carga tu vehículo eléctrico de manera rápida y eficiente.',
// col2dch2:'Carga rápido',
// col2dcp:'Cargador rápido de corriente continua (DC) 60 kW - 360 kW',
// col4dch2:'Gestión de la energía।',
// col4dch3:'El sistema de carga VNT ahora es una solución de gestión de la energía.',
// col5dcp:'Desbloquea todo el potencial de la familia Pulsar con un medidor de energía Wallbox y nuestras funciones integradas de gestión de energía.',
//  col6dch2:'Disfruta de un +200% más de carga eléctrica.',
//  col6dch4:'Más energía solar, más ahorros.',
//  col6dcp1:'Aprovecha al máximo tu sistema solar con nuestra nueva Optimización de Carga Solar 3P: cambia inteligentemente tu Pulsar de 3 fases a 1 fase cuando se detecta un excedente solar suficiente.',
// col6dcp2:'Maximiza la carga solar durante el día, incluso con una producción solar limitada.',
// col6dch42:'Carga rápida, bajo demanda.',
// col6dcp3:'¿Necesitas velocidad máxima? Disfruta de carga trifásica completa (hasta 22 kW) con energía de la red siempre que la necesites.',
// col6dch43:'Funciona con tu configuración.',
// col6dcp4:'Ideal para hogares de 3 fases con instalaciones solares monofásicas o trifásicas.',
// col9dch4:'Calidad confiable.',
// col9dch2:'Certificado de Cumplimiento UL.',
// col9dcp:'Quasar 2 ha recibido un certificado de cumplimiento de UL Solutions para el mercado de América del Norte.',
// col9dcbtn:'Haz clic aquí.',
// col10dch3:'Gestión de la Energía.',
// col11dch2:'Tu sistema de carga ahora es una solución de gestión de energía.',
// col12dcp:'Con más funciones que cualquier otro cargador, Quasar 2 redefinirá el uso de energía en el hogar.',
// col17dch3:'Programa informático',
// col17dch2:'Aplicación VNT',
// col17dcp:'Seleccione entre tres modos: Red/Solar a Vehículo, Vehículo a Hogar y Vehículo a Red. Configure los horarios de carga y suministro de energía para el hogar, controle el uso de energía y active las funciones de gestión energética.',
// col19dch2:'Carga de vehículo eléctrico en casa.',
// col19dch4:'Ve cómo Quasar 2 es parte de una solución completa en el hogar.',
// col19dca:'Descubre más.',



//   },
//   'pt-BR': {
//      col1dch4:'Conheça o futuro do carregamento rápido — CARREGADOR RÁPIDO DC.',
//     col1dch2:'Rápido, inteligente e pronto para a estrada — o CARREGADOR RÁPIDO DC oferece carregamento de veículos elétricos de próxima geração em um pacote elegante e poderoso. Projetado tanto para motoristas do dia a dia quanto para entusiastas de EV, ele combina uso fácil com desempenho avançado. Simples de operar. Feito para impressionar.',
// button:'PT',
// col2dch3:'Carregamento rápido: carrega seu veículo elétrico de forma rápida e eficiente.',
// col2dch2:'Carregue rápido।',
// col2dcp:'Carregador rápido DC 60 kW - 360 kW',
// col4dch2:'Gestão de Energia।',
// col4dch3:'O sistema de carregamento VNT agora é uma solução de gestão de energia.',
// col5dcp:'Desbloqueie todo o potencial da família Pulsar com um medidor de energia Wallbox e nossos recursos integrados de gestão de energia.',
//  col6dch2:'Desfrute de +200% mais carga elétrica.',
//  col6dch4:'Mais energia solar, mais economia.',
//  col6dcp1:'Aproveite ao máximo seu sistema solar com nossa nova Otimização de Carregamento Solar 3P — que alterna inteligentemente seu Pulsar trifásico para monofásico quando é detectado um excedente solar suficiente.',
// col6dcp2:'Maximize o carregamento solar durante o dia, mesmo com produção solar limitada.',
// col6dch42:'Carregamento rápido, sob demanda.',
// col6dcp3:'Precisa de velocidade máxima? Aproveite o carregamento trifásico completo (até 22 kW) com energia da rede sempre que precisar.',
// col6dch43:'Funciona com a sua configuração.',
// col6dcp4:'Ideal para casas trifásicas com instalações solares monofásicas ou trifásicas.',
// col9dch4:' Qualidade confiável.',
// col9dch2:'Certificado de Conformidade UL.',
// col9dcp:'Quasar 2 recebeu um certificado de conformidade da UL Solutions para o mercado da América do Norte.',
// col9dcbtn:'Clique aqui.',
// col10dch3:'Gestão de Energia.',
// col11dch2:'Seu sistema de carregamento agora é uma solução de gestão de energia.',
// col12dcp:'Com mais recursos do que qualquer outro carregador, o Quasar 2 vai redefinir o uso de energia em casa.',
// col17dch3:'Programa de computador',
// col17dch2:'Aplicativo VNT',
// col17dcp:'Selecione entre três modos: Rede/Solar para Veículo, Veículo para Casa e Veículo para Rede. Configure os horários de carregamento e fornecimento de energia para a casa, monitore o uso de energia e ative os recursos de gestão de energia.',
// col19dch2:'Carregamento de veículo elétrico em casa.',
// col19dch4:'Veja como o Quasar 2 faz parte de uma solução completa para o lar.',
// col19dca:'Saiba mais.',



// },
//    de: {
//      col1dch4:'Lernen Sie die Zukunft des Schnellladens kennen — DC-SCHNELLLADEGERÄT.',
//     col1dch2:'Schnell, intelligent und bereit für die Straße — der DC-SCHNELLLADER bietet Ladeleistung der nächsten Generation für Elektrofahrzeuge in einem schlanken, leistungsstarken Paket. Entwickelt für den täglichen Fahrer und EV-Enthusiasten gleichermaßen, kombiniert er mühelose Bedienung mit fortschrittlicher Leistung. Einfach zu bedienen. Entwickelt, um zu beeindrucken.',
//   button:'DE',
// col2dch3:'Schnelles Laden: Lädt Ihr Elektrofahrzeug schnell und effizient auf.',
// col2dch2:'Schnell aufladen।',
// col2dcp:'DC-Schnellladegerät 60 kW - 360 kW',
// col4dch2:'Energiemanagement।',
// col4dch3:'Das VNT-Ladesystem ist jetzt eine Energiemanagement-Lösung.',
// col5dcp:'Entfesseln Sie das volle Potenzial der Pulsar-Familie mit einem Wallbox-Leistungsmesser und unseren integrierten Energiemanagement-Funktionen.',
//  col6dch2:'Genießen Sie +200 % mehr elektrische Ladung.',
//  col6dch4:'Mehr Solarenergie, mehr Einsparungen.',
//  col6dcp1:'Nutzen Sie Ihr Solarsystem optimal mit unserer neuen Solar Charging 3P Optimierung – sie schaltet Ihren 3-Phasen Pulsar intelligent auf 1-Phase um, wenn ein ausreichender Solarüberschuss erkannt wird.',
// col6dcp2:'Maximieren Sie Ihre Solarladung tagsüber, auch bei begrenzter Solarleistung.',
// col6dch42:'Schnellladung auf Abruf.',
// col6dcp3:'Brauchen Sie volle Geschwindigkeit? Genießen Sie volles 3-Phasen-Laden (bis zu 22 kW) mit Netzstrom, wann immer Sie es brauchen.',
// col6dch43:'Funktioniert mit Ihrer Einrichtung.',
// col6dcp4:'Ideal für 3-Phasen-Häuser mit einphasigen oder dreiphasigen Solaranlagen.',
// col9dch4:'Calidad confiable.',
// col9dch2:'UL-Konformitätszertifikat.',
// col9dcp:'Quasar 2 hat von UL Solutions ein Konformitätszertifikat für den nordamerikanischen Markt erhalten.',
// col9dcbtn:'Hier klicken.',
// col10dch3:'Energiemanagement',
// col11dch2:'Ihr Ladesystem ist jetzt eine Energiemanagementlösung.',
// col12dcp:'Mit mehr Funktionen als jeder andere Ladegerät wird Quasar 2 die Energienutzung zu Hause neu definieren.',
// col17dch3:'Computerprogramm',
// col17dch2:'VNT-App',
// col17dcp:'Wählen Sie zwischen drei Modi: Netz/Solar zu Fahrzeug, Fahrzeug zu Haus und Fahrzeug zu Netz. Legen Sie Lade- und Hausstrompläne fest, überwachen Sie den Energieverbrauch und aktivieren Sie Energiemanagement-Funktionen.',
// col19dch2:'Heimladung für Elektrofahrzeuge.',
// col19dch4:'Sehen Sie, wie Quasar 2 Teil einer kompletten Lösung für zu Hause ist.',
// col19dca:'Mehr erfahren.',

//    },
// }

// const toggleLanguage = () => {
//   if (lang === 'en') setLang('hi');
//   else if (lang === 'hi') setLang('ar');
//   else if (lang === 'ar') setLang('es');
//   else if (lang === 'es') setLang('pt-BR');  
//   else if (lang === 'pt-BR') setLang('de');  
//   else setLang('en');
// };

//   const t = translations[lang];


//     return(
//         <>

// <Head>
//   <meta
//   name="description"
//   content="Discover VNT's advanced DC fast chargers, delivering rapid and efficient electric vehicle charging solutions for residential, commercial, and industrial applications across India."
// />

// <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// <meta name="robots" content="index, follow" />

// <meta property="og:title" content="VNT | Expert DC Fast Charger Solutions" />
// <meta property="og:description" content="VNT offers reliable and high-performance DC fast chargers designed for quick EV charging, supporting sustainable transportation and energy efficiency." />
// <meta property="og:type" content="website" />
// <meta property="og:url" content="https://vnt.in/solutions/DC_FAST/" />
// <meta property="og:site_name" content="VNT" />

// <meta
//   name="keywords"
//   content="VNT, DC fast charger, electric vehicle charging, EV chargers India, fast EV charging solutions, commercial EV chargers, residential EV charging, sustainable transportation, EV infrastructure"
// />
// </Head>





//         <div
//   style={{
//     padding: '11px 20px',
//     fontFamily: lang === 'ar' ? "'Cairo', sans-serif" : 'Arial, sans-serif',
//   }}
//   dir={lang === 'ar' ? 'rtl' : 'ltr'}
//   lang={lang}
// >
//   <button onClick={toggleLanguage}>
//     {t.button} 
//   </button>
// </div>

//       <div className="main1_DC_FAST" >



// <div className="cont1_nav">
//   <div className="row1_Nav">
//      <Link href="/AC_WALLBOX" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
//     <div className="nav-item nav-residential">
//       <h4>Residential</h4>
//     </div>
//     </Link>
//     <Link href="/DC_FAST" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
//     <div className="nav-item nav-public">
//       <h4>Public</h4>
//     </div>
//      </Link>
//     <Link href="/CMS" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
//     <div className="nav-item nav-cms">
//       <h4>CMS/APP</h4>
//     </div>
//      </Link>

//   </div>
// </div>



//         <div className="container1_DC_FAST" >
//             <div className="row1_DC_FAST">

//             </div>
//         </div>





//             {/* section two  */}
//             <div className="container2_RESIDENCE">
//               <div className="row2_RESIDENCE">
//                 <div className="col1_RESIDENCE" onClick={setCli} >
//                   <h2>WallBox 7.4 KW AC Type-II</h2>
//                 </div>
//                 <div className="col2_RESIDENCE" onClick={setCli1} >
//                   <h2>Wallbox 11kW AC Type-II</h2>
//                 </div>
//                 <div className="col3_RESIDENCE" onClick={setCli2} >
//                   <h2>Wallbox 22kW AC Type-II</h2>
//                 </div>
//                 <div className="col4_RESIDENCE" onClick={setCli3} >
//                   <h2>Portable 3.3kW AC Type-II</h2>
//                 </div>
//                 <div className="col5_RESIDENCE" onClick={setCli4} >
//                   <h2>Portable 7.4kW AC Type-II</h2>
//                 </div>
//                 <div className="col6_RESIDENCE" onClick={setCli5}>
//                   <h2>AC001 3.3kW</h2>
//                 </div>
//               </div>
//               {set && (
//                 <div className="row3_RESIDENCE">
// <div className="col66_RESIDENCE">
//   <h2>wallbox 7.4 Kw AC-Type 11</h2>
//   <p>11</p>
// </div>
// <div className="col7_RESIDENCE">
//   <Image src="/Images/ACTYPE74.png" width={700} height={570} alt="AC11KW" />
// </div>
//               </div>
//               )} 
//               {set1 &&  (
//                             <div className="row4_RESIDENCE">
//                 <div className="col8_RESIDENCE">
//                     <h2>second 2</h2>
//   <p>22</p>
//                 </div>
// <div className="col9_RESIDENCE">
//   <Image src="/Images/AC-TYPE2.png" width={700} height={580} alt="AC-TYPE2" />
// </div>
//               </div>
//                 )}
//                 {set2 && (
//                             <div className="row5_RESIDENCE" >
//                 <div className="col10_RESIDENCE">
//                     <h2>third 3</h2>
//   <p>33</p>
//                 </div>
// <div className="col11_RESIDENCE">
//   <Image src="/Images/AC11KW.png" width={700} height={580} alt="AC11KW" />
// </div>
//               </div>
//                )}
//                {set3 && (
//                             <div className="row6_RESIDENCE" >
//                 <div className="col12_RESIDENCE">
//                     <h2>fourth 4</h2>
//   <p>44</p>
//                 </div>
// <div className="col13_RESIDENCE">
//   <Image src="/Images/PORTABLE33TYPE2.png" width={700} height={580} alt="PORTABLE33TYPE2" />
// </div>
//               </div>
//                 )}
//                 {set4 && (
//                             <div className="row7_RESIDENCE" >
//                 <div className="col14_RESIDENCE">
//                     <h2>five 5 </h2>
//   <p>55</p>
//                 </div>
// <div className="col15_RESIDENCE">
//   <Image src="/Images/PORTABLE74AC2.png" width={700} height={580} alt="PORTABLE74AC2" />
// </div>
//               </div>
//                 )}
//                 {set5 && (
//                 <div className="row8_RESIDENCE">
//                   <div className="col15_RESIDENCE">
// <h2>six 6</h2>
// <p>66</p>
//                   </div>
//                   <div className="col16_RESIDENCE">
//   <Image src="/Images/AC00133.png" width={700} height={580} alt="AC00133" />
//                   </div>
//                 </div>
//                   )}
//             </div>

//             {/* section two  end*/}



//         <div className="container2_DC_FAST" >
//             <div className="row2_DC_FAST">
//                 <div className="col1_DC_FAST" ref={col1DcFast}>
//                     <h4 ref={(el) => (elementscol1DcFast.current[0] = el)}>{t.col1dch4}</h4>
//                     <h2  ref={(el) => (elementscol1DcFast.current[1] = el)}>{t.col1dch2}</h2>
//                 </div>
//             </div>
//         </div>
//         <div className="container3_DC_FAST">
//             <div className="row3_DC_FAST">
//                 <div className="col2_DC_FAST" ref={col2DcFast}>
//                     <h3 ref={(el) => (elementscol2DcFast.current[0] = el)}>{t.col2dch3}</h3>
//                     <h2 ref={(el) => (elementscol2DcFast.current[1] = el)}><FontAwesomeIcon icon={faTruckFast} style={{ width: '70px', height: '70px', color:"#ff6600",marginLeft:'20px',paddingRight:'20px' }}/><span style={{borderBottom:"4px solid #ff6600",paddingBottom:"10px"}}>{t.col2dch2} </span></h2>
//                     <p  ref={(el) => (elementscol2DcFast.current[2] = el)}>{t.col2dcp}</p>
//                 </div>
//                 <div className="col3_DC_FAST">
// <Image src="/Images/DC_home2.jpg" width={620} height={480} alt="DC_home" />
//                 </div>
//             </div>
//         </div>
//         <div className="container4_DC_FAST" ref={col4DcFast}>
//             <div className="row4_DC_FAST">
//                 <div className="col4_DC_FAST" >
//                     <h2 ref={(el) => (elementscol4DcFast.current[0] = el)}>{t.col4dch2}</h2>
//                     <h3 ref={(el) => (elementscol4DcFast.current[1] = el)}>{t.col4dch3}</h3>
//                 </div>
//                 <div className="col5_DC_FAST">
//                     <p ref={(el) => (elementscol4DcFast.current[2] = el)}>{t.col5dcp}</p>
//                 </div>
//             </div>
//         </div>
//         <div className="container5_DC_FAST"  ref={cont5DcFast}>
//             <div className="row5_DC_FAST">
//                 <div className="col6_DC_FAST">
//                     <h2 ref={(el) => (elementscol5DcFast.current[0] = el)}>{t.col6dch2}</h2>
//                     <p ref={(el) => (elementscol5DcFast.current[1] = el)}>{t.col6dcp1}</p>
//                 <h4 ref={(el) => (elementscol5DcFast.current[2] = el)}>{t.col6dch4}</h4>
//                 <p ref={(el) => (elementscol5DcFast.current[3] = el)}>{t.col6dcp2}</p>
//                 <h4 ref={(el) => (elementscol5DcFast.current[4] = el)}>{t.col6dch42}</h4>
//                 <p ref={(el) => (elementscol5DcFast.current[5] = el)}>{t.col6dcp3}</p>
//                 <h4 ref={(el) => (elementscol5DcFast.current[6] = el)}>{t.col6dch43}</h4>
//                 <p ref={(el) => (elementscol5DcFast.current[7] = el)}>{t.col6dcp4}</p>
//                 </div>
//                 <div className="col7_DC_FAST">
//                     <Image src="/Images/elec.png" width={790} height={550} alt="elec"/>
//                 </div>
//             </div>
//         </div>
//         <div className='container6_DC_FAST'>
//           <div className='row6_DC_FAST'>
//             <div className='col8_DC_FAST'>
// <Image src="/Images/DC_FAST_3.jpg" width={700} height={450} alt='DC_FAST_3' />
//             </div>
//             <div className='col9_DC_FAST' ref={cont9DcFast}>
//               <h4 ref={(el) => (elementscol9DcFast.current[0] = el)}>{t.col9dch4}</h4>
//               <h2 ref={(el) => (elementscol9DcFast.current[1] = el)}>{t.col9dch2}</h2>
//               <p ref={(el) => (elementscol9DcFast.current[2] = el)}>{t.col9dcp}</p>
//               <button type='submit'>{t.col9dcbtn}</button>
//             </div>
//           </div>
//         </div>
//         <div className='container7_DC_FAST' ref={cont7DcFast}>
//           <div className='row7_DC_FAST'>
//             <div className='col10_DC_FAST'>
//               <h3 ref={(el) => (elementscol7DcFast.current[0] = el)}>{t.col10dch3}</h3>
//             </div>
//           </div>
//           <div className='row8_DC_FAST'>
//             <div className='col11_DC_FAST'>
//               <h2 ref={(el) => (elementscol7DcFast.current[1] = el)}>{t.col11dch2}</h2>
//             </div>
//             <div className='col12_DC_FAST'>
//               <p ref={(el) => (elementscol7DcFast.current[2] = el)}>{t.col12dcp}</p>
//             </div>
//           </div>
//           <div className='row9_DC_FAST'>
//           {/* first card  */}
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         width: '302px',
//         height: '392px',
//         overflow: 'hidden',
//         position: 'relative',
//         borderRadius: '10px',
//         border: '1px solid #ccc',
//         cursor:'pointer',
//         marginLeft:'200px',
//       }}
//     >
//       <div
//         style={{
//           display: 'flex',
//           width: '200%', 
//           height: '100%',
//           transition: 'transform 0.5s ease',
//           transform: hovered ? 'translateX(-50%)' : 'translateX(0)',
//         }}
//       >
//         {/* Image Card */}
        
//         <div style={{ width: '50%', height: '100%', position: 'relative'  }}>
//           <Image
//             src="/Images/vth1.jpg"
//             alt="vth1"
//             layout="fill"
//             objectFit="cover"
//             style={{ borderRadius: '10px' }}
//           />
//         </div>

//         {/* Content Card */}
//         <div
//           style={{
//             width: '50%',
//             height: '100%',
//             backgroundColor: 'white',
//             padding: '20px',
//             boxSizing: 'border-box',
//               background:'#623e1aff',
//               color:'#fff',
//             fontFamily:'Lato , sans-serif',
//           }}
//         >
          
//           <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Vehicle-to-Home</h2>
//           <p style={{ fontSize: '14px', marginBottom: '10px' }}>
//             Power your home with the energy stored in your EV. Whether you're storing energy from
//             your solar panels or the grid, you'll save big during peak hours.
//           </p>
//           <h3 style={{ fontSize: '14px', marginBottom: '5px' }}>
//             No need to purchase expensive battery storage
//           </h3>
//           <h3 style={{ fontSize: '14px' }}>Avoid peak energy costs</h3>
//         </div>
//       </div>
//     </div>
//     {/* card end  */}




//     {/* card 2 start  */}

//     <div
//       onMouseEnter={() => setHovered1(true)}
//       onMouseLeave={() => setHovered1(false)}
//       style={{
//         width: '302px',
//         height: '392px',
//         overflow: 'hidden',
//         position: 'relative',
//         borderRadius: '10px',
//         border: '1px solid #ccc',
//         cursor:'pointer',
//       }}
//     >
//       <div
//         style={{
//           display: 'flex',
//           width: '200%', 
//           height: '100%',
//           transition: 'transform 0.5s ease',
//           transform: hovered1 ? 'translateX(-50%)' : 'translateX(0)',
//         }}
//       >
//         {/* Image Card */}
//         <div style={{ width: '50%', height: '100%', position: 'relative' }}>
//           <Image
//             src="/Images/vth2.jpg"
//             alt="vth1"
//             layout="fill"
//             objectFit="cover"
//             style={{ borderRadius: '10px' }}
//           />
//         </div>

//         {/* Content Card */}
//         <div
//           style={{
//             width: '50%',
//             height: '100%',
//             backgroundColor: 'white',
//             padding: '20px',
//             boxSizing: 'border-box',
//                 background:'#623e1aff',
//               color:'#fff',
//             fontFamily:'Lato , sans-serif',

//           }}
//         >
          
//           <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Vehicle-to-Home</h2>
//           <p style={{ fontSize: '14px', marginBottom: '10px' }}>
//             Power your home with the energy stored in your EV. Whether you're storing energy from
//             your solar panels or the grid, you'll save big during peak hours.
//           </p>
//           <h3 style={{ fontSize: '14px', marginBottom: '5px' }}>
//             No need to purchase expensive battery storage
//           </h3>
//           <h3 style={{ fontSize: '14px' }}>Avoid peak energy costs</h3>
//         </div>
//       </div>
//     </div>
//     {/* card 2 end  */}


// {/* card 3  */}


//    <div
//       onMouseEnter={() => setHovered2(true)}
//       onMouseLeave={() => setHovered2(false)}
//       style={{
//         width: '302px',
//         height: '392px',
//         overflow: 'hidden',
//         position: 'relative',
//         borderRadius: '10px',
//         border: '1px solid #ccc',
//         cursor:'pointer',

//       }}
//     >
//       <div
//         style={{
//           display: 'flex',
//           width: '200%', 
//           height: '100%',
//           transition: 'transform 0.5s ease',
//           transform: hovered2 ? 'translateX(-50%)' : 'translateX(0)',
//         }}
//       >
//         {/* Image Card */}
//         <div style={{ width: '50%', height: '100%', position: 'relative' }}>
//           <Image
//             src="/Images/vth4.jpg"
//             alt="vth1"
//             layout="fill"
//             objectFit="cover"
//             style={{ borderRadius: '10px' }}
//           />
//         </div>

//         {/* Content Card */}
//         <div
//           style={{
//             width: '50%',
//             height: '100%',
//             backgroundColor: 'white',
//             padding: '20px',
//             boxSizing: 'border-box',
//                 background:'#623e1aff',
//               color:'#fff',
//             fontFamily:'Lato , sans-serif',

//           }}
      
//         >
//           <h2 style={{ fontSize: '20px', marginBottom: '10px' }} >Vehicle-to-Home</h2>
//           <p style={{ fontSize: '14px', marginBottom: '10px' }} >
//             Power your home with the energy stored in your EV. Whether you're storing energy from
//             your solar panels or the grid, you'll save big during peak hours.
//           </p>
//           <h3 style={{ fontSize: '14px', marginBottom: '5px' }} >
//             No need to purchase expensive battery storage
//           </h3>
//           <h3 style={{ fontSize: '14px' }}>Avoid peak energy costs</h3>
//         </div>
//       </div>
//     </div>

// {/* card 3 end  */}


// {/* card 4 start  */}

//     <div
//       onMouseEnter={() => setHovered3(true)}
//       onMouseLeave={() => setHovered3(false)}
//       style={{
//         width: '302px',
//         height: '392px',
//         overflow: 'hidden',
//         position: 'relative',
//         borderRadius: '10px',
//         border: '1px solid #ccc',
//         cursor:'pointer',

//       }}
//     >
//       <div
//         style={{
//           display: 'flex',
//           width: '200%', 
//           height: '100%',
//           transition: 'transform 0.5s ease',
//           transform: hovered3 ? 'translateX(-50%)' : 'translateX(0)',
//         }}
//       >
//         {/* Image Card */}
//         <div style={{ width: '50%', height: '100%', position: 'relative' }}>
//           <Image
//             src="/Images/vth1.jpg"
//             alt="vth1"
//             layout="fill"
//             objectFit="cover"
//             style={{ borderRadius: '10px' }}
//           />
//         </div>

//         {/* Content Card */}
//         <div
//           style={{
//             width: '50%',
//             height: '100%',
//             backgroundColor: 'white',
//             padding: '20px',
//             boxSizing: 'border-box',
//                 background:'#623e1aff',
//               color:'#fff',
//             fontFamily:'Lato , sans-serif',

//           }}
//         >
          
//           <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Vehicle-to-Home</h2>
//           <p style={{ fontSize: '14px', marginBottom: '10px' }}>
//             Power your home with the energy stored in your EV. Whether you're storing energy from
//             your solar panels or the grid, you'll save big during peak hours.
//           </p>
//           <h3 style={{ fontSize: '14px', marginBottom: '5px' }}>
//             No need to purchase expensive battery storage
//           </h3>
//           <h3 style={{ fontSize: '14px' }}>Avoid peak energy costs</h3>
//         </div>
//       </div>
//     </div>
// {/* card 4 end  */}

//           </div>
//         </div>
//         <div className='container8_DC_FAST'    ref={contcardDcFast}>
//           <div className='row10_DC_FAST'>
//             <div className='col17_DC_FAST'>
//               <h3 ref={(el) => (elementscolcardDcFast.current[0] = el)}>{t.col17dch3}</h3>
//               <h2 ref={(el) => (elementscolcardDcFast.current[1] = el)}>{t.col17dch2}</h2>
//               <p ref={(el) => (elementscolcardDcFast.current[2] = el)}>{t.col17dcp}</p>
//             </div>
//             <div className='col18_DC_FAST'></div>
//           </div>
//         </div>
//         <div className='container9_DC_FAST'>

//         </div>
//         <div className='container10_DC_FAST'>
//           <div className='row11_DC_FAST'>
//             <div className='col19_DC_FAST'>
//               <h2>{t.col19dch2}</h2>
//               <h4>{t.col19dch4}</h4>
//               <a href="/DataSheets">Find out More</a>
//             </div>
//           </div>
//         </div>
//       </div>
//         </>
//     )
// }