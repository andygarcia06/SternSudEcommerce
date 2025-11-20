import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import Button from '../base/Button';

interface ProductHighlightProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  condition: string;
  brand: string;
  description: string;
}

export default function ProductHighlight({
  id,
  name,
  price,
  originalPrice,
  image,
  condition,
  brand,
  description,
}: ProductHighlightProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, condition });
  };

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden" data-product-shop>
      <div className="grid md:grid-cols-2 gap-8 p-8">
        <div className="relative aspect-square rounded-xl overflow-hidden bg-white">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
          {discount > 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 rounded-lg font-bold text-lg">
              -{discount}%
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
            Produit en vedette
          </div>
          <div className="text-sm text-gray-600 mb-2">{brand}</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{name}</h2>
          <div className="inline-block bg-white px-3 py-1 rounded-lg text-sm font-medium text-gray-700 mb-4 w-fit">
            {condition}
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

          <div className="flex items-baseline space-x-3 mb-6">
            <span className="text-4xl font-bold text-blue-600">{price}€</span>
            {originalPrice && (
              <span className="text-xl text-gray-400 line-through">{originalPrice}€</span>
            )}
          </div>

          <div className="flex space-x-4">
            <Button onClick={handleAddToCart} size="lg" className="whitespace-nowrap">
              <i className="ri-shopping-cart-line mr-2"></i>
              Ajouter au panier
            </Button>
            <Link to={`/produit/${id}`}>
              <Button variant="outline" size="lg" className="whitespace-nowrap">
                Voir les détails
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
