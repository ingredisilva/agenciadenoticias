import * as React from 'react';

import PageCard from '@/components/globals/PageCard';
import Nav from '@/components/Home/Nav';
import Seo from '@/components/Seo';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 */

export default function HomePage() {
  return (
    <>
      {' '}
      {/* <CSP /> */}
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Nav />
      <PageCard />
    </>
  );
}
