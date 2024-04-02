'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

import { config } from '@/lib/config';

interface DeleteButtonProps {
  id: string;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    await fetch(`${config.NEXT_PUBLIC_PYTHON_API_URL}/blog/${id}`, {
      method: 'DELETE',
    });

    router.push('/');
    router.refresh();
  };

  return (
    <div
      className='bg-red-600 hover:bg-red-500 py-3 px-3 font-medium rounded-md inline cursor-pointer'
      onClick={handleDelete}
    >
      削除する
    </div>
  );
};

export default DeleteButton;
