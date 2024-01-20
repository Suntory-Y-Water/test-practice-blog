import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/app/Footer';

describe('Footer コンポーネント', () => {
  it('フッターが正しく表示されること', () => {
    render(<Footer />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  it('現在の年が表示されること', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(`© ${currentYear} Sui`)).toBeInTheDocument();
  });
});
