const projects = [
  {
    id: 1,
    title: 'Andros',
    description: "Andros est un site vitrine conçu avec WordPress, combinant une interface dynamique via Node.js et TypeScript et des personnalisations backend en PHP/Twig pour une gestion optimisée des contenus pour permettre le consommateur à trouver ses produits chez un distributeur proche",
    image: '/img/projets/andros.png',
    technologies: ['Wordpress', 'Nodejs', 'PHP', 'Twig', 'TypeScript'],
    // githubLink: 'https://github.com/Alexandre-Parent/portfolio',
    liveLink: 'https://www.andros.fr/',
    category: 'Vitrine',
    development: 'Front-end'

  },
  {
    id: 2,
    title: 'Loulou de saison',
    description: 'Loulou de saison est une plateforme e-commerce conçue avec Prestashop et PHP, soutenue par une base MySQL, optimisée pour supporter un fort trafic international lors des lancements de nouveautés saisonnières, tout en garantissant une expérience utilisateur fluide et scalable.',
    image: '/img/projets/loulou.png',
    technologies: ['Prestashop', 'PHP', 'Stripe', 'Paypal', 'MySQL'],
    // githubLink: 'https://github.com/Alexandre-Parent/ecommerce-project',
    liveLink: 'https://louloudesaison.com/fr/',
    category: 'E-commerce',
    development: 'FullStack'
  },
  {
    id: 3,
    title: 'Perfguardian',
    description: 'Perfguardian est un projet de fin d\'etudes qui permet d\'analyser les performances d\'applications web.',
    image: '/img/projets/perfguardian.png',
    technologies: ['Next.js', 'JWT', 'TypeScript','MongoDB','Jest', 'CRON'],
    githubLink: 'https://github.com/Alexandre-Parent/perf-guardian',
    liveLink: 'https://perf-guardian.vercel.app/login',
    category: 'Projet',
    development: 'FullStack'

  },
  {
    id: 4,
    title: 'Les terres de Natae',
    description: "Les terres de Natae est un site vitrine conçu avec WordPress, enrichi par des personnalisations PHP et Twig pour une gestion avancée des templates, dynamisé par jQuery et TypeScript pour l'interactivité frontend, structuré avec ACF pour une administration de contenu flexible.",
    image: '/img/projets/natae.png',
    technologies: ['Wordpress', 'PHP', 'Twig', 'jQuery', 'ACF', 'TypeScript'],
    // githubLink: 'https://github.com/Alexandre-Parent/blog',
      liveLink: 'https://www.lesterresdenatae.fr/',
    category: 'Vitrine',
    development: 'Front-end'
  },
  {
    id: 5,
    title: 'Blog React TS',
    description: "Blog React TS est une application de blog personnel développent avec React et TypeScript, intégrant un backend Express et une base de données MongoDB pour la gestion des contenus, ainsi que Firebase pour des fonctionnalités d'authentification ou de stockage, illustrant une stack technique moderne et full-stack.",
    image: '/img/projets/reactblog.png',
    technologies: ['React', 'MongoDB', 'TypeScript','Firebase','Express'],
    githubLink: 'https://github.com/Alexandre-Parent/React-blog',
    // liveLink: 'https://blog-demo.com',
    category: 'Projet',
    development: 'Fullstack'
  },
];

export default projects;