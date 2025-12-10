import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, GraduationCap, Cog, Zap, Settings, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/Layout';
import heroBg from '@/assets/hero-bg.jpg';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const services = [
  {
    icon: Cog,
    title: 'Systèmes d\'Injection',
    description: 'Test et réparation des pompes et systèmes d\'injection mécaniques et électroniques.',
  },
  {
    icon: Truck,
    title: 'Engins Lourds',
    description: 'Maintenance préventive et corrective des engins lourds et équipements industriels.',
  },
  {
    icon: Zap,
    title: 'Groupes Électrogènes',
    description: 'Entretien et réparation de groupes électrogènes de toutes puissances.',
  },
  {
    icon: GraduationCap,
    title: 'Formation Technique',
    description: 'Programmes de formation en maintenance industrielle et conduite d\'engins.',
  },
  {
    icon: Settings,
    title: 'Diagnostic',
    description: 'Diagnostic en électricité, électronique, hydraulique et transmission.',
  },
  {
    icon: Wrench,
    title: 'Services Industriels',
    description: 'Prestation de services industriels complètes pour votre entreprise.',
  },
];

const projects = [
  { image: project1, title: 'Réparation Injecteurs', category: 'Injection' },
  { image: project2, title: 'Maintenance Moteurs', category: 'Engins Lourds' },
  { image: project3, title: 'Banc de Test', category: 'Équipements' },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <div className="relative z-10 container-custom text-center text-card py-32">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-8 animate-slide-up">
            <Wrench className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-sm font-medium">Maintenance & Formation Technique</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            STE MTF SARL<br />
            <span className="text-secondary">Expertise Industrielle</span>
          </h1>
          <p className="text-xl md:text-2xl text-card/80 max-w-4xl mx-auto mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Société Maintenance Technique et Formation spécialisée dans la maintenance industrielle, 
            la réparation de systèmes d'injection et la formation technique.
          </p>
          <p className="text-lg text-secondary font-medium mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
            Testez et réparez toutes vos pompes et systèmes d'injection mécaniques et électroniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button asChild variant="hero" size="lg">
              <Link to="/services">
                Découvrir nos services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Nos Expertises</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Services Professionnels</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une gamme complète de services techniques pour accompagner l'industrie camerounaise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-elevated p-8 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">
                Voir tous nos services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">À Propos</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Votre Partenaire Technique de Confiance
              </h2>
              <p className="text-muted-foreground mb-6">
                MTF SARL est née de l'initiative d'ingénieurs et techniciens expérimentés, unis pour offrir 
                des solutions techniques fiables à l'industrie camerounaise. Notre expertise couvre la maintenance 
                industrielle, les systèmes d'injection et la formation technique.
              </p>
              <p className="text-muted-foreground mb-8">
                Nous accompagnons les structures industrielles dans leur transition technologique avec rigueur 
                et efficacité. Notre vision : être le partenaire technique de référence en Afrique centrale.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-secondary">15+</div>
                  <div className="text-muted-foreground text-sm">Années d'expérience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">300+</div>
                  <div className="text-muted-foreground text-sm">Clients satisfaits</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">500+</div>
                  <div className="text-muted-foreground text-sm">Interventions</div>
                </div>
              </div>
              <Button asChild>
                <Link to="/a-propos">En savoir plus</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src={heroBg} alt="Équipe MTF SARL" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-secondary mb-1">100%</div>
                <div className="text-muted-foreground">Engagement qualité</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Nos Réalisations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos interventions récentes sur injecteurs, pompes et équipements industriels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-[4/3]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-secondary text-sm font-medium">{project.category}</span>
                  <h3 className="text-card text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/realisations">
                Voir toutes nos réalisations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />
        <div className="relative z-10 container-custom text-center text-card">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'une Expertise Technique ?
          </h2>
          <p className="text-xl text-card/80 max-w-2xl mx-auto mb-10">
            Contactez-nous pour discuter de vos besoins en maintenance industrielle, 
            réparation ou formation technique.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;