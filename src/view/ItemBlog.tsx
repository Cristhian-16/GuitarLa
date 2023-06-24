type Foto = {
  foto: string;
};
export const ItemBlog = ({ foto }: Foto) => {
  return (
    <div className='flex flex-col w-[300px] mb-20'>
      <img
        className='w-[300px]'
        src={`/public/blog_${foto}.jpg`}
        alt={`Blog ${foto}`}
      />
      <div className='mt-[36px]'>
        <p className='text-2xl'>Como elegir tu primera Guitarra?</p>
        <p className='mt-2 text-[#e99401]'>20 enero del 2023</p>
        <p className='mt-5'>
          Descubre el poder de la guitarra y despierta tu creatividad musical en
          tan solo seis cuerdas. Aprende a tocar y sumérgete en un mundo lleno
          de melodías y emociones que te acompañarán para siempre. ¡Empieza tu
          viaje musical hoy mismo!
        </p>
      </div>
      <div className='mt-5 flex justify-center'>
        <a
          href='#'
          className=' w-[200px] text-center text-black border-2 border-[#e99401] px-5 py-2 transition-all duration-300 ease-in-out hover:bg-[#e99401] hover:text-white'
        >
          Leer Entrada
        </a>
      </div>
    </div>
  );
};
