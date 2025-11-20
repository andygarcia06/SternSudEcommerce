import { Link } from 'react-router-dom';
import { categories } from '../../mocks/products';
import { products } from '../../mocks/products';
import ProductGrid from '../../components/feature/ProductGrid';

export default function HomePage() {
  const displayedProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-screen flex items-center"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=professional%20modern%20appliance%20showroom%20with%20premium%20stainless%20steel%20refrigerators%20washing%20machines%20and%20dryers%20displayed%20in%20bright%20clean%20environment%20with%20natural%20lighting%20contemporary%20interior%20design%20high-end%20home%20appliances%20store&width=1920&height=1080&seq=hero-premium&orientation=landscape)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#051d40]/90 to-[#051d40]/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#bf934b] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              <i className="ri-verified-badge-fill mr-2"></i>
              Spécialiste du Gros Électroménager
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Stern Sud Électroménager
            </h1>
            <p className="text-2xl text-white/95 mb-8 leading-relaxed">
              Réfrigérateurs, lave-linge, lave-vaisselle et fours. Qualité premium à prix accessible.
            </p>
            <div className="flex space-x-4">
              <Link to="/produits">
                <button className="bg-[#bf934b] text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-[#bf934b]/90 transition-colors cursor-pointer whitespace-nowrap shadow-xl">
                  Découvrir nos produits
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-white text-[#051d40] px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap shadow-xl">
                  Nous contacter
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Catégories de Produits</h2>
          <p className="text-xl text-gray-600">Électroménager de grandes marques</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/produits?category=${category.id}`}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-[#051d40]"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#051d40] to-[#051d40]/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className={`${category.icon} text-4xl text-white`}></i>
              </div>
              <h3 className="text-center font-bold text-gray-900 text-lg">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Avantages */}
      <section className="bg-gradient-to-br from-[#051d40] to-[#051d40]/90 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Pourquoi Choisir Stern Sud ?</h2>
            <p className="text-xl text-white/80">Notre engagement qualité pour votre satisfaction</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="w-20 h-20 bg-[#bf934b] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className="ri-shield-check-line text-4xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Garantie Qualité</h3>
              <p className="text-white/90 text-lg">Tous nos appareils sont garantis pour votre tranquillité</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="w-20 h-20 bg-[#bf934b] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className="ri-tools-line text-4xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Service Professionnel</h3>
              <p className="text-white/90 text-lg">Chaque appareil est testé et vérifié par nos techniciens qualifiés</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="w-20 h-20 bg-[#bf934b] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className="ri-price-tag-3-line text-4xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Prix Compétitifs</h3>
              <p className="text-white/90 text-lg">Les meilleurs prix sans compromis sur la qualité</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services : Livraison et Réparations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600">Pour vous accompagner au quotidien</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Livraison */}
          <div className="bg-gradient-to-br from-[#bf934b] to-[#a67d3d] rounded-3xl p-10 text-white shadow-2xl">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <i className="ri-truck-line text-5xl text-white"></i>
            </div>
            <h3 className="text-3xl font-bold mb-4">Livraison à Domicile</h3>
            <p className="text-xl text-white/95 mb-6 leading-relaxed">
              Profitez de notre service de livraison pour recevoir votre électroménager directement chez vous. Installation et mise en service disponibles sur demande.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <i className="ri-checkbox-circle-fill text-2xl mr-3 mt-1"></i>
                <span className="text-lg">Livraison rapide dans toute la région</span>
              </li>
              <li className="flex items-start">
                <i className="ri-checkbox-circle-fill text-2xl mr-3 mt-1"></i>
                <span className="text-lg">Installation professionnelle possible</span>
              </li>
              <li className="flex items-start">
                <i className="ri-checkbox-circle-fill text-2xl mr-3 mt-1"></i>
                <span className="text-lg">Reprise de votre ancien appareil</span>
              </li>
            </ul>
            <Link to="/contact">
              <button className="bg-white text-[#bf934b] px-8 py-3 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap shadow-xl">
                Demander un devis
              </button>
            </Link>
          </div>

          {/* Réparations */}
          <div className="bg-gradient-to-br from-[#051d40] to-[#051d40]/90 rounded-3xl p-10 text-white shadow-2xl">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <i className="ri-tools-fill text-5xl text-white"></i>
            </div>
            <h3 className="text-3xl font-bold mb-4">Service de Réparation</h3>
            <p className="text-xl text-white/95 mb-6 leading-relaxed">
              Notre atelier assure la réparation de tous types d'électroménager. Diagnostic gratuit et devis transparent avant toute intervention.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <i className="ri-checkbox-circle-fill text-2xl mr-3 mt-1 text-[#bf934b]"></i>
                <span className="text-lg">Techniciens qualifiés et expérimentés</span>
              </li>
              <li className="flex items-start">
                <i className="ri-checkbox-circle-fill text-2xl mr-3 mt-1 text-[#bf934b]"></i>
                <span className="text-lg">Pièces détachées d'origine</span>
              </li>
              <li className="flex items-start">
                <i className="ri-checkbox-circle-fill text-2xl mr-3 mt-1 text-[#bf934b]"></i>
                <span className="text-lg">Garantie sur les réparations</span>
              </li>
            </ul>
            <Link to="/contact">
              <button className="bg-[#bf934b] text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-[#bf934b]/90 transition-colors cursor-pointer whitespace-nowrap shadow-xl">
                Prendre rendez-vous
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Produits mis en avant */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Meilleures Offres du Moment</h2>
          <p className="text-xl text-gray-600">Sélection d'appareils de qualité</p>
        </div>
        <ProductGrid products={displayedProducts} />
        <div className="text-center mt-12">
          <Link to="/produits">
            <button className="bg-[#051d40] text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-[#051d40]/90 cursor-pointer whitespace-nowrap shadow-lg">
              Voir tous nos produits <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </Link>
        </div>
      </section>

      {/* Processus */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Processus de Qualité</h2>
            <p className="text-xl text-gray-600">Un contrôle qualité rigoureux en 4 étapes</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#051d40]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#051d40]">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Diagnostic</h3>
              <p className="text-gray-600">Test complet de toutes les fonctions de l'appareil</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#051d40]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#051d40]">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vérification</h3>
              <p className="text-gray-600">Contrôle des pièces et des composants</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#051d40]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#051d40]">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nettoyage</h3>
              <p className="text-gray-600">Nettoyage professionnel intérieur et extérieur</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#051d40]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#051d40]">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contrôle Final</h3>
              <p className="text-gray-600">Vérification complète avant mise en vente</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#bf934b] to-[#bf934b]/90 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Prêt à Équiper Votre Maison ?
          </h2>
          <p className="text-2xl text-white/95 mb-10 max-w-3xl mx-auto">
            Découvrez notre sélection d'électroménager. Qualité garantie, prix compétitifs.
          </p>
          <Link to="/produits">
            <button className="bg-white text-[#bf934b] px-12 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap shadow-2xl">
              Voir tous nos produits
            </button>
          </Link>
        </div>
      </section>

      {/* Témoignages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Avis de Nos Clients</h2>
          <p className="text-xl text-gray-600">Ils nous font confiance</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#051d40]">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-[#bf934b] text-xl"></i>
              ))}
            </div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              "Excellent service ! J'ai acheté un réfrigérateur Samsung. L'appareil est comme neuf et fonctionne parfaitement. Très satisfait du rapport qualité-prix."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#051d40]/10 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-[#051d40] text-lg">JM</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Jean Martin</p>
                <p className="text-sm text-gray-500">Marseille</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#051d40]">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-[#bf934b] text-xl"></i>
              ))}
            </div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              "Très professionnel. Le lave-linge Bosch que j'ai acheté fonctionne à merveille. Service sérieux et de qualité. Je recommande vivement !"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#bf934b]/20 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-[#bf934b] text-lg">CB</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Claire Bernard</p>
                <p className="text-sm text-gray-500">Nice</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#051d40]">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-[#bf934b] text-xl"></i>
              ))}
            </div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              "Super expérience ! Les appareils sont vraiment de qualité. J'ai économisé beaucoup par rapport au neuf. Service sérieux et professionnel."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#051d40]/10 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-[#051d40] text-lg">PL</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Pierre Lefebvre</p>
                <p className="text-sm text-gray-500">Toulon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}