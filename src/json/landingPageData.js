/* eslint-disable import/extensions */

// استيراد صور الخدمات
import web from "../assets/images/Services/Web.png";
import digital from "../assets/images/Services/Mobile.png";
import creative from "../assets/images/Services/creative.png";

// استيراد صور الأعمال (Portfolio)
import wedding from "../assets/images/Portfolio/wedding.png";
import wedding2 from "../assets/images/Portfolio/wedding2.png";
import ecommerce from "../assets/images/Portfolio/ecommerce.png";
import ecommerce2 from "../assets/images/Portfolio/ecommerce2.png";
import ecommerce3 from "../assets/images/Portfolio/ecommerce3.png";
import ecommerce4 from "../assets/images/Portfolio/ecommerce4.png";
import ecommerce5 from "../assets/images/Portfolio/ecommerce5.png";
import ecommerce6 from "../assets/images/Portfolio/ecommerce6.png";
import landing2 from "../assets/images/Portfolio/landing2.png";
import landing3 from "../assets/images/Portfolio/landing3.png";
import landing4 from "../assets/images/Portfolio/landing4.png";
import landing5 from "../assets/images/Portfolio/landing5.png";
import landing6 from "../assets/images/Portfolio/landing6.png";
import portofolio from "../assets/images/Portfolio/portofolio.png";
import portofolio2 from "../assets/images/Portfolio/portofolio2.png";
import portofolio3 from "../assets/images/Portfolio/portofolio3.png";
import Business from "../assets/images/Portfolio/Business.png";
import Business2 from "../assets/images/Portfolio/business2.png";
import Business3 from "../assets/images/Portfolio/business3.png";
import Business4 from "../assets/images/Portfolio/business4.png";
import Business5 from "../assets/images/Portfolio/business5.png";
import Business6 from "../assets/images/Portfolio/business6.png";
import menu from "../assets/images/Portfolio/menu.jpg";
import menu2 from "../assets/images/Portfolio/menu2.png";
import courses from "../assets/images/Portfolio/courses.png";
import courses2 from "../assets/images/Portfolio/courses2.png";
import courses3 from "../assets/images/Portfolio/courses3.png";

// استيراد صور المميزات
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

// استيراد صور أعضاء الفريق
import Fady from "../assets/images/TeamMembers/Fady.jpg";
import Ahmed from "../assets/images/TeamMembers/Ahmed.jpg";
import joo from "../assets/images/TeamMembers/joo.jpg";

export const Services = [
  {
    title: "تصميم وتطوير المواقع",
    imageUrl: web,
    animation: "left",
  },
  {
    title: "حلول رقمية للفعاليات والعلامة التجارية الشخصية",
    imageUrl: digital,
    animation: "up",
  },
  {
    title: "خدمات رقمية إبداعية",
    imageUrl: creative,
    animation: "left",
  },
];

