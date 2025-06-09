import axios, { AxiosError } from 'axios';
import { redirect } from 'next/navigation';

const OauthSuccessCallbackPage = async () => {
  try {
    await axios.post('/mock/login');
    redirect('/home');
  } catch (error) {
    if (error instanceof AxiosError) {
      redirect('/signup');
    }
  }
};

export default OauthSuccessCallbackPage;
