import * as React from 'react';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/layout/Header';
import Topbar from '@/components/Topbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar />
      <Header />
      <div className='layout xs:flex-wrap flex h-screen gap-8 md:flex-nowrap'>
        <div className='xs:w-full mt-8 w-2/3'>{children}</div>
      </div>

      <Footer />
    </>
  );
}
