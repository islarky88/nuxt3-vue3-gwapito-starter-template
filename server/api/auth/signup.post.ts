import { generateToken } from '~/utils/token';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const { email, password } = await useBody(event);

    if (!email || !password) throw new Error('email or password is missing');

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (user) throw new Error('user already exists');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        salt,
      },
    });

    const token = generateToken({
      userId: newUser.id,
      email: newUser.email,
    });

    return {
      message: 'signup success',
      token,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
});
