import { generateToken } from '~/utils/token';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const { email, password } = await useBody(event);

    if (!email || !password) throw new Error('email or password is missing');

    // check and find user
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) throw new Error('user does not exist');

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw new Error('invalid password');

    const token = generateToken({ userId: user.id, email: user.email });

    return {
      message: 'login success',
      token,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
});
