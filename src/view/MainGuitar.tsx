import { products } from '../api/products.json';
import { ProductosList } from './ProductosList';

export const MainGuitar = () => {
  return (
    <>
      <h1 className='text-[#e99401] text-[40px] font-[900] text-center mt-[40px]'>
        Nuestra Coleccion
      </h1>

      <section className='max-w-[1200px] mx-auto grid grid-cols-3 my-[90px] gap-20'>
        {products.map(product => (
          <ProductosList key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};
