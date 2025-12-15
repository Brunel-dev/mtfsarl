import { Target, Eye, Shield, Zap, Clock, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/Layout';
import heroBg from '@/assets/pompe_5.jpg';

const values = [
  {
    icon: Shield,
    title: 'Fiabilité',
    description: 'Des solutions techniques éprouvées et durables pour vos équipements industriels.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Technologies de pointe et méthodes modernes pour des résultats optimaux.',
  },
  {
    icon: CheckCircle,
    title: 'Respect des Normes',
    description: 'Conformité stricte aux standards internationaux de qualité et sécurité.',
  },
  {
    icon: Clock,
    title: 'Réactivité',
    description: 'Intervention rapide et efficace pour minimiser vos temps d\'arrêt.',
  },
];

const APropos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-primary">
        <div className="container-custom text-center text-card">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Nous</h1>
          <p className="text-xl text-card/80 max-w-2xl mx-auto">
            Découvrez l'histoire et les valeurs qui font de STE MTF SARL votre partenaire technique de confiance.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Notre Histoire</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Une Expertise Née de l'Expérience
              </h2>
              <p className="text-muted-foreground mb-6">
                MTF SARL est née de l'initiative d'ingénieurs et techniciens expérimentés, unis pour offrir 
                des solutions techniques fiables à l'industrie camerounaise. Notre équipe cumule des décennies 
                d'expérience dans la maintenance industrielle et les systèmes d'injection.
              </p>
              <p className="text-muted-foreground mb-6">
                Au fil des années, nous avons accompagné de nombreuses entreprises dans leurs défis techniques, 
                des PME locales aux grandes industries nationales. Notre expertise couvre aujourd'hui tous les 
                aspects de la maintenance technique et de la formation professionnelle.
              </p>
              <p className="text-muted-foreground">
                Installés à Douala, au cœur du poumon économique du Cameroun, nous intervenons sur l'ensemble 
                du territoire national et dans la sous-région Afrique centrale.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={heroBg} alt="Équipe MTF SARL" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-10 rounded-2xl">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
              <p className="text-muted-foreground">
                Accompagner les structures industrielles dans leur transition technologique avec rigueur 
                et efficacité. Nous nous engageons à fournir des solutions techniques fiables, des formations 
                de qualité et un service client d'excellence.
              </p>
            </div>
            <div className="bg-card p-10 rounded-2xl">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
              <p className="text-muted-foreground">
                Être le partenaire technique de référence en Afrique centrale. Nous aspirons à contribuer 
                au développement industriel du continent en apportant notre expertise et en formant les 
                techniciens de demain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Ce qui nous guide</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Nos Valeurs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 gradient-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-card">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-card/70">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">300+</div>
              <div className="text-card/70">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-card/70">Techniciens experts</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-card/70">Interventions réalisées</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;