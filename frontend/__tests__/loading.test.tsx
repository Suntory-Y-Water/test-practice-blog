import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '@/app/loading';

describe('Loading コンポーネント', () => {
  it('ローディングインジケータが表示されること', () => {
    render(<Loading />);
    const loadingIndicator = screen.getByTestId('loading-indicator');
    expect(loadingIndicator).toBeInTheDocument();
  });
});
