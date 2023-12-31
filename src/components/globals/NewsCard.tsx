import Image from 'next/image';
import React from 'react';

import { filterCategories, NewsItem } from '@/services/data';

type NewsCardProps = {
  news: NewsItem;
  layout: 'horizontal' | 'vertical' | 'none';
  showImage?: boolean;
  showOnlyLeft?: boolean;
  showOnlyTitle?: boolean;
  className?: string;
};

const NewsCard: React.FC<NewsCardProps> = ({
  news,
  layout,
  showImage = true,
  showOnlyLeft = false,
  showOnlyTitle = false,
  className = '',
}) => {
  const category = filterCategories.find(
    (category) => category.id === news.categoryId
  );

  if (layout === 'none') {
    return null; // Return null if layout is set to 'none'
  }

  const cardClassName = `flex xs:w-full items-center gap-4 pb-2 xs:flex-wrap sm:flex-wrap sm:w-full md:flex-wrap lg:flex-nowrap xs:flex-col ${
    layout === 'horizontal' ? 'w-full flex-row' : 'sm:w-full md:w-64 flex-col'
  } ${className}`;

  return (
    <>
      <div className={cardClassName} id='Card'>
        {showImage && (
          <div
            className={`xs:w-full ms:w-32 relative h-32 w-32 items-center lg:w-64 ${
              layout === 'horizontal'
                ? 'aspect-video md:w-64'
                : 'h-[200px] w-[350px]'
            }`}
          >
            <Image
              src={news.imageUrl}
              alt={news.title}
              className='absolute h-full w-full object-cover object-center'
              width={3000}
              height={3000}
            />
          </div>
        )}
        <div
          id='content'
          className={`xs:flex-wrap ml- flex flex-col justify-center md:flex-nowrap ${
            layout === 'horizontal' ? '4' : '0'
          } mt-${layout === 'horizontal' ? '0' : '4'}`}
        >
          {!showOnlyTitle && (
            <div className='flex gap-4'>
              <span>
                <p className='text-sm text-gray-500'>{news.date}</p>
              </span>

              <span className='bg-primary-green w-content flex items-center justify-center'>
                <p className='mx-2 text-xs font-bold uppercase text-white'>
                  {category?.name}
                </p>
              </span>
            </div>
          )}
          <h2 className='text-lg font-bold text-gray-700'>{news.title}</h2>
          {!showOnlyTitle && (
            <p
              className={`${
                layout === 'horizontal'
                  ? 'text-gray-600'
                  : 'xs:w-full sm:w-full md:w-full lg:w-[250px]'
              }`}
            >
              {news.summary}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsCard;
