import { Service, Project, Testimonial, FAQItem, Stat } from './types';

export const SERVICES: Service[] = [
  {
    id: 'short-form',
    title: 'Short Form Editing',
    description: 'High-retention vertical content for TikTok, Reels, and Shorts designed to go viral.',
    icon: 'Zap',
  },
  {
    id: 'storytelling',
    title: 'Brand Storytelling',
    description: 'Crafting compelling narratives that build authority and trust with your audience.',
    icon: 'BookOpen',
  },
  {
    id: 'hook-opt',
    title: 'Hook Optimization',
    description: 'A/B tested hook strategies to maximize your reach and stop the scroll.',
    icon: 'Target',
  },
  {
    id: 'retention',
    title: 'Retention Editing',
    description: 'Advanced pacing and visual cues to skyrocket your average view duration.',
    icon: 'BarChart3',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Premium Cinematic Edit',
    views: '150K+',
    thumbnail: 'https://drive.google.com/thumbnail?id=15tz_lyutjL2PRALGDv_9kGLW4z-M4sL6&sz=w1000',
    videoUrl: 'https://drive.google.com/file/d/15tz_lyutjL2PRALGDv_9kGLW4z-M4sL6/view?usp=drivesdk',
  },
  {
    id: '2',
    title: 'High-Retention Viral Edit',
    views: '420K+',
    thumbnail: 'https://drive.google.com/thumbnail?id=1l8PepBlKFc_n1Vh4Tlozu6jSEAdQ5Qqy&sz=w1000',
    videoUrl: 'https://drive.google.com/file/d/1l8PepBlKFc_n1Vh4Tlozu6jSEAdQ5Qqy/view?usp=drivesdk',
  },
  {
    id: '3',
    title: 'Dynamic Narrative Edit',
    views: '280K+',
    thumbnail: 'https://drive.google.com/thumbnail?id=1WMo9z5yjsnuMmN2DnOQahYRpQBIAilQj&sz=w1000',
    videoUrl: 'https://drive.google.com/file/d/1WMo9z5yjsnuMmN2DnOQahYRpQBIAilQj/view?usp=drivesdk',
  },
  {
    id: '4',
    title: 'High-Impact Brand Content',
    views: '180K+',
    thumbnail: 'https://drive.google.com/thumbnail?id=1hQrH5WXJ9XaVyrgaUvYT6tAx18Z50_tS&sz=w1000',
    videoUrl: 'https://drive.google.com/file/d/1hQrH5WXJ9XaVyrgaUvYT6tAx18Z50_tS/view?usp=drivesdk',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Rivers',
    role: 'Business Coach',
    content: 'The retention on my videos doubled within the first month. This is the best investment I have made for my brand.',
    avatar: 'https://i.pravatar.cc/150?u=alex',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'SaaS Founder',
    content: 'Professional, fast, and creative. They understand the psychology of social media better than anyone else.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    rating: 5,
  },
  {
    id: '3',
    name: 'Marcus Thorne',
    role: 'YouTube Creator',
    content: 'My channel growth exploded after we started working together. The storytelling is on another level.',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
    rating: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'What is your turnaround time?',
    answer: 'For short-form content, we typically deliver within 24-48 hours. Our process is optimized for speed without sacrificing quality.',
  },
  {
    id: '2',
    question: 'How many revisions do I get?',
    answer: 'We offer unlimited revisions within reason. Our goal is to ensure you are 100% satisfied with the final result.',
  },
  {
    id: '3',
    question: 'What is the pricing?',
    answer: 'We offer custom packages based on your volume and needs. Most clients start with a monthly retainer for consistent growth.',
  },
  {
    id: '4',
    question: 'Do you work internationally?',
    answer: 'Yes! We work with creators and businesses all over the world. All communication is handled via Slack or Discord.',
  },
];

export const STATS: Stat[] = [
  { label: 'Projects Completed', value: '30+' },
  { label: 'Total Views Generated', value: '5M+' },
  { label: 'Years of Experience', value: '1+' },
  { label: 'Client Retention', value: '98%' },
];

export const LOGOS = [
  'YouTube', 'Instagram', 'TikTok', 'LinkedIn', 'Twitter'
];
