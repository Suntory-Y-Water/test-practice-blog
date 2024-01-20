'use client';
import React from 'react';

const Loading = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div
        data-testid='loading-indicator'
        className='w-16 h-16 border-t-2 border-green-600 rounded-full animate-spin'
      ></div>
    </div>
  );
};

export default Loading;
