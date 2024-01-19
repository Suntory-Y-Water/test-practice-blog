import React from 'react';

const Footer = () => {
  return (
    <footer className='pt-12 py-8 text-center' data-testid='footer'>
      <span>© {new Date().getFullYear()} Sui</span>
    </footer>
  );
};

export default Footer;
