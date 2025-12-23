import { Project } from '@/data/projects';
import { ToolLogo } from './ToolLogos';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-card border border-card-border rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group">
      {/* Placeholder Image Area */}
      <div className="relative aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 overflow-hidden">
        {/* Abstract workflow pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20"
          viewBox="0 0 400 225"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`grad-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          {/* Workflow nodes */}
          <circle cx="80" cy="112" r="25" fill={`url(#grad-${project.id})`} opacity="0.6" />
          <circle cx="200" cy="70" r="20" fill={`url(#grad-${project.id})`} opacity="0.4" />
          <circle cx="200" cy="155" r="20" fill={`url(#grad-${project.id})`} opacity="0.4" />
          <circle cx="320" cy="112" r="25" fill={`url(#grad-${project.id})`} opacity="0.6" />
          {/* Connection lines */}
          <path d="M105 112 L180 70" stroke={`url(#grad-${project.id})`} strokeWidth="2" opacity="0.5" />
          <path d="M105 112 L180 155" stroke={`url(#grad-${project.id})`} strokeWidth="2" opacity="0.5" />
          <path d="M220 70 L295 112" stroke={`url(#grad-${project.id})`} strokeWidth="2" opacity="0.5" />
          <path d="M220 155 L295 112" stroke={`url(#grad-${project.id})`} strokeWidth="2" opacity="0.5" />
        </svg>
        {/* Tool logo badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm shadow-sm">
          <ToolLogo tool={project.tool} className="w-4 h-4 text-indigo-500" />
          <span className="text-xs font-medium text-foreground">{project.tool}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        
        <div className="space-y-4 mb-5">
          <div>
            <p className="text-xs uppercase tracking-wide font-medium text-indigo-500 dark:text-indigo-400 mb-1">Problem</p>
            <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide font-medium text-violet-500 dark:text-violet-400 mb-1">Solution</p>
            <p className="text-sm text-muted leading-relaxed">{project.solution}</p>
          </div>
        </div>
        
        <div className="pt-4 border-t border-card-border">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-green-600 dark:text-green-400">{project.result}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
