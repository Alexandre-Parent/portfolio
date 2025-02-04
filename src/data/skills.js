import { 
    // Langages
    SiJavascript, 
    SiTypescript, 
    SiPhp, 
    
    SiPython 
  } from 'react-icons/si';
  
  import { 
    // Frameworks
    SiVuedotjs, 
    SiReact,
    SiNodedotjs,  
    SiExpress, 
    SiDocker, 
    SiDjango 
  } from 'react-icons/si';
  
  import { 
    // CMS
    SiWordpress, 
    SiStrapi, 
    SiDirectus, 
    SiDrupal, 
    SiPrestashop 
  } from 'react-icons/si';
  
  import { 
    // Design & Tools
    SiAdobephotoshop, 
    SiFigma, 
    SiGoogleanalytics 
  } from 'react-icons/si';
  
  export const skillCategories = [
    {
      category: "Langages",
      skills: [
        { 
          name: "JavaScript", 
          icon: SiJavascript, 
          color: "#F7DF1E" 
        },
        { 
          name: "TypeScript", 
          icon: SiTypescript, 
          color: "#3178C6" 
        },
        { 
          name: "PHP", 
          icon: SiPhp, 
          color: "#777BB3" 
        },
       
        { 
          name: "Python", 
          icon: SiPython, 
          color: "#3776AB" 
        }
      ]
    },
    {
      category: "Frameworks et Outils",
      skills: [
        { 
          name: "VueJS", 
          icon: SiVuedotjs, 
          color: "#4FC08D" 
        },
        { 
          name: "ReactJS", 
          icon: SiReact, 
          color: "#61DAFB" 
        },
        { 
            name: "NodeJS", 
            icon: SiNodedotjs, 
            color: "#339933" 
          },
        { 
          name: "ExpressJS", 
          icon: SiExpress, 
          color: "#000000" 
        },
        { 
          name: "Docker", 
          icon: SiDocker, 
          color: "#2496ED" 
        },
        { 
          name: "Django", 
          icon: SiDjango, 
          color: "#092E20" 
        }
      ]
    },
    {
      category: "CMS",
      skills: [
        { 
          name: "Wordpress", 
          icon: SiWordpress, 
          color: "#21759B" 
        },
        { 
          name: "Strapi", 
          icon: SiStrapi, 
          color: "#4945FF" 
        },
        { 
          name: "Directus", 
          icon: SiDirectus, 
          color: "#2F80ED" 
        },
        { 
          name: "Drupal", 
          icon: SiDrupal, 
          color: "#0077C0" 
        },
        { 
          name: "Prestashop", 
          icon: SiPrestashop, 
          color: "#DF0067" 
        }
      ]
    },
    {
      category: "Outils",
      skills: [
        { 
          name: "Photoshop", 
          icon: SiAdobephotoshop, 
          color: "#31A8FF" 
        },
        { 
          name: "Figma", 
          icon: SiFigma, 
          color: "#F24E1E" 
        },
        { 
          name: "Google Analytics", 
          icon: SiGoogleanalytics, 
          color: "#E37400" 
        }
      ]
    }
  ];