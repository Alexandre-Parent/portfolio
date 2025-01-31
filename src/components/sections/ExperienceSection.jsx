import { experiences } from '@/data/experience';

export default function ExperienceSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Expérience Professionnelle</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="relative pl-8 border-l-2 border-blue-500 group"
          >
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0 transition-transform group-hover:scale-125" />
            <p className="text-gray-500 mb-2">{exp.period}</p>
            <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
            <h4 className="text-lg text-blue-600 mb-2">{exp.subtitle}</h4>
            <p className="text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}