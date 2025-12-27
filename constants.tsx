
import { Article, Notification, Story } from './types';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'iraq-1',
    title: 'تأمين النطاقات الحكومية (.iq) ضد هجمات DDoS',
    excerpt: 'تقرير حول الإجراءات المتخذة لحماية البنية التحتية الرقمية العراقية من موجة الهجمات الأخيرة.',
    category: 'Cyber Iraq',
    subCategory: 'تهديدات محلية',
    date: '2024-05-20',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
    author: 'وحدة الرصد العراقي'
  },
  {
    id: 'edu-1',
    title: 'أساسيات التشفير للمبتدئين: حماية بياناتك الشخصية',
    excerpt: 'دليل تعليمي مبسط يشرح مفاهيم التشفير وكيفية استخدامه في الحياة اليومية لحماية الخصوصية.',
    category: 'Reports & Trends',
    subCategory: 'تعليمي',
    date: '2024-05-22',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=800',
    author: 'قسم التدريب'
  },
  {
    id: 'global-1',
    title: 'تحليل هجمات الفدية العابرة للقارات 2024',
    excerpt: 'كيف تطورت برمجيات الفدية لتستهدف سلاسل التوريد العالمية وما هي سبل الحماية.',
    category: 'Cyber News',
    subCategory: 'هجمات فدية',
    date: '2024-05-18',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800',
    author: 'فريق دجلة سايبر'
  }
];

export const INITIAL_STORIES: Story[] = [
  {
    id: 's1',
    title: 'عملية سد الموصل الرقمية',
    preview: 'قصة إحباط محاولة الدخول لأنظمة التحكم المركزية في لحظة حرجة من تاريخ الأمن المائي العراقي...',
    content: 'في ربيع عام 2023، رصدت أنظمة المراقبة نشاطاً مريباً يحاول الوصول إلى شبكة التحكم الصناعية (ICS) الخاصة بالسد. بدأت المواجهة الرقمية باستغلال ثغرة في نظام قديم لم يتم تحديثه...',
    readTime: '8 دقائق',
    category: 'سايبر العراق',
    icon: '🇮🇶'
  },
  {
    id: 's2',
    title: 'شبح بابل: صيد القراصنة',
    preview: 'تحقيق استخباراتي حول شبكة دولية حاولت استهداف المصارف العراقية باستخدام تقنيات الهندسة الاجتماعية المتطورة.',
    content: 'بدأت القصة ببلاغ بسيط من أحد الموظفين حول رسالة بريد إلكتروني مريبة، لكن التحقيقات كشفت عن وجود برمجية خبيثة متخفية بعناية فائقة...',
    readTime: '12 دقيقة',
    category: 'تحقيقات',
    icon: '🕵️'
  }
];

export const NOTIFICATIONS: Notification[] = [
  { id: 'n1', title: 'عاجل: تحديث أمني لنظام ويندوز لمعالجة ثغرة Zero-day', time: 'منذ 5 دقائق', type: 'alert', unread: true }
];

// Re-exporting for compatibility with existing components if they use ARTICLES/STORIES directly
export const ARTICLES = INITIAL_ARTICLES;
export const STORIES = INITIAL_STORIES;
