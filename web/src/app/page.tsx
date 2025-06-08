'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RootPage = () => {
  const router = useRouter();

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    router.replace(hasVisited ? '/login' : '/signup');
  }, []);

  return null;
};

export default RootPage;
