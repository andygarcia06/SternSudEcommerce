
import Card from '../base/Card';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  condition: string;
  brand: string;
  category?: string;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  image,
  condition,
  brand,
  category,
}: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  // Déterminer la couleur et l'animation selon l'état
  const getConditionStyle = () => {
    switch (condition) {
      case 'Neuf':
        return 'bg-gradient-to-r from-emerald-500 to-emerald-600 animate-pulse shadow-lg shadow-emerald-500/50';
      case 'Comme neuf':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 animate-bounce shadow-lg shadow-blue-500/50';
      case 'Très bon état':
        return 'bg-gradient-to-r from-[#bf934b] to-[#a67d3d] shadow-lg shadow-[#bf934b]/50';
      case 'Bon état':
        return 'bg-gradient-to-r from-gray-600 to-gray-700 shadow-md';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <Card hover className="overflow-hidden h-full flex flex-col group" data-product-shop>
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg animate-pulse">
            -{discount}%
          </div>
        )}
        <div className={`absolute top-3 left-3 text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide ${getConditionStyle()}`}>
          {condition === 'Neuf' && <i className="ri-star-fill mr-1"></i>}
          {condition === 'Comme neuf' && <i className="ri-medal-fill mr-1"></i>}
          {condition}
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <div className="text-xs text-gray-500 font-semibold">{brand}</div>
          {category && (
            <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
              {category}
            </div>
          )}
        </div>
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{name}</h3>

        <div className="mt-auto">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-[#051d40]">{price}€</span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">{originalPrice}€</span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
