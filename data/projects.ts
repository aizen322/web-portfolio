export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  tool: 'n8n' | 'Zapier' | 'Make';
  result: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Appointment Setter (AI Receptionist using Vapi)',
    problem: 'Manually handling appointment inquiries, scheduling, rescheduling, and cancellations is time-consuming, error-prone, and often leads to missed bookings or delayed responses',
    solution: 'AI-powered receptionist that handles appointment requests in real-time—checking availability, booking, updating, and canceling appointments while syncing with calendars and databases',
    tool: 'n8n',
    result: '24/7 automated appointment management with instant responses and zero missed bookings',
    image: '/images/projects/AI Appointment Setter (AI Receptionist).jpg',
  },
  {
    id: '2',
    title: 'AI Content Repurposing Automation',
    problem: 'Creating and distributing content across multiple platforms is time-consuming, repetitive, and often inconsistent',
    solution: 'Automated workflow that transforms audio/video into blog posts and platform-specific social media content, then publishes across channels',
    tool: 'Zapier',
    result: 'Turn 1 piece of content into multiple posts automatically',
    image: '/images/projects/AI Content Repurposing Automation.png',
  },
  {
    id: '3',
    title: 'Asana Automations',
    problem: 'Manual task management, data handling, and cross-tool updates lead to inefficiencies, delays, and increased risk of human error',
    solution: 'Automated workflow that syncs Asana with external tools, processes task data, and updates records across systems without manual intervention',
    tool: 'Make',
    result: 'Seamless task management with automated data syncing and reduced manual work',
    image: '/images/projects/Asana Automations.png',
  },
  {
    id: '5',
    title: 'AI Social Media Content Creator',
    problem: 'Creating engaging, timely, and consistent social media content requires constant effort, creativity, and manual posting',
    solution: 'Automated system that generates context-aware content (e.g., weather-based), creates visuals, and publishes directly to social media platforms on a schedule',
    tool: 'n8n',
    result: 'Consistent, AI-generated social content published automatically without manual effort',
    image: '/images/projects/AI Social Media Content Creator.jpg',
  },
  {
    id: '6',
    title: 'Asana CRM Automations',
    problem: 'Managing leads, follow-ups, and client communication manually in CRM leads to missed tasks, delayed responses, and inconsistent workflows',
    solution: 'Automated system triggered by task updates in Asana that organizes leads, generates personalized emails, and sends timely follow-ups based on deal stage',
    tool: 'Zapier',
    result: 'Streamlined CRM workflow with automated follow-ups and zero missed tasks',
    image: '/images/projects/Asana CRM Automations.png',
  },
  {
    id: '7',
    title: 'Email Attachment Monitoring Automation',
    problem: 'Manually tracking, downloading, and organizing email attachments is time-consuming and prone to missed files and disorganized records',
    solution: 'Automated workflow that monitors incoming emails, extracts and analyzes attachments, organizes them in cloud storage, and logs activity with notifications',
    tool: 'Make',
    result: 'Automatically capture, organize, and track email attachments with zero manual effort',
    image: '/images/projects/Email Attachment Monitoring Automation.png',
  },
  {
    id: '8',
    title: 'Lead Enrichment Automation',
    problem: 'Raw leads lack important data and require manual research, prioritization, and outreach—leading to slow response times and missed opportunities',
    solution: 'Automated workflow that enriches incoming leads, categorizes them by priority, and generates personalized outreach emails for immediate follow-up',
    tool: 'Zapier',
    result: 'Faster lead response with enriched data and automated, priority-based outreach',
    image: '/images/projects/Lead Enrichment Automation.png',
  },
  {
    id: '9',
    title: 'Automated Youtube Shorts and Facebook Reels Creator (Glass Fruit ASMR)',
    problem: 'Creating short-form video content consistently requires time, editing effort, and frequent posting—making it hard to scale across platforms',
    solution: 'Automated workflow that generates AI-powered short videos, processes and formats them, then publishes directly to YouTube Shorts and Facebook Reels',
    tool: 'n8n',
    result: 'Consistent, fully automated short-form video content creation and publishing at scale',
    image: '/images/projects/Automated Youtube Shorts and Facebook Reels Creator (Glass Fruit ASMR).png',
  },
  {
    id: '10',
    title: 'Facebook AI Agent',
    problem: 'Manually creating and posting content on Facebook is time-consuming, inconsistent, and lacks personalization or context from existing data',
    solution: 'AI-powered agent that processes incoming data, generates context-aware content, and automatically publishes posts to Facebook',
    tool: 'n8n',
    result: 'Automated, intelligent Facebook content creation and posting with minimal manual effort',
    image: '/images/projects/Facebook AI Agent.png',
  },
  {
    id: '11',
    title: 'RAG AI Agents',
    problem: 'AI responses are often generic, outdated, or disconnected from your actual data—leading to inaccurate answers and poor user experience',
    solution: 'AI agent powered by retrieval-augmented generation that pulls relevant information from your knowledge base (e.g., files, documents) to generate accurate, context-aware responses',
    tool: 'n8n',
    result: 'Accurate, data-driven AI responses grounded in your own knowledge base',
    image: '/images/projects/RAG Agents.jpg',
  },
];

export const tools = ['All', 'n8n', 'Zapier', 'Make'] as const;

