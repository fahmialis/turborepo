'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@repo/ui';

export default function CatalogPage() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get('search')?.toString() ?? ''
  );

  // // Handle form submission
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);

    params.set('search', searchTerm);

    // Update the URL with the search query
    router.replace(`${pathName}?${params}`);
  };

  return (
    <div className="w-full h-[500px] flex items-center justify-center gap-4 flex-col">
      <form onSubmit={handleSearch}>
        <div className="font-bold text-white my-4">
          Prev search {searchParams.get('search')?.toString()}
        </div>
        <input
          className="my-4"
          type="text"
          value={searchTerm || ''}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>

      <div className="my-4">
        {searchTerm ? (
          <p>Showing results for &quot;{searchTerm}&quot;</p>
        ) : (
          <p>Enter a search term to see results</p>
        )}
      </div>

      <Button>props button</Button>

      <button
        onClick={() => router.push('/')}
        className="bg-slate-500 p-2 rounded-[10px]"
      >
        Back
      </button>
    </div>
  );
}
