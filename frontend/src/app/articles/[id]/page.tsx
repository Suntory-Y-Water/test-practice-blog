import Image from 'next/image';
import React from 'react';

import DeleteButton from '@/app/components/DeleteButton';
import { Article } from '@/app/types';
import { config } from '@/lib/config';

const ArticlePage = async ({ params }: { params: { id: string } }) => {
  const apiUrl = `${config.PYTHON_API_URL}/python/blog/${params.id}`;
  const res = await fetch(apiUrl);
  const detailArticle: Article = (await res.json()) as Article;
  return (
    <div className='max-w-3xl mx-auto p-5'>
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig${params.id}}`}
        alt='Article Image'
        width={1280}
        height={300}
      />
      <h1 className='text-4xl my-10'>{detailArticle.title}</h1>
      <div className='text-lg leading-relaxed text-justify'>
        <p>{detailArticle.content}</p>
      </div>
      <div className='text-right mt-3'>
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default ArticlePage;
