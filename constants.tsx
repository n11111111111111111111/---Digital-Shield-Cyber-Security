
import { Article, ThreatEvent } from './types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Ransomware Evolution 2024: How to Protect Your Org?',
    excerpt: 'A comprehensive study on new tactics used by cyber extortion gangs and how to counter them using AI.',
    category: 'Threat Analysis',
    date: '2024-05-15',
    image: 'https://picsum.photos/seed/cyber1/800/400',
    author: 'Eng. Ahmed Al-Salem'
  },
  {
    id: '2',
    title: 'Encryption Basics: From Caesar to Quantum',
    excerpt: 'A simplified educational guide for beginners on cryptography and how it evolved to face quantum threats.',
    category: 'Education',
    date: '2024-05-12',
    image: 'https://picsum.photos/seed/cyber2/800/400',
    author: 'Dr. Sarah Mansour'
  },
  {
    id: '3',
    title: 'Critical Zero-Day Discovered in Major Web Browsers',
    excerpt: 'Technical analysis of a newly discovered critical vulnerability allowing remote code execution.',
    category: 'Vulnerabilities',
    date: '2024-05-10',
    image: 'https://picsum.photos/seed/cyber3/800/400',
    author: 'Digital Shield Team'
  },
  {
    id: '4',
    title: 'Report: 40% Increase in Cyber Attacks on Financial Sector',
    excerpt: 'Latest statistics on cybersecurity in the Middle East and its impact on digital banking.',
    category: 'News',
    date: '2024-05-08',
    image: 'https://picsum.photos/seed/cyber4/800/400',
    author: 'Layla Al-Harbi'
  }
];

export const MOCK_THREATS: ThreatEvent[] = [
  { id: 't1', source: 'USA', target: 'China', type: 'DDoS', severity: 'high', timestamp: '10:45:12' },
  { id: 't2', source: 'Russia', target: 'Germany', type: 'SQL Injection', severity: 'medium', timestamp: '10:45:15' }
];
