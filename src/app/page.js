'use client';

import "../Styles/Home.css";
import { useEffect, useRef , useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmog } from '@fortawesome/free-solid-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import { faMarsDouble } from '@fortawesome/free-solid-svg-icons'
import Head from "next/head";



const CountUpNumber = ({ end, label }) => {
  const ref = useRef();
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const duration = 1000;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = end / steps;

          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(counter);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);

          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, hasAnimated]);

  return (
    <div ref={ref} style={{ margin: '30px 0', fontSize: '24px' }}>
      <h3>{count}+</h3>
      <h4>{label}</h4>
    </div>
  );
};




gsap.registerPlugin(ScrollTrigger);




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

export default function Home() {
          const [isVisiblepop, setIsVisiblepop] = useState(false);

      const toggleVisibilitypop = () => {
        setIsVisiblepop(!isVisiblepop);
      };


  const scrollRef = useRef(null);
  const locoScroll = useRef(null);


  useEffect(() => {
    if (!scrollRef.current) return;

    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (locoScroll.current) locoScroll.current.destroy();
    };
  }, []);

 const [lang, setLang] = useState('en');

const translations = {
  en: {
    heading: 'Our impact',
    subheading1: 'Together, we’re building a more sustainable future.',
    sec1subH: 'Tonnes of CO₂ avoided',
    sec1subH2: 'Million of electric kilometers driven',
    sec1subH3: 'services engineers globally',
    button: 'EN',
    sec1subH4: 'ASP Partners',
    sec1subH5: 'Clients',
    cont4col3: 'Empower Your Journey with Smarter, Efficient Charging Solutions',
    cont7col12a: 'Your Vision, Our Commitment to Excellence',
    cont7col12b: 'Achievements That Make Us Who We Are',
    cont10col23: 'Explore with us',
    cont10col231: 'Explore the Future with VNT',
    cont11col241: 'Charging Guide',
    cont11col242: 'Discover how EV charging works, from home chargers to public fast charging stations. Learn about charging types, costs, and the technology driving the future of electric mobility.',
 col25homeh3:'The Charging Journal ',
 col26homeh3:'Updates Hub',
 col25homep:`Explore expert insights, tips, and guides on EV charging, clean mobility, and the latest innovations shaping the electric vehicle ecosystem. `,
col26homep:`Stay updated with the latest company announcements, industry news, and EV charging developments from around the world. `,
col1homeh22:'Smart EV Charging Solutions — Built for Home, Business & Public Spaces. Seamless. Powerful. Reliable.',
row23homeh21:'The future of energy is happening now. Join the EV revolution.',
col36homeh4:'For Drivers and Business Owners',
col36homeh2:'Get your charger + installation',
col36homep:'Smart chargers require professional installation and our installer partners are ready to help you every step of the way. Contact us to get started.',
col37homeh4:'For Partners',
col37homeh2:'Become a VNT Partner',
col37homep:'Join our global network of partners. We can unlock the future of energy, together.',
row3_Home_1h2:'Residential EV Charger',
row3_Home_1p:`A Residential EV Charger makes home charging simple, safe, and efficient, ensuring your electric car is always ready to drive. With compact design and smart features, it offers reliable performance tailored for everyday use. Perfect for EV owners seeking convenient and cost-effective charging at home.`,
row3_Home_2h2:'Public Charger',
row3_Home_2p:`Our Fast EV Chargers provide ultra-fast, safe, and reliable charging across urban hubs, highways, and public spaces, enabling seamless travel and supporting electric mobility adoption.`,
// bgimage3p:`Our CMS and mobile app (Android & iOS) enable real-time EV charger monitoring and control with remote access, secure payments, live status, and smart analytics—ensuring seamless management for operators and convenience for drivers. `,
col1NAV_EV1a:'Residential charging',
col2NAV_EV2a:'Public Charging',
col3NAV_EV3a:' Content Management System',
navitem1:'Residential',
navitem2:'Public',
navitem3:'CMS/APP',
col38homea:'Need Help? Talk to Us',
},

  hi: {
    heading: 'हमारा प्रभाव',
    subheading1: 'हम मिलकर एक अधिक टिकाऊ भविष्य का निर्माण कर रहे हैं।',
    sec1subH: 'टन CO₂ उत्सर्जन से बचाव',
    sec1subH2: 'मिलियन इलेक्ट्रिक किलोमीटर की यात्रा पूरी की गई',
    sec1subH3: 'सेवा इंजीनियर जो पूरी दुनिया में काम कर रहे हैं।',
    button: 'HI',
    sec1subH4: 'एएसपी साझेदार',
    sec1subH5: 'ग्राहक',
    cont4col3: 'अपने सफर को सशक्त बनाएं स्मार्ट और कुशल चार्जिंग सॉल्यूशंस के साथ।',
    cont7col12a: 'आपका दृष्टिकोण, हमारी उत्कृष्टता के प्रति प्रतिबद्धता।',
    cont7col12b: 'उपलब्धियाँ जो हमें हमारी पहचान देती हैं।',
    cont10col23: 'हमारे साथ खोजें',
    cont10col231: 'VNT के साथ भविष्य की खोज करें',
    cont11col241: 'ईवी चार्जिंग',
    cont11col242: 'VNT में, हम दुनिया के चार्ज करने के तरीके को नया रूप दे रहे हैं। ईवी चार्जिंग नवाचार में अग्रणी होने के नाते, हम उन्नत, उपयोगकर्ता के अनुकूल और स्केलेबल समाधान प्रदान करते हैं, जो भविष्य की मोबिलिटी को शक्ति देने के लिए बनाए गए हैं। चाहे वह घर हो, व्यवसाय हो या सार्वजनिक स्थान — हमारी तकनीक तेज़, विश्वसनीय और टिकाऊ चार्जिंग सुनिश्चित करती है।',
 col25homeh3:'हमारे लेख',
 col26homeh3:'समाचार कक्ष',
    col25homep: `इलेक्ट्रिक मोबिलिटी, स्वच्छ ऊर्जा और स्मार्ट तकनीक की दुनिया से जुड़ी नवीनतम जानकारियों के साथ अपडेट रहें और प्रेरित हों।
हमारे ब्लॉग्स उद्योग के रुझानों, विशेषज्ञों की राय, उत्पाद अपडेट्स और महत्वपूर्ण वास्तविक कहानियों पर गहराई से प्रकाश डालते हैं।
चाहे आप एक ईवी उत्साही हों, व्यवसायी हों, या अभी-अभी इस क्षेत्र से जुड़ना शुरू कर रहे हों — हमारे लेख आपके लिए हैं।`,
col26homep:`VNT न्यूज़रूम में आपका स्वागत है — आपके लिए कंपनी की घोषणाएँ, प्रेस रिलीज़, मीडिया कवरेज, और उद्योग की प्रमुख खबरों का आधिकारिक स्रोत। हमारे नवीनतम विकास, ईवी चार्जिंग में नवाचार, रणनीतिक साझेदारियों, और महत्वपूर्ण उपलब्धियों से अपडेट रहें, जब हम टिकाऊ मोबिलिटी के भविष्य को आकार देते हैं।`,
col1homeh22:'स्मार्ट ईवी चार्जिंग सॉल्यूशंस — घर, व्यवसाय और सार्वजनिक स्थानों के लिए बनाए गए। सहज। शक्तिशाली। विश्वसनीय।',
row23homeh21:'ऊर्जा का भविष्य अब शुरू हो चुका है। ईवी क्रांति से जुड़िए।',
col36homeh4:'ड्राइवरों और व्यवसाय मालिकों के लिए',
col36homeh2:'अपना चार्जर और इंस्टॉलेशन प्राप्त करें',
col36homep:'स्मार्ट चार्जरों के लिए पेशेवर इंस्टॉलेशन आवश्यक होता है, और हमारे इंस्टॉलेशन पार्टनर हर कदम पर आपकी मदद के लिए तैयार हैं। शुरुआत करने के लिए हमसे संपर्क करें।',
col37homeh4:'साझेदारों के लिए',
col37homeh2:'वॉलबॉक्स पार्टनर बनें',
col37homep:'हमारे वैश्विक साझेदार नेटवर्क में शामिल हों। हम साथ मिलकर ऊर्जा के भविष्य को खोल सकते हैं।',
col271_Homeh2:'स्मार्ट चार्ज करने और दूर तक जाने के लिए आपकी हर ज़रूरत।',
col28_Homeh2:'इलेक्ट्रिक वाहन चार्जर',
col28_Homep:`निजी से लेकर सार्वजनिक उपयोग तक के लिए स्मार्ट ईवी चार्जर्स का पूरा पोर्टफोलियो।
हमेशा आसान। हमेशा शक्तिशाली।`,
row3_Home_1h2:'घरेलू ईवी चार्जर',
row3_Home_1p:`एक घरेलू ईवी चार्जर इलेक्ट्रिक वाहन मालिकों को अपने वाहन को घर पर आसानी से चार्ज करने की सुविधा प्रदान करता है। यह सामान्य विद्युत सॉकेट की तुलना में तेज़ चार्जिंग गति देता है, सुरक्षा सुनिश्चित करता है, और रात भर चार्जिंग के लिए आदर्श होता है। ये चार्जर इंस्टॉल करने में आसान होते हैं और सार्वजनिक चार्जिंग स्टेशन पर निर्भरता कम करने में मदद करते हैं।`,
row3_Home_2h2:'सार्वजनिक चार्जिंग',
row3_Home_2p:`सार्वजनिक ईवी चार्जिंग स्टेशन इलेक्ट्रिक वाहन उपयोगकर्ताओं को घर से दूर रहते हुए अपने वाहन चार्ज करने की सुविधा प्रदान करते हैं। ये स्टेशन आमतौर पर पार्किंग स्थल, शॉपिंग सेंटर, हाईवे, और शहरी क्षेत्रों में पाए जाते हैं, जो तेज़ और भरोसेमंद चार्जिंग विकल्प प्रदान करते हैं ताकि लंबी दूरी की यात्रा और दैनिक आवागमन का समर्थन किया जा सके।`,
// bgimage3p:`CMS (कंटेंट मैनेजमेंट सिस्टम) एक सॉफ़्टवेयर एप्लिकेशन होता है जो उपयोगकर्ताओं को बिना किसी विशेष तकनीकी ज्ञान के डिजिटल सामग्री को बनाने, प्रबंधित करने और संशोधित करने में सक्षम बनाता है। इसे आमतौर पर वेबसाइटों के प्रबंधन के लिए उपयोग किया जाता है, जो आसान कंटेंट अपडेट, मीडिया अपलोड और वेबसाइट के समग्र रखरखाव को एक सहज इंटरफेस के माध्यम से संभव बनाता है।`,
col1NAV_EV1a:'आवासीय चार्जिंग',
col2NAV_EV2a:'सार्वजनिक चार्जिंग',
col3NAV_EV3a:' सामग्री प्रबंधन प्रणाली',
navitem1:'आवासीय क्षेत्र',
navitem2:' सार्वजनिक',
navitem3:'CMS',
col38homea:'मदद चाहिए? हमसे बात करें',
},

    ar: {
    heading: 'تأثيرنا',
    subheading1: 'معًا، نبني مستقبلًا أكثر استدامة.',
    sec1subH: 'أطنان من ثاني أكسيد الكربون تم تجنبها',
    sec1subH2: 'ملايين الكيلومترات الكهربائية المقطوعة',
    sec1subH3: 'مهندسو الخدمات على مستوى العالم',
    button: 'AR',
    sec1subH4: 'شركاء ASP',
    sec1subH5: 'عملاء',
    cont4col3: 'تمكين رحلتك بحلول شحن أذكى وأكثر كفاءة',
    cont7col12a: 'رؤيتك، التزامنا بالتميز',
    cont7col12b: 'الإنجازات التي تشكل هويتنا',
    cont10col23: 'استكشف معنا',
    cont10col231: 'استكشف المستقبل مع VNT',
    cont11col241: 'شحن المركبات الكهربائية',
    cont11col242: 'في VNT، نحن نعيد تعريف طريقة شحن العالم. بصفتنا روادًا في ابتكار شحن المركبات الكهربائية، نقدم حلولًا متقدمة وسهلة الاستخدام وقابلة للتوسع لبناء مستقبل التنقل. سواء كان للاستخدام المنزلي أو للأعمال أو الأماكن العامة، تضمن تقنيتنا شحنًا سريعًا وموثوقًا ومستدامًا.',
    col25homeh3: 'مدوناتنا',
    col26homeh3: 'غرفة الأخبار',
    col25homep: 'ابقَ على اطلاع وملهمًا بآخر الرؤى من عالم التنقل الكهربائي والطاقة النظيفة والتقنية الذكية. تغوص مدوناتنا بعمق في اتجاهات الصناعة، وآراء الخبراء، وتحديثات المنتجات، والقصص الواقعية المهمة. سواء كنت من عشاق المركبات الكهربائية، أو صاحب عمل، أو مبتدئًا، فلدينا المحتوى المناسب لك.',
    col26homep: 'مرحبًا بك في غرفة أخبار VNT — مصدرك الرسمي للإعلانات الصحفية والتقارير الإعلامية وأهم أخبار الصناعة. تابع أحدث التطورات والابتكارات في شحن المركبات الكهربائية، والشراكات الاستراتيجية، والمعالم الهامة بينما نواصل تشكيل مستقبل التنقل المستدام.',
col1homeh22:'الحلول الذكية لشحن السيارات الكهربائية — مصممة للمنازل، والأعمال، والأماكن العامة. سلسة. قوية. موثوقة.',
row23homeh21:'مستقبل الطاقة يحدث الآن. انضم إلى ثورة السيارات الكهربائية.',
col36homeh4:'للسائقين وأصحاب الأعمال', 
col36homeh2:'احصل على شاحنك + التركيب',
col36homep:'تتطلب الشواحن الذكية تركيبًا محترفًا، وشركاؤنا في التركيب مستعدون لمساعدتك في كل خطوة على الطريق. تواصل معنا للبدء.',
col37homeh4:'للشركاء',
col37homeh2:'كن شريك وولبوكس',
col37homep:'انضم إلى شبكتنا العالمية من الشركاء. يمكننا معًا فتح مستقبل الطاقة.',
row3_Home_1h2:'شاحن المركبات الكهربائية المنزلي',
row3_Home_1p:`تيح شاحن المركبات الكهربائية المنزلي لأصحاب السيارات الكهربائية شحن سياراتهم بسهولة داخل المنزل. يوفر سرعات شحن أسرع مقارنة بالمقابس الكهربائية العادية، ويضمن الأمان، وهو مثالي للشحن طوال الليل. هذه الشواحن سهلة التركيب وتساعد في تقليل الاعتماد على محطات الشحن العامة.`,
row3_Home_2h2:' الشحن العام',
row3_Home_2p:`توفر محطات شحن المركبات الكهربائية العامة للمستخدمين إمكانية شحن سياراتهم أثناء التنقل بعيداً عن المنزل. توجد هذه المحطات عادةً في مواقف السيارات ومراكز التسوق والطرق السريعة والمناطق الحضرية، وتقدم خيارات شحن سريعة وموثوقة لدعم الرحلات الطويلة والتنقل اليومي.`,
// bgimage3p:`نظام إدارة المحتوى (CMS) هو تطبيق برمجي يتيح للمستخدمين إنشاء وإدارة وتعديل المحتوى الرقمي دون الحاجة إلى معرفة تقنية متخصصة. يُستخدم عادةً لإدارة المواقع الإلكترونية، مما يسمح بتحديث المحتوى بسهولة، وتحميل الوسائط، وصيانة الموقع بشكل عام من خلال واجهة سهلة الاستخدام وبديهية.`,
col1NAV_EV1a:'الشحن السكني',
col2NAV_EV2a:'الشحن العام',
col3NAV_EV3a:'نظام إدارة المحتوى',
navitem1:'سكني',
navitem2:'عام',
navitem3:'CMS',
col38homea:'هل تحتاج مساعدة؟ تواصل معنا',
},

  es: {
heading:'Nuestro impacto',
subheading1:'Juntos, estamos construyendo un futuro más sostenible.',
sec1subH:'Toneladas de CO₂ evitadas',
sec1subH2:'Millones de kilómetros eléctricos recorridos',
sec1subH3:'ingenieros de servicios PAN a nivel mundial',
button:'ES',
sec1subH4:'Socios ASP',
sec1subH5:'Clientes',
cont4col3:'Impulsa tu viaje con soluciones de carga más inteligentes y eficientes',
cont7col12a:'Tu visión, nuestro compromiso con la excelencia',
cont7col12b:'Logros que nos definen',
cont10col23:'Explora con nosotros',
cont10col231:'Explora el futuro con VNT',
cont11col241:'Cargas EV',
cont11col242:`En VNT, estamos redefiniendo la forma en que el mundo se recarga. Como pioneros en la innovación de carga de vehículos eléctricos, ofrecemos soluciones avanzadas, fáciles de usar y escalables, diseñadas para impulsar el futuro de la movilidad. Ya sea para hogares, negocios o espacios públicos, nuestra tecnología garantiza una carga rápida, confiable y sostenible.`,
col25homeh3:'nuestros blogs',
col26homeh3:'Sala de prensa',
col25homep:`Mantente informado e inspirado con las últimas novedades del mundo de la movilidad eléctrica, la energía limpia y la tecnología inteligente. Nuestros blogs profundizan en las tendencias de la industria, opiniones de expertos, actualizaciones de productos y historias reales que importan. Ya seas un entusiasta de los vehículos eléctricos, un propietario de negocio o alguien que recién comienza.`,
col26homep:'Bienvenido a la sala de prensa de VNT — tu fuente oficial para anuncios de la empresa, comunicados de prensa, cobertura mediática y destacados de la industria. Mantente al día con nuestros últimos desarrollos, innovaciones en la carga de vehículos eléctricos, alianzas estratégicas y logros mientras seguimos dando forma al futuro de la movilidad sostenible.',
col1homeh22:'Soluciones inteligentes de carga para vehículos eléctricos — Diseñadas para el hogar, los negocios y los espacios públicos. Sin interrupciones. Potentes. Fiables.',
row23homeh21:'El futuro de la energía está sucediendo ahora. Únete a la revolución de los vehículos eléctricos.',
col36homeh4:'Para conductores y propietarios de negocios',
col36homeh2:'Obtén tu cargador + instalación',
col36homep:'Los cargadores inteligentes requieren instalación profesional y nuestros socios instaladores están listos para ayudarte en cada paso. Contáctanos para comenzar.',
col37homeh4:'Para socios',
col37homeh2:'Conviértete en socio de VNT',
col37homep:'Únete a nuestra red global de socios. Juntos podemos desbloquear el futuro de la energía.',
row3_Home_1h2:'Cargador residencial para vehículos eléctricos',
row3_Home_1p:`Un cargador residencial para vehículos eléctricos permite a los propietarios cargar sus autos cómodamente en casa. Ofrece velocidades de carga más rápidas en comparación con los enchufes estándar, garantiza seguridad y es ideal para cargar durante la noche. Estos cargadores son fáciles de instalar y ayudan a reducir la dependencia de las estaciones de carga públicas.`,
row3_Home_2h2:'Carga pública',
row3_Home_2p:`Las estaciones públicas de carga para vehículos eléctricos brindan a los usuarios la comodidad de cargar sus vehículos cuando están fuera de casa. Estas estaciones se encuentran comúnmente en estacionamientos, centros comerciales, autopistas y áreas urbanas, ofreciendo opciones de carga rápidas y confiables para apoyar viajes de larga distancia y desplazamientos diarios.`,
// bgimage3p:`Un CMS (Sistema de Gestión de Contenidos) es una aplicación de software que permite a los usuarios crear, gestionar y modificar contenido digital sin necesidad de conocimientos técnicos especializados. Se utiliza comúnmente para administrar sitios web, facilitando la actualización de contenido, la carga de medios y el mantenimiento general del sitio a través de una interfaz intuitiva.`,
col1NAV_EV1a:'Carga residencial',
col2NAV_EV2a:'Carga pública',
col3NAV_EV3a:'Sistema de Gestión de Contenidos',
navitem1:'Residencial',
navitem2:'Público',
navitem3:'CMS',
col38homea:'¿Necesitas ayuda? Contáctanos',
},

'pt-BR': {
heading:' Nosso impacto',
subheading1:'Juntos, estamos construindo um futuro mais sustentável.',
sec1subH:'Toneladas de CO₂ evitadas',
sec1subH2:' Milhões de quilômetros elétricos percorridos',
sec1subH3:'engenheiros de serviços PAN em todo o mundo',
button:'PT',
sec1subH4:' Parceiros ASP',
sec1subH5:'Clientes',
cont4col3:'Impulsione sua jornada com soluções de carregamento mais inteligentes e eficientes',
cont7col12a:'Sua visão, nosso compromisso com a excelência',
cont7col12b:'Conquistas que nos definem',
cont10col23:'Explore conosco',
cont10col231:' Explore o futuro com a VNT',
cont11col241:'Carregamento de veículos elétricos',
cont11col242:`Na VNT, estamos redefinindo a forma como o mundo carrega. Como pioneiros na inovação em carregamento de veículos elétricos, oferecemos soluções avançadas, fáceis de usar e escaláveis, projetadas para impulsionar o futuro da mobilidade. Seja para residências, empresas ou espaços públicos, nossa tecnologia garante um carregamento rápido, confiável e sustentável.`,
col25homeh3:' nossos blogs',
col26homeh3:' Sala de imprensa',
col25homep:`Mantenha-se informado e inspirado com as últimas novidades do mundo da mobilidade elétrica, energia limpa e tecnologia inteligente. Nossos blogs aprofundam as tendências do setor, opiniões de especialistas, atualizações de produtos e histórias reais que importam. Seja você um entusiasta de veículos elétricos, um proprietário de negócio ou alguém que está começando agora.`,
col26homep:`Bem-vindo à sala de imprensa da VNT — sua fonte oficial para anúncios da empresa, comunicados de imprensa, cobertura da mídia e destaques do setor. Mantenha-se atualizado com nossos últimos desenvolvimentos, inovações em carregamento de veículos elétricos, parcerias estratégicas e conquistas enquanto continuamos moldando o futuro da mobilidade sustentável.`,
col1homeh22:'Soluções inteligentes de carregamento para veículos elétricos — Projetadas para residências, empresas e espaços públicos. Sem interrupções. Potentes. Confiáveis.',
row23homeh21:'O futuro da energia está acontecendo agora. Junte-se à revolução dos veículos elétricos.',
col36homeh4:' Para motoristas e proprietários de negócios',
col36homeh2:'Adquira seu carregador + instalação',
col36homep:'Carregadores inteligentes requerem instalação profissional e nossos parceiros instaladores estão prontos para ajudar você em cada etapa. Entre em contato para começar.',
col37homeh4:'Para parceiros',
col37homeh2:'Torne-se um parceiro da VNT',
col37homep:'Junte-se à nossa rede global de parceiros. Juntos podemos desbloquear o futuro da energia.',
row3_Home_1h2:'Carregador residencial para veículos elétricos',
row3_Home_1p:`Um carregador residencial para veículos elétricos permite que os proprietários carreguem seus carros confortavelmente em casa. Ele oferece velocidades de carregamento mais rápidas em comparação com tomadas padrão, garante segurança e é ideal para carregamento durante a noite. Esses carregadores são fáceis de instalar e ajudam a reduzir a dependência de estações públicas de carregamento.`,
row3_Home_2h2:'Carregamento público',
row3_Home_2p:`As estações públicas de carregamento para veículos elétricos oferecem aos usuários a conveniência de carregar seus veículos fora de casa. Essas estações são comumente encontradas em estacionamentos, shoppings, rodovias e áreas urbanas, oferecendo opções de carregamento rápidas e confiáveis para apoiar viagens de longa distância e deslocamentos diários.`,
// bgimage3p:`Um CMS (Sistema de Gestão de Conteúdo) é um aplicativo de software que permite aos usuários criar, gerenciar e modificar conteúdo digital sem a necessidade de conhecimentos técnicos especializados. Ele é comumente usado para gerenciar sites, permitindo atualizações fáceis de conteúdo, upload de mídia e manutenção geral do site por meio de uma interface intuitiva.`,
col1NAV_EV1a:'Carregamento residencial',
col2NAV_EV2a:'Carregamento público',
col3NAV_EV3a:'Sistema de Gestão de Conteúdo',
navitem1:' Residencial',
navitem2:' Público ',
navitem3:'CMS',
col38homea:'Precisa de ajuda? Fale conosco',
},

de: { 
  heading:'Unsere Auswirkung',
  subheading1:' Gemeinsam bauen wir eine nachhaltigere Zukunft auf.',
  sec1subH:' Eingesparte Tonnen CO₂',
  sec1subH2:'Millionen elektrisch gefahrene Kilometer',
  sec1subH3:' PAN-Serviceingenieure auf der ganzen Welt',
  button:'DE',
  sec1subH4:'ASP-Partner',
  sec1subH5:' Kunden',
  cont4col3:'Stärken Sie Ihre Reise mit intelligenteren und effizienteren Ladelösungen',
  cont7col12a:' Ihre Vision, unser Engagement für Exzellenz',
  cont7col12b:'Errungenschaften, die uns ausmachen',
  cont10col23:'Entdecken Sie mit uns',
  cont10col231:'Entdecken Sie die Zukunft mit VNT',
  cont11col241:'Laden von Elektrofahrzeugen',
  cont11col242:`Bei VNT definieren wir die Art und Weise, wie die Welt lädt, neu. Als Pioniere in der Innovation der Ladetechnologie für Elektrofahrzeuge bieten wir fortschrittliche, benutzerfreundliche und skalierbare Lösungen, die darauf ausgelegt sind, die Zukunft der Mobilität voranzutreiben. Egal, ob für Privathaushalte, Unternehmen oder öffentliche Räume – unsere Technologie gewährleistet schnelles, zuverlässiges und nachhaltiges Laden.`,
  col25homeh3:'Unsere Blogs',
  col26homeh3:' Pressesaal',
  col25homep:`Bleiben Sie informiert und inspiriert mit den neuesten Neuigkeiten aus der Welt der Elektromobilität, sauberen Energie und intelligenten Technologie. Unsere Blogs gehen tief auf Branchentrends, Expertenmeinungen, Produktaktualisierungen und relevante Geschichten ein. Egal, ob Sie ein Elektrofahrzeug-Enthusiast, Geschäftsinhaber oder gerade erst anfangen sind.`,
  col26homep:`Willkommen im Pressebereich von VNT — Ihre offizielle Quelle für Unternehmensankündigungen, Pressemitteilungen, Medienberichte und Branchenschwerpunkte. Bleiben Sie auf dem Laufenden über unsere neuesten Entwicklungen, Innovationen im Bereich der Elektroladetechnik, strategische Partnerschaften und Erfolge, während wir weiterhin die Zukunft der nachhaltigen Mobilität gestalten.`,
  col1homeh22:'Intelligente Ladelösungen für Elektrofahrzeuge — Entwickelt für Privathaushalte, Unternehmen und öffentliche Räume. Nahtlos. Leistungsstark. Zuverlässig.',
  row23homeh21:'Die Zukunft der Energie findet jetzt statt. Machen Sie mit bei der Revolution der Elektrofahrzeuge.',
  col36homeh4:' Für Fahrer und Geschäftsinhaber',
  col36homeh2:'Holen Sie sich Ihr Ladegerät + Installation',
  col36homep:'Intelligente Ladegeräte erfordern eine professionelle Installation, und unsere Installationspartner stehen Ihnen bei jedem Schritt zur Seite. Kontaktieren Sie uns, um loszulegen.',
  col37homeh4:'Für Partner',
  col37homeh2:'Werden Sie VNT-Partner',
  col37homep:' Treten Sie unserem globalen Partnernetzwerk bei. Gemeinsam können wir die Zukunft der Energie erschließen',
row3_Home_1h2:'Wohnheim-Ladegerät für Elektrofahrzeuge',
row3_Home_1p:`Ein Wohnheim-Ladegerät für Elektrofahrzeuge ermöglicht es den Fahrzeugbesitzern, ihre Autos bequem zu Hause aufzuladen. Es bietet schnellere Ladegeschwindigkeiten im Vergleich zu herkömmlichen Steckdosen, gewährleistet Sicherheit und ist ideal zum Aufladen über Nacht. Diese Ladegeräte sind einfach zu installieren und helfen, die Abhängigkeit von öffentlichen Ladestationen zu verringern.`,
row3_Home_2h2:'Öffentliches Laden',
row3_Home_2p:`Öffentliche Ladestationen für Elektrofahrzeuge bieten den Nutzern die Möglichkeit, ihre Fahrzeuge bequem außerhalb des Hauses aufzuladen. Diese Stationen befinden sich häufig auf Parkplätzen, in Einkaufszentren, an Autobahnen und in städtischen Gebieten und bieten schnelle und zuverlässige Lademöglichkeiten zur Unterstützung von Langstreckenfahrten und dem täglichen Pendeln.`,
// bgimage3p:`Ein CMS (Content-Management-System) ist eine Softwareanwendung, die es Benutzern ermöglicht, digitale Inhalte zu erstellen, zu verwalten und zu bearbeiten, ohne spezielles technisches Wissen zu benötigen. Es wird häufig zur Verwaltung von Websites verwendet und ermöglicht einfache Inhaltsaktualisierungen, das Hochladen von Medien sowie die allgemeine Wartung der Seite über eine benutzerfreundliche Oberfläche.`,
col1NAV_EV1a:'Heimladen',
col2NAV_EV2a:'Öffentliches Laden',
col3NAV_EV3a:'Deutsche Übersetzung',
navitem1:'Wohn',
navitem2:'Öffentlich',
navitem3:'CMS',
col38homea:'Benötigen Sie Hilfe? Sprechen Sie mit uns',
},

ms:{
heading:'Kesan kami',
subheading1:'Bersama-sama, kita membina masa depan yang lebih mampan.',
sec1subH:'Banyak CO₂ dielakkan',
sec1subH2:'Berjuta kilometer elektrik dipandu',
sec1subH3:'jurutera perkhidmatan PAN di peringkat global',
button:'MS',
sec1subH4:'Rakan Kongsi ASP',
sec1subH5:'Pelanggan',
cont4col3:'Perkasakan Perjalanan Anda dengan Penyelesaian Pengecasan yang Lebih Pintar dan Cekap',
cont7col12a:'Visi Anda, Komitmen Kami terhadap Kecemerlangan',
cont7col12b:'Pencapaian Yang Menjadikan Kita Siapa Kita',
cont10col23:'Terokai bersama kami',
cont10col231:'Terokai Masa Depan dengan VNT',
cont11col241:'Pengecasan EV',
cont11col242:`Di VNT, kami mentakrifkan semula cara dunia mengecaj. Sebagai perintis dalam inovasi pengecasan EV, kami menyediakan penyelesaian termaju, mesra pengguna dan berskala yang dibina untuk menggerakkan masa depan mobiliti. Sama ada untuk rumah, perniagaan atau ruang awam, teknologi kami memastikan pantas, boleh dipercayai dan mampan`,
col25homeh3:'blog kita',
col26homeh3:'Bilik Berita',
col25homep:`Kekal termaklum dan mendapat inspirasi dengan cerapan terkini daripada dunia mobiliti elektrik, tenaga bersih dan teknologi pintar. Blog kami menyelam jauh ke arah aliran industri, pendapat pakar, kemas kini produk dan cerita dunia sebenar yang penting. Sama ada anda peminat EV, pemilik perniagaan atau baru bermula`,
col26homep:`Selamat datang ke Bilik Berita VNT — sumber rasmi anda untuk pengumuman syarikat, siaran akhbar, liputan media dan sorotan industri. Ikuti perkembangan terkini kami, inovasi dalam pengecasan EV, perkongsian strategik dan pencapaian semasa kami terus membentuk masa depan mobiliti mampan.`,
col1homeh22:'Penyelesaian Pengecasan EV Pintar — Dibina untuk Rumah, Perniagaan & Ruang Awam. lancar. Berkuasa. Boleh dipercayai.',
row23homeh21:'Masa depan tenaga sedang berlaku sekarang. Sertai revolusi EV.',
col36homeh4:'Untuk Pemandu dan Pemilik Perniagaan',
col36homeh2:'Dapatkan pengecas + pemasangan anda',
col36homep:'Pengecas pintar memerlukan pemasangan profesional dan rakan kongsi pemasang kami sedia membantu anda setiap langkah. Hubungi kami untuk bermula.',
col37homeh4:'Untuk Rakan Kongsi',
col37homeh2:'Jadi Rakan Kongsi Wallbox',
col37homep:'Sertai rangkaian rakan kongsi global kami. Kita boleh membuka kunci masa depan tenaga, bersama-sama.',
row3_Home_1h2:`Pengecas EV kediaman`,
row3_Home_1p:`Pengecas EV kediaman membolehkan pemilik kenderaan elektrik mengecas kereta mereka dengan mudah di rumah. Ia menawarkan kelajuan pengecasan yang lebih pantas berbanding soket dinding standard, memastikan keselamatan, dan sesuai untuk pengecasan semalaman. Pengecas ini mudah dipasang dan membantu mengurangkan pergantungan pada stesen pengecas awam.`,
row3_Home_2h2:'Caj Awam',
row3_Home_2p:'Stesen pengecas EV awam menyediakan pengguna kenderaan elektrik dengan kemudahan mengecas kenderaan mereka semasa berada di luar rumah. Stesen ini biasanya ditemui di tempat letak kereta, pusat membeli-belah, lebuh raya dan kawasan bandar, menawarkan pilihan pengecasan yang pantas dan boleh dipercayai untuk menyokong perjalanan jarak jauh dan ulang-alik harian.',
// bgimage3p:`CMS (Sistem Pengurusan Kandungan) ialah aplikasi perisian yang membolehkan pengguna mencipta, mengurus dan mengubah suai kandungan digital tanpa memerlukan pengetahuan teknikal khusus. Ia biasanya digunakan untuk mengurus tapak web, membenarkan kemas kini kandungan yang mudah, muat naik media, dan penyelenggaraan tapak keseluruhan melalui antara muka yang intuitif.`,
col1NAV_EV1a:'pengecasan kediaman',
col2NAV_EV2a:'Caj Awam',
col3NAV_EV3a:'Sistem Pengurusan Kandungan',
navitem1:'Kediaman',
navitem2:'awam',
navitem3:'CMS/APP',
col38homea:'Perlukan Bantuan? Bercakap dengan Kami',
},

th:{
heading:'สวัสดี',
subheading1:'ร่วมกันสร้างอนาคตที่ยั่งยืนยิ่งขึ้น',
sec1subH:'หลีกเลี่ยง CO₂ ได้หลายตัน',
sec1subH2:'ขับเคลื่อนด้วยไฟฟ้าหลายล้านกิโลเมตร',
sec1subH3:'วิศวกรบริการ PAN ทั่วโลก',
button:'TH',
sec1subH4:'พันธมิตรเอเอสพี',
sec1subH5:'ลูกค้า',
cont4col3:'เสริมพลังการเดินทางของคุณด้วยโซลูชันการชาร์จที่ชาญฉลาดและมีประสิทธิภาพมากขึ้น',
cont7col12a:'วิสัยทัศน์ของคุณ ความมุ่งมั่นของเราสู่ความเป็นเลิศ',
cont7col12b:'ความสำเร็จที่ทำให้เราเป็นเรา',
cont10col23:'สำรวจกับเรา',
cont10col231:'สำรวจอนาคตกับ VNT',
cont11col241:'การชาร์จ EV',
cont11col242:'ที่ VNT เรากำลังนิยามวิธีการชาร์จรถยนต์ไฟฟ้าของโลกใหม่ ในฐานะผู้บุกเบิกนวัตกรรมการชาร์จรถยนต์ไฟฟ้า เรานำเสนอโซลูชันที่ทันสมัย ใช้งานง่าย และปรับขนาดได้ ซึ่งออกแบบมาเพื่อขับเคลื่อนอนาคตแห่งการเดินทาง ไม่ว่าจะเป็นบ้าน ธุรกิจ หรือพื้นที่สาธารณะ เทคโนโลยีของเรารับประกันความรวดเร็ว เชื่อถือได้ และยั่งยืน',
col25homeh3:'บล็อกของเรา',
col26homeh3:'ห้องข่าว',
col25homep:`ติดตามข่าวสารและแรงบันดาลใจด้วยข้อมูลเชิงลึกล่าสุดจากโลกแห่งยานยนต์ไฟฟ้า พลังงานสะอาด และเทคโนโลยีอัจฉริยะ บล็อกของเราเจาะลึกเทรนด์อุตสาหกรรม ความคิดเห็นจากผู้เชี่ยวชาญ อัปเดตผลิตภัณฑ์ และเรื่องราวสำคัญจากโลกแห่งความเป็นจริง ไม่ว่าคุณจะเป็นผู้ที่ชื่นชอบรถยนต์ไฟฟ้า เจ้าของธุรกิจ หรือเพิ่งเริ่มต้นธุรกิจ`,
col26homep:`ยินดีต้อนรับสู่ห้องข่าว VNT — แหล่งข้อมูลอย่างเป็นทางการสำหรับประกาศของบริษัท ข่าวประชาสัมพันธ์ การรายงานข่าว และไฮไลท์สำคัญในอุตสาหกรรม ติดตามข่าวสารล่าสุดเกี่ยวกับการพัฒนา นวัตกรรมด้านการชาร์จรถยนต์ไฟฟ้า ความร่วมมือเชิงกลยุทธ์ และเหตุการณ์สำคัญต่างๆ ของเรา ขณะที่เรายังคงมุ่งมั่นสร้างสรรค์อนาคตแห่งการเดินทางที่ยั่งยืน`,
col1homeh22:'โซลูชันการชาร์จรถยนต์ไฟฟ้าอัจฉริยะ — สร้างขึ้นสำหรับบ้าน ธุรกิจ และพื้นที่สาธารณะ ไร้รอยต่อ ทรงพลัง เชื่อถือได้',
row23homeh21:'อนาคตแห่งพลังงานกำลังเกิดขึ้นแล้ว ร่วมเป็นส่วนหนึ่งของการปฏิวัติ EV',
col36homeh4:'สำหรับผู้ขับขี่และเจ้าของธุรกิจ',
col36homeh2:'รับเครื่องชาร์จ + ติดตั้ง',
col36homep:'เครื่องชาร์จอัจฉริยะจำเป็นต้องติดตั้งโดยผู้เชี่ยวชาญ และพันธมิตรผู้ติดตั้งของเราพร้อมช่วยเหลือคุณในทุกขั้นตอน ติดต่อเราเพื่อเริ่มต้นใช้งาน',
col37homeh4:'สำหรับพันธมิตร',
col37homeh2:'มาเป็นพันธมิตรกับ Wallbox',
col37homep:'เข้าร่วมเครือข่ายพันธมิตรทั่วโลกของเรา เราจะร่วมกันไขว่คว้าอนาคตแห่งพลังงาน',
row3_Home_1h2:'เครื่องชาร์จ EV สำหรับที่อยู่อาศัย',
row3_Home_1p:`เครื่องชาร์จรถยนต์ไฟฟ้าสำหรับที่พักอาศัยช่วยให้เจ้าของรถยนต์ไฟฟ้าสามารถชาร์จรถยนต์ที่บ้านได้อย่างสะดวกสบาย เครื่องชาร์จนี้ให้ความเร็วในการชาร์จที่เร็วกว่าปลั๊กไฟทั่วไป มั่นใจได้ถึงความปลอดภัย และเหมาะสำหรับการชาร์จข้ามคืน เครื่องชาร์จเหล่านี้ติดตั้งง่ายและช่วยลดการพึ่งพาสถานีชาร์จสาธารณะ`,
row3_Home_2h2:'การชาร์จสาธารณะ',
row3_Home_2p:`สถานีชาร์จรถยนต์ไฟฟ้าสาธารณะมอบความสะดวกสบายให้กับผู้ใช้รถยนต์ไฟฟ้าในการชาร์จรถยนต์แม้อยู่นอกบ้าน สถานีเหล่านี้มักพบในลานจอดรถ ศูนย์การค้า ทางหลวง และเขตเมือง มอบทางเลือกในการชาร์จที่รวดเร็วและเชื่อถือได้ เพื่อรองรับการเดินทางระยะไกลและการเดินทางในชีวิตประจำวัน`,
// bgimage3p:`CMS (Content Management System) คือแอปพลิเคชันซอฟต์แวร์ที่ช่วยให้ผู้ใช้สามารถสร้าง จัดการ และแก้ไขเนื้อหาดิจิทัลได้โดยไม่จำเป็นต้องมีความรู้ทางเทคนิคเฉพาะทาง โดยทั่วไปแล้ว CMS จะใช้ในการจัดการเว็บไซต์ ช่วยให้อัปเดตเนื้อหา อัปโหลดสื่อ และบำรุงรักษาเว็บไซต์โดยรวมได้อย่างง่ายดายผ่านอินเทอร์เฟซที่ใช้งานง่าย`,
col1NAV_EV1a:'การชาร์จที่อยู่อาศัย',
col2NAV_EV2a:'การชาร์จสาธารณะ',
col3NAV_EV3a:'ระบบการจัดการเนื้อหา',
navitem1:'ที่อยู่อาศัย',
navitem2:'สาธารณะ',
navitem3:'ซีเอ็มเอส/แอป',
col38homea:'ต้องการความช่วยเหลือ? พูดคุยกับเรา',
}
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



const videoRef = useRef(null);
const containerRef = useRef(null);

useEffect(() => {
  const video = videoRef.current;
  const container = containerRef.current;

  let scrollTriggerInstance;

  const handleScrollVideo = () => {
    if (scrollTriggerInstance) scrollTriggerInstance.kill(); 

    scrollTriggerInstance = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=3000",
      scrub: 0.5, 
      pin: true,
      onUpdate: (self) => {
        if (video && video.duration) {
          const scrollProgress = self.progress;
          video.currentTime = scrollProgress * video.duration;
        }
      },
    });
  };

  

  const onVideoReady = () => {
    handleScrollVideo();
  };

  if (video.readyState >= 1) {
    onVideoReady();
  } else {
    video.addEventListener("loadedmetadata", onVideoReady);
  }


  return () => {
    video.removeEventListener("loadedmetadata", onVideoReady);
    if (scrollTriggerInstance) scrollTriggerInstance.kill();
  };
}, []);




  return (
<>



<Head>                
  <title>VNT | Empowering India with Smart Energy, Solar & EV Solutions</title>

  <meta
    name="description"
    content="Welcome to VNT – India’s trusted provider of innovative solar energy, EV charging, energy management, and fire & safety solutions. Powering sustainable progress across industries and homes."
  />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="VNT | Smart Energy, Solar & EV Solutions in India" />
  <meta property="og:description" content="VNT delivers cutting-edge solar, EV charging, EMS, and safety solutions for homes, businesses, and industries—enabling a smarter, greener future." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vnt.in/" />
  <meta property="og:site_name" content="VNT" />

  <meta
    name="keywords"
    content="VNT, energy solutions India, solar energy company, EV charging solutions, EMS India, energy management, fire and safety systems, smart infrastructure, renewable energy provider"
  />
</Head>




<div className="main1_Home" >
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
     <Link href="/AC_WALLBOX" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-residential">
      <h4>{t.navitem1}</h4>
    </div>
    </Link>
    <Link href="/DC_FAST" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-public">
      <h4>{t.navitem2}</h4>
    </div>
     </Link>
    <Link href="/CMS" style={{whiteSpace:"nowrap" , textDecoration:"None"}}>
    <div className="nav-item nav-cms">
      <h4>{t.navitem3}</h4>
    </div>
     </Link>

  </div>
</div>

{/* end nav for ev */}


  <div className="container1_Home" >
{/* <video autoPlay loop muted src="/Videos/vnt-home.mp4" /> */}
<video autoPlay loop muted src="/Videos/vnt-home3.mp4" />
  </div>

{/* popup ?  */}






             {/* {isVisiblepop && (
  <div className="popup-overlay">
    <div className="popup-content">
      <div className="popup-header">
        <Image src="/Images/VNT-logo.png" width={100} height={80} alt="VNT-LOGO" />
        <h4 className="close-button" onClick={toggleVisibilitypop}>×</h4>
      </div>

      <div className="popup-body">
        <div className="popup-text">
          <h3>VNT provides EV Chargers</h3>
          <a href="#">Register now</a>
        </div>
        <div className="popup-image">
          <Image src="/Images/popupc1.png" width={350} height={350} alt="popupc" />
        </div>
      </div>
    </div>
  </div>
)}
 */}


{/* popup end  */}


  <div className="container8_Home" >
    <div className="row13_Home">
      <div className="col17_Home"onMouseOver={toggleVisibilitypop}  >
        <h4>{t.heading}</h4>
        <h2>{t.subheading1}</h2>
      </div>
    </div>
    
    <div className="row14_Home" data-scroll data-scroll-speed="2">
      <div className="col18_Home">
        <h3><FontAwesomeIcon icon={faSmog}  /> <CountUpNumber end={548976} /> </h3>
        <h2>{t.sec1subH}</h2>
      </div>
      <div className="col19_Home">
        <h3> <FontAwesomeIcon icon={faBolt}  />  <CountUpNumber end={94} /> </h3>
        <h2>{t.sec1subH2}</h2>
      </div>
      <div className="col20_Home">
        <h3> <FontAwesomeIcon icon={faGlobe}  />  <CountUpNumber end={190} /> </h3>
        <h2>{t.sec1subH3}</h2>
      </div>
    </div>
    <div className="row15_Home">
      <div className="col21_Home">
        <h3> <FontAwesomeIcon icon={faHandshake}/>  <CountUpNumber end={80} /> </h3>
        <h2>{t.sec1subH4}</h2>
      </div>
      <div className="col22_Home">
        <h3> <FontAwesomeIcon icon={faMarsDouble} />  <CountUpNumber end={200} /> </h3>
        <h2>{t.sec1subH5}</h2>
      </div>
    </div>
  </div>

<div ref={containerRef} style={{ height: "100vh", position: "relative" , zIndex:'-1' }}>
        <video
          ref={videoRef}
          src="/Videos/vnt-ani-home.mp4"
          muted
          playsInline
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>


  <div className="container2_Home">
    <div className="row2_Home">
      <div className="col1_Home"  >
    <h2
     
      style={{
        width: "70%",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: "'Lato', sans-serif",
        fontSize: "50px",
        fontWeight: 400,
        lineHeight: "1.4em",
        letterSpacing: "1px",
        color:"#303236"
      }} 
    >{t.col1homeh22}
      {/* {renderWords()} */}
    </h2>
      </div>
    </div>
  </div>




 <div className="container3_Home">
      <div className="row3_Home">
        <div className="row3_Home_1 bg-image1" >
       <h2 >{t.row3_Home_1h2}</h2>
<p >{t.row3_Home_1p}</p>

        </div>
        <div className="row3_Home_2">
          <div className="bg-image2" >
         <h2 >{t.row3_Home_2h2}</h2>
<p>{t.row3_Home_2p}</p>

          </div>
          <div className="bg-image3">
         <h2 >CMS / App</h2>
<p >{t.bgimage3p}</p>

          </div>
        </div>
      </div>
    </div>
{/* section four end  */}
<div className="container4_Home">
  <div className="row4_Home">
    <div className="col3_Home">
      <h2>{t.cont4col3}</h2>
    </div>
  </div>
</div>
<div className="container5_Home">
  <div className="row5_Home">
    <div className="col4_Home"></div>
    <div className="col5_Home"></div>
  </div>
  <div className="row6_Home">
    <div className="col6_Home"></div>
    <div className="col7_Home"></div>
  </div>
  <div className="row7_Home">
    <div className="col8_Home"></div>
    <div className="col9_Home"></div>
  </div>
  <div className="row9_Home">
    <div className="col10_Home"></div>
    <div className="col11_Home"></div>
  </div>
</div>
<div className="container6_Home">
  <div className="row10_Home">
    <div className="col11_Home">
      {/* <h4>Excellence Is Our Everyday Standard</h4>
      <h2>A Legacy of Excellence, Awarded Again and Again</h2> */}
    </div>
  </div>
</div>
<div className="container7_Home">
  <div className="row11_Home">
    <div className="col12_Home">
      <h3>{t.cont7col12}</h3>
      <h2>{t.cont7col12}</h2>
    </div>
  </div>
  <div className="row12_Home">
    <div className="col13_Home"></div>
    <div className="col14_Home"></div>
    <div className="col15_Home"></div>
    <div className="col16_Home"></div>
  </div>
</div>
<div className="container9_Home">
<video autoPlay loop muted src="/Videos/vnt-home2.MP4"/>
</div>
<div className="container10_Home">
  <div className="row16_Home">
    <div className="col23_Home">
      <h3>{t.cont10col23}</h3>
      <h2>{t.cont10col231}</h2>
    </div>
  </div>
</div>
<div className="container11_Home">
  <div className="row17_Home">
    <div className="col24_Home">
         <Image src="/Images/Cguide.png" width={410} height={296} alt="Cguide" />
      <h3>{t.cont11col241}</h3>
  <p>
 {t.cont11col242}
</p>
    </div>
    <div className="col25_Home">
          <Image src="/Images/Cjournal.png" width={410} height={296} alt="Cjournal" />
      <h3>{t.col25homeh3}</h3>
      <p>
 {t.col25homep}
</p>
    </div>
    <div className="col26_Home">
      <Image src="/Images/Cnewsroom.png" width={410} height={296} alt="Cnewsroom" />
      <h3>{t.col26homeh3}</h3>
      <p>
 {t.col26homep}</p>
    </div>
  </div>
</div>


      <div className="container30_Home" >
        <div className="row23_Home">
          <h2>{t.row23homeh21}</h2>
        </div>
        <div className="row24_Home">
          <div className="col36_Home">
            <Image src="/Images/ev_Home11.jpg" height={300} width={600} alt="Home11" />
            <h4>{t.col36homeh4}</h4>
            <h2>{t.col36homeh2}</h2>
            <p>{t.col36homep}</p>
          </div>
          <div className="col37_Home">
            <Image src="/Images/ev_Home22.jpg" height={300} width={600} alt="Home22" />
            <h4>{t.col37homeh4}</h4>
            <h2>{t.col37homeh2}</h2>
            <p>{t.col37homep}</p>
          </div>
        </div>
        <div className="row25_Home">
          <div className="col38_Home">
            <Link href="https://vnt.in/contact-us/">{t.col38homea}</Link>
          </div>
        </div>
      </div>
</div>
</>
  );
}