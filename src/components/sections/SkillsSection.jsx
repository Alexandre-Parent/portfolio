const skills = [
    { name: 'React', color: 'text-sky-500' },
    { name: 'TypeScript', color: 'text-blue-600' },
    { name: 'Next.js', color: 'text-gray-800' },
    { name: 'Node.js', color: 'text-green-600' },
    { name: 'Tailwind CSS', color: 'text-cyan-500' },
    { name: 'AWS', color: 'text-amber-600' },
  ]
  
  export default function SkillsSection() {
    return (
      <section className="py-20 bg-dark text-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Compétences</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary-500 transition-all"
              >
                <span className={`text-2xl font-mono ${skill.color}`}>
                  {skill.name}
                </span>
                <div className="mt-4 h-1 bg-white/10 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"
                    style={{ width: `${Math.min(90 + index * 5, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }