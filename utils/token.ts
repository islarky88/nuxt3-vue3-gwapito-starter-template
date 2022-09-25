import jwt from 'jsonwebtoken';

export const generateToken = (payload: {
  [key: string]: string | number;
}): string => {
  const config = useRuntimeConfig();
  const secret = config?.public?.secret || 'randomsecretkey';
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

export const verifyToken = (token: string): any => {
  const config = useRuntimeConfig();
  const secret = config?.public?.secret || 'randomsecretkey';
  return jwt.verify(token, secret);
};
