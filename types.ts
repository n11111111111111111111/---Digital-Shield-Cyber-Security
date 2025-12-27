
export type UserRole = 'guest' | 'user' | 'expert' | 'admin';

export type CategoryType = 
  | 'Cyber News'        // أخبار السايبر
  | 'Threats & Alerts'  // تهديدات وتحذيرات
  | 'Famous Hacks'      // اختراقات مشهورة
  | 'Cyber Iraq'        // سايبر العراق
  | 'Reports & Trends'  // تحليلات وتقارير
  | 'Opinion & Analysis'; // رأي وتحليل

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: CategoryType;
  subCategory?: string;
  date: string;
  image: string;
  author: string;
}

export interface ExpertService {
  id: string;
  expertName: string;
  title: string;
  description: string;
  price: string;
  skills: string[];
  rating: number;
}

export interface ThreatEvent {
  id: string;
  source: string;
  target: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Story {
  id: string;
  title: string;
  preview: string;
  content: string;
  readTime: string;
  category: string;
  icon: string;
}

export interface Notification {
  id: string;
  title: string;
  time: string;
  type: 'alert' | 'update' | 'security';
  unread: boolean;
}
