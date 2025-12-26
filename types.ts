
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
