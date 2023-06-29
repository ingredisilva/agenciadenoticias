import * as React from 'react';

import Footer from '@/components/Footer/Footer';
import Topbar from '@/components/Topbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar />

      <div className='layout xs:flex-wrap flex h-full gap-8 md:flex-nowrap'>
        {' '}
        <div className='xs:block xs:h-full xs:w-full flex min-w-[300px] flex-col items-center gap-6 rounded-b-xl border bg-slate-50 p-4 sm:hidden sm:w-full  md:block md:h-screen md:w-2/6'>
          {/*           <CardSummary data={notices} dataType='notices' />{' '}
           */}{' '}
        </div>
        <div className='xs:w-full mt-8 w-2/3'>{children}</div>
      </div>
      <Footer />
    </>
  );
}
