import React from 'react';

function generateCircleText(text = '', repeat = 2) {
  return Array(repeat).fill(text).join('').split('');
}

const AboutSection = () => {
  const characters = generateCircleText('Télécharger mon CV  ', 2);
  const radius = 50;

  return (
    <section className="relative bg-white py-24 w-full" aria-labelledby="about-section-title">
      <div className="w-full grid md:grid-cols-2 gap-8 px-4 max-w-7xl mx-auto">
        
        {/* Colonne gauche - Photo */}
        <div className="relative md:h-[700px]">
          <div 
            className="absolute top-1/4 -left-8 w-48 h-48 bg-gray-50/20 transform -rotate-12 z-0"
            aria-hidden="true"
          />

          <div className="relative h-full overflow-visible">
            <div 
              className="relative z-10 h-full rounded-xl overflow-visible border-8 border-white" 
              style={{ 
                maxWidth: '455px', 
                maxHeight: '560px'
              }}
            >
              <img
                src="/portrait.jpg"
                alt="Alexandre Parent, développeur full-stack"
                className="w-full h-full object-cover grayscale contrast-110"
                loading="lazy"
              />
              
              {/* Carré superposé à gauche */}
              <div 
                className="absolute bg-[#b0003a] z-20"
                style={{
                  width: '91px',
                  height: '91px',
                  top: '70px',
                  left: '-45px',
                  position: 'absolute'
                }}
              />

              {/* Carré blanc à droite */}
              <div 
                className="absolute bg-white z-30"
                style={{
                  content: '""',
                  width: '65px',
                  height: '65px',
                  right: '-9%',
                  top: '137px',
                  transform: 'rotate(42deg)',
                  zIndex: 11
                }}
              />

              {/* Rectangle gris en bas à droite */}
              <div 
                className="absolute bg-gray-300 z-20"
                style={{
                  content: '""',
                  width: '45px',
                  height: '64px',
                  right: '55px',
                  bottom: '-32px',
                  position: 'absolute'
                }}
              />
              <div 
                className="absolute border-4 border-primary-500 z-[-1]"
                style={{
                  width: '133px',
                  height: '134px',
                  right: '-25px',
                  top: '-25px'
                }}
              />
                <a
              href="/cv-alexandre-parent.pdf"
              download="CV_Alexandre_Parent.pdf"
              className="absolute bottom-0 left-0 w-32 h-32 group z-20 block cursor-pointer"
              style={{
                bottom: '-50px',
                left: '-64px'
              }}
              aria-label="Télécharger le CV de Alexandre Parent"
            >
              <div className="relative w-full h-full bg-white rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 shadow-[2px_0px_11px_-3px_rgba(0,0,0,0.75)]">
                <div className="absolute inset-0 animate-rotate-slow">
                  {characters.map((char, index) => {
                    const angle = (index * 360) / characters.length;
                    const angleRad = (angle * Math.PI) / 180;
                    const x = radius * Math.cos(angleRad);
                    const y = radius * Math.sin(angleRad);

                    return (
                      <span
                        key={index}
                        className={`absolute text-[8px] font-bold uppercase ${
                          char === ' ' ? 'opacity-0' : 'text-black'
                        }`}
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `
                            translate(-50%, -50%)
                            translate(${x}px, ${y}px)
                            rotate(${angle + 90}deg)
                          `,
                          transformOrigin: 'center center'
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-[#b0003a] transition-transform group-hover:rotate-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
              </div>
            </a>
            </div>

          
          </div>
        </div>

        {/* Colonne droite - Contenu */}
        <div className="space-y-8">
          <h2 
            id="about-section-title"
            className="text-sm uppercase tracking-[0.3em] text-[#b0003a]"
          >
            À Propos
          </h2>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Je Développe des Systèmes
            <br />
            <span className="text-[#b0003a]">Qui Fonctionnent</span>
          </h1>

          <div className="space-y-6 text-gray-600 md:text-lg">
            <p>
              Développeur Full-Stack avec 5 ans d'expérience dans la création
              d'applications web performantes. Expertise en architecture cloud
              et solutions scalables.
            </p>
            <p>
              Passionné par l'innovation technologique et les bonnes pratiques,
              je transforme des concepts complexes en solutions logicielles
              robustes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <InfoItem label="Nom" value="Alexandre Parent" />
            <InfoItem label="Âge" value="29 Ans" />
            <InfoItem label="Poste" value="Développeur Full-Stack" />
            <InfoItem label="Téléphone" value="+33 6 12 34 56 78" />
            <InfoItem label="Email" value="contact@alex.dev" />
            <InfoItem label="Nationalité" value="Française" />
          </div>

          <div className="pt-8 border-t border-gray-200">
            <div className="flex items-end justify-end gap-4">
              <div className="font-handwriting text-3xl text-[#b0003a]">
                Alexandre Parent
              </div>
              <div className="text-sm text-gray-500">
                <span className="block">Software Architect</span>
                <span className="block">Google Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ label, value }) => (
  <div 
    className="flex justify-between items-center p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
    role="row"
  >
    <span className="text-gray-500">{label}</span>
    <span className="font-medium text-gray-800">{value}</span>
  </div>
);

export default AboutSection;