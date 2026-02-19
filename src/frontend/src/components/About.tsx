import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            About Me
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
            <p>
              I'm a Computer Science student with an insatiable curiosity for technology and its
              potential to solve complex problems. My journey in software development began with a
              simple "Hello World" program, and it has evolved into a passion for building
              meaningful applications that impact users' lives.
            </p>
            <p>
              What drives me is the continuous learning process—every project teaches me something
              new, whether it's a programming paradigm, a design pattern, or a better way to
              collaborate with teams. I believe in writing clean, maintainable code and creating
              user experiences that are both functional and delightful.
            </p>
            <p>
              As I prepare for college placements and software internships, I'm eager to contribute
              to innovative projects, learn from experienced professionals, and grow as a developer.
              I'm particularly interested in full-stack development, cloud technologies, and building
              scalable systems that can handle real-world challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
