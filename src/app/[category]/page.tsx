import ProductCard from '@/components/ProductCard';
import apiService from '@/service/apiService';
import { PageProps } from '@/types';
import { Category } from '@/types/Category';
import { Product } from '@/types/Product';

export default async function ListPage(props: PageProps) {
  const { params } = props;
  const { category } = params || {};
  const { data } = await apiService.get<Product[]>('/category/list');

  return (
    <div>
      {data?.length ? (
        data.map((product: Product) => {
          return <ProductCard product={product} key={product._id} />;
        })
      ) : (
        <div>Khong tim thay ket qua</div>
      )}
    </div>
  );
}
