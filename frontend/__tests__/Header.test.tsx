import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/app/Header';

describe('Header コンポーネント', () => {
  it('ヘッダータイトルが正しく表示されること', () => {
    render(<Header />);
    const headerTitle = screen.getByText('Next.js 13 Blog');
    expect(headerTitle).toBeInTheDocument();
  });

  it('新しい記事を書くためのリンクが存在すること', () => {
    render(<Header />);
    const newArticleLink = screen.getByText('記事を書く');
    expect(newArticleLink).toBeInTheDocument();
    expect(newArticleLink.closest('a')).toHaveAttribute('href', '/articles/new');
  });
});
