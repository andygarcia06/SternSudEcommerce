import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../../mocks/products';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'add' | 'edit'>('overview');
  const [filterCondition, setFilterCondition] = useState<'all' | 'neuf' | 'reconditionne'>('all');
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const navigate = useNavigate();

  // Statistiques
  const totalProducts = products.length;
  const newProducts = products.filter(p => p.condition === 'Neuf').length;
  const refurbishedProducts = products.filter(p => p.condition !== 'Neuf').length;
  const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);

  // Filtrage des produits
  const filteredProducts = products.filter(p => {
    if (filterCondition === 'neuf') return p.condition === 'Neuf';
    if (filterCondition === 'reconditionne') return p.condition !== 'Neuf';
    return true;
  });

  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setActiveTab('edit');
  };

  const handleDelete = (productId: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      // TODO: Appel API pour supprimer le produit
      console.log('Suppression du produit:', productId);
      alert('Produit supprimé ! (Mode démo - connectez votre backend)');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Admin */}
      <header className="bg-[#051d40] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                <i className="ri-admin-line text-white text-2xl"></i>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Espace Administration</h1>
                <p className="text-blue-100 text-sm">Gestion des produits Stern Sud</p>
              </div>
            </div>
            <Link
              to="/"
              className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Retour au site
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8 p-2 flex space-x-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-[#051d40] text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <i className="ri-dashboard-line mr-2"></i>
            Tableau de bord
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'products'
                ? 'bg-[#051d40] text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <i className="ri-list-check mr-2"></i>
            Liste des produits
          </button>
          <button
            onClick={() => {
              setEditingProduct(null);
              setActiveTab('add');
            }}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'add'
                ? 'bg-amber-500 text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <i className="ri-add-circle-line mr-2"></i>
            Ajouter un produit
          </button>
        </div>

        {/* Contenu selon l'onglet actif */}
        {activeTab === 'overview' && (
          <div>
            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-[#051d40]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Total Produits</p>
                    <p className="text-3xl font-bold text-[#051d40] mt-2">{totalProducts}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <i className="ri-box-3-line text-[#051d40] text-2xl"></i>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Produits Neufs</p>
                    <p className="text-3xl font-bold text-green-600 mt-2">{newProducts}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <i className="ri-star-line text-green-600 text-2xl"></i>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-amber-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Reconditionnés</p>
                    <p className="text-3xl font-bold text-amber-600 mt-2">{refurbishedProducts}</p>
                  </div>
                  <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
                    <i className="ri-recycle-line text-amber-600 text-2xl"></i>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Valeur Stock</p>
                    <p className="text-3xl font-bold text-purple-600 mt-2">{totalValue.toLocaleString()}€</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                    <i className="ri-money-euro-circle-line text-purple-600 text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Répartition par catégorie */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Répartition par catégorie</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {['refrigerateur', 'lave-linge', 'lave-vaisselle', 'seche-linge', 'four'].map(cat => {
                  const count = products.filter(p => p.category === cat).length;
                  const icons = {
                    'refrigerateur': 'ri-fridge-line',
                    'lave-linge': 'ri-shirt-line',
                    'lave-vaisselle': 'ri-restaurant-line',
                    'seche-linge': 'ri-sun-line',
                    'four': 'ri-fire-line'
                  };
                  const names = {
                    'refrigerateur': 'Réfrigérateurs',
                    'lave-linge': 'Lave-linge',
                    'lave-vaisselle': 'Lave-vaisselle',
                    'seche-linge': 'Sèche-linge',
                    'four': 'Fours'
                  };
                  return (
                    <div key={cat} className="bg-gray-50 rounded-lg p-4 text-center">
                      <i className={`${icons[cat as keyof typeof icons]} text-[#051d40] text-3xl mb-2`}></i>
                      <p className="text-gray-600 text-sm font-medium">{names[cat as keyof typeof names]}</p>
                      <p className="text-2xl font-bold text-[#051d40] mt-1">{count}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="bg-white rounded-xl shadow-sm">
            {/* Filtres */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Liste des produits</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setFilterCondition('all')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      filterCondition === 'all'
                        ? 'bg-[#051d40] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Tous ({totalProducts})
                  </button>
                  <button
                    onClick={() => setFilterCondition('neuf')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      filterCondition === 'neuf'
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Neuf ({newProducts})
                  </button>
                  <button
                    onClick={() => setFilterCondition('reconditionne')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      filterCondition === 'reconditionne'
                        ? 'bg-amber-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Reconditionné ({refurbishedProducts})
                  </button>
                </div>
              </div>
            </div>

            {/* Table des produits */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Produit</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Marque</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Référence</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">État</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Prix</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Stock</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProducts.map(product => (
                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                            <p className="text-xs text-gray-500">{product.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{product.brand}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{product.id}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                          product.condition === 'Neuf'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {product.condition === 'Neuf' ? (
                            <i className="ri-star-fill mr-1"></i>
                          ) : (
                            <i className="ri-recycle-line mr-1"></i>
                          )}
                          {product.condition}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{product.price}€</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                          product.stock > 5
                            ? 'bg-green-100 text-green-800'
                            : product.stock > 2
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {product.stock} unités
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => handleEdit(product)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <i className="ri-edit-line text-lg"></i>
                          </button>
                          <button 
                            onClick={() => handleDelete(product.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <i className="ri-delete-bin-line text-lg"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {(activeTab === 'add' || activeTab === 'edit') && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingProduct ? 'Modifier le produit' : 'Ajouter un nouveau produit'}
            </h2>
            <ProductForm product={editingProduct} onSuccess={() => setActiveTab('products')} />
          </div>
        )}
      </div>
    </div>
  );
}

function ProductForm({ product, onSuccess }: { product?: any; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    brand: product?.brand || '',
    reference: product?.id || '',
    name: product?.name || '',
    category: product?.category || '',
    price: product?.price?.toString() || '',
    condition: product?.condition || '',
    stock: product?.stock?.toString() || '',
    description: product?.description || '',
    dimensions: '',
    colors: '',
    features: product?.features?.join(', ') || '',
  });

  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>(product?.image ? [product.image] : []);
  const [customBrand, setCustomBrand] = useState('');
  const [showCustomBrand, setShowCustomBrand] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages(files);
    
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalBrand = showCustomBrand ? customBrand : formData.brand;
    
    if (!finalBrand || !formData.reference || !formData.price || !formData.condition || (imagePreviews.length === 0 && !product)) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const productData = new FormData();
    productData.append('brand', finalBrand);
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'brand') {
        productData.append(key, value);
      }
    });
    images.forEach((image, index) => {
      productData.append(`image_${index}`, image);
    });

    try {
      const endpoint = product 
        ? `http://localhost:3000/api/products/${product.id}`
        : 'http://localhost:3000/api/products';
      
      const method = product ? 'PUT' : 'POST';
      
      // TODO: Remplacer par l'appel API réel
      // const response = await fetch(endpoint, {
      //   method,
      //   body: productData,
      // });
      
      console.log(`${method} ${endpoint}`, { ...formData, brand: finalBrand });
      console.log('Images:', images);
      
      alert(`Produit ${product ? 'modifié' : 'ajouté'} avec succès ! (Mode démo - connectez votre backend)`);
      onSuccess();
    } catch (error) {
      console.error('Erreur:', error);
      alert(`Erreur lors de ${product ? 'la modification' : 'l\'ajout'} du produit`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Informations obligatoires */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <i className="ri-star-fill text-red-500 mr-2"></i>
          Informations obligatoires
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Marque <span className="text-red-500">*</span>
            </label>
            {!showCustomBrand ? (
              <div className="space-y-2">
                <select
                  value={formData.brand}
                  onChange={(e) => {
                    if (e.target.value === 'custom') {
                      setShowCustomBrand(true);
                    } else {
                      setFormData({ ...formData, brand: e.target.value });
                    }
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none pr-8"
                  required
                >
                  <option value="">Sélectionner une marque</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Bosch">Bosch</option>
                  <option value="Siemens">Siemens</option>
                  <option value="Miele">Miele</option>
                  <option value="LG">LG</option>
                  <option value="Whirlpool">Whirlpool</option>
                  <option value="Electrolux">Electrolux</option>
                  <option value="Liebherr">Liebherr</option>
                  <option value="AEG">AEG</option>
                  <option value="custom">➕ Autre marque...</option>
                </select>
              </div>
            ) : (
              <div className="space-y-2">
                <input
                  type="text"
                  value={customBrand}
                  onChange={(e) => setCustomBrand(e.target.value)}
                  placeholder="Entrez le nom de la marque"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => {
                    setShowCustomBrand(false);
                    setCustomBrand('');
                  }}
                  className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer whitespace-nowrap"
                >
                  ← Retour à la liste
                </button>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Référence produit <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.reference}
              onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
              placeholder="Ex: RF56J9041SR"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom du produit <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ex: Réfrigérateur Samsung RF56J9041SR"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Catégorie <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none pr-8"
              required
            >
              <option value="">Sélectionner une catégorie</option>
              <option value="refrigerateur">Réfrigérateur</option>
              <option value="lave-linge">Lave-linge</option>
              <option value="lave-vaisselle">Lave-vaisselle</option>
              <option value="seche-linge">Sèche-linge</option>
              <option value="four">Four</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Prix (€) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              placeholder="899"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              État <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none pr-8"
              required
            >
              <option value="">Sélectionner l'état</option>
              <option value="Neuf">Neuf</option>
              <option value="Comme neuf">Reconditionné - Comme neuf</option>
              <option value="Excellent état">Reconditionné - Excellent état</option>
              <option value="Très bon état">Reconditionné - Très bon état</option>
              <option value="Bon état">Reconditionné - Bon état</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stock <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
              placeholder="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Photos <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#051d40] transition-colors">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="images"
                required={!product}
              />
              <label htmlFor="images" className="cursor-pointer">
                <i className="ri-image-add-line text-4xl text-gray-400 mb-2"></i>
                <p className="text-sm text-gray-600">Cliquez pour ajouter des photos</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG jusqu'à 10MB</p>
              </label>
            </div>
            {imagePreviews.length > 0 && (
              <div className="grid grid-cols-4 gap-4 mt-4">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative">
                    <img
                      src={preview}
                      alt={`Aperçu ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newImages = images.filter((_, i) => i !== index);
                        const newPreviews = imagePreviews.filter((_, i) => i !== index);
                        setImages(newImages);
                        setImagePreviews(newPreviews);
                      }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
                    >
                      <i className="ri-close-line text-sm"></i>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Description détaillée du produit..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none resize-none"
              required
            />
          </div>
        </div>
      </div>

      {/* Informations optionnelles */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <i className="ri-information-line text-blue-500 mr-2"></i>
          Informations optionnelles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dimensions (L x P x H en cm)
            </label>
            <input
              type="text"
              value={formData.dimensions}
              onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
              placeholder="Ex: 60 x 65 x 185"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Couleurs disponibles
            </label>
            <input
              type="text"
              value={formData.colors}
              onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
              placeholder="Ex: Blanc, Inox, Noir"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Caractéristiques (séparées par des virgules)
            </label>
            <input
              type="text"
              value={formData.features}
              onChange={(e) => setFormData({ ...formData, features: e.target.value })}
              placeholder="Ex: No Frost, Classe A+++, 564L, Distributeur eau/glaçons"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none"
            />
          </div>
        </div>
      </div>

      {/* Boutons d'action */}
      <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={() => {
            if (confirm('Voulez-vous vraiment annuler ? Les données saisies seront perdues.')) {
              onSuccess();
            }
          }}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-[#051d40] text-white rounded-lg hover:bg-[#051d40]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold"
        >
          <i className={`${product ? 'ri-save-line' : 'ri-add-line'} mr-2`}></i>
          {product ? 'Enregistrer les modifications' : 'Ajouter le produit'}
        </button>
      </div>

      {/* Note pour le backend */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <i className="ri-information-line text-blue-600 text-xl mt-0.5"></i>
          <div>
            <p className="text-sm font-medium text-blue-900">Backend Node.js requis</p>
            <p className="text-sm text-blue-700 mt-1">
              Ce formulaire est prêt à envoyer les données à votre API Node.js. 
              Configurez les endpoints : <code className="bg-blue-100 px-2 py-0.5 rounded">POST /api/products</code> (ajout) 
              et <code className="bg-blue-100 px-2 py-0.5 rounded">PUT /api/products/:id</code> (modification)
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
