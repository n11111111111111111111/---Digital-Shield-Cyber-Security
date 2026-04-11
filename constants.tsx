
import { Article, Notification, Story } from './types';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'iraq-1',
    title: 'تأمين النطاقات الحكومية (.iq) ضد هجمات DDoS',
    excerpt: 'تقرير حول الإجراءات المتخذة لحماية البنية التحتية الرقمية العراقية من موجة الهجمات الأخيرة التي استهدفت البوابات الحكومية.',
    category: 'Cyber Iraq',
    subCategory: 'تهديدات محلية',
    date: '2024-05-20',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
    author: 'وحدة الرصد العراقي'
  },
  {
    id: 'global-crowdstrike',
    title: 'تحليل انقطاع أنظمة CrowdStrike العالمي',
    excerpt: 'دراسة تقنية معمقة حول التحديث البرمجي الذي تسبب في تعطل ملايين الأجهزة حول العالم وتوقف المطارات والبنوك.',
    category: 'Cyber News',
    subCategory: 'تحليل تقني',
    date: '2024-07-19',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800',
    author: 'فريق دجلة سايبر'
  },
  {
    id: 'threat-att',
    title: 'تسريب بيانات ضخم يستهدف عملاء AT&T',
    excerpt: 'الكشف عن سرقة سجلات المكالمات والرسائل النصية لملايين المستخدمين، وتحذيرات من هجمات هندسة اجتماعية محتملة.',
    category: 'Threats & Alerts',
    subCategory: 'تنبيه أمني',
    date: '2024-07-12',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800',
    author: 'مركز الاستجابة'
  },
  {
    id: 'iraq-2',
    title: 'محاولات اختراق شبكة الكهرباء الوطنية',
    excerpt: 'رصد نشاط مشبوه يحاول استهداف أنظمة التوزيع الذكية في المحافظات الجنوبية، وتم التصدي له بنجاح.',
    category: 'Cyber Iraq',
    subCategory: 'بنية تحتية',
    date: '2024-05-29',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800',
    author: 'فريق العمليات'
  },
  {
    id: 'edu-solarwinds',
    title: 'دروس مستفادة من هجوم SolarWinds',
    excerpt: 'كيف غير اختراق سلسلة التوريد مفهوم الأمن السيبراني للمؤسسات الحكومية والشركات الكبرى حول العالم.',
    category: 'Reports & Trends',
    subCategory: 'سلسلة التوريد',
    date: '2024-06-15',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=800',
    author: 'محلل برمجيات'
  },
  {
    id: 'global-2',
    title: 'سقوط أكبر منصة لبيع البيانات المسربة',
    excerpt: 'بالتعاون مع FBI، تم إغلاق منتدى BreachForums واعتقال عدد من المشرفين في عملية دولية واسعة.',
    category: 'Cyber News',
    subCategory: 'عمليات دولية',
    date: '2024-06-01',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800',
    author: 'مراسل سايبر'
  }
];

export const INITIAL_STORIES: Story[] = [
  {
    id: 'ubisoft-breach',
    title: 'اختراق شركة Ubisoft: صراع خلف الكواليس',
    preview: 'كيف تمكن المهاجمون من الوصول إلى الأنظمة الداخلية لعملاق الألعاب الفرنسي ومحاولة سرقة بيانات حساسة...',
    content: 'في عام 2022، واجهت يوبيسوفت حادثة أمنية سيبرانية تسببت في اضطراب بعض ألعابها وأنظمتها. كشفت التحقيقات أن المهاجمين استخدموا تقنيات متطورة للوصول إلى البنية التحتية للشركة، مما استدعى عملية إعادة تعيين كلمة المرور على نطاق واسع للشركة بأكملها.',
    readTime: '10 دقائق',
    category: 'اختراقات عالمية',
    icon: '🎮'
  },
  {
    id: 'sony-hack',
    title: 'سوني بيكتشرز: الهجوم الذي هز هوليوود',
    preview: 'قصة الاختراق المدمر الذي أدى إلى تسريب أفلام لم تُعرض بعد ورسائل بريد إلكتروني محرجة للمسؤولين.',
    content: 'في عام 2014، تعرضت شركة سوني بيكتشرز لهجوم سيبراني شامل من قبل مجموعة تطلق على نفسها اسم "حراس السلام". تم مسح بيانات الخوادم وتسريب معلومات شخصية عن الموظفين، في واحدة من أكثر الهجمات وقاحة في التاريخ.',
    readTime: '15 دقيقة',
    category: 'تحقيقات',
    icon: '🎬'
  },
  {
    id: 'stuxnet-story',
    title: 'ستوكسنت: السلاح الرقمي الأول',
    preview: 'كيف تمكنت دودة حاسوبية من تدمير أجهزة طرد مركزي مادية في منشأة نووية دون إطلاق رصاصة واحدة.',
    content: 'يعتبر ستوكسنت أول سلاح سيبراني في العالم مصمم لإحداث ضرر مادي ملموس. استهدف البرنامج أنظمة التحكم الصناعية من نوع سيمنز، مما أدى إلى تدمير مئات أجهزة الطرد المركزي في منشأة نطنز الإيرانية.',
    readTime: '12 دقيقة',
    category: 'أمن صناعي',
    icon: '☢️'
  }
];

export const NOTIFICATIONS: Notification[] = [
  { id: 'n1', title: 'عاجل: تحديث أمني لنظام ويندوز لمعالجة ثغرة Zero-day', time: 'منذ 5 دقائق', type: 'alert', unread: true },
  { id: 'n2', title: 'تنبيه: رصد نشاط مشبوه يستهدف بروتوكول RDP في العراق', time: 'منذ 15 دقيقة', type: 'security', unread: true },
  { id: 'n3', title: 'تقرير: ارتفاع هجمات الفدية بنسبة 20% في الربع الأخير', time: 'منذ ساعة', type: 'security', unread: false }
];

export const ARTICLES = INITIAL_ARTICLES;
export const STORIES = INITIAL_STORIES;
