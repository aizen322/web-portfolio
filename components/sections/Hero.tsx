import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { SectionWrapper } from '@/components/layout/SectionWrapper';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05] dark:opacity-[0.12]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="url(#gridGradient)" strokeWidth="1" />
            </pattern>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-30">
          {/* Profile Image */}
          <div className="shrink-0">
            <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <Image
                src="/images/profile/profile.png"
                alt="Joseph Valesna, Automation Specialist - professional headshot"
                fill
                className="rounded-full object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-full ring-4 ring-indigo-500/20" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-muted mb-3 text-2xl">Hi, I&apos;m Joseph</p>
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
              Automation Specialist<br />
              <span className="gradient-text">for Growing Teams</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-2xl mb-10 leading-relaxed">
              I build reliable workflows using n8n, Make, and Zapier to eliminate
              repetitive work and streamline operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="#projects" variant="primary" size="lg">
                View Automation Projects
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
