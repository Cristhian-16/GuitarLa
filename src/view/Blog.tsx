import { ItemBlog } from './ItemBlog';

export const Blog = () => {
  return (
    <>
      <h2 className='text-center mb-20 text-5xl font-[700] text-[#e99401]'>
        Nuestro Blog
      </h2>
      <section className={`grid-page max-w-[1500px] mx-auto mb-10 gap-5 `}>
        <ItemBlog foto='1' />
        <ItemBlog foto='2' />
        <ItemBlog foto='3' />
        <ItemBlog foto='4' />
      </section>
    </>
  );
};
