'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function UserPage() {
  const router = useRouter();

  return (
    <div className="w-full h-[500px] flex items-center flex-col justify-center">
      <div>
        <button
          className="bg-slate-500 rounded-[10px] p-2"
          onClick={() => {
            router.push('/users/new');
          }}
        >
          new
        </button>
      </div>

      <div>users list</div>
    </div>
  );
}
