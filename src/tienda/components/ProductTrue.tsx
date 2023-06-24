import { Products } from '../../context/TiendaContext';

interface ProductsProps {
  product: Products;
}

export const ProductTrue = ({ product }: ProductsProps) => {
  return (
    <>
      <section className='mt-10 flex gap-3 mb-[151px]'>
        <img src={`./${product.id}.jpg`} alt={product.name} width={150} />
        <div className='w-40'>
          <h1 className='text-2xl font-bold text-[#e99401] text-center'>
            {product.name}
          </h1>
          <p className='text-start mt-3'>{product.descripcion}</p>
          <p className='mt-4'>
            Cantidad :{' '}
            <span className='font-[900] text-[#e99401]'>
              {product.cantidad}
            </span>
          </p>
          <p className='mt-4'>
            Subtotal :{' '}
            <span className='font-[900] text-[#e99401]'>
              ${399 * product.cantidad}
            </span>
          </p>
        </div>
      </section>
    </>
  );
};
