import Link from 'next/link';
import { Button } from '@repo/ui';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div>ini main</div>
      <div>
        <Button appName="myapp">ini button</Button>
      </div>
      <div>
        <Link href={'/users'}>Users</Link>
      </div>
    </main>
  );
}
