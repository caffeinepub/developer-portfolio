import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

export default function Resume() {
  const [ref, isVisible] = useScrollAnimation();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center bg-muted/50 rounded-2xl p-12 border border-border">
            <FileText className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Resume</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download my resume to learn more about my education, experience, and technical skills
            </p>
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground min-w-[200px]"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
