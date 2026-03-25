import { projects } from '../data/projects';
import type { Project, ProjectLink } from '../data/projects';

type Category = 'featured' | 'beginner' | 'webdesign';

const sections: { category: Category; title: string; subtitle: string }[] = [
  {
    category: 'featured',
    title: '< Featured Projects />',
    subtitle: 'My most recent and complex work',
  },
  {
    category: 'webdesign',
    title: '< Web Design />',
    subtitle: 'Client websites and design-focused work',
  },
  {
    category: 'beginner',
    title: '< Older Projects />',
    subtitle: 'Where it all started — earlier JavaScript projects',
  },
];

interface ProjectLinksProps {
  links: ProjectLink[];
}

function ProjectLinks({ links }: ProjectLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className="flex justify-end gap-5 mt-auto pt-4">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-white hover:text-[#aef5c5] hover:scale-125 transition-all duration-200"
        >
          {link.type === 'github' ? (
            <i className="fa-brands fa-github fa-lg" />
          ) : (
            <i className="fa-solid fa-arrow-up-right-from-square fa-lg" />
          )}
        </a>
      ))}
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="
        flex flex-col min-h-[420px] p-8 gap-4 rounded-xl
        bg-[url('/images/project-background.png')] bg-center bg-[length:100%_100%] bg-no-repeat
        hover:scale-[1.02] transition-transform duration-300
      "
    >
      {project.imageSrc && (
        <img
          src={project.imageSrc}
          alt={project.imageAlt ?? project.title}
          className="w-full h-44 object-cover border-2 border-[#5c8374] rounded-lg mt-[45px]"
        />
      )}

      <h3 className="text-white text-xl font-medium font-['Lexend_Deca',sans-serif] mt-2">
        {project.title}
      </h3>

      <p className="text-white/80 text-base leading-relaxed flex-1">
        {project.description}
      </p>

      <ProjectLinks links={project.links} />
    </div>
  );
}

interface ProjectSectionProps {
  category: Category;
  title: string;
  subtitle: string;
}

function ProjectSection({ category, title, subtitle }: ProjectSectionProps) {
  const filtered = projects.filter((p) => p.category === category);

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Section header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-white text-[2.5rem] self-center font-medium font-['Lexend_Deca',sans-serif] max-[950px]:text-[1.8rem]">
          {title}
        </h2>
        <p className="text-[#aef5c5] text-base self-center font-['Inconsolata',monospace]">
          {subtitle}
        </p>
      </div>

      {/* Project grid */}
      <div
        className="
          grid grid-cols-3 gap-8
          max-[950px]:grid-cols-2
          max-[550px]:grid-cols-1 max-[550px]:gap-5
        "
      >
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="flex w-full justify-center py-24 px-6">
      <div className="flex flex-col items-center gap-24 w-full max-w-[1200px]">
        {sections.map((section) => (
          <ProjectSection
            key={section.category}
            category={section.category}
            title={section.title}
            subtitle={section.subtitle}
          />
        ))}
      </div>
    </section>
  );
}