export const Portfolios = [
  {
    id: "wedding1",
    title: "دعوة زفاف",
    imageUrl: wedding,
    type: "Invitation",
    description: "دعوة زفاف رقمية مخصصة مع معرض صور، تفاصيل الحدث، وإدارة RSVP",
    responsibility: ["تصميم مخصص", "نظام RSVP", "تحسين للجوال"],
    credit: "https://wedding-mariam-abdelrahman.vercel.app/",
  },
  {
    id: "ecommerce1",
    title: "سماعات Phlox Premium",
    imageUrl: ecommerce,
    type: "E-commerce",
    description: "متجر معدات صوتية فاخرة مع تخصيص المنتجات ووسائل دفع آمنة",
    responsibility: ["تصميم المتجر", "نظام سلة المشتريات", "بوابة الدفع"],
    credit: "https://fadyadel04.github.io/Phlox/",
  },
  {
    id: "portfolio1",
    title: "Portfolio فادي عادل - مطور",
    imageUrl: portofolio,
    type: "Portfolio",
    description: "بورتفوليو تفاعلي يعرض المشاريع والمهارات والمقالات",
    responsibility: ["تصميم واجهة المستخدم", "إدارة المحتوى", "تحسين الأداء"],
    credit: "https://fadyadel-fady-adels-projects.vercel.app/",
  },
  {
    id: "business1",
    title: "Papa John's Egypt",
    imageUrl: Business,
    type: "Business Website",
    description: "الموقع الإقليمي الرسمي مع طلبات أونلاين، محدد مواقع الفروع، والعروض",
    responsibility: ["تصميم متجاوب", "تتبع الطلبات", "تكامل CMS"],
    credit: "https://fadyadel04.github.io/Papa-John-s/",
  },
  {
    id: "digitalMenu1",
    title: "Dajaj - نظام القائمة الرقمية",
    imageUrl: menu,
    type: "Digital Menu",
    description: "نظام طلبات مطعم مع إدارة القائمة وتكامل خدمة الطاولات",
    responsibility: ["تصميم القائمة", "API للطلبات", "لوحة تحكم للإدارة"],
    credit: "https://linktr.ee/Daja340",
  },
  {
    id: "Elearning1",
    title: "منصة Eclipseful للتعلم",
    imageUrl: courses,
    type: "E-Learning",
    description: "منصة شاملة للدورات مع دروس فيديو، اختبارات، وشهادات",
    responsibility: ["تطوير LMS", "معالجة الدفع", "لوحة تحكم للطلاب"],
    credit: "https://courses-next-seven.vercel.app/",
  },
  {
    id: "wedding2",
    title: "دعوة زفاف 2",
    imageUrl: wedding2,
    type: "Invitation",
    description: "موقع زفاف أنيق مع عداد تنازلي، خرائط مواقع، ودفتر ضيوف",
    responsibility: ["رسوم متحركة مخصصة", "تكامل الخرائط", "إدارة قاعدة البيانات"],
    credit: "https://mohamed-wedad.vercel.app/",
  },
  {
    id: "landing2",
    title: "مستكشف النظام الشمسي",
    imageUrl: landing2,
    type: "Landing Page",
    description: "تجربة تعليمية تفاعلية عن الكواكب مع تصور ثلاثي الأبعاد",
    responsibility: ["تصيير ثلاثي الأبعاد", "محتوى تعليمي", "تحسين الأداء"],
    credit: "https://solar-company-one.vercel.app/",
  },
  {
    id: "landing3",
    title: "منصة BrainWave للذكاء الاصطناعي",
    imageUrl: landing3,
    type: "Landing Page",
    description: "منصة تعرض أدوات تحليل مدعومة بالذكاء الاصطناعي مع تكامل للعروض التوضيحية",
    responsibility: ["تكامل الذكاء الاصطناعي", "التقاط العملاء المحتملين", "توثيق تقني"],
    credit: "https://brain-wave-ai.vercel.app/",
  },
  {
    id: "landing4",
    title: "مبادرة استكشاف الفضاء",
    imageUrl: landing4,
    type: "Landing Page",
    description: "موقع ترويجي لمؤسسة أبحاث الفضاء مع نظام تسجيل للفعاليات",
    responsibility: ["نظام الفعاليات", "معالجة التبرعات", "تكامل الأخبار"],
    credit: "https://space-website-react-vert.vercel.app/",
  },
  {
    id: "landing5",
    title: "Viva Decor للتصميم الداخلي",
    imageUrl: landing5,
    type: "Landing Page",
    description: "عرض أعمال لمكتب تصميم داخلي مع معارض للمشاريع",
    responsibility: ["نظام معرض", "آراء العملاء", "إدارة التواصل"],
    credit: "https://fadyadel04.github.io/VivaDecor/",
  },
  {
    id: "landing6",
    title: "الكون السينمائي",
    imageUrl: landing6,
    type: "Landing Page",
    description: "منصة أفلام مع قاعدة بيانات وحجز تذاكر وجدولة عروض",
    responsibility: ["تكامل API للأفلام", "نظام الحجز", "تكامل دور العرض"],
    credit: "https://movies-app-six-tau.vercel.app/",
  },
  {
    id: "portfolio2",
    title: "بورتفوليو وكالة إبداعية",
    imageUrl: portofolio2,
    type: "Portfolio",
    description: "عرض لأعمال وكالة تصميم مع دراسات حالة وأعمال العملاء",
    responsibility: ["دراسات حالة", "بوابة العملاء", "توليد العملاء المحتملين"],
    credit: "https://fadyadel04.github.io/special-design/",
  },
  {
    id: "portfolio3",
    title: "Portfolio حلول تقنية",
    imageUrl: portofolio3,
    type: "Portfolio",
    description: "Portfolio شركة خدمات تكنولوجيا المعلومات مع باقات خدمات",
    responsibility: ["صفحات خدمات", "عرض الحلول", "نظام التواصل"],
    credit: "https://fadyadel04.github.io/FADY-DEVELOPMENT-template/",
  },
  {
    id: "business2",
    title: "Care Pulse Medical",
    imageUrl: Business2,
    type: "Business Website",
    description: "موقع لمزود خدمات صحية مع بروفايلات الأطباء وحجز المواعيد",
    responsibility: ["نظام المواعيد", "ملفات الأطباء", "مدونة طبية"],
    credit: "https://care-pules-health-care.vercel.app/",
  },
  {
    id: "business3",
    title: "Elite Car Rentals",
    imageUrl: Business3,
    type: "Business Website",
    description: "منصة لتأجير السيارات مع نظام تحقق من التوافر وحجز أونلاين",
    responsibility: ["نظام الجرد", "محرك الحجز", "إدارة الأسطول"],
    credit: "https://car-rent-app-chi.vercel.app/",
  },
  {
    id: "business4",
    title: "Peak Fitness Gym",
    imageUrl: Business4,
    type: "Business Website",
    description: "موقع نادي رياضي مع جدول حصص وبروفايلات المدربين",
    responsibility: ["نظام الجداول", "بوابة الأعضاء", "معالجة الدفع"],
    credit: "https://fitness-gym-sandy.vercel.app/",
  },
  {
    id: "business5",
    title: "منصة Holla للأفلام",
    imageUrl: Business5,
    type: "Business Website",
    description: "خدمة بث أفلام مع توصيات محتوى وحسابات مستخدمين",
    responsibility: ["مشغل فيديو", "محرك توصيات", "إدارة الحسابات"],
    credit: "https://holla-movies.vercel.app/",
  },
  {
    id: "business6",
    title: "منتجع Zen Mountain",
    imageUrl: Business6,
    type: "Business Website",
    description: "موقع منتجع فاخر مع حجز غرف وباقات خاصة",
    responsibility: ["نظام الحجز", "معرض صور", "منشئ الباقات"],
    credit: "https://fadyadel04.github.io/TBH-ZEN-Resort/index.html",
  },
  {
    id: "Elearning2",
    title: "أكاديمية Nouvil للبرمجة",
    imageUrl: courses2,
    type: "E-Learning",
    description: "دورات برمجة مع محرر أكواد مدمج ونظام تتبع التقدم",
    responsibility: ["تكامل محرر أكواد", "نظام التقدم", "توليد الشهادات"],
    credit: "https://fadyadel04.github.io/Nouvil-Academy/",
  },
  {
    id: "Elearning3",
    title: "أكاديمية المصمم المشمس",
    imageUrl: courses3,
    type: "E-Learning",
    description: "منصة لتعلم اللغات مع التعرف على الصوت والدروس المباشرة",
    responsibility: ["تكامل التعرف الصوتي", "مخطط دروس", "ربط مع مدرسين"],
    credit: "https://al-mesh-mosamem.vercel.app/",
  },
  {
    id: "digitalMenu2",
    title: "مطعم فاخر - القائمة الرقمية",
    imageUrl: menu2,
    type: "Digital Menu",
    description: "قائمة مطعم راقٍ مع توصيات لأطباق مناسبة للمشروبات",
    responsibility: ["إدارة القائمة", "خوارزمية التوصية", "نظام الحجز"],
    credit: "https://gourmet-restaurant-menu.vercel.app/",
  },
  {
    id: "ecommerce2",
    title: "استنساخ سوق أمازون",
    imageUrl: ecommerce2,
    type: "E-commerce",
    description: "منصة تجارة إلكترونية كاملة مع حسابات بائعين ونظام تقييمات",
    responsibility: ["بوابة البائعين", "نظام المراجعات", "محرك التوصيات"],
    credit: "https://intern-ecommerce-front-end2.vercel.app/",
  },
  {
    id: "ecommerce3",
    title: "متجر Nike Style",
    imageUrl: ecommerce3,
    type: "E-commerce",
    description: "متجر ملابس رياضية مع تخصيص المنتجات ومستشار مقاسات",
    responsibility: ["مخصص المنتجات", "توصية بالمقاسات", "مزامنة المخزون"],
    credit: "https://karma-master-ecommerce.vercel.app/",
  },
  {
    id: "ecommerce4",
    title: "Luxe Shopping Bag",
    imageUrl: ecommerce4,
    type: "E-commerce",
    description: "بوتيك أزياء مع تجربة افتراضية للتجربة وتوصيات أنماط",
    responsibility: ["تجربة الواقع المعزز", "اختبار الأنماط", "إدارة قائمة الأمنيات"],
    credit: "https://tech-trove-shop.vercel.app/",
  },
  {
    id: "ecommerce5",
    title: "متجر Blue Fashion",
    imageUrl: ecommerce5,
    type: "E-commerce",
    description: "متجر ملابس مستدامة مع حاسبة للأثر البيئي",
    responsibility: ["حاسبة الأثر", "خدمة الاشتراك", "كتالوج الأزياء"],
    credit: "https://fadyadel04.github.io/E-commers/",
  },
  {
    id: "ecommerce6",
    title: "خدمات Imaginify AI",
    imageUrl: ecommerce6,
    type: "E-commerce",
    description: "سوق للفنون المولدة بالذكاء الاصطناعي مع خيارات الطباعة",
    responsibility: ["مولد ذكاء اصطناعي", "تكامل الطباعة", "عمولات الفنانين"],
    credit: "https://imaginify-eight-pi.vercel.app/",
  },
];

