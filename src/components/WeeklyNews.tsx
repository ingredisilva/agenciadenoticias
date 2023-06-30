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
      <div className=' py-4'>
        <div className='xs:flex-col flex  items-center  justify-between gap-8  px-4 sm:flex-wrap md:flex-nowrap'>
          <div className='w-2/4'>
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
          <div className='xs:hidden z-50 h-64 w-1 border-r-2  border-gray-400 p-1 md:block' />
          <div className='flex w-2/4 flex-col'>
            {newsList.slice(0, 6).map((noticia, id) => {
              const category = filterCategories.find(
                (category) => category.id === noticia.categoryId
              );
              return (
                <div key={id}>
                  <div className='flex gap-4 border-b border-gray-600 p-3'>
                    <span>
                      <p className='text-sm text-gray-400'>{noticia.date}</p>
                    </span>
                    <span className='flex w-32 items-center justify-center bg-white'>
                      <p className='text-primary-green mx-2 text-xs font-bold uppercase'>
                        {category?.name}
                      </p>
                    </span>
                    <span>
                      <p className='font-bold text-gray-600'>{noticia.title}</p>
                    </span>
                  </div>
                  {id !== newsList.length - 1 && (
                    <hr className='flex justify-center bg-gray-700' />
                  )}
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
