import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import CreateBlogPage from '@/app/articles/new/page';

const mockedUseRouter = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => mockedUseRouter(),
  usePathname: jest.fn().mockReturnValue('/'),
}));

describe('ブログの新規作成ページ', () => {
  it('正しくレンダリングされる', () => {
    render(<CreateBlogPage />);
    expect(screen.getByText('ブログ新規作成')).toBeInTheDocument();
    expect(screen.getByText('タイトル')).toBeInTheDocument();
    expect(screen.getByText('本文')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /投稿する/i })).toBeInTheDocument();
  });

  it('入力フィールドが更新できる', () => {
    render(<CreateBlogPage />);
    const titleInput = screen.getByLabelText('タイトル');
    const contentInput = screen.getByLabelText('本文');

    fireEvent.change(titleInput, { target: { value: 'テストコンテンツ' } });
    fireEvent.change(contentInput, { target: { value: 'テスト本文' } });

    expect(titleInput).toHaveValue('テストコンテンツ');
    expect(contentInput).toHaveValue('テスト本文');
  });

  it('投稿ボタンが押せない', () => {
    render(<CreateBlogPage />);
    const submitButton = screen.getByRole('button', { name: /投稿する/i });
    expect(submitButton).toBeDisabled();
  });
});
