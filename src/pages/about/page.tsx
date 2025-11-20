
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[400px] flex items-center"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=professional%20appliance%20repair%20workshop%20with%20technicians%20working%20on%20refrigerators%20and%20washing%20machines%20modern%20clean%20facility%20with%20tools%20and%20equipment%20bright%20lighting%20quality%20service%20environment&width=1920&height=400&seq=about-hero&orientation=landscape)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-700/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-5xl font-bold text-white mb-4">Qui Sommes-Nous ?</h1>
          <p className="text-2xl text-white/90">Votre spécialiste du gros électroménager reconditionné dans le Sud</p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              <strong className="text-emerald-600">Service Premium Sud</strong> est né de la passion de professionnels de l'électroménager qui souhaitaient offrir une alternative qualitative et accessible aux appareils neufs.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Depuis notre création, nous nous sommes spécialisés exclusivement dans le <strong>gros électroménager reconditionné</strong> : réfrigérateurs, lave-linge, lave-vaisselle et sèche-linge des plus grandes marques.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Notre atelier situé dans le Sud de la France emploie des techniciens qualifiés qui reconditionnent chaque appareil avec le plus grand soin, garantissant ainsi une qualité irréprochable.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=professional%20technician%20repairing%20modern%20washing%20machine%20in%20clean%20workshop%20wearing%20uniform%20using%20tools%20quality%20service%20environment%20bright%20lighting%20detailed%20work&width=600&height=500&seq=about1&orientation=portrait"
              alt="Notre atelier"
              className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600">Ce qui nous guide au quotidien</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border-2 border-emerald-200">
              <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className="ri-shield-check-line text-4xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Qualité</h3>
              <p className="text-gray-700 text-lg">
                Chaque appareil est rigoureusement testé et reconditionné selon nos standards élevés. Nous ne faisons aucun compromis sur la qualité.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#bf934b]/10 to-[#bf934b]/20 rounded-2xl p-8 text-center border-2 border-[#bf934b]/30">
              <div className="w-20 h-20 bg-[#bf934b] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className="ri-hand-heart-line text-4xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Confiance</h3>
              <p className="text-gray-700 text-lg">
                Transparence totale sur l'état de nos produits et garantie 12 mois sur tous nos appareils pour votre tranquillité d'esprit.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border-2 border-emerald-200">
              <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className="ri-leaf-line text-4xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Écologie</h3>
              <p className="text-gray-700 text-lg">
                En donnant une seconde vie aux appareils, nous contribuons à réduire les déchets électroniques et l'impact environnemental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Expertise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img 
              src="https://readdy.ai/api/search-image?query=modern%20appliance%20testing%20facility%20with%20multiple%20refrigerators%20and%20washing%20machines%20being%20inspected%20professional%20quality%20control%20environment%20clean%20organized%20workspace%20bright%20lighting&width=600&height=500&seq=about2&orientation=portrait"
              alt="Notre expertise"
              className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Expertise</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-tools-line text-2xl text-emerald-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Techniciens Qualifiés</h3>
                  <p className="text-gray-700">
                    Notre équipe de techniciens possède plus de 15 ans d'expérience dans la réparation et le reconditionnement d'électroménager.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#bf934b]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-checkbox-circle-line text-2xl text-[#bf934b]"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Contrôle Qualité Rigoureux</h3>
                  <p className="text-gray-700">
                    Chaque appareil passe par un processus de contrôle en 4 étapes avant d'être mis en vente.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-star-line text-2xl text-emerald-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Grandes Marques</h3>
                  <p className="text-gray-700">
                    Nous travaillons exclusivement avec les meilleures marques : Samsung, Bosch, Siemens, Miele, LG, Whirlpool, AEG, Electrolux, Liebherr.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres Clés */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Nos Chiffres Clés</h2>
            <p className="text-xl text-emerald-100">Des résultats qui parlent d'eux-mêmes</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">500+</div>
              <p className="text-xl text-emerald-100">Appareils reconditionnés par an</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">98%</div>
              <p className="text-xl text-emerald-100">Clients satisfaits</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">12</div>
              <p className="text-xl text-emerald-100">Mois de garantie</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">60%</div>
              <p className="text-xl text-emerald-100">D'économies en moyenne</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-[#bf934b] to-[#a67d3d] rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Découvrir Nos Produits ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Parcourez notre sélection de gros électroménager reconditionné et trouvez l'appareil qu'il vous faut.
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
