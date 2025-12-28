
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
    id: 'global-1',
    title: 'تحليل هجمات الفدية العابرة للقارات 2024',
    excerpt: 'كيف تطورت برمجيات الفدية لتستهدف سلاسل التوريد العالمية وما هي سبل الحماية الموصى بها.',
    category: 'Cyber News',
    subCategory: 'هجمات فدية',
    date: '2024-05-18',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800',
    author: 'فريق دجلة سايبر'
  },
  {
    id: 'threat-1',
    title: 'تحذير: ثغرة حرجة في أنظمة إدارة قواعد البيانات',
    excerpt: 'اكتشاف ثغرة Zero-day تسمح بتجاوز الصلاحيات في الأنظمة المؤسسية الكبرى. يرجى التحديث فوراً.',
    category: 'Threats & Alerts',
    subCategory: 'تنبيه أمني',
    date: '2024-05-25',
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
    id: 'edu-2',
    title: 'دليل الهندسة العكسية للملفات الخبيثة',
    excerpt: 'كيف تبدأ في تحليل ملفات EXE و DLL للكشف عن سلوك البرمجيات الضارة وتتبع مصدرها.',
    category: 'Reports & Trends',
    subCategory: 'تقني عميق',
    date: '2024-05-30',
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
    id: 's1',
    title: 'عملية سد الموصل الرقمية',
    preview: 'قصة إحباط محاولة الدخول لأنظمة التحكم المركزية في لحظة حرجة من تاريخ الأمن المائي العراقي...',
    content: 'في ربيع عام 2023، رصدت أنظمة المراقبة نشاطاً مريباً يحاول الوصول إلى شبكة التحكم الصناعية (ICS) الخاصة بالسد...',
    readTime: '8 دقائق',
    category: 'سايبر العراق',
    icon: '🇮🇶'
  },
  {
    id: 's2',
    title: 'شبح بابل: صيد القراصنة',
    preview: 'تحقيق استخباراتي حول شبكة دولية حاولت استهداف المصارف العراقية باستخدام تقنيات الهندسة الاجتماعية المتطورة.',
    content: 'بدأت القصة ببلاغ بسيط من أحد الموظفين حول رسالة بريد إلكتروني مريبة، لكن التحقيقات كشفت عن وجود برمجية خبيثة...',
    readTime: '12 دقيقة',
    category: 'تحقيقات',
    icon: '🕵️'
  },
  {
    id: 's3',
    title: 'اختراق مخدّمات نينوى للبيانات',
    preview: 'كيف تمكن فريق الاستجابة السريعة من عزل هجوم ماسح البيانات قبل وصوله إلى قاعدة بيانات السجلات المدنية.',
    content: 'في منتصف الليل، انطلق جرس الإنذار في مركز العمليات الأمنية (SOC) معلناً عن محاولة مسح شامل للبيانات...',
    readTime: '10 دقائق',
    category: 'سايبر العراق',
    icon: '🏛️'
  }
];

export const NOTIFICATIONS: Notification[] = [
  { id: 'n1', title: 'عاجل: تحديث أمني لنظام ويندوز لمعالجة ثغرة Zero-day', time: 'منذ 5 دقائق', type: 'alert', unread: true }
];

export const ARTICLES = INITIAL_ARTICLES;
export const STORIES = INITIAL_STORIES;
