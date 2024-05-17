import { Product } from '@/types/Product';
import Image from 'next/image';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { images, name, price } = product;
  return (
    <div>
      <div>
        <Image src={images[0]} alt={name} width={300} height={300} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
      <button>Mua ngay</button>
    </div>
  );
};

export default ProductCard;
