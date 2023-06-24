export const Aprender = () => {
  return (
    <section className='background-aprender'>
      <div className='max-w-[600px] ml-[950px] pt-48 flex flex-col space-y-7'>
        <h3 className='text-5xl text-[#e99401] font-[900]'>
          Aprende a tocar Guitarra
        </h3>
        <p className='text-white text-2xl text-center'>
          Descubre el poder de las seis cuerdas y desata tu creatividad musical.
          Aprende a tocar guitarra y despierta tu pasión por la música en un
          solo acorde.
        </p>
        <div className='flex justify-center'>
          <a
            href='#'
            className='w-[220px] text-center border-2 border-[#e99401] px-10 py-3 transition-all duration-300 ease-in-out font-[700] hover:text-black hover:bg-[#e99401]'
          >
            Mas informacion
          </a>
        </div>
      </div>
    </section>
  );
};
