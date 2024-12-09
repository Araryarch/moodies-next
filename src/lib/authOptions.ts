import githubAuth from 'next-auth/providers/github'

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
