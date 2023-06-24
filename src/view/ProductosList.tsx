import { Link } from 'react-router-dom';
import { Products } from '../context/TiendaContext';

interface ProductProps {
  product: Products;
}

export const ProductosList = ({ product }: ProductProps) => {
  return (
    <div className='flex'>
      <img
        src={`./${product.id}.jpg`}
        alt={product.name}
        className='w-[150px]'
      />
      <div className='flex flex-col justify-between'>
        <h2 className='text-3xl font-[700] uppercase'>{product.name}</h2>
        <p className='text-left'>{product.descripcion}</p>
        <p className='text-6xl font-[900] text-[#e99401]'>$299</p>
        <Link
          to={`/producto/${product.id}`}
          className='text-black border-2 border-[#e99401] text-center py-2 cursor-pointer font-[600] transition-all duration-300 ease-in-out hover:bg-[#e99401] hover:text-white'
        >
          Ver Producto
        </Link>
      </div>
    </div>
  );
};
