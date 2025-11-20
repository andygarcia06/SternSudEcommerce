import { useNavigate } from 'react-router-dom';
import Button from '../../components/base/Button';

export default function ConfirmationPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white rounded-xl shadow-md p-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-check-line text-5xl text-green-600"></i>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Commande confirmée !
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Merci pour votre achat. Votre commande a été enregistrée avec succès.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-2">
              Vous recevrez un email de confirmation à l'adresse indiquée.
            </p>
            <p className="text-gray-700">
              Votre commande sera livrée sous 48h.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate('/dashboard')} className="whitespace-nowrap">
              <i className="ri-dashboard-line mr-2"></i>
              Voir mes commandes
            </Button>
            <Button onClick={() => navigate('/')} variant="outline" className="whitespace-nowrap">
              <i className="ri-home-line mr-2"></i>
              Retour à l'accueil
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
