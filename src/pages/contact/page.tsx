import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[400px] flex items-center"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=modern%20customer%20service%20center%20with%20friendly%20staff%20helping%20customers%20professional%20clean%20environment%20bright%20lighting%20communication%20technology%20contact%20support&width=1920&height=400&seq=contact-hero&orientation=landscape)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-5xl font-bold text-white mb-4">Contactez-nous</h1>
          <p className="text-2xl text-white/90">Notre équipe est à votre écoute pour répondre à toutes vos questions</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos Coordonnées</h2>
            
            <div className="space-y-6">
              {/* Téléphone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Téléphone</h3>
                  <p className="text-gray-700">06 67 62 20 57</p>
                  <p className="text-sm text-gray-500 mt-1">Du lundi au vendredi : 9h - 18h</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-700">contact@sternsud.fr</p>
                  <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                </div>
              </div>

              {/* Adresse */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-700">Z.I. du Capitou</p>
                  <p className="text-gray-700">83370-83600</p>
                  <p className="text-sm text-gray-500 mt-1">Retrait sur place uniquement</p>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Horaires d'ouverture</h3>
                  <p className="text-gray-700">Lundi - Vendredi : 9h - 18h</p>
                  <p className="text-gray-700">Samedi : 9h - 12h</p>
                  <p className="text-gray-700">Dimanche : Fermé</p>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-10">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-white text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                  <i className="ri-instagram-fill text-white text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-white text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                <i className="ri-checkbox-circle-fill text-green-600 text-2xl"></i>
                <p className="text-green-800">Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                <i className="ri-error-warning-fill text-red-600 text-2xl"></i>
                <p className="text-red-800">Une erreur est survenue lors de l'envoi. Veuillez réessayer.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none text-sm"
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none text-sm"
                  placeholder="votre@email.fr"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none text-sm"
                  placeholder="06 XX XX XX XX"
                />
              </div>

              {/* Sujet */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none text-sm cursor-pointer"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="info-produit">Information sur un produit</option>
                  <option value="disponibilite">Disponibilité d'un appareil</option>
                  <option value="garantie">Question sur la garantie</option>
                  <option value="sav">Service après-vente</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none text-sm resize-none"
                  placeholder="Décrivez votre demande..."
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 caractères</p>
              </div>

              {/* Bouton submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-900 text-white px-6 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Envoi en cours...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <i className="ri-send-plane-fill mr-2"></i>
                    Envoyer le message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
            <p className="text-xl text-gray-600">Trouvez rapidement des réponses à vos questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-question-line text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Proposez-vous la livraison ?</h3>
                  <p className="text-gray-700">Pour le moment, nous proposons uniquement le retrait sur place. Cela nous permet de vous garantir le meilleur prix et de vous conseiller lors de la récupération de votre appareil.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-question-line text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Quelle est la garantie ?</h3>
                  <p className="text-gray-700">Tous nos appareils, qu'ils soient neufs ou reconditionnés, bénéficient d'une garantie de 12 mois pièces et main d'œuvre.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-question-line text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Puis-je voir l'appareil avant d'acheter ?</h3>
                  <p className="text-gray-700">Absolument ! Nous vous encourageons à venir voir et tester l'appareil avant votre achat. Prenez rendez-vous par téléphone ou email.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-question-line text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Quels moyens de paiement acceptez-vous ?</h3>
                  <p className="text-gray-700">Nous acceptons les paiements par carte bancaire, espèces et virement bancaire.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-[#bf934b] to-[#a67d3d] rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Besoin d'aide pour choisir ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est là pour vous conseiller et vous aider à trouver l'appareil parfait pour vos besoins.
          </p>
          <a href="tel:+33667622057">
            <button className="bg-white text-[#bf934b] px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap shadow-xl">
              <i className="ri-phone-line mr-2"></i>
              Appelez-nous
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