export const Advantages = [
  [
    {
      title: "تواصل واضح",
      description:
        "نُبقيك على اطلاع في كل خطوة لضمان تنفيذ رؤيتك بشكل مثالي.",
      imageUrl: Communicative,
    },
    {
      title: "مشاريع مُدارة جيدًا",
      description:
        "من التخطيط إلى الإطلاق، يتم التعامل مع كل مشروع بعناية ودقة لضمان تسليم سلس.",
      imageUrl: Management,
    },
  ],
  [
    {
      title: "مخصصة وإبداعية",
      description:
        "كل موقع أو دعوة رقمية يتم تصميمها بشكل فريد لتناسب أسلوبك وهدفك.",
      imageUrl: Collaborative,
    },
    {
      title: "تصاميم مفضلة لدى العملاء",
      description:
        "لقد أنجزنا عشرات المشاريع المذهلة التي أحبها العملاء ويشاركونها بفخر.",
      imageUrl: Favorite,
    },
  ],
];

export const TeamMembers = [
  {
    name: "فادي عادل",
    position: "المالك - مطور Full Stack",
    imageUrl: Fady,
  },
  {
    name: "أحمد عادل",
    position: "مطور واجهة مستخدم وتجربة مستخدم",
    imageUrl: Ahmed,
  },
  {
    name: "يوسف محمد",
    position: "مدير وسائل التواصل الاجتماعي",
    imageUrl: joo,
  },
];
