import ProductHighlight from '../../../components/feature/ProductHighlight';

interface ProductHighlightWrapperProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  condition: string;
  brand: string;
  description: string;
}

export default function ProductHighlightWrapper(props: ProductHighlightWrapperProps) {
  return <ProductHighlight {...props} />;
}
