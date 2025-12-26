
import { Article, ThreatEvent, Story, Notification, CommunityPost } from './types';

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
  }
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'cp1',
    author: 'الخبير_X',
    rank: 'محلل أول',
    title: 'تحذير: حملة صيد تستهدف القطاع المالي',
    content: 'تم رصد عناوين IP جديدة مرتبطة بهجمات صيد متقدمة تستخدم روابط تتبع مزيفة لشحنات بريدية. يرجى تحديث قوائم الحظر.',
    timestamp: 'منذ ساعة',
    tag: 'Intelligence'
  },
  {
    id: 'cp2',
    author: 'Cyber_Guardian',
    rank: 'مهندس أمن',
    title: 'تكتيك جديد في اختراق الأنظمة السحابية',
    content: 'المهاجمون الآن يستغلون أخطاء تكوين S3 buckets للوصول إلى بيانات التعريف. تأكد من مراجعة صلاحيات IAM فوراً.',
    timestamp: 'منذ 3 ساعات',
    tag: 'Cloud Security'
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
  }
];

export const NOTIFICATIONS: Notification[] = [
  { id: 'n1', title: 'تم رصد محاولة دخول غير مصرح بها من عنوان IP مجهول.', time: 'منذ دقيقتين', type: 'alert', unread: true }
];

export const MOCK_THREATS: ThreatEvent[] = [
  { id: 't1', source: 'USA', target: 'China', type: 'DDoS', severity: 'high', timestamp: '10:45:12' }
];
