import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'

export const authUserSession = async () => {
  const session = await getServerSession(authOptions)
  return session?.user
}
