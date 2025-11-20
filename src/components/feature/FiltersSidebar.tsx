import { useState } from 'react';
import { categories, brands, conditions } from '../../mocks/products';

interface FiltersSidebarProps {
  onFilterChange: (filters: {
    category?: string;
    brand?: string;
    condition?: string;
    minPrice?: number;
    maxPrice?: number;
  }) => void;
}

export default function FiltersSidebar({ onFilterChange }: FiltersSidebarProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedCondition, setSelectedCondition] = useState<string>('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  const handleApplyFilters = () => {
    onFilterChange({
      category: selectedCategory || undefined,
      brand: selectedBrand || undefined,
      condition: selectedCondition || undefined,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
    });
  };

  const handleResetFilters = () => {
    setSelectedCategory('');
    setSelectedBrand('');
    setSelectedCondition('');
    setMinPrice('');
    setMaxPrice('');
    onFilterChange({});
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Filtres</h3>
        <button
          onClick={handleResetFilters}
          className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer whitespace-nowrap"
        >
          Réinitialiser
        </button>
      </div>

      {/* Catégories */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Catégorie</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat.id}
                checked={selectedCategory === cat.id}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-4 h-4 text-blue-600 cursor-pointer"
              />
              <span className="text-sm text-gray-700">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Prix */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Prix</h4>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* Marques */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Marque</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-4 h-4 text-blue-600 cursor-pointer"
              />
              <span className="text-sm text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* État */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">État</h4>
        <div className="space-y-2">
          {conditions.map((condition) => (
            <label key={condition} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="condition"
                value={condition}
                checked={selectedCondition === condition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="w-4 h-4 text-blue-600 cursor-pointer"
              />
              <span className="text-sm text-gray-700">{condition}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={handleApplyFilters}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap font-medium"
      >
        Appliquer les filtres
      </button>
    </div>
  );
}
