'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { LOCAL_STORAGE_HAS_VISITED } from '@/constants/storage';

const RootPage = () => {
  const router = useRouter();

  useEffect(() => {
    const hasVisited = localStorage.getItem(LOCAL_STORAGE_HAS_VISITED);

    router.replace(hasVisited ? '/login' : '/onboarding');
  }, []);

  return null;
};

export default RootPage;
