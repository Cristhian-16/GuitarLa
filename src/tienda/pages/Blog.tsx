import { ItemBlog } from '../../view/ItemBlog';
import { Layout } from '../layout/Layout';

export const Blog = () => {
  return (
    <Layout>
      <div className='max-w-[1200px] mx-auto mt-20 '>
        <h1 className='text-5xl font-[900] text-[#e99401] text-center'>
          Nuestro Blog
        </h1>

        <div className='grid grid-cols-3 gap-5 mt-16'>
          <ItemBlog foto='1' />
          <ItemBlog foto='2' />
          <ItemBlog foto='3' />
          <ItemBlog foto='4' />
        </div>
      </div>
    </Layout>
  );
};
