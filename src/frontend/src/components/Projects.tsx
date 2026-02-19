import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Built a full-stack e-commerce solution with real-time inventory management, reducing order processing time by 40%.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
  },
  {
    title: 'Task Management App',
    description:
      'Developed a collaborative task manager with drag-and-drop functionality, helping teams organize 1000+ tasks efficiently.',
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
  },
  {
    title: 'Weather Forecast Dashboard',
    description:
      'Created an interactive weather dashboard with real-time data visualization, serving 500+ daily active users.',
    techStack: ['React', 'Chart.js', 'OpenWeather API', 'Express'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
  },
  {
    title: 'Social Media Analytics Tool',
    description:
      'Engineered an analytics platform that processes social media metrics, providing actionable insights for content creators.',
    techStack: ['Python', 'Django', 'PostgreSQL', 'D3.js', 'Docker'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
  },
];

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A selection of projects that showcase my problem-solving abilities and technical skills
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
