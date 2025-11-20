
import { Link } from 'react-router-dom';

export default function ReconditioningPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[400px] flex items-center"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=professional%20appliance%20reconditioning%20workshop%20with%20technician%20inspecting%20and%20repairing%20stainless%20steel%20refrigerator%20modern%20clean%20facility%20with%20diagnostic%20tools%20quality%20control%20environment%20bright%20lighting&width=1920&height=400&seq=recon-hero&orientation=landscape)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-5xl font-bold text-white mb-4">Notre Processus de Reconditionnement</h1>
          <p className="text-2xl text-white/90">Un contrôle qualité rigoureux pour des appareils comme neufs</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Reconditionné ou Neuf : Notre Engagement Qualité</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Chez <strong className="text-blue-900">Service Premium Sud</strong>, nous proposons du gros électroménager <strong>reconditionné</strong> et <strong>neuf</strong> (déstockage, fins de série). Chaque appareil, qu'il soit reconditionné ou neuf, passe par notre processus de contrôle qualité avant d'être mis en vente.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Notre objectif : vous offrir des appareils en <strong>excellent état de fonctionnement</strong> avec une <strong>garantie 12 mois</strong>, à des prix bien inférieurs au marché du neuf.
          </p>
        </div>
      </section>

      {/* Les 4 Étapes */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Les 4 Étapes de Notre Reconditionnement</h2>
            <p className="text-xl text-gray-600">Un processus professionnel et rigoureux</p>
          </div>

          <div className="space-y-16">
            {/* Étape 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Diagnostic Complet</h3>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Chaque appareil est soumis à un <strong>diagnostic approfondi</strong> par nos techniciens qualifiés. Nous testons toutes les fonctions :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-blue-900 text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Cycles de lavage/séchage complets</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-blue-900 text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Système de refroidissement et thermostat</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-blue-900 text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Électronique et programmation</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-blue-900 text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Niveau sonore et vibrations</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20technician%20using%20diagnostic%20tools%20to%20test%20washing%20machine%20electronic%20control%20panel%20modern%20workshop%20environment%20quality%20inspection%20detailed%20work%20bright%20lighting&width=600&height=500&seq=recon1&orientation=portrait"
                  alt="Diagnostic"
                  className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
                />
              </div>
            </div>

            {/* Étape 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://readdy.ai/api/search-image?query=technician%20replacing%20parts%20and%20repairing%20refrigerator%20compressor%20in%20professional%20workshop%20with%20tools%20and%20spare%20parts%20quality%20repair%20work%20clean%20environment%20bright%20lighting&width=600&height=500&seq=recon2&orientation=portrait"
                  alt="Réparation"
                  className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#bf934b] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Réparation et Remplacement</h3>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Si des défauts sont détectés, nous procédons aux <strong>réparations nécessaires</strong> avec des <strong>pièces d'origine</strong> ou de qualité équivalente :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#bf934b] text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Remplacement des joints et filtres</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#bf934b] text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Réparation des circuits électroniques</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#bf934b] text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Changement des pièces d'usure</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#bf934b] text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Réglages et calibrations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Nettoyage Professionnel</h3>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Un <strong>nettoyage en profondeur</strong> est effectué pour que l'appareil retrouve son aspect d'origine :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-blue-900 text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Nettoyage intérieur complet (tambour, cuve, compartiments)</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-blue-900 text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Polissage et nettoyage extérieur</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-blue-900 text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Désinfection et désodorisation</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-blue-900 text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Nettoyage des filtres et conduits</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=technician%20cleaning%20and%20polishing%20stainless%20steel%20refrigerator%20exterior%20professional%20detailing%20work%20clean%20workshop%20environment%20bright%20lighting%20quality%20finish&width=600&height=500&seq=recon3&orientation=portrait"
                  alt="Nettoyage"
                  className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
                />
              </div>
            </div>

            {/* Étape 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://readdy.ai/api/search-image?query=quality%20control%20inspector%20checking%20washing%20machine%20with%20checklist%20and%20testing%20equipment%20final%20inspection%20professional%20workshop%20environment%20bright%20lighting%20certification%20process&width=600&height=500&seq=recon4&orientation=portrait"
                  alt="Contrôle final"
                  className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#bf934b] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">4</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Contrôle Final</h3>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Avant la mise en vente, un <strong>contrôle qualité final</strong> est réalisé pour garantir le bon fonctionnement :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#bf934b] text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Test de tous les programmes et fonctions</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#bf934b] text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Vérification de la consommation énergétique</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#bf934b] text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Contrôle de sécurité électrique</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#bf934b] text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">Validation par notre chef d'atelier</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* États des produits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Classification de l'État de Nos Produits</h2>
          <p className="text-xl text-gray-600">Transparence totale sur l'état de chaque appareil</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-900">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-star-fill text-3xl text-blue-900"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Comme Neuf</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Appareil en état impeccable, aucune trace d'usure visible. Fonctionne parfaitement. Peut être un produit neuf déstocké ou un appareil très peu utilisé.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#bf934b]">
            <div className="w-16 h-16 bg-[#bf934b]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-star-half-fill text-3xl text-[#bf934b]"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Excellent État</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Appareil en très bon état avec possibles micro-rayures non visibles à distance. Fonctionne parfaitement. Le meilleur rapport qualité-prix.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-gray-400">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-star-line text-3xl text-gray-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Très Bon État</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Appareil avec quelques traces d'usage visibles mais en parfait état de fonctionnement. Idéal pour les petits budgets.
            </p>
          </div>
        </div>
      </section>

      {/* Garantie */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Notre Garantie 12 Mois</h2>
            <p className="text-xl text-blue-100">Votre tranquillité d'esprit assurée</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-3xl text-blue-900"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pièces et Main d'Œuvre</h3>
              <p className="text-blue-50 text-lg leading-relaxed">
                Tous nos appareils sont garantis 12 mois pièces et main d'œuvre. En cas de panne, nous intervenons rapidement pour réparer ou remplacer l'appareil.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                <i className="ri-customer-service-2-line text-3xl text-blue-900"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Service Client Réactif</h3>
              <p className="text-blue-50 text-lg leading-relaxed">
                Notre équipe est à votre écoute pour toute question ou problème. Nous nous engageons à vous répondre sous 24h et à intervenir rapidement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-[#bf934b] to-[#a67d3d] rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Convaincu par Notre Processus ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez notre sélection d'appareils neufs et reconditionnés avec garantie 12 mois.
          </p>
          <Link to="/produits">
            <button className="bg-white text-[#bf934b] px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap shadow-xl">
              Voir nos produits
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
