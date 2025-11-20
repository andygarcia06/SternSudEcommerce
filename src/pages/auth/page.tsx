import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        // TODO: Remplacer par l'appel API réel vers votre backend Node.js
        // const response = await fetch('http://localhost:3000/api/auth/login', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     email: formData.email,
        //     password: formData.password,
        //   }),
        // });
        // const data = await response.json();
        // if (!response.ok) throw new Error(data.message);
        
        console.log('Connexion:', { email: formData.email, password: formData.password });
        
        // Simulation de connexion
        login({
          id: '1',
          email: formData.email,
          firstName: 'Utilisateur',
          lastName: 'Test',
        });
        
        navigate('/dashboard');
      } else {
        // Validation
        if (formData.password !== formData.confirmPassword) {
          setError('Les mots de passe ne correspondent pas');
          setLoading(false);
          return;
        }

        if (formData.password.length < 8) {
          setError('Le mot de passe doit contenir au moins 8 caractères');
          setLoading(false);
          return;
        }

        // TODO: Remplacer par l'appel API réel vers votre backend Node.js
        // const response = await fetch('http://localhost:3000/api/auth/register', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     email: formData.email,
        //     password: formData.password,
        //     firstName: formData.firstName,
        //     lastName: formData.lastName,
        //   }),
        // });
        // const data = await response.json();
        // if (!response.ok) throw new Error(data.message);
        
        console.log('Inscription:', formData);
        
        // Simulation d'inscription réussie
        alert('Inscription réussie ! Vous pouvez maintenant vous connecter. (Mode démo - connectez votre backend)');
        setIsLogin(true);
        setFormData({
          email: formData.email,
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
        });
      }
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#051d40] to-[#0a2f5f] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo et titre */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-2xl mb-4">
            <i className="ri-user-line text-white text-3xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            {isLogin ? 'Connexion' : 'Créer un compte'}
          </h2>
          <p className="text-blue-200">
            {isLogin ? 'Accédez à votre espace client' : 'Rejoignez Stern Sud Électroménager'}
          </p>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
              <i className="ri-error-warning-line text-red-600 text-xl mt-0.5"></i>
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none"
                required
                minLength={8}
              />
              {!isLogin && (
                <p className="text-xs text-gray-500 mt-1">Minimum 8 caractères</p>
              )}
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirmer le mot de passe <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none"
                  required
                  minLength={8}
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#051d40] text-white py-3 rounded-lg hover:bg-[#051d40]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <i className="ri-loader-4-line animate-spin mr-2"></i>
                  Chargement...
                </span>
              ) : (
                <span>{isLogin ? 'Se connecter' : 'Créer mon compte'}</span>
              )}
            </button>
          </form>

          {/* Séparateur */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">ou</span>
            </div>
          </div>

          {/* Basculer entre connexion et inscription */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setFormData({
                  email: '',
                  password: '',
                  confirmPassword: '',
                  firstName: '',
                  lastName: '',
                });
              }}
              className="text-[#051d40] hover:text-[#051d40]/80 font-medium cursor-pointer whitespace-nowrap"
            >
              {isLogin ? (
                <>Pas encore de compte ? <span className="underline">Inscrivez-vous</span></>
              ) : (
                <>Déjà un compte ? <span className="underline">Connectez-vous</span></>
              )}
            </button>
          </div>

          {/* Note backend */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <i className="ri-information-line text-blue-600 text-lg mt-0.5"></i>
              <div>
                <p className="text-xs font-medium text-blue-900">Backend Node.js requis</p>
                <p className="text-xs text-blue-700 mt-1">
                  Configurez les endpoints : <code className="bg-blue-100 px-1 py-0.5 rounded text-xs">POST /api/auth/login</code> et 
                  <code className="bg-blue-100 px-1 py-0.5 rounded text-xs ml-1">POST /api/auth/register</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
