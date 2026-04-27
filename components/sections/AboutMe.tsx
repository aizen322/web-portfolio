import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ToolLogo } from '@/components/ui/ToolLogos';

const techStack = [
  { name: 'n8n', category: 'Automation' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'Make', category: 'Automation' },
  { name: 'JavaScript', category: 'Development' },
  { name: 'React', category: 'Development' },
  { name: 'Tailwind CSS', category: 'Development' },
  { name: 'APIs', category: 'Integration' },
  { name: 'Webhooks', category: 'Integration' },
];

const howIWork = [
  {
    title: 'Clear Communication',
    description: 'Regular updates and transparent project tracking so you always know the status.',
  },
  {
    title: 'Reliable Workflows',
    description: 'Built with error handling and monitoring to run smoothly without constant attention.',
  },
  {
    title: 'Documentation',
    description: 'Every automation comes with clear documentation so your team can maintain it.',
  },
];

export function AboutMe() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Bio Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            About Me
          </h2>
          <div className="space-y-5 text-lg text-muted leading-relaxed">
            <p>
              I&apos;m an Automation Specialist with 5+ years of experience managing real-world 
              workflows across esports operations, content systems, and SEO-driven funnels.
            </p>
            <p>
              I transitioned into automation to eliminate repetitive manual work and build 
              systems that scale. My background in both technical implementation and operations 
              gives me a unique perspective on what makes automations actually useful in practice.
            </p>
          </div>

          {/* Technical Stack with Logos */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Technical Foundation
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/10 to-violet-500/10 flex items-center justify-center text-indigo-500 dark:text-indigo-400">
                    <ToolLogo tool={tech.name} className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How I Work Section */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8">
            How I Work
          </h3>
          <div className="space-y-8">
            {howIWork.map((item, index) => (
              <div key={item.title} className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full gradient-accent flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/25">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
