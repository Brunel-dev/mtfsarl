import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { cn } from '@/lib/utils';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const categories = ['Tous', 'Infrastructure', 'Formation', 'Développement', 'Maintenance'];

const projects = [
  { image: project1, title: 'Installation Data Center', category: 'Infrastructure', description: 'Mise en place d\'un data center complet pour une entreprise de télécommunications.' },
  { image: project2, title: 'Formation Bureautique', category: 'Formation', description: 'Programme de formation Office 365 pour 50 employés d\'une banque.' },
  { image: project3, title: 'Infrastructure Réseau', category: 'Infrastructure', description: 'Déploiement d\'une infrastructure réseau pour un immeuble de bureaux.' },
  { image: project1, title: 'Maintenance Préventive', category: 'Maintenance', description: 'Contrat de maintenance pour un parc de 200 ordinateurs.' },
  { image: project2, title: 'Formation Développement', category: 'Formation', description: 'Formation intensive en développement web pour une équipe IT.' },
  { image: project3, title: 'Site E-commerce', category: 'Développement', description: 'Création d\'une plateforme e-commerce pour une chaîne de distribution.' },
  { image: project1, title: 'Serveur d\'Entreprise', category: 'Infrastructure', description: 'Installation et configuration d\'un serveur haute disponibilité.' },
  { image: project2, title: 'Formation Cybersécurité', category: 'Formation', description: 'Sensibilisation à la sécurité informatique pour 100 employés.' },
  { image: project3, title: 'Application Métier', category: 'Développement', description: 'Développement d\'une application de gestion sur mesure.' },
];

const Realisations = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProjects = activeCategory === 'Tous'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-primary">
        <div className="container-custom text-center text-card">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Réalisations</h1>
          <p className="text-xl text-card/80 max-w-2xl mx-auto">
            Découvrez nos projets récents et l'impact de notre expertise sur les entreprises camerounaises.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group card-elevated overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-1 mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Realisations;
