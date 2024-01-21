import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Error from '@/app/error';

describe('Error コンポーネント', () => {
  it('エラーメッセージが正しく表示されること', () => {
    render(<Error reset={() => {}} />);
    const errorMessage = screen.getByText('エラーが発生しました');
    expect(errorMessage).toBeInTheDocument();
  });

  it('「もう一度試す」ボタンがクリックされるとreset関数が呼ばれること', () => {
    const mockReset = jest.fn();
    render(<Error reset={mockReset} />);
    const retryButton = screen.getByText('もう一度試す');
    fireEvent.click(retryButton);
    expect(mockReset).toHaveBeenCalled();
  });
});
