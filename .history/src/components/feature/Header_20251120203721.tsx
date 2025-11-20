
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
<Link to="/" className="flex items-center">
  <img
    src="/logo.png"
    alt="Stern Sud Transport & Logistique"
    className="h-14 w-auto"
  />
</Link>



          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#051d40] font-medium transition-colors cursor-pointer"
            >
              Accueil
            </Link>
            <Link
              to="/produits"
              className="text-gray-700 hover:text-[#051d40] font-medium transition-colors cursor-pointer"
            >
              Nos Produits
            </Link>
            <Link
              to="/qui-sommes-nous"
              className="text-gray-700 hover:text-[#051d40] font-medium transition-colors cursor-pointer"
            >
              Qui sommes-nous
            </Link>
            <Link
              to="/reconditionnement"
              className="text-gray-700 hover:text-[#051d40] font-medium transition-colors cursor-pointer"
            >
              Reconditionnement
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-[#051d40] font-medium transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </nav>

          {/* Contact rapide */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+33667622057"
              className="flex items-center space-x-2 text-[#051d40] hover:text-[#bf934b] transition-colors cursor-pointer"
            >
              <i className="ri-phone-fill text-xl"></i>
              <span className="font-semibold">06 67 62 20 57</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
