'use client';
import { LOGIN } from '@/utils/router/routerPaths';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  function toLoginPage() {
    router.push(LOGIN);
  }
  return (
    <section className='w-screen h-screen m-auto flex items-center justify-center'>
      <Button onClick={toLoginPage}>Login</Button>
    </section>
  );
}
