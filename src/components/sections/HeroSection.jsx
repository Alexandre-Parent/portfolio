export default function HeroSection() {
    return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
        {/* Fond animé */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[800px] h-[800px] bg-gradient-to-r from-primary-500/10 to-primary-900/10 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>
  
        {/* Contenu */}
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-600">
            Alexandre Parent
          </h1>
          
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl font-mono text-primary-800">
              {`<Développeur Full-Stack />`}
            </p>
            
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/30">
                Contactez-moi
              </a>          
              <a href="#projets" className="px-6 py-3 border-2 border-primary-500/20 hover:border-primary-500 text-primary-800 rounded-lg transition-all">
                Voir les projets
              </a>
            </div>
          </div>
  
          {/* Avatar flottant */}
          <div className="mt-16 animate-float">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-blue-500 rounded-full shadow-2xl" />
          </div>
        </div>
      </section>
    )
  }