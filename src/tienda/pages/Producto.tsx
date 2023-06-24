import { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Swal from 'sweetalert2';

import { products } from '../../api/products.json';
import { Layout } from '../layout/Layout';
import { TiendaContext } from '../../context/TiendaContext';

export const Producto = () => {
  const { addProductToCart } = useContext(TiendaContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    cantidad: ''
  });
  const { id } = useParams();

  const productFind = products.find(product => product.id === id);

  if (!productFind) {
    return <p>Producto no encontrado</p>;
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
    addProductToCart(
      { ...productFind, cantidad: +form.cantidad },
      form.cantidad
    );

    Swal.fire({
      icon: 'success',
      title: 'Producto Agregado',
      showConfirmButton: false,
      timer: 1500
    });

    setTimeout(() => {
      navigate('/tienda');
    }, 1500);
  };

  return (
    <Layout>
      <form
        className='max-w-[1200px] mx-auto flex items-center justify-center'
        onSubmit={handleSubmit}
      >
        <img
          src={`./${productFind.id}.jpg`}
          alt={productFind.name}
          className='w-[300px]'
        />

        <div className='flex flex-col gap-5 justify-center'>
          <h1 className='text-[#e99401] text-5xl font-[900]'>
            {productFind.name}
          </h1>
          <p>{productFind.descripcion}</p>
          <p className='text-[#e99401] font-[900] text-6xl'>$299</p>
          <div className='flex flex-col gap-2'>
            <select
              onChange={handleChange}
              name='cantidad'
              className='outline-none border-2 border-[#e99401] text-center py-3'
            >
              <option value='seleccione'>Seleccione</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>

            <button
              type='submit'
              className='bg-[#e99401] text-white  py-3 transition-all duration-100 ease-in-out active:scale-90'
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};
