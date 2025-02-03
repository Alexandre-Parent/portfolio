import { FaLinkedin, FaGithub } from 'react-icons/fa';

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
        <div className="text-center space-y-8 w-full max-w-4xl mx-auto relative">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-4 text-sm text-black-600 font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
              <span>Disponible pour travailler</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold text-black uppercase">
              Alexandre Parent
            </h1>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-center items-center space-x-4">
              <div className="flex space-x-4">
                <a href="#contact" className="px-6 py-3 bg-primary-600 text-white rounded-lg shadow-lg">
                  Contactez-moi
                </a>          
                <a href="#projets" className="px-6 py-3 border-2 border-primary-500/20 text-primary-800 rounded-lg">
                  Voir les projets
                </a>
              </div>
              
              <div className="flex space-x-2 ml-4">
                <a 
                  href="https://www.linkedin.com/in/alexandre-parent-b79259175" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-primary-500/20 rounded-lg"
                >
                  <FaLinkedin className="text-2xl text-primary-800" />
                </a>
                <a 
                  href="https://github.com/Alexandre-Parent" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-primary-500/20 rounded-lg"
                >
                  <FaGithub className="text-2xl text-primary-800" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }