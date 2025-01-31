export default function ScrollingWords () {
    const techStack = [
      'React', 'TypeScript', 'Node.js', 'Next.js', 'GraphQL', 
      'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'Jest', 'CI/CD'
    ];
  
    const scrollContent = [...techStack, ...techStack];
  
    return (
      <div className="relative overflow-hidden border-y-2 border-[#b0003a] py-4">
        <div className="flex animate-marquee gap-8 whitespace-nowrap">
          {scrollContent.map((tech, index) => (
            <span 
              key={index}
              className="text-xl font-semibold uppercase tracking-wide text-[#b0003a]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  };