import NextAuth from 'next-auth'
import githubAuth from 'next-auth/providers/github'
import { NextApiRequest, NextApiResponse } from 'next'

export const authOptions = {
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.AUTH_SECRET as string,
  callbacks: {
    async redirect() {
      return '/'
    },
  },
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions)
}

export { handler as GET, handler as POST }
