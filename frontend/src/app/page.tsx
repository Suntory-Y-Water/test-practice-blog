import { Article } from '@/app/types';
import { config } from '@/lib/config';

import ArticleList from './components/ArticleList';

export default async function Home() {
  const res = await fetch(`${config.PYTHON_API_URL!}/blog`, { next: { revalidate: 60 } });
  const articles: Article[] = (await res.json()) as Article[];

  return (
    <div className='md:flex'>
      <section className='w-full md:w-2/3 flex flex-col items-center px-3 md:pl-6'>
        <ArticleList articles={articles} />
      </section>
      <aside className='w-full md:w-1/3 items-center px-3'>
        <div className='rounded mb-6 mt-4'>
          <div className='bg-white shadow-md rounded p-4 mb-6 mt-4'>
            <h3 className='font-bold text-gray-900 mb-2'>Pythonページ</h3>
            <p className='text-gray-600'>FastAPIを使ったPythonのページです。</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
