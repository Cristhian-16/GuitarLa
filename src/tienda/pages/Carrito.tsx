import { useContext } from 'react';
import Swal from 'sweetalert2';

import { NoProducts } from '../components/NoProducts';
import { ProductTrue } from '../components/ProductTrue';

import { Layout } from '../layout/Layout';
import { TiendaContext } from '../../context/TiendaContext';

export const Carrito = () => {
  const { productos, deleteToCart } = useContext(TiendaContext);

  const productosCarrito = productos.length > 0;

  const totalPago = productos.reduce((acc, el) => acc + el.cantidad * 399, 0);

  const handleClick = () => {
    Swal.fire({
      title: 'Compra Exitosa',
      text: 'Gracias por tu compra',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });

    setTimeout(() => {
      deleteToCart();
    }, 2000);
  };

  return (
    <Layout>
      <div className='flex max-w-[1500px] mx-auto gap-20'>
        <div className={`mb-[67px] ${productos.length === 0 ? 'mx-auto' : ''}`}>
          <h1 className='text-center mt-10 text-5xl uppercase font-[900] text-[#e99401]'>
            Articulos
          </h1>
          {!productosCarrito ? (
            <NoProducts />
          ) : (
            <div className='grid grid-cols-3'>
              {productos.map(product => (
                <ProductTrue key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
        {productos.length > 0 && (
          <div className='mt-24'>
            <h1 className='text-4xl font-[700] text-[#101e4b]'>
              Total a Pagar
            </h1>

            <p className='mt-10 text-2xl'>Resumen:</p>
            {productos.map(product => (
              <div
                key={product.id}
                className='mt-2 border-b text-xl flex gap-10'
              >
                <p className='w-[100px]'>{product.name}</p>
                <p className='text-[#101e4b] font-[700]'>$399</p>
                <p>
                  Cantidad :{' '}
                  <span className='text-[#100f42]'>{product.cantidad}</span>
                </p>
              </div>
            ))}

            <h2 className='mt-10 text-4xl'>
              Total : <span className='text-[#101e4b]'>${totalPago}</span>
            </h2>

            <button
              onClick={handleClick}
              className='mt-16 bg-blue-950 text-white px-10 py-4 transition-all duration-200 ease-in-out active:scale-95'
            >
              Confirmar Pago
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};
