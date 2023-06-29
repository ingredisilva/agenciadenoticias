import cookie from 'cookie';

export function setCookie(res, name, value, options = {}) {
  const serializedCookie = cookie.serialize(name, value, options);
  res.setHeader('Set-Cookie', serializedCookie);
}

