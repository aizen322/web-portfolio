import { SectionWrapper } from '@/components/layout/SectionWrapper';

const services = [
  {
    title: 'Workflow Automation Setup',
    description:
      'End-to-end automation design and implementation for your specific business processes.',
    features: ['Custom workflow design', 'Tool selection guidance', 'Implementation & testing'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
  },
  {
    title: 'API & Webhook Integrations',
    description:
      'Connect your tools and platforms with custom API integrations that work reliably.',
    features: ['REST API connections', 'Webhook setup', 'Data transformation'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    title: 'AI-Powered Automation',
    description:
      'Leverage AI to classify, summarize, and process data automatically within your workflows.',
    features: ['GPT/Claude integration', 'Smart data extraction', 'Intelligent routing'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: 'Automation Cleanup & Optimization',
    description:
      'Audit and optimize existing automations to reduce costs and improve reliability.',
    features: ['Error resolution', 'Performance tuning', 'Documentation'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <SectionWrapper id="offerings">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Services
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          From quick fixes to full automation builds, I offer flexible engagement options.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <article
            key={service.title}
            className="bg-card border border-card-border rounded-2xl p-8 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group flex flex-col"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 flex items-center justify-center mb-6 text-indigo-500 dark:text-indigo-400 group-hover:from-indigo-500/20 group-hover:to-violet-500/20 transition-colors">
              {service.icon}
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-3">
              {service.title}
            </h3>
            <p className="text-muted mb-5 leading-relaxed">{service.description}</p>
            <ul className="space-y-3 mb-6 flex-grow">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-muted">
                  <svg
                    className="w-5 h-5 text-indigo-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            
            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-indigo-500 dark:text-indigo-400 font-medium hover:gap-3 transition-all group-hover:text-indigo-600 dark:group-hover:text-indigo-300"
            >
              Start automating
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
