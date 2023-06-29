import React, { useState } from 'react';

import Modal from '@/components/globals/Modal';

type Props = {
  placeholder?: string;
};

function Search({ placeholder }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = () => {
    setIsModalOpen(false);
  };

  const handleInputClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='relative flex'>
      <input
        required
        id='search'
        type='text'
        disabled
        placeholder={placeholder}
        className='dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-primary-orange dark:focus:border-blue-500 mr-2 block w-full appearance-none  border border-primary-orange p-2  pr-10 text-sm text-gray-900 focus:border-primary-orange focus:ring-primary-orange'
        onClick={handleInputClick}
      />
      <button
        type='submit'
        className='absolute right-4 bottom-1 bg-transparent p-1 '
      >
        <svg
          aria-hidden='true'
          className='dark:text-gray-400 h-5 w-5 text-gray-500'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          ></path>
        </svg>
      </button>{' '}
      {isModalOpen && (
        <Modal
          title='Serviço de busca'
          message='Esse serviço ainda não foi implementado'
          onClose={onClose}
        />
      )}
    </div>
  );
}

export default Search;
