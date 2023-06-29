import * as React from 'react';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/layout/Header';
import Topbar from '@/components/Topbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar />
      <Header />
      <div className='layout'>
        <div className=''>{children}</div>
      </div>

      <Footer />
    </>
  );
}
