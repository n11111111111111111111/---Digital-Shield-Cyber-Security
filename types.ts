
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: 'News' | 'Education' | 'Threat Analysis' | 'Vulnerabilities' | 'Tech';
  date: string;
  image: string;
  author: string;
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

export interface CommunityPost {
  id: string;
  author: string;
  rank: string;
  title: string;
  content: string;
  timestamp: string;
  tag: string;
}
