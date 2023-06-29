import * as React from 'react';

import CustomSections from '@/components/globals/CustomSections';
import Search from '@/components/Home/Search';

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
      {/* <Seo /> */}
      <Search />
      <CustomSections />
    </>
  );
}
