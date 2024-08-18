import Link from 'next/link';
import { Button } from '@repo/ui';
// import { Button } from '@repo/components';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div>
        <Link href={'/catalog'}>Catalog</Link>
      </div>
      <div>
        <Button>ini button</Button>
      </div>
      <div>
        <Link href={'/users'}>Users</Link>
      </div>
      <div>
        <Link href={'/login'}>Login Page</Link>
      </div>
    </main>
  );
}
