import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import logoMtf from '@/assets/logo.jpg';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logoMtf} alt="MTF Sarl Logo" className="h-16 w-auto" />
            </div>
            <p className="text-background/70 mb-6">
              Maintenance industrielle, réparation de systèmes d'injection diesel et formation technique au Cameroun.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1D8DiwbMjQ/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/237696168929" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-[#25D366] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {['Accueil', 'Services', 'À Propos', 'Réalisations', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Accueil' ? '/' : `/${item.toLowerCase().replace(' ', '-').replace('à', 'a')}`}
                    className="text-background/70 hover:text-secondary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {['Systèmes d\'Injection Diesel', 'Engins Lourds', 'Formation Technique', 'Diagnostic Industriel'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-background/70 hover:text-secondary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  50m du carrefour Conquête<br />
                  BP: 13079 Douala-Cameroun
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+237654873282" className="text-background/70 hover:text-secondary transition-colors">
                  +237 654 87 32 82
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:mtfsarl1@gmail.com" className="text-background/70 hover:text-secondary transition-colors">
                  mtfsarl1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/50">
          <p>&copy; {new Date().getFullYear()} STE MTF SARL. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}