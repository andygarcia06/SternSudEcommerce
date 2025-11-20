import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#051d40] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stern Sud</h3>
            <p className="text-gray-300 text-sm mb-4">
              Votre spécialiste en électroménager neuf et reconditionné dans le Sud de la France.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#bf934b] transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#bf934b] transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#bf934b] transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#bf934b] transition-colors cursor-pointer">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/produits" className="text-gray-300 hover:text-[#bf934b] transition-colors cursor-pointer">
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link to="/qui-sommes-nous" className="text-gray-300 hover:text-[#bf934b] transition-colors cursor-pointer">
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link to="/reconditionnement" className="text-gray-300 hover:text-[#bf934b] transition-colors cursor-pointer">
                  Reconditionnement
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#bf934b] transition-colors cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Catégories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Catégories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#bf934b] transition-colors cursor-pointer">
                  Réfrigérateurs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#bf934b] transition-colors cursor-pointer">
                  Lave-linge
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#bf934b] transition-colors cursor-pointer">
                  Lave-vaisselle
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#bf934b] transition-colors cursor-pointer">
                  Fours
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#bf934b] transition-colors cursor-pointer">
                  Sèche-linge
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <i className="ri-map-pin-line text-[#bf934b] mt-1"></i>
                <span className="text-gray-300">Z.I. du Capitou<br />83370-83600</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="ri-phone-line text-[#bf934b]"></i>
                <a href="tel:+33667622057" className="text-gray-300 hover:text-[#bf934b] transition-colors cursor-pointer">
                  06 67 62 20 57
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <i className="ri-mail-line text-[#bf934b]"></i>
                <a href="mailto:contact@sternsud.fr" className="text-gray-300 hover:text-[#bf934b] transition-colors cursor-pointer">
                  contact@sternsud.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Stern Sud. Tous droits réservés. réalisation de Kyntra studio  |</p>
        </div>
      </div>
    </footer>
  );
}
