import { Footer, Navbar } from '../../view';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header className='background-page__personalize'>
        <div className='max-w-[1200px] mx-auto pt-10'>
          <Navbar />
        </div>
      </header>

      {children}
      <Footer />
    </div>
  );
};
