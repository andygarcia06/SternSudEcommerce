import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../mocks/products';
import { useCart } from '../../contexts/CartContext';
import Button from '../../components/base/Button';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="ri-error-warning-line text-6xl text-gray-300 mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Produit non trouvé</h2>
          <Button onClick={() => navigate('/produits')}>
            Retour aux produits
          </Button>
        </div>
      </div>
    );
  }

  const allImages = product.images || [product.image];
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        condition: product.condition,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <button onClick={() => navigate('/')} className="hover:text-blue-600 cursor-pointer whitespace-nowrap">
            Accueil
          </button>
          <i className="ri-arrow-right-s-line"></i>
          <button onClick={() => navigate('/produits')} className="hover:text-blue-600 cursor-pointer whitespace-nowrap">
            Produits
          </button>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4 relative" data-product-shop>
              <img
                src={allImages[selectedImage]}
                alt={product.name}
                className="w-full aspect-square object-cover object-top"
              />
              {discount > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-xl">
                  -{discount}%
                </div>
              )}
            </div>
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`bg-white rounded-lg overflow-hidden border-2 cursor-pointer ${
                      selectedImage === idx ? 'border-blue-600' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full aspect-square object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Détails */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="text-sm text-gray-600 mb-2">{product.brand}</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-center space-x-3 mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-medium">
                  {product.condition}
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm font-medium">
                  {product.stock > 0 ? 'En stock' : 'Rupture de stock'}
                </span>
              </div>

              <div className="flex items-baseline space-x-4 mb-6">
                <span className="text-5xl font-bold text-blue-600">{product.price}€</span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-400 line-through">{product.originalPrice}€</span>
                )}
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {product.features && product.features.length > 0 && (
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Caractéristiques</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <i className="ri-check-line text-green-600 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Année:</span>
                    <span className="ml-2 font-semibold text-gray-900">{product.year}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Stock:</span>
                    <span className="ml-2 font-semibold text-gray-900">{product.stock} disponible{product.stock > 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-subtract-line"></i>
                  </button>
                  <span className="px-6 py-2 font-semibold text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                    disabled={quantity >= product.stock}
                  >
                    <i className="ri-add-line"></i>
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  Total: <strong className="text-blue-600 text-lg">{product.price * quantity}€</strong>
                </span>
              </div>

              <Button
                onClick={handleAddToCart}
                size="lg"
                fullWidth
                disabled={product.stock === 0}
                className="mb-4 whitespace-nowrap"
              >
                <i className="ri-shopping-cart-line mr-2"></i>
                Ajouter au panier
              </Button>

              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div className="flex flex-col items-center">
                  <i className="ri-shield-check-line text-2xl text-green-600 mb-1"></i>
                  <span className="text-gray-600">Testé et vérifié</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="ri-truck-line text-2xl text-blue-600 mb-1"></i>
                  <span className="text-gray-600">Livraison 48h</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="ri-arrow-go-back-line text-2xl text-purple-600 mb-1"></i>
                  <span className="text-gray-600">Retour 14 jours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Produits similaires */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Produits similaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(p => (
                <button
                  key={p.id}
                  onClick={() => navigate(`/produit/${p.id}`)}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer text-left"
                  data-product-shop
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full aspect-square object-cover object-top"
                  />
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-1">{p.brand}</div>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{p.name}</h3>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-xl font-bold text-blue-600">{p.price}€</span>
                      {p.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">{p.originalPrice}€</span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
