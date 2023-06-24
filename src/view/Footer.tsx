import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='bg-[#262626] text-white py-[50px]'>
      <div className='max-w-[1200px] mx-auto flex  justify-between text-2xl'>
        <div className='flex flex-row gap-5'>
          <Link to={'/'}>Inicio</Link>
          <Link to={'/nosotros'}>Nosotros</Link>
          <Link to={'/tienda'}>Tienda</Link>
          <Link to={'/blog'}>Blog</Link>
        </div>
        <p>Todos los Derechos Reservados ©</p>
      </div>
    </div>
  );
};
