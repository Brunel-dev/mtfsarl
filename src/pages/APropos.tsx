import { Target, Eye, Heart, Users } from 'lucide-react';
import { Layout } from '@/components/Layout';
import heroBg from '@/assets/hero-bg.jpg';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Nous visons l\'excellence dans chaque projet, en dépassant les attentes de nos clients.',
  },
  {
    icon: Heart,
    title: 'Intégrité',
    description: 'Honnêteté et transparence guident toutes nos interactions professionnelles.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Nous travaillons main dans la main avec nos clients pour atteindre leurs objectifs.',
  },
  {
    icon: Eye,
    title: 'Innovation',
    description: 'Nous restons à la pointe de la technologie pour offrir les meilleures solutions.',
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
            Découvrez l'histoire et les valeurs qui font de DoualaTech votre partenaire technologique idéal.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Notre Histoire</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Une Passion pour la Technologie
              </h2>
              <p className="text-muted-foreground mb-6">
                Fondée en 2014 à Douala, DoualaTech est née de la vision de rendre les solutions informatiques 
                accessibles à toutes les entreprises camerounaises. Ce qui a commencé comme une petite équipe 
                passionnée s'est transformé en une entreprise de référence dans le secteur IT.
              </p>
              <p className="text-muted-foreground mb-6">
                Au fil des années, nous avons accompagné des centaines d'entreprises dans leur transformation 
                digitale, des PME locales aux grandes entreprises nationales. Notre expertise couvre aujourd'hui 
                tous les aspects des services informatiques.
              </p>
              <p className="text-muted-foreground">
                Notre équipe de plus de 20 professionnels certifiés travaille chaque jour pour offrir des 
                solutions innovantes et un service client d'exception.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={heroBg} alt="Équipe DoualaTech" className="w-full h-full object-cover" />
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
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
              <p className="text-muted-foreground">
                Accompagner les entreprises camerounaises dans leur transformation digitale en fournissant 
                des solutions informatiques innovantes, fiables et adaptées à leurs besoins spécifiques. 
                Nous nous engageons à démocratiser l'accès aux technologies de pointe.
              </p>
            </div>
            <div className="bg-card p-10 rounded-2xl">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
              <p className="text-muted-foreground">
                Devenir le leader des services informatiques en Afrique Centrale, reconnu pour son excellence, 
                son innovation et son engagement envers la satisfaction client. Nous aspirons à contribuer 
                au développement technologique du continent africain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Ce qui nous guide</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Nos Valeurs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
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
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-card/70">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-card/70">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <div className="text-card/70">Experts certifiés</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-card/70">Projets réalisés</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
