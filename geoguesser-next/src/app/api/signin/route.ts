import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/db/prismaGenerate';

// Initialize Prisma Client

// Define the handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Extract user data from the request body
    const { username, email, displayName } = req.body;

    try {
      // Call the addUser function
      const user = await prisma.user.create({
        data: {
          name: username,
          email: email,
          password: "password", // You should handle password hashing and security
          displayName: displayName,
        },
      });

      // Return the created user
      res.status(200).json(user);
    } catch (error) {
      // Handle errors
      res.status(500).json({ error: 'An error occurred while creating the user' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
