import { useState } from 'react';
import { products } from '../../mocks/products';
import ProductCard from '../../components/feature/ProductCard';
import FiltersSidebar from './components/FiltersSidebar';

export default function ProductsPage() {
  const [filters, setFilters] = useState<{
    category?: string;
    brand?: string;
    condition?: string;
    minPrice?: number;
    maxPrice?: number;
  }>({});
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('name');
  const [conditionFilter, setConditionFilter] = useState<'all' | 'neuf' | 'reconditionne'>('all');

  // Filtrage des produits
  let filteredProducts = products.filter(product => {
    // Filtre par condition (Neuf/Reconditionné)
    if (conditionFilter === 'neuf' && product.condition !== 'Neuf') return false;
    if (conditionFilter === 'reconditionne' && product.condition === 'Neuf') return false;

    // Autres filtres
    if (filters.category && product.category !== filters.category) return false;
    if (filters.brand && product.brand !== filters.brand) return false;
    if (filters.condition && product.condition !== filters.condition) return false;
    if (filters.minPrice && product.price < filters.minPrice) return false;
    if (filters.maxPrice && product.price > filters.maxPrice) return false;
    return true;
  });

  // Tri des produits
  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return a.name.localeCompare(b.name);
  });

  const newProductsCount = products.filter(p => p.condition === 'Neuf').length;
  const refurbishedProductsCount = products.filter(p => p.condition !== 'Neuf').length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#051d40] to-[#0a2f5f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Catalogue</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Découvrez notre sélection d'électroménager neuf et reconditionné de grandes marques
          </p>
        </div>
      </div>

      {/* Filtres Neuf/Reconditionné */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-3">
              <button
                onClick={() => setConditionFilter('all')}
                className={`px-6 py-2 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  conditionFilter === 'all'
                    ? 'bg-[#051d40] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className="ri-apps-line mr-2"></i>
                Tous les produits ({products.length})
              </button>
              <button
                onClick={() => setConditionFilter('neuf')}
                className={`px-6 py-2 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  conditionFilter === 'neuf'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className="ri-star-fill mr-2"></i>
                Neuf ({newProductsCount})
              </button>
              <button
                onClick={() => setConditionFilter('reconditionne')}
                className={`px-6 py-2 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  conditionFilter === 'reconditionne'
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className="ri-recycle-line mr-2"></i>
                Reconditionné ({refurbishedProductsCount})
              </button>
            </div>

            {/* Tri */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 font-medium">Trier par :</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#051d40] focus:border-[#051d40] outline-none text-sm pr-8 cursor-pointer"
              >
                <option value="name">Nom</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Sidebar Filtres */}
          <aside className="w-80 flex-shrink-0">
            <FiltersSidebar onFilterChange={setFilters} />
          </aside>

          {/* Grille de produits */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">{filteredProducts.length}</span> produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-product-shop>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun produit trouvé</h3>
                <p className="text-gray-600 mb-6">Essayez de modifier vos filtres</p>
                <button
                  onClick={() => {
                    setFilters({});
                    setConditionFilter('all');
                  }}
                  className="px-6 py-3 bg-[#051d40] text-white rounded-lg hover:bg-[#051d40]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
