import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post<any, { phone: string }>('/mock/auth/phone/send-code', async ({ request }) => {
    const { phone } = await request.json();

    if (phone === '01012341234') {
      // 이미 등록된 휴대폰번호
      return new HttpResponse(null, { status: 409 });
    }

    return HttpResponse.json({
      success: true,
      message: '인증번호가 발송되었습니다.',
    });
  }),
  http.post<any, { code: string }>('/mock/auth/phone/verify-code', async ({ request }) => {
    const { code } = await request.json();

    if (code === '1234') {
      return HttpResponse.json({
        success: true,
        message: '인증 성공',
      });
    } else {
      // 인증번호 틀림
      return new HttpResponse(null, { status: 400 });
    }
  }),
];
