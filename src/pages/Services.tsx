import { Wrench, GraduationCap, Code, Headphones, Shield, Server, Monitor, Database, Cloud } from 'lucide-react';
import { Layout } from '@/components/Layout';

const services = [
  {
    icon: Wrench,
    title: 'Maintenance Informatique',
    description: 'Service complet de maintenance préventive et corrective pour vos équipements informatiques.',
    features: ['Diagnostic et réparation', 'Maintenance préventive', 'Mise à jour systèmes', 'Optimisation performances'],
  },
  {
    icon: GraduationCap,
    title: 'Formation Professionnelle',
    description: 'Programmes de formation sur mesure pour développer les compétences techniques de vos équipes.',
    features: ['Formation bureautique', 'Développement web', 'Administration système', 'Certification IT'],
  },
  {
    icon: Code,
    title: 'Développement Web & Logiciel',
    description: 'Création de sites web, applications et logiciels personnalisés selon vos besoins.',
    features: ['Sites vitrine', 'Applications métier', 'E-commerce', 'API & intégrations'],
  },
  {
    icon: Headphones,
    title: 'Support Technique',
    description: 'Assistance technique réactive et professionnelle pour résoudre tous vos problèmes IT.',
    features: ['Support téléphonique', 'Intervention sur site', 'Télémaintenance', 'SLA garantis'],
  },
  {
    icon: Shield,
    title: 'Cybersécurité',
    description: 'Protection complète de vos systèmes et données contre les menaces informatiques.',
    features: ['Audit sécurité', 'Antivirus & firewall', 'Sauvegarde données', 'Plan de reprise'],
  },
  {
    icon: Server,
    title: 'Infrastructure Réseau',
    description: 'Conception, installation et maintenance d\'infrastructures réseau performantes.',
    features: ['Architecture réseau', 'Installation câblage', 'Configuration serveurs', 'Supervision 24/7'],
  },
  {
    icon: Monitor,
    title: 'Équipements IT',
    description: 'Fourniture et installation de matériel informatique de qualité.',
    features: ['Postes de travail', 'Serveurs', 'Périphériques', 'Accessoires'],
  },
  {
    icon: Database,
    title: 'Gestion de Données',
    description: 'Solutions de stockage, sauvegarde et gestion de vos données d\'entreprise.',
    features: ['Stockage cloud', 'Backup automatisé', 'Récupération données', 'Archivage'],
  },
  {
    icon: Cloud,
    title: 'Solutions Cloud',
    description: 'Migration et gestion de vos applications dans le cloud pour plus de flexibilité.',
    features: ['Migration cloud', 'Office 365', 'Hébergement', 'Solutions SaaS'],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-primary">
        <div className="container-custom text-center text-card">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl text-card/80 max-w-2xl mx-auto">
            Une gamme complète de services informatiques pour accompagner votre transformation digitale.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-elevated p-8"
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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
