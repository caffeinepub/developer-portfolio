import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SiGithub } from 'react-icons/si';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group border-border">
      <CardHeader>
        <CardTitle className="text-2xl group-hover:text-accent transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 group/btn"
          onClick={() => window.open(githubUrl, '_blank')}
        >
          <SiGithub className="mr-2 h-4 w-4" />
          GitHub
        </Button>
        <Button
          size="sm"
          className="flex-1 group/btn bg-accent hover:bg-accent/90"
          onClick={() => window.open(demoUrl, '_blank')}
        >
          Live Demo
          <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
}
