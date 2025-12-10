import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, GraduationCap, Code, Headphones, Shield, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/Layout';
import heroBg from '@/assets/hero-bg.jpg';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const services = [
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Entretien et réparation de vos équipements informatiques avec rapidité et efficacité.',
  },
  {
    icon: GraduationCap,
    title: 'Formation',
    description: 'Programmes de formation adaptés pour développer les compétences de votre équipe.',
  },
  {
    icon: Code,
    title: 'Développement',
    description: 'Création de solutions web et logiciels sur mesure pour votre entreprise.',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Assistance technique réactive disponible pour résoudre vos problèmes IT.',
  },
  {
    icon: Shield,
    title: 'Sécurité',
    description: 'Protection de vos données et systèmes contre les menaces informatiques.',
  },
  {
    icon: Server,
    title: 'Infrastructure',
    description: 'Conception et mise en place d\'infrastructures réseau performantes.',
  },
];

const projects = [
  { image: project1, title: 'Infrastructure Serveur', category: 'Infrastructure' },
  { image: project2, title: 'Formation Entreprise', category: 'Formation' },
  { image: project3, title: 'Data Center', category: 'Infrastructure' },
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Solutions Technologiques<br />
            <span className="text-primary-foreground/80">Pour Votre Succès</span>
          </h1>
          <p className="text-xl md:text-2xl text-card/80 max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            DoualaTech, votre partenaire de confiance pour tous vos besoins informatiques à Douala. 
            Innovation, expertise et service client d'excellence.
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
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Nos Expertises</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Services Professionnels</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une gamme complète de services informatiques pour accompagner la croissance de votre entreprise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-elevated p-8 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
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
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">À Propos</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Votre Partenaire Technologique de Confiance
              </h2>
              <p className="text-muted-foreground mb-6">
                Depuis notre création, DoualaTech s'est imposé comme un acteur majeur des services informatiques à Douala. 
                Notre équipe de professionnels passionnés s'engage à fournir des solutions innovantes et adaptées aux besoins 
                spécifiques de chaque client.
              </p>
              <p className="text-muted-foreground mb-8">
                Nous croyons en l'importance de la technologie comme moteur de croissance pour les entreprises camerounaises. 
                Notre mission est de démocratiser l'accès aux solutions IT de qualité.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-muted-foreground text-sm">Années d'expérience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground text-sm">Clients satisfaits</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-muted-foreground text-sm">Projets réalisés</div>
                </div>
              </div>
              <Button asChild>
                <Link to="/a-propos">En savoir plus</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src={heroBg} alt="Équipe DoualaTech" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-primary mb-1">100%</div>
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
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Nos Réalisations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets récents qui témoignent de notre expertise.
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
                  <span className="text-primary-light text-sm font-medium">{project.category}</span>
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
            Prêt à Transformer Votre Entreprise ?
          </h2>
          <p className="text-xl text-card/80 max-w-2xl mx-auto mb-10">
            Contactez-nous dès aujourd'hui pour discuter de vos projets et découvrir comment nous pouvons vous aider.
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
