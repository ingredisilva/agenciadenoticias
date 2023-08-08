import React from 'react';
import { BsNewspaper } from 'react-icons/Bs';

import NewsCard from '@/components/globals/NewsCard';

import { filterCategories, newsList } from '@/services/data';

function WeeklyNews({ itemCount }: { itemCount: number | undefined }) {
  const category = filterCategories.find(
    (category) => category.id === newsList[0]?.categoryId
  );

  return (
    <div className='bg-primary-yellow p-4'>
      {category && (
        <>
          <div className='m-4 flex items-center gap-2'>
            {' '}
            <BsNewspaper color='green' />
            <h2 className='text-primary-green text-left text-lg font-bold uppercase'>
              {category.name}
            </h2>
          </div>
        </>
      )}{' '}
      <div className='w-full py-4'>
        <div
          className='xs:flex-col xs:flex-wrap p x-4 items-center justify-between
         gap-8 sm:flex-wrap md:flex lg:flex-nowrap'
        >
          <div className='xs:w-full lg:w-2/4'>
            {newsList.slice(0, itemCount || 0).map((noticia, id) => (
              <div key={id} className='mb-5'>
                <NewsCard
                  news={{
                    id: noticia.id,
                    title: noticia.title,
                    summary: noticia.summary,
                    imageUrl: noticia.imageUrl,
                    date: noticia.date,
                    categoryId: noticia.categoryId,
                  }}
                  layout='horizontal'
                />
              </div>
            ))}
          </div>
          {/*           <div className='xs:hidden z-50 h-64 w-1 border-r-2 border-gray-400  p-1 sm:hidden  md:hidden lg:block' />
           */}{' '}
          <div className='xs:w-full xs:justify-center flex flex-col flex-wrap sm:w-full md:w-full lg:w-2/4'>
            {newsList.slice(0, 6).map((noticia, id) => {
              const category = filterCategories.find(
                (category) => category.id === noticia.categoryId
              );
              return (
                <div key={id} className='xs:flex-wrap'>
                  <div className='xs:flex-wrap xs:flex-col xs:gap-6 border-b border-gray-600 p-3 sm:flex sm:flex-wrap sm:gap-6 md:flex-wrap md:gap-6 lg:flex-nowrap lg:gap-4'>
                    <span className='my-2'>
                      <p className='text-sm font-semibold text-gray-400'>
                        {noticia.date}
                      </p>
                    </span>
                    <span className='xs:w-8 my-2 flex items-center justify-center bg-white sm:w-12 lg:w-32'>
                      <p className='text-primary-green text-xs font-bold uppercase md:mx-2'>
                        {category?.name}
                      </p>
                    </span>
                    <span className='flex flex-wrap'>
                      <p className='text-lg font-bold text-gray-600'>
                        {noticia.title}
                      </p>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklyNews;
