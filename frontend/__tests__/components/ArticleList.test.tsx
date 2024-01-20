import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleList from '@/app/components/ArticleList';
import { Article } from '@/app/types';

const mockArticles: Article[] = [
  {
    title: '軽微なリファクタリング',
    content: 'OK',
    id: '0d30894a-5ddb-4904-95f8-75df683dbbb5',
    createdAt: '2024-01-19T23:32:35',
  },
  {
    title: 'テスト用のサンプルページ',
    content: 'Lorem ipsum dolor sit amet...',
    id: 'edf210bd-d99a-4154-bc23-02caeb065bb8',
    createdAt: '2024-01-20T01:34:01',
  },
];

describe('ArticleList コンポーネント', () => {
  it('渡された各記事がArticleCardコンポーネントとして表示される', () => {
    render(<ArticleList articles={mockArticles} />);
    mockArticles.forEach((article) => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
    });
  });
});
