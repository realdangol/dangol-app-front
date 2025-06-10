'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const OauthSuccessCallbackPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      axios
        .post('/mock/login', { email: session.user.email })
        .then(() => {
          router.replace('/home');
        })
        .catch(() => {
          router.replace('/signup');
        });
    }
  }, [session, router]);

  return null;
};

export default OauthSuccessCallbackPage;
