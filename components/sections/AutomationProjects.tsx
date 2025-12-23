'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { FilterTabs } from '@/components/ui/FilterTabs';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects, tools } from '@/data/projects';

export function AutomationProjects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.tool === activeFilter);

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Automation Projects
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          Practical automation systems built with modern no-code and low-code tools.
        </p>
      </div>

      <FilterTabs
        tabs={[...tools]}
        activeTab={activeFilter}
        onTabChange={setActiveFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-muted py-12">
          No projects found for this filter.
        </p>
      )}
    </SectionWrapper>
  );
}

