import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { cn } from '@/lib/utils';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const categories = ['Tous', 'Injection', 'Engins', 'Électrogènes', 'Formation'];

const projects = [
  { image: project1, title: 'Réparation Injecteurs Common Rail', category: 'Injection', description: 'Diagnostic et réparation complète d\'injecteurs Common Rail pour flotte de camions.' },
  { image: project2, title: 'Révision Pompe d\'Injection', category: 'Injection', description: 'Révision complète d\'une pompe à injection mécanique Bosch.' },
  { image: project3, title: 'Maintenance Pelle CAT', category: 'Engins', description: 'Maintenance préventive et corrective d\'une pelle hydraulique Caterpillar.' },
  { image: project1, title: 'Banc de Test Injecteurs', category: 'Injection', description: 'Installation et calibration d\'un banc de test haute précision.' },
  { image: project2, title: 'Formation Techniciens', category: 'Formation', description: 'Formation de 20 techniciens aux systèmes d\'injection électronique.' },
  { image: project3, title: 'Groupe Électrogène 500kVA', category: 'Électrogènes', description: 'Révision complète d\'un groupe électrogène industriel.' },
  { image: project1, title: 'Diagnostic Bulldozer', category: 'Engins', description: 'Diagnostic complet et réparation du système hydraulique.' },
  { image: project2, title: 'Formation Conducteurs', category: 'Formation', description: 'Formation à la conduite d\'engins lourds avec certification.' },
  { image: project3, title: 'Maintenance Préventive', category: 'Électrogènes', description: 'Contrat de maintenance préventive pour parc de 10 groupes.' },
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
            Découvrez nos interventions récentes sur injecteurs, pompes, moteurs et équipements industriels.
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
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-secondary/10"
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
                  <span className="text-secondary text-sm font-medium">{project.category}</span>
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