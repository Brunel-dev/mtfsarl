import { Cog, GraduationCap, Wrench, Zap, Settings, Truck, Gauge, Factory } from 'lucide-react';
import { Layout } from '@/components/Layout';

const services = [
  {
    icon: Cog,
    title: 'Systèmes d\'Injection',
    description: 'Test et réparation des pompes et systèmes d\'injection mécaniques et électroniques.',
    features: ['Pompes à injection', 'Injecteurs mécaniques', 'Injecteurs Common Rail', 'Bancs de test modernes'],
  },
  {
    icon: Truck,
    title: 'Engins Lourds',
    description: 'Maintenance préventive et corrective complète des engins lourds de chantier.',
    features: ['Pelles mécaniques', 'Bulldozers', 'Chargeuses', 'Camions de chantier'],
  },
  {
    icon: Zap,
    title: 'Groupes Électrogènes',
    description: 'Maintenance et réparation de groupes électrogènes de toutes puissances et marques.',
    features: ['Maintenance préventive', 'Réparation moteurs', 'Systèmes de contrôle', 'Mise en service'],
  },
  {
    icon: GraduationCap,
    title: 'Formation Technique',
    description: 'Programmes de formation professionnelle en maintenance et conduite d\'engins.',
    features: ['Maintenance industrielle', 'Conduite d\'engins', 'Systèmes d\'injection', 'Certification professionnelle'],
  },
  {
    icon: Settings,
    title: 'Diagnostic Technique',
    description: 'Diagnostic complet en électricité, électronique, hydraulique et transmission.',
    features: ['Diagnostic électrique', 'Diagnostic électronique', 'Diagnostic hydraulique', 'Diagnostic transmission'],
  },
  {
    icon: Factory,
    title: 'Services Industriels',
    description: 'Prestations de services industriels complètes pour entreprises et industries.',
    features: ['Maintenance sur site', 'Contrats de maintenance', 'Conseil technique', 'Optimisation process'],
  },
  {
    icon: Gauge,
    title: 'Bancs de Test',
    description: 'Équipements de test de haute précision pour pompes et injecteurs.',
    features: ['Tests de débit', 'Tests de pression', 'Calibration', 'Rapports d\'analyse'],
  },
  {
    icon: Wrench,
    title: 'Réparation Moteurs',
    description: 'Révision et réparation complète de moteurs diesel et industriels.',
    features: ['Révision complète', 'Remplacement pièces', 'Réglages moteur', 'Tests de performance'],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-primary">
        <div className="container-custom text-center text-card">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl text-card/80 max-w-3xl mx-auto">
            Une gamme complète de services techniques pour la maintenance industrielle, 
            les systèmes d'injection et la formation professionnelle.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-elevated p-8"
              >
                <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;