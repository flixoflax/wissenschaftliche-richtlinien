import { createCookie } from '@remix-run/node';

export const threadIdCookie = createCookie('threadId', {
  maxAge: 60 * 60 * 24 * 365, // 1 year
  sameSite: 'lax',
});
