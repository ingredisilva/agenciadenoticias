import Image from 'next/image';
import React from 'react';

import { filterCategories, NewsItem } from '@/services/data';

type NewsCardProps = {
  news: NewsItem;
  layout: 'horizontal' | 'vertical';
};

const NewsCard: React.FC<NewsCardProps> = ({ news, layout }) => {
  const category = filterCategories.find(
    (category) => category.id === news.categoryId
  );

  return (
    <div
      className={`flex items-center gap-4 border-b-2 pb-2 ${
        layout === 'horizontal' ? 'w-full flex-row' : 'w-64 flex-col'
      }`}
    >
      <div
        className={`relative h-32 w-32 items-center md:w-64 ${
          layout === 'horizontal'
            ? 'aspect-video md:w-64'
            : 'h-[200px] w-[350px]'
        }`}
      >
        <Image
          src={news.imageUrl}
          alt={news.title}
          className=' absolute h-full w-full object-cover object-center'
          width={3000}
          height={3000}
        />
      </div>
      <div
        className={`xs:flex-wrap ml- flex flex-col justify-center md:flex-nowrap ${
          layout === 'horizontal' ? '4' : '0'
        } mt-${layout === 'horizontal' ? '0' : '4'}`}
      >
        <h2 className='text-lg font-bold'>{news.title}</h2>
        <div>
          <span className={`flex gap-4 `}>
            <span>
              <p className='text-sm text-gray-500'>{news.date}</p>
            </span>

            <span
              className={`bg-primary-green w-content  flex items-center justify-center `}
            >
              <p className=' mx-2 text-xs font-bold uppercase text-white'>
                {category?.name}
              </p>
            </span>
          </span>
        </div>

        <p
          className={` ${
            layout === 'horizontal' ? 'text-gray-600 ' : 'w-[250px]'
          }`}
        >
          {news.summary}
        </p>
      </div>
      <hr className='h-2 bg-gray-600' />
    </div>
  );
};

export default NewsCard;
