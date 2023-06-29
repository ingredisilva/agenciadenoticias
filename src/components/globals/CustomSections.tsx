import React from 'react';
import { LiaCalendarWeekSolid } from 'react-icons/lia';
import { PiClock } from 'react-icons/pi';
import { TbNews } from 'react-icons/tb';

import NewsCard from '@/components/globals/NewsCard';

import { newsList } from '@/services/data';

const CustomSectionsTitle = [
  {
    id: 'noticias',
    icon: <PiClock />,
    name: 'Ultimas Notícias',
  },
  {
    id: 'assuntos-da-semana',
    icon: <LiaCalendarWeekSolid />,
    name: 'Assuntos da Semana',
  },
  {
    id: 'mais-acessadas',
    icon: <TbNews color='' />,
    name: 'Mais Acessadas',
  },
];

export function CustomSections() {
  return (
    <div className=''>
      <div>
        {CustomSectionsTitle.map((item, id) => {
          return (
            <>
              <div key={id} className=' my-6 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <span>{item.icon}</span>
                  <span>
                    <p className='text-primary-green text-lg font-bold'>
                      {item.name}
                    </p>
                  </span>
                </div>
                <span className='border '>
                  <button className='p-2 text-xs'>VEJA MAIS</button>
                  <button className='border-l p-2 font-bold'>+</button>
                </span>
              </div>
              <div className='flex'>
                {item.id === 'noticias' && <Noticias layout='horizontal' />}
                <hr />
                {item.id === 'assuntos-da-semana' && (
                  <Noticias layout='horizontal' />
                )}
                <hr />
                {item.id === 'mais-acessadas' && <Noticias layout='vertical' />}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

const Noticias = ({ layout }: { layout: 'horizontal' | 'vertical' }) => {
  return (
    <div
      className={` ${
        layout === 'vertical'
          ? 'flex items-start justify-center gap-10'
          : 'flex flex-wrap items-center justify-between'
      }`}
    >
      {newsList.slice(0, layout === 'vertical' ? 4 : 6).map((noticia, id) => {
        return (
          <div
            key={id}
            className={`${
              layout === 'vertical'
                ? ''
                : 'mb-4 w-full items-center md:w-1/2 lg:w-1/2 xl:w-1/2 '
            }`}
          >
            <NewsCard
              news={{
                id: noticia.id,
                title: noticia.title,
                summary: noticia.summary,
                imageUrl: noticia.imageUrl,
                date: noticia.date,
                categoryId: noticia.categoryId,
              }}
              layout={layout}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CustomSections;
