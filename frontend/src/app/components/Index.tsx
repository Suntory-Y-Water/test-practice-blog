import React from 'react';
import ArticleList from './ArticleList';
import { Article, PageAndApiUrlProps, PageAsideContentProps } from '@/app/types';

const Index = async ({
  params,
  pageContent,
}: {
  params: PageAndApiUrlProps;
  pageContent: PageAsideContentProps;
}) => {
  const res = await fetch(`${params.baseUrl}/${params.apiUrl}`, { cache: 'no-store' });
  const articles: Article[] = await res.json();

  return (
    <div className='md:flex'>
      <section className='w-full md:w-2/3 flex flex-col items-center px-3 md:pl-6'>
        <ArticleList articles={articles} baseUrl={params.pageWithUrl} />
      </section>
      <aside className='w-full md:w-1/3 items-center px-3'>
        <div className='rounded mb-6 mt-4'>
          <div className='bg-white shadow-md rounded p-4 mb-6 mt-4'>
            <h3 className='font-bold text-gray-900 mb-2'>{pageContent.title}</h3>
            <p className='text-gray-600'>{pageContent.description}</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Index;
