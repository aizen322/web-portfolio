export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  tool: 'n8n' | 'Zapier' | 'Make' | 'GHL';
  result: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Lead Capture to CRM Pipeline',
    problem: 'Manual lead entry from multiple forms causing delays and data loss',
    solution: 'Automated webhook integration capturing leads from landing pages directly into CRM with instant tagging',
    tool: 'n8n',
    result: '4+ hours saved weekly',
  },
  {
    id: '2',
    title: 'Client Onboarding Sequence',
    problem: 'Inconsistent onboarding emails sent manually after each sale',
    solution: 'Multi-step email sequence triggered on purchase with personalized content and follow-ups',
    tool: 'Zapier',
    result: '100% onboarding consistency',
  },
  {
    id: '3',
    title: 'Cross-Platform Data Sync',
    problem: 'Data scattered across Airtable, Google Sheets, and Notion with no single source of truth',
    solution: 'Real-time bidirectional sync keeping all platforms updated automatically',
    tool: 'Make',
    result: '15+ hours saved monthly',
  },
  {
    id: '4',
    title: 'AI-Powered Lead Qualification',
    problem: 'Sales team spending time on unqualified leads',
    solution: 'Automated lead scoring using AI to analyze form responses and route high-intent leads to sales',
    tool: 'GHL',
    result: '40% higher conversion rate',
  },
  {
    id: '5',
    title: 'Automated Invoice Processing',
    problem: 'Manual data entry from invoices into accounting software',
    solution: 'OCR-powered extraction with validation rules and automatic QuickBooks integration',
    tool: 'n8n',
    result: '90% reduction in manual entry',
  },
  {
    id: '6',
    title: 'Social Media to CRM Bridge',
    problem: 'Facebook and Instagram leads not making it into the sales pipeline',
    solution: 'Instant lead capture from social ads with automatic CRM entry and sales team notification',
    tool: 'Zapier',
    result: '3x faster lead response time',
  },
  {
    id: '7',
    title: 'Inventory Alert System',
    problem: 'Stockouts due to delayed inventory tracking',
    solution: 'Real-time inventory monitoring with Slack alerts and automatic reorder triggers',
    tool: 'Make',
    result: 'Zero stockouts in 6 months',
  },
  {
    id: '8',
    title: 'Appointment Booking Automation',
    problem: 'Back-and-forth emails to schedule client calls',
    solution: 'Integrated booking system with calendar sync, reminders, and no-show follow-ups',
    tool: 'GHL',
    result: '80% reduction in scheduling time',
  },
];

export const tools = ['All', 'n8n', 'Zapier', 'Make', 'GHL'] as const;

