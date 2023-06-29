import React, { useState } from 'react';

import { HeaderLink, headerLinks } from '@/components/Home/headerLinks';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<HeaderLink[]>(
    []
  );

  const handleCategoryToggle = (category: HeaderLink) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className='flex items-center justify-center p-4'>
      <div className='relative my-2 mr-6'>
        <input
          className='h-10 rounded-lg border-2 border-gray-300 bg-white px-5 pr-16 text-sm focus:outline-none'
          type='search'
          name='search'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type='submit' className='absolute right-0 top-0 mr-4 mt-5'>
          <svg
            className='h-4 w-4 fill-current text-gray-600'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            version='1.1'
            id='Layer_1'
            x='0px'
            y='0px'
            viewBox='0 0 56.966 56.966'
            style={{ enableBackground: 'new 0 0 56.966 56.966' }}
            xmlSpace='preserve'
            width='512px'
            height='512px'
          >
            <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
          </svg>
        </button>

        <div className='absolute mt-2 w-64 rounded border border-gray-200 bg-white p-2 shadow-md'>
          {headerLinks.map(
            (link: {
              id: React.Key | null | undefined;
              label:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined;
            }) => (
              <div key={link.id} className='flex items-center space-x-2'>
                <label htmlFor={link.id} className='ml-2 text-sm text-gray-700'>
                  {' '}
                  <input
                    id={link.id}
                    type='checkbox'
                    className='form-checkbox h-5 w-5 text-blue-600'
                    checked={selectedCategories.includes(link)}
                    onChange={() => handleCategoryToggle(link)}
                  />
                  {link.label}
                </label>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
