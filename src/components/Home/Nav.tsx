import { useRouter } from 'next/router';
import React from 'react';

function Nav() {
  const routes = useRouter();

  if (routes.asPath === '/') return null;
  return (
    <>
      <div>
        <div className='`${routes.asPath }'>Nav</div>
      </div>
    </>
  );
}

export default Nav;
