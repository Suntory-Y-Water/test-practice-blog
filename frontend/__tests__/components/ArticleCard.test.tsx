import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleCard from '@/app/components/ArticleCard';
import { Article } from '@/app/types';

const mockArticle: Article = {
  id: 'edf210bd-d99a-4154-bc23-02caeb065bb8',
  title: 'テスト用のサンプルページ',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum non exercitationem consectetur quae accusantium odio numquam, accusamus recusandae quibusdam dolores totam pariatur obcaecati ipsa! Voluptatum amet non temporibus rem minima?',
  createdAt: '2024-01-20T01:34:01',
};

const mockArticleContentLt70: Article = {
  id: 'edf210bd-d99a-4154-bc23-02caeb065bb8',
  title: '70文字未満の場合',
  content: '70文字未満の場合はこのまま表示',
  createdAt: '2024-01-20T01:34:01',
};

describe('ArticleCard コンポーネント', () => {
  it('記事のタイトルが表示される', () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText('テスト用のサンプルページ')).toBeInTheDocument();
  });

  it('記事の作成日が表示される', () => {
    render(<ArticleCard article={mockArticle} />);
    expect(
      screen.getByText(`Publish on ${mockArticle.createdAt.substring(0, 10)}`),
    ).toBeInTheDocument();
  });

  it('記事の内容が表示される', () => {
    render(<ArticleCard article={mockArticle} />);
    expect(
      screen.getByText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum non exe...'),
    ).toBeInTheDocument();
  });

  it('記事の内容が70文字より多かったら「...」を表示する。', () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText(mockArticle.content.substring(0, 70) + '...')).toBeInTheDocument();
  });

  it('記事の内容が70文字より少なかったらこのまま表示する', () => {
    render(<ArticleCard article={mockArticleContentLt70} />);
    expect(screen.getByText('70文字未満の場合はこのまま表示')).toBeInTheDocument();
  });

  it('「続きを読む」リンクが表示される', () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText('続きを読む')).toBeInTheDocument();
  });
});
