import { Layout } from '../layout/Layout';

export const Nosotros = () => {
  return (
    <Layout>
      <div className='max-w-[1200px] mx-auto my-20'>
        <h1 className='text-center text-[#e99401] text-5xl font-[900]'>
          Nosotros
        </h1>
        <div className='flex items-center mt-16 gap-4'>
          <img src='./nosotros.jpg' alt='Nosotros' className='w-[650px]' />
          <div className='flex flex-col gap-3 text-xl'>
            <p>
              En nuestra tienda de guitarras, nos apasiona la música y creemos
              en el poder transformador de este maravilloso instrumento. Desde
              nuestros inicios, nos hemos comprometido a ofrecer a nuestros
              clientes la más alta calidad en guitarras y accesorios,
              seleccionando cuidadosamente cada producto para satisfacer las
              necesidades de músicos de todos los niveles.
            </p>
            <p>
              Nuestro equipo está compuesto por amantes de la música y expertos
              en guitarras, quienes están aquí para brindarte un servicio
              excepcional y asesoramiento personalizado. Nos enorgullece
              compartir nuestra pasión contigo, ya sea que estés dando tus
              primeros pasos en el mundo de la guitarra o que ya seas un músico
              experimentado en busca de tu próximo instrumento de ensueño.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
