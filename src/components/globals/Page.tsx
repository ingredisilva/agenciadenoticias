import { useRouter } from 'next/router';
import React from 'react';

import PageCard from '@/components/globals/PageCard';

function HomePageContent() {
  return (
    <>
      <div className='md:layout lg:layout mt-8 flex justify-center p-2 xs:w-full xs:flex-wrap xs:gap-2 sm:w-full sm:flex-wrap sm:gap-6 md:flex-nowrap md:gap-0'></div>
    </>
  );
}

function InnerPageContent() {
  return (
    <div
      className='layout my-8 flex h-full  w-full flex-row
      gap-8 xs:flex-wrap xs:items-center
      sm:flex-wrap md:flex-wrap md:items-baseline lg:flex-nowrap'
    >
      <div className='md:w-3/4'>
        <PageCard />
      </div>
    </div>
  );
}

function HomePage() {
  const routes = useRouter();

  return (
    <div className='layout bg-white'>
      {routes.asPath === '/' ? <HomePageContent /> : <InnerPageContent />}
    </div>
  );
}

export default HomePage;
