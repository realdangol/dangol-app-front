'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const OauthSuccessCallbackPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    axios
      .post('/mock/login')
      .then(() => {
        router.replace('/home');
      })
      .catch(() => {
        router.replace('/signup');
      });
  }, [session]);

  return null;
};

export default OauthSuccessCallbackPage;
