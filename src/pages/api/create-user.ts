import { PrismaClient } from '.prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email } = req.body;

  const user = await prisma.user.create({ data: { name: name, email: email } });

  res.status(200).json(user);
}
