
import { Article, ThreatEvent, Story, Notification } from './types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'تطور برمجيات الفدية 2024: كيف تحمي مؤسستك؟',
    excerpt: 'دراسة شاملة حول التكتيكات الجديدة التي تستخدمها عصابات الابتزاز الرقمي وكيفية مواجهتها باستخدام الذكاء الاصطناعي.',
    category: 'Threat Analysis',
    date: '2024-05-15',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    author: 'م. أحمد السالم'
  },
  {
    id: '2',
    title: 'أساسيات التشفير: من قيصر إلى الكوآنتوم',
    excerpt: 'دليل تعليمي مبسط للمبتدئين حول علم التعمية وكيف تطور لمواجهة تهديدات الحوسبة الكمية القادمة.',
    category: 'Education',
    date: '2024-05-12',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800',
    author: 'د. سارة منصور'
  },
  {
    id: '3',
    title: 'اكتشاف ثغرة "يوم صفر" في المتصفحات الشهيرة',
    excerpt: 'تحليل تقني لثغرة أمنية حرجة تم اكتشافها مؤخراً تسمح بتنفيذ برمجيات عن بعد دون علم المستخدم.',
    category: 'Vulnerabilities',
    date: '2024-05-10',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    author: 'فريق الدرع الرقمي'
  }
];

export const STORIES: Story[] = [
  {
    id: 's1',
    title: 'ليلة سقوط الخادم الرئيسي',
    preview: 'كيف نجح فريق الاستجابة في صد هجوم DDoS بقوة 2 تيرابايت في الثانية...',
    content: '',
    readTime: '4 دقائق',
    category: 'كواليس الدفاع',
    icon: '🔥'
  },
  {
    id: 's2',
    title: 'صياد الثغرات الصغير',
    preview: 'قصة مراهق اكتشف ثغرة في أنظمة بنك عالمي وحصل على مكافأة تاريخية.',
    content: '',
    readTime: '6 دقائق',
    category: 'نجاحات',
    icon: '💎'
  },
  {
    id: 's3',
    title: 'تحقيق جنائي: بصمة المخترق',
    preview: 'تتبع خيوط عملية اختراق معقدة بدأت برابط "صيد" بسيط وانتهت بكشف شبكة دولية.',
    content: '',
    readTime: '5 دقائق',
    category: 'تحقيق جنائي',
    icon: '🔎'
  }
];

export const NOTIFICATIONS: Notification[] = [
  { id: 'n1', title: 'تم رصد محاولة دخول غير مصرح بها من عنوان IP مجهول.', time: 'منذ دقيقتين', type: 'alert', unread: true },
  { id: 'n2', title: 'تحديث أمني جديد متاح لجدار الحماية الخاص بك.', time: 'منذ ساعة', type: 'security', unread: true },
  { id: 'n3', title: 'نشرة أمنية: اكتشاف ثغرة في أنظمة Linux Kernal.', time: 'منذ 4 ساعات', type: 'update', unread: false }
];

export const MOCK_THREATS: ThreatEvent[] = [
  { id: 't1', source: 'USA', target: 'China', type: 'DDoS', severity: 'high', timestamp: '10:45:12' },
  { id: 't2', source: 'Russia', target: 'Germany', type: 'SQL Injection', severity: 'medium', timestamp: '10:45:15' }
];
