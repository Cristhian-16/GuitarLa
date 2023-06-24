import { Link } from 'react-router-dom';
import { products } from '../api/products.json';
import { Navbar } from './Navbar';

export const Header = () => {
  const productos = products.find(product => product.id === 'vai');

  if (!productos) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <header className='background-image relative'>
      <div className='max-w-[1200px] mx-auto'>
        <Navbar />

        <section className='mt-20 text-left w-[50%]' key={productos.id}>
          <h1 className='text-7xl text-white font-[900] uppercase'>
            Modelo {productos.name}
          </h1>
          <p className='mt-16 text-[20px] text-white'>
            {productos.descripcion}
          </p>
          <p className='mt-3 text-[60px] text-[#e99401] font-[900]'>$399</p>
          <div className='mt-5'>
            <Link
              to={`/producto/${productos.id}`}
              className='cursor-pointer px-20 py-4 border-2 border-[#e99401] text-[16px] uppercase font-bold transition-all duration-300 ease-in-out hover:bg-[#e99401]'
            >
              Ver Producto
            </Link>
          </div>
        </section>
      </div>

      <img
        src='/public/header_guitarra.png'
        alt='Header Guitarra'
        className='absolute right-0 bottom-0 z-[-1]'
      />
    </header>
  );
};
